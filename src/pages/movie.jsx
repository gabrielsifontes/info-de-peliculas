import { useState } from "react"
import { Row, Col, Button } from "antd"
import { PlayCircleOutlined } from "@ant-design/icons" 
import { useParams } from "react-router-dom"
import moment from "moment"

import Loading from "../components/Loading"
import ModalVideo from "../components/ModalVideo"
import Footer from "../components/Footer"

import "./movie.scss"
import useFetch from "../hooks/useFetch"
import { URL_API, API } from "../utils/contants"




export default function Movie() {
  let { id } = useParams()
  let movieInfo = useFetch(`${URL_API}/movie/${id}?api_key=${API}&language=es-ES`)
  
  
  if(movieInfo.loading == true || movieInfo.result == null) {
    return (
      <Loading />
    )
  } 

  return (
    <div>
      <RenderMovie movieInfo={movieInfo.result} />
    </div>
  )
}



function RenderMovie({
  movieInfo
}) {
  let { backdrop_path, poster_path, title, id, release_date, overview, genres } = movieInfo
  
  let [isVisibleModal, set_isVisibleModal] = useState(false)
  let openModal = ()=> set_isVisibleModal(true)
  let closeModal = ()=> set_isVisibleModal(false)
  
  let videoMovie = useFetch(`${URL_API}/movie/${id}/videos?api_key=${API}&language=es-ES`)

  let renderVideo = ()=> {
    if(videoMovie.result) {
      if(videoMovie.result.results.length > 0) {
        return (
          <>
            <Button 
              icon={<PlayCircleOutlined />}
              onClick={openModal}
            >
              Ver trailer              
            </Button>


            <ModalVideo 
              videoKey={videoMovie.result.results[0].key} 
              // videoKey={videoMovie.result.id} 
              videPlatform={videoMovie.result.results[0].site}
              isOpen={isVisibleModal}
              close={closeModal}
            />
          </>
        )
      }
    }
  }


  return (
    <div 
      className="movie"
      style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${backdrop_path}")` }}
    >
      {/* Ventana negra que sirve para opacar el fondo */}
      <div className="movie__dark-element"></div>


      <Row style={{marginBottom: "3em"}}>
        {/* Poster */}
        <Col 
          className="movie__poster"
          span={8}
          responsive={{xs: 10}} 
        >
          <div 
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original${poster_path}")`
            }}
          >

          </div>
        </Col>



        {/* Informacion */}
        <Col 
          className="movie__info" 
          span={14}
          responsive={{xs: 10}} 
        >
          <div className="movie__info-header">
            <h1>{title} <span>{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span></h1>
            
          </div>
          {renderVideo()}


          <div 
            className="movie__info-content"
          >
            <h3>General</h3>
            <p className="movie__info-content__description">
              {overview}
            </p>


            <h3 className="genres">Géneros</h3>
            <ul>
              {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
          </div>

        </Col>

      </Row>

    </div>
  )
}
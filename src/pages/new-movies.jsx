import { useState, useEffect } from "react"
import { Row, Col } from "antd"
import { URL_API, API } from "../utils/contants"

import Footer from "../components/Footer"
import Loading from "../components/Loading"
import MovieCatalog from "../components/MovieCatalog"
import PaginationMovies from "../components/Pagination"


export default function NewMovies() {
  let [movieList, set_movieList] = useState([])
  let [page, set_page] = useState(1)

  useEffect(function() {
    (async function() {
      let response = await fetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=${page}`)
      let movies = await response.json()
      
      set_movieList(movies)
    })()
  }, [page])

  let onChangePage = function(page) {
    set_page(page)
  }



  return (
    <div className="new-movies">
      <Row>
        <Col span={24} style={{ textAlign: "center",  marginTop: "25px"}}>
          <h1 
            style={{ fontSize: 35, fontWeight: "bold", margin: "0.4em"}}
          >
            Ultimos lanzamientos
          </h1>
        </Col>

        {
          movieList.results ? (
            <Row>
              <Col span={24}>
                <Row>
                  <MovieCatalog 
                    movies={movieList}
                  />
                </Row>
              </Col>


              <Col span={24}>
                <PaginationMovies 
                  currentPage={movieList.page}
                  totalItems={movieList.total_results}
                  onChangePage={onChangePage}
                />
              </Col>
            </Row>
          ) : (
            <Col span={24}>
              <Loading />
            </Col>
          )
        }
      </Row>

      <Footer />

    </div>
  )
}

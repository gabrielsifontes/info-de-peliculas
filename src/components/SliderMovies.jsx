
import { Button, Carousel } from "antd"
import { Link } from "react-router-dom"

import Loading from "./Loading"

import useFecth from "../hooks/useFetch"
import "./SliderMovies.scss"




export default function SliderMovies({
  movies
}) {
  
  if(movies.loading == true || movies.result == null) {
    return (
      <Loading />
    )
  }

  // else
    let { results } = movies.result

    return (
      <Carousel
        className="slider-movies"
        autoplay
        autoplaySpeed={8000}
      >
        {results.map(movie => 
          <Movie movie={movie} key={movie.id} /> )}
      </Carousel>
    )
  // 
}


function Movie({
  movie
}) {
  let {id, backdrop_path, title, overview} = movie

  let backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`
  

  return (
    <div 
      className="slider-movies__movie"
      style={{ backgroundImage: `url("${backdropPath}")` }}
    >
      <div className="slider-movies__movie-info-container">

        <div>
          <h2>{title}</h2>

          <p>{overview}</p>

          <Link to={`/movie/${id}`}>
            <Button type="primary">Ver más</Button>
          </Link>
        </div>        
      </div>
    </div>
  )
}
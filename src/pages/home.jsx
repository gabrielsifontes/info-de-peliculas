import { useEffect } from "react"
import { Row, Col } from "antd"

import SliderMovies from "../components/SliderMovies"
import MovieList from "../components/MovieList"
import Footer from "../components/Footer"

import useFetch from "../hooks/useFetch"
import { URL_API, API } from "../utils/contants"





export default function Home() {
  const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`)
  const popularMovies = useFetch(`${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`)
  const topRatedMovies = useFetch(`${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`)

  
  return (
    <div className="home">
      <SliderMovies movies={newMovies} />

      <Row>
        <Col 
          span={12} 
          responsive={{ xs: 24, sm: 24, md: 12, lg: 12 }}
        >
          <MovieList 
            movies={popularMovies} 
            title={"Peliculas populares"}
          />
        </Col>

        <Col 
          span={12} 
          responsive={{ xs: 24, sm: 24, md: 12, lg: 12 }}
        >
          <MovieList 
            movies={topRatedMovies} 
            title={"Mejor puntuadas"}
          />
        </Col>
      </Row>

      <Footer />
    </div>
  )
}

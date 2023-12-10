import { useState, useEffect } from "react"
import { Row, Col, Input } from "antd"
import { withRouter } from 'react-router-dom'
import queryString from "query-string"

import MovieCatalog from "../components/MovieCatalog"
import Footer from "../components/Footer"

import { URL_API, API } from "../utils/contants"
import "./search.scss"




function Search({
  location, history
}) {
  const [movieList, set_movieList] = useState([])
  const [searchValue, set_searchValue] = useState([])

  useEffect(function() {
    (async function() {
      let searchValue = queryString.parseUrl(location.search)

      const { s } = searchValue.query

      const response = await fetch(`${URL_API}/search/movie?api_key=${API}&languaje=es-ES&query=${s}&page=1`)
      
      const movies = await response.json()

      set_searchValue(s)
      set_movieList(movies)
    })()
  }, [location.search])

  let onChangeSearch = function(event) {
    const urlParams = queryString.parse(location.search)
    urlParams.s = event.target.value
    history.push(`?${queryString.stringify(urlParams)}`)
    set_searchValue(event.target.value)
  }



  return (
    <div>
      <Row className="search">
        <Col span={12} offset={6}>
          <h1>Busca tu pelicula</h1>

          <Input value={searchValue} onChange={onChangeSearch} />
        </Col>

        {movieList.results && (
          <Col span={24}>
            <Row>
              <MovieCatalog movies={movieList}/>              
            </Row>
          </Col>
        )}
      </Row>
    
      <Footer />

    </div>
  )
}


export default withRouter(Search)
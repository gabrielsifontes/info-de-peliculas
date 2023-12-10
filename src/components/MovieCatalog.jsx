import { Col, Card} from "antd"
import { EyeOutlined  } from '@ant-design/icons';
import { Link } from "react-router-dom"

import "./MovieCatalog.scss"



export default function MovieCatalog({
  movies
}) {
  const { results } = movies
  

  return results.map(function(movie) {
    return (
      
      <Col 
        key={movie.id} 
        xs={6} 
        className="movie-catalog"
      >
        <MovieCard movie={movie} />
      </Col>
    )
  })
}


function MovieCard({
  movie
}) {
  const { id, title, poster_path } = movie
  const { Meta } = Card
  const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`

  return (
    <Link to={`/movie/${id}`}>
      <Card
        span="true"
        hoverable
        style={{ width: 240}}
        cover={<img src={posterPath} alt={title} />}
        // actions={[<EyeOutlined />]}
      >        
        <Meta title={title}></Meta>
      </Card>
    </Link>
  )
}
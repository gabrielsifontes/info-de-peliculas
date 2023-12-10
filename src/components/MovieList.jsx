import { List, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import { CaretRightFilled } from "@ant-design/icons"

import Loading from "./Loading";

import "./MovieList.scss"



export default function MovieList({
  movies, title
}) {
  
  if(movies.loading == true || movies.result == null) {
    return (
      <Loading />
    )
  }

  // else
    let { results } = movies.result

    return (
      <List 
        className="movie-list"
        size="default"
        header={
          <h2>{title}</h2>
        }
        bordered
        dataSource={movies.result.results} // Esto recibe un array
        renderItem={movie => 
          <RenderMovie movie={movie} /> // Esto hace algo con el array que se le paso en dataSource
        }
      />      
    )
  //     
}


function RenderMovie({
  movie
}) {
  let { id, title, poster_path } = movie

  let posterPathURL = `https://image.tmdb.org/t/p/original${poster_path}`

  return (
    <List.Item className="movie-list__movie">
      <List.Item.Meta 
        avatar={<Avatar src={posterPathURL} />}
        title={
          <Link to={`/movie/${id}`}>{title}</Link>
        }
      />

      <Link to={`/movie/${id}`}>
        <Button 
          type="primary" 
          hape="round" 
          icon={
            <CaretRightFilled />
          }
        />
      </Link>
      
      
    </List.Item>
  )
}
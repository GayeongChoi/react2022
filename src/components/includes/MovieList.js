import React from "react";
import MovieItem from "./MovieItem";

function MovieList(props) {
  console.log(props);
  return (
    <div className="movie__list">
      <ul>
        {props.videos.map((video, index) => (
          <MovieItem key={index} video={video} />
        ))}
      </ul>
    </div>
  );
}
export default MovieList;

import React from "react";

function MovieItem(props) {
  console.log(props);
  // 가져오는 방법은 TMDB API에서 참고
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.video.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.video.poster_path}`}
          alt={props.video.title}
        />
        <p className="title">{props.video.title}</p>
      </a>
    </li>
  );
}

export default MovieItem;

import React from 'react'

function ScriptItem(props) {
  return(
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.video.id}`}>
        <img 
          src={props.video.poster_path} 
          alt={props.video.title} />
        <p className='title'>
          {props.video.title}
        </p>
      </a>
    </li>
  )
}

export default ScriptItem
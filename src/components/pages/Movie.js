import React, { useEffect, useState } from 'react'


function Script() {
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=f7c17123bdb6536cfab9cbd3bdc1e2ff&query=bts`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.results);
                // mainAnimation();
            })
            .catch(error => console.log('error', error));
    }, []); 

    return (
        <div>ddd</div>
    )
}

export default Script;
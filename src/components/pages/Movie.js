import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import MovieList from "../includes/MovieList";

function Movie() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f7c17123bdb6536cfab9cbd3bdc1e2ff&query=bts`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.results);
      })
      .catch((error) => console.log("error", error));
  }, []);

  console.log(setVideos);
  return (
    <>
      <Header />
      <Contents>
        <MovieList videos={videos} />
        {/* setVideos(=result.results:url정보)를 받아옴 */}
      </Contents>
      <Footer />
    </>
  );
}

export default Movie;

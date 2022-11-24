import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "react-youtube"
import MovieTrailer from "movie-trailer"

// console.log(Movie);
const base_Url = "https://image.tmdb.org/t/p/original/"; 
    
function Row({ title, fetchUrl,isLargeRow }) { 
  const [movies, setMovies] = useState([]); 
  const [trailerURL,  setTrailerUrl] = useState(""); 
   
  useEffect(() => { 
    async function fetchData() { 
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request; 
    } 
    fetchData(); 
  }, [fetchUrl]); 
  // console.log(movies); 
   

const  handleOnclick = (movie) =>{
  if(trailerURL){
    setTrailerUrl("")
  }else{MovieTrailer(movie?.title ||movie?.name || movie?.original_name
    )
    .then((url) => {
      const searchParams = new URLSearchParams(new URL(url).search);
      // URLSearchParams.get() => Returns the first value associated with the given search parameter.
      setTrailerUrl(searchParams.get("v"));

      //   Means =>
      // var url = new URL('https://example.com?foo=1&bar=2');
      // var params = new URLSearchParams(url.search);
    })
    .catch((err) => console.log(err));



  }
}

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};






  return ( 
    <div className="row">
    <h1>{title}</h1>
    <div className="row_posters">
      {movies?.map((movie, i) => (
        <img key={i}
        onClick={() => handleOnclick(movie)}
          className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          src={`${base_Url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        />
      ))}
    </div>

    <div style={{ padding: "40px" }}>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  </div>

  );
}

export default Row;

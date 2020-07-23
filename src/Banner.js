import React, { useState, useEffect } from 'react'
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";

const base_url = "https://image.tmdb.org/t/p/original/"

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
    return () => {
      console.log('Clean Up')
    }
  }, [])

  async function fetchData(){
    const request = await axios.get(requests.fetchNetflixOriginals);
    setMovies(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
  }

  console.log('isi banner',movies);

  function truncate(str, n){
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header 
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("${base_url}${movies?.backdrop_path}")`,
        backgroundPosition: 'center center'
      }}
    > {/* <<< Background image */}
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        {/* div > 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* description */}
        <h1 className="banner__description">
          {truncate(movies?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom"/>
    </header>
  )
}

export default Banner

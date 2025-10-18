import React, {useEffect, useState} from 'react'
import {API_KEY, imageUrl} from '../../Constants/constants'
import axios from '../axios'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovie(response.data.results[0])
      setIsLoading(false)
    })
  },[])

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  if (isLoading) {
    return <div className="banner__loading">Loading...</div>
  }

  return (
    <div
      style = {{backgroundImage : `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
      className='banner'
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        
        <div className='banner__buttons'>
          <button className='banner__button banner__button--play'>
            <svg className="banner__button-icon" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Play
          </button>
          <button className='banner__button banner__button--info'>
            <svg className="banner__button-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
            More Info
          </button>
        </div>
        
        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      
      <div className="banner__fadeBottom"></div>
    </div>
  )
}

export default Banner
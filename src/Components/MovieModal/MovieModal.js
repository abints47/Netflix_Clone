import React, { useState, useEffect } from 'react'
import './MovieModal.css'
import { imageUrl } from '../../Constants/constants'
import axios from '../axios'
import { API_KEY } from '../../Constants/constants'

function MovieModal({ movie, isOpen, onClose }) {
  const [movieDetails, setMovieDetails] = useState(null)
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    if (movie && isOpen) {
      // Fetch movie details
      const fetchMovieDetails = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=en-US`
          )
          setMovieDetails(response.data)
        } catch (error) {
          console.error('Error fetching movie details:', error)
        }
      }

      // Fetch trailer
      const fetchTrailer = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
          )
          const trailers = response.data.results.filter(
            video => video.type === 'Trailer' && video.site === 'YouTube'
          )
          if (trailers.length > 0) {
            setTrailerUrl(trailers[0].key)
          }
        } catch (error) {
          console.error('Error fetching trailer:', error)
        }
      }

      fetchMovieDetails()
      fetchTrailer()
    }
  }, [movie, isOpen])

  if (!isOpen || !movie) return null

  const handleClose = () => {
    setTrailerUrl('')
    setMovieDetails(null)
    onClose()
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal__content">
        <button className="modal__close" onClick={handleClose}>
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        <div className="modal__header">
          <div className="modal__poster">
            <img 
              src={`${imageUrl}${movie.backdrop_path}`} 
              alt={movie.title || movie.name}
              className="modal__poster-img"
            />
          </div>
          
          <div className="modal__info">
            <h2 className="modal__title">
              {movie.title || movie.name || movie.original_name}
            </h2>
            
            <div className="modal__buttons">
              <button className="modal__button modal__button--play">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Play
              </button>
              <button className="modal__button modal__button--add">
                <svg viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
                Add to List
              </button>
            </div>

            <div className="modal__meta">
              {movieDetails && (
                <>
                  <div className="modal__rating">
                    <span className="modal__rating-label">Rating:</span>
                    <span className="modal__rating-value">
                      {movieDetails.vote_average?.toFixed(1)}/10
                    </span>
                  </div>
                  
                  <div className="modal__release">
                    <span className="modal__release-label">Release Date:</span>
                    <span className="modal__release-value">
                      {movieDetails.release_date || movieDetails.first_air_date}
                    </span>
                  </div>
                  
                  <div className="modal__runtime">
                    <span className="modal__runtime-label">Runtime:</span>
                    <span className="modal__runtime-value">
                      {movieDetails.runtime} minutes
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="modal__body">
          <div className="modal__overview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>

          {trailerUrl && (
            <div className="modal__trailer">
              <h3>Trailer</h3>
              <div className="modal__trailer-container">
                <iframe
                  src={`https://www.youtube.com/embed/${trailerUrl}`}
                  title="Movie Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="modal__trailer-iframe"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieModal

import './RawPost.css'
import axios from '../axios'
import Youtube from 'react-youtube'
import {imageUrl} from '../../Constants/constants'
import { useEffect, useState } from 'react'
import MovieModal from '../MovieModal/MovieModal'

function RawPost(props) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setMovies(response.data.results)
      setIsLoading(false)
    }).catch(err=>{
      alert('Network Error')
      setIsLoading(false)
    })
  }, [props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleMovie = (movie)=>{
    setSelectedMovie(movie)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMovie(null)
  }

  if (isLoading) {
    return (
      <div className='row'>
        <h2 className="row__title">{props.title}</h2>
        <div className="row__loading">Loading...</div>
      </div>
    )
  }

  return (
    <div className='row'>
      <h2 className="row__title">{props.title}</h2>
      <div className="row__posters">
        {movies.map((obj, index)=>
          <img  
            key={obj.id || index}
            onClick={()=>handleMovie(obj)} 
            className={`row__poster ${props.isSmall ? "row__poster--small" : ""}`} 
            src={`${imageUrl+obj.backdrop_path}`}   
            alt={obj.title || obj.name || obj.original_name} 
          />
        )}
      </div>
      
      <MovieModal 
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default RawPost
import './RawPost.css'
import './RawPost.css'
import axios from '../axios'
import {imageUrl} from '../../Constants/constants'
import { useEffect, useState } from 'react'

function RawPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })
  }, [])
  

  return (
    <div className='row' >
        <h2> {props.title} </h2>
        <div className="posters">
            {movies.map((obj)=>
                 <img  className={props.isSmall ? "smallPoster" : "poster"} src={`${imageUrl+obj.backdrop_path}`}   alt="" />
            )}
        </div>
    </div>
  )
}

export default RawPost
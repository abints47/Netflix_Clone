import {API_KEY} from './Constants/constants'

export const original = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const Horror = `discover/movie?api_key=${API_KEY}&with_genres=27`
export const comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`
export const romance = `discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentaries = `discover/movie?api_key=${API_KEY}&with_genres=99`
export const topRated = `movie/top_rated?api_key=${API_KEY}&language=en-US`
export const trending = `trending/all/week?api_key=${API_KEY}&language=en-US`
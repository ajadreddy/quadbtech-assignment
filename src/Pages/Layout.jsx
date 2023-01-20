import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import './Layout.css'
import axios from 'axios'
const Layout = () => { 
    const [shows, setShows] = useState([])

    const fetchShows = () => {
        axios.get('https://api.tvmaze.com/search/shows?q=all#')
            .then((res) => {
                // console.log(res.data)
                setShows(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    };
    useEffect(() => {
        fetchShows()
    }, []);
  return (
    <>
    <h1 style={{paddingLeft:'40px'}}>TV Shows</h1>
        <div className='cards'>
        
        {
            shows.map((movie)=>{
                return(
                    <div className='movie-card'>
                        <img  src={movie.show.image.original} alt="" />
                        <h2>{movie.show.name}</h2>
                        <p>{movie.show.genres[0]}/{movie.show.genres[1]}</p>
                        <Link to={`/summary/${movie.show.id}`} style={{ fontWeight: "bold" }} >See Summary</Link>
                    </div>    
                )
            })
        }
    </div>
    </>
    
  )
}

export default Layout
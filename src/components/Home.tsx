import React, { useEffect, useState } from 'react'
import johnwick from "../images/johnwick.png"
import { json } from 'stream/consumers'

const Home = () => {

    const [movies, setMovies] = useState([])


    const getMovies = () => {
        try {
            fetch("https://api.themoviedb.org/3/discover/movie?api_key=66b41facdbba6abf7ec79518e9e9c4aa")
                .then(res => res.json())
                .then(json => setMovies(json.results))


        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    console.log(movies);



    return (
        <>
        <h1 className='text-white ml-28 font-bold text-3xl'>Latest Releases</h1>
        <div className='grid grid-cols-6 ml-28 mt-2'>

            {/* {movies.map((data: any) => {
                return <>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2">
                        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Sunset in the mountains" />
                    </div>
                </>
            })} */}

            {/* own */}
           
            
            {movies.filter((a, i) => i < 6).map((a: any) => {
                return <>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2 hover:scale-125 transition duration-500">
                        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${a.poster_path}`} alt="Sunset in the mountains" />
                    </div>
                </>
            }
            )}

        </div>

        <h1 className='text-white ml-28 font-bold text-3xl mt-4'>Entertainment All-Rounders</h1>
        <div className='grid grid-cols-6 ml-28 mt-2'>
        {movies.filter((a, i) =>  i > 6 && i < 13).map((a: any) => {
                return <>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2 hover:scale-125 transition duration-500">
                        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${a.poster_path}`} alt="Sunset in the mountains" />
                    </div>
                </>
            }
            )}

        </div>

        <h1 className='text-white ml-28 font-bold text-3xl mt-4'>Comedy</h1>
        <div className='grid grid-cols-6 ml-28 mt-2'>
        {movies.filter((a, i) =>  i > 13 && i < 21).map((a: any) => {
                return <>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2 hover:scale-125 transition duration-500">
                        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${a.poster_path}`} alt="Sunset in the mountains" />
                    </div>
                </>
            }
            )}

        </div>
        <h1 className='text-white ml-28 font-bold text-3xl mt-4'>Action</h1>
        <div className='grid grid-cols-6 ml-28 mt-2'>
        {movies.filter((a, i) =>  i > 8 && i < 15).map((a: any) => {
                return <>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2 hover:scale-125 transition duration-500">
                        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${a.poster_path}`} alt="Sunset in the mountains" />
                    </div>
                </>
            }
            )}

        </div>

        </>

    )
}

export default Home
import './Banner.css'
import React, {useState, useEffect} from "react"
import axios from "./axios.js" 
import requests from "./Requests.js"

function Banner() {
    const [game,setGame] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.request(requests.popular);
            setGame(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1 )
                ]
            )
            return request
        }

        fetchData();
    }, [])

//console.log(game)




    return (
        <header className= "banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(${game.background_image})`,
            backgroundPosition:"center center"
        }}>
            <div className="banner__contents">
            <h1 className = "banner__title"> {game.name} </h1>
            <div className= "banner__buttons">
            <button className = "banner__button"> Play </button>

            </div>
            <h1 className="banner__description"> Rating: {game.rating}</h1>
            </div>

            <div className = "banner--fadeBottom"/>
        </header>
    )
}

export default Banner

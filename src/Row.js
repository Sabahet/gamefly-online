import React, {useState, useEffect} from 'react'
import "./Row.css"
import axios from "./axios.js"
import Card from "./Cards.js"

function Row({title,fetchUrl}) {
const [games, setGames] = useState([]);

useEffect(() =>{
async function fetchData(){
    const request = await axios.request(fetchUrl);
    setGames(request.data.results);
    return request;
    
}
fetchData();
}, [fetchUrl])

    return (
        <div className = "row">
            <h2> {title} </h2>
            <div className= "row__posters">
            {games.map(games => (
                <Card game = {games}/>
            ))}
            </div>
        </div>
    )
}

export default Row

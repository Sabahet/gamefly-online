import React, {useState, useEffect} from 'react'
import Nav from "../Nav"
import { useLocation } from "react-router-dom";
import axios from "../axios.js"
import Cards from "../Cards.js"
function SearchResults(input) {
    const location = useLocation();
    let fetchUrl = "https://api.rawg.io/api/games?key=bf425ff2b5be4af99896cc61ca759774&search="+location.state;
    const [games, setGames] = useState([]);

    useEffect(() =>{
    async function fetchData(){
        const request = await axios.request(fetchUrl);
        setGames(request.data.results);
        return request;
        
    }
    fetchData();
    }, [fetchUrl])

console.log(fetchUrl)
    return (
        <div>
            <Nav/>
            <div className = "row">
            <h2> Results for: {location.state} </h2>
            <div className= "row__posters">
            {games.map(games => (
                <Cards game = {games}/>
            ))}
            </div>
        </div>
        </div>
    )
}

export default SearchResults

import "./Search.css"
import React, {useState, useEffect} from 'react'
import axios from "./axios.js"
import searchButtonIcon from "./images/search.png"
import { useHistory } from 'react-router'

function Search() {
    const history = useHistory()
    const [input, setInput] = useState('')
    // let fetchUrl = "https://api.rawg.io/api/games?key=bf425ff2b5be4af99896cc61ca759774&search="
    // const [searchTerm, setSearch] = useState("");

    // const [games, setGames] = useState([]);

    // useEffect(() =>{
    // async function fetchData(){
    //     const request = await axios.request(fetchUrl+searchTerm);
    //     setGames(request.data.results);
    //     return request;
        
    // }
    // fetchData();
    // }, [fetchUrl])

    return (
<div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="Search Games..." value={input} onInput={e => setInput(e.target.value)} />
      <button type="submit" class="searchButton"  onClick={() => history.push({
          pathname: "/searchResults",
          state:  input,
      })}>
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>
    )
}

export default Search

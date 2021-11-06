import "./Search.css"
import React, {useState, useEffect} from 'react'
import axios from "./axios.js"
import searchButtonIcon from "./images/search.png"
import { useHistory } from 'react-router'

// REFERCNE THIS FOR CART
function Search() {
    const history = useHistory()
    const [input, setInput] = useState('')

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

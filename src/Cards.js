import React from 'react'
import "./Cards.css"
import AddBoxIcon from '@material-ui/icons/AddBox';
function Cards(props) {
    console.log(props.game)
// TODO: Make an Add to library function over here :D
    return (
<ul class="cards">
  <li>
    <a href="" class="card">
      <img src= {props.game.background_image} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
                    
          
          <div class="card__header-text">
            <h3 class="card__title">{props.game.name}   </h3>            
            <span class="card__status">Metacritic: {props.game.metacritic}</span>
          </div>
          <AddBoxIcon className = "add-to-library" />     
        </div>
        <p class="card__description">Release Date: {props.game.released}</p> <p class = "card__description"> Playtime: {props.game.playtime} hours</p>
      </div>
    </a>      
  </li>
  
</ul>
    )
}

export default Cards

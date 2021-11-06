import React, {useState,useEffect} from 'react'
import "./Cards.css"
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddIcon from "./images/Add_icon.png"
import db from './firebase';
import {useSelector} from "react-redux"
import {selectUser} from "./features/userSlice"


function Cards(games) {
  const [gamess, setGames] = useState([]);



  const user = useSelector(selectUser);

  // const addLibrary = async (game)=>{
  //   const docRef = await db.collection('customers')
  //   .doc(user.uid)
  //   .collection('user_library')
  //   .add({
  //       name: game.name,

  //   });
  // }
function addLibrary(gameselect){
console.log(gameselect);
}


    return (

<div class="cards">
  <div>
    <div href="" class="card">
      <img src= {games.game.background_image} class="card__image"  />
      <div class="card__overlay">
        <div class="card__header">
                    
          
          <div class="card__header-text">
            <h3 class="card__title">{games.game.name}   </h3>            
            <div class="card__status">Metacritic: {games.game.metacritic}</div>
          </div>
      
        <img className = "button" src = {AddIcon} onClick ={(games)=> this.games.addLibrary(games)} /> 
    
 

             
        </div>
        <p class="card__description">Release Date: {games.game.released}</p> <p class = "card__description"> Playtime: {games.game.playtime} hours</p>
      </div>
    </div>      
  </div>
  
</div>

    )
}

export default Cards

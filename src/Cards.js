import React, {useState,useEffect} from 'react'
import "./Cards.css"
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddIcon from "./images/Add_icon.png"
import db from './firebase';
import {useSelector} from "react-redux"
import {selectUser} from "./features/userSlice"
//import { collection, query, where } from "firebase/firestore";

// TRY ADDING A inLibrary: True to the database

function Cards(games) {

  const user = useSelector(selectUser);
  const libraryRef = db.collection('customers').doc(user.uid).collection("user_library")
  let lib =true;
  
  const [gamess, setGames] = useState([]);

  // const documentReferences = db.collection('customers')
  //       .doc(user.uid)
  //       .collection('user_library')
  //       .listDocuments()
  
  // console.log(documentReferences)
//const documentIds = documentReferences.map(it => it.id)

  function inLibrary(id){
    // console.log("inLibrary called")
 db.collection('customers').doc(user.uid).collection("user_library").where("id", "==",id).get()
.then(function (querySnapshot){
  querySnapshot.forEach(function(doc){
    
    if(doc.data().id == id){
      console.log( "False")
      console.log(doc.data().id, id)
      lib = !lib
     
      // console.log(lib)
    }else{
      console.log(id , "True")
      return true;
      
    }

  })
})

  }


  

  // const addLibrary = async (game)=>{
  //   const docRef = await db.collection('customers')
  //   .doc(user.uid)
  //   .collection('user_library')
  //   .add({
  //       name: game.name,

  //   });
  // }
const addLibrary = async (name,image,meta,details,details2,id)=>{ 
  let found =true;
  const what = await db.collection('customers').doc(user.uid).collection("user_library").where("id", "==",id).get()
  .then(function (querySnapshot){
    querySnapshot.forEach(function(doc){
      
alert(doc.data().name  + " is already in your Library")
  found =false;
    })

  })


if(found == true ){
  const docRef = await db.collection('customers')
    .doc(user.uid)
    .collection('user_library')
    .add({
      id: id,
        name: name,
        image: image,
        meta: meta,
        details: details,
        details2: details2,

    });

alert(name + " added to Library")
  }
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
          
         
         
       {lib?( 
        <img className = "button" src = {AddIcon} onClick ={e => addLibrary(games.game.name,games.game.background_image,games.game.metacritic,games.game.released,games.game.playtime,games.game.id)} /> 
      ):("")}
 

             
        </div>
        <p class="card__description">Release Date: {games.game.released}</p> <p class = "card__description"> Playtime: {games.game.playtime} hours</p>
      </div>
    </div>      
  </div>
  
</div>

    )
}

export default Cards

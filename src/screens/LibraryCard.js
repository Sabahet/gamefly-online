import React from 'react'
import "./LibraryCard.css"
import RemoveIcon from "../images/remove.png"
import db from '../firebase';
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice"

function LibraryCard(games) {

  const user = useSelector(selectUser);

  const RemoveLibrary = async (id)=>{ 
    console.log(id)
    const docRef = await db.collection('customers')
      .doc(user.uid)
      .collection('user_library')
      .where("id", "==", id)
      .get()
      .then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
          doc.ref.delete();
          alert(doc.data().name + " was removed from your library")
        })
      })

}

function refreshPage() {
  window.location.reload(false);
}


    return (
<div className="cards3">
  <div>
    <div href="" className="card3">
      <img src= {games.game.image} className="card__image3"  />
      <div className="card__overlay3">
        <div className="card__header3">
                    
          
          <div className="card__header-text3">
            <h3 className="card__title3">{games.game.name}   </h3>            
            <div className="card__status3">Metacritic: {games.game.meta}</div>
          </div>
          <img className = "button2" src = {RemoveIcon} onClick ={ ()=> {RemoveLibrary(games.game.id); }}/> 
        
        </div>
        <p className="card__description3">Release Date: {games.game.details}</p> <p className = "card__description3"> Playtime: {games.game.details2} hours</p>
      </div>
    </div>      
  </div>
  
</div>

    )
}

export default LibraryCard

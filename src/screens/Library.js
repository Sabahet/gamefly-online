import Nav from "../Nav"
import db from '../firebase';
import {useSelector} from "react-redux"
import React, {useState,useEffect} from 'react'
import {selectUser} from "../features/userSlice.js"
import LibraryCard from './LibraryCard'
import Cards from "../Cards"
import "./Library.css"


function Library() {
    const newGames=[]
    const user = useSelector(selectUser);
    const [games, setGames] = useState([]);

  
useEffect(()=>{
    db.collection('customers')
    .doc(user.uid)
    .collection("user_library")
    .get().then(querySnapshot =>{
        let newGames=[];
        querySnapshot.forEach(async item =>{
            newGames.push( {
                name: item.data().name,
                image: item.data().image,
                meta: item.data().meta,
                details: item.data().details,
                details2: item.data().details2,
                id: item.data().id
            });
        })
        setGames(newGames)
    })
   
},[])


  



    return (
     
        <div>
             {console.log(games)} 
            <Nav/>

           
            <div className = "row3">
            <h2> Your library </h2>
            <div className= "row__posters3">
            {games.map(games => (
                <LibraryCard game = {games}/>
            ))}
            
            </div>
        </div>
        </div>
    )
}

export default Library

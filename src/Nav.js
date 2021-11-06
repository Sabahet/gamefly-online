import React, { useState,useEffect } from 'react'
import './Nav.css'
import logo from "./images/GameFly_Logo.png"
import avatar from "./images/pngegg.png"
import {useDispatch,useSelector} from "react-redux"
import { login,logout,selectUser } from './features/userSlice';
import { useHistory } from 'react-router'
import search from "./images/search.png"
import Search from "./Search.js"

function Nav() {

const dispatch =  useDispatch();
const [show, handleShow] = useState(false);
const history = useHistory()

const transitionNavBar =() =>{
    if (window.scrollY > 100){
        handleShow(true);
    }else{
        handleShow(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return()=> window.removeEventListener('scroll', transitionNavBar)
}, []);

    return (
        <div className ={`nav ${show && 'nav__blue'}`}>
            <div className = 'nav__contents'>
            
            <img 
            onClick= {() => history.push("/")}
            className='nav__logo' 
            src={logo} alt=""/>
            <div class="buttons">
            <button  class="btn btn-white" onClick = {()=> history.push("/library")} > My Library </button>
            </div>
            <img 
            onClick={() => history.push("/profile")} 
            className='nav__avatar' 
            src={avatar} 
            alt="" />
            {/* <button className="signOut" onClick= {dispatch(logout)}> Sign Out </button> */}
            <Search/>
            </div>
        </div>
    )
}

export default Nav

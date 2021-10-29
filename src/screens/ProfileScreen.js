import React from 'react'
import Nav from "../Nav.js"
import "./ProfileScreen.css"
import avatar from "../images/pngegg.png"
import {useSelector} from "react-redux"
import {selectUser} from "../features/userSlice.js"
import { auth } from '../firebase'
import Plans from "./Plans.js"

function ProfileScreen() {
    const user = useSelector(selectUser)
    return (
        <div className = "profileScreen">
            <Nav />
            <div className = "ProfileScreen__body">
                <h1> Your Profile </h1>
                <div className = "profileScreen__info">
                    <img 
                    src = {avatar}
                    alt =""
                    />
                    <div className =  "profileScreen__details">
                        <h2> {user.email}</h2>
                        <div className= "profileScreen__plans"> 
                        <h3>Plans</h3>
                        <Plans/>
                        <button onClick = {()=> auth.signOut()}className="profileScreen__signOut"> Sign Out </button>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default ProfileScreen

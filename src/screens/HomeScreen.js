import React from 'react'
import './HomeScreen.css'
import Nav from "../Nav.js"
import Banner from "../Banner.js"
import requests from '../Requests.js'
import Row from "../Row"

function HomeScreen() {
    return (
        <div className= 'homeScreen'>
            <Nav/>
            <Banner/>

            <Row 
            title="Popular Games"
            fetchUrl={requests.popular}
            />
            <Row 
            title="Racing"
            fetchUrl={requests.racing}
            />
            <Row 
            title="Platformer"
            fetchUrl={requests.platformer}
            />
            <Row 
            title="Indie"
            fetchUrl={requests.indie}
            />
            <Row 
            title="Sports"
            fetchUrl={requests.sports}
            />
            <Row 
            title="Puzzle"
            fetchUrl={requests.puzzle}
            /> 
        </div>
            
        
    )
}

export default HomeScreen

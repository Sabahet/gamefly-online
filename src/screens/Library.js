import React from 'react'
import Nav from "../Nav"
import {useSelector} from "react-redux"
import {selectUser} from "../features/userSlice.js"

function Library() {
    const user = useSelector(selectUser);
    return (
        <div>
            <Nav/>

            <h1> This is your library </h1>
        </div>
    )
}

export default Library

import React, {useState,useRef}from 'react'
import "./LoginScreen.css"
import logo from "../images/GameFly_LogoBlue.png"
import joystick from "../images/Joystick.png"
import Review from "../images/Review.png"
import SignInScreen from "./SignIn.js"
import {auth} from "../firebase.js"


function LoginScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

const register=(e) =>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then((authUser)=>{
        console.log(authUser)
    }).catch(error => {
        alert(error.message)
    });
    }
    const[signUp, setSignup]= useState(false);
    
    return (
        <div className = "loginScreen">
            <div className = "loginScreen__background">
                <img
                className = 'loginScreen_logo' 
                src= {logo}  />
                <img className="review"
                src= {Review}/>
                 <img 
                className = "joystick"
                src= {joystick} />
         
                </div>
                {signUp ? (
                    <SignInScreen/>
                ): ( 
                <div className= "left-side">
    
 
                <button onClick={register} className = "loginScreen_button">
                    Sign Up For Free
                    </button>
                    <button onClick= {() => setSignup(true)} className = "login-button">
                    Sign In here!
                    </button>
                    <h2 className = "join-now">Unlimited Games at Your Fingertips!</h2>
                    <form>
                    <input ref={emailRef} className = "email" type= 'email' placeholder="Email Adress"/>
                    <input ref ={passwordRef}className = "pass" type = 'password' placeholder="Password"/>
                    <input className = "Confpass" type = 'password' placeholder="Confirm Password"/>
                    </form>
                    <h4 className= "already-have">Already have an account?</h4>
                    </div>
                    
                    )}
                     </div>
        
    )
}

export default LoginScreen

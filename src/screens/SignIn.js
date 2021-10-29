import React, {useRef} from 'react'
import { auth } from '../firebase';
import "./signInScreen.css"
function SignIn() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);


const signIn = (e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then((authUser) =>{
        console.log(authUser);
    }).catch((error) => alert(error.message))
};



    return (
        <div className = 'signInScreen'>
            <form>
                <h3 className="sign">Sign In</h3>
            <input ref= {emailRef} placeholder = "Email" type="email"/>
            <input ref= {passwordRef} placeholder = "Password" type="password"/>
            <button type = "submit" onClick= {signIn}> Sign In </button>
            <h4></h4>
                </form>
        </div>
    )
}

export default SignIn

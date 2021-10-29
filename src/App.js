import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from '../src/screens/HomeScreen.js'
import Login from "./screens/LoginScreen.js"
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { auth } from './firebase';
import {useDispatch,useSelector} from "react-redux"
import { login,logout,selectUser } from './features/userSlice';
import Profile from "./screens/ProfileScreen.js"

function App() {
const user = useSelector(selectUser)
  const dispatch =  useDispatch();


  useEffect(() =>{
 const unsubscribe = auth.onAuthStateChanged(
   (userAuth) =>{
  if(userAuth){
    dispatch(
      login({
      uid: userAuth.uid,
      email: userAuth.email,
    })
    );
   }else{
    dispatch(logout())
    
  }
});
return unsubscribe;
  },[]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ): (

      <Switch>
        <Route path = "/profile">
        <Profile/>
        </Route>
      <Route exact path="/">
      <HomeScreen />
      </Route>

      </Switch>
      )}
      </Router>
    </div>
  );
}

export default App;

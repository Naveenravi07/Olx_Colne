import React, { useState, useContext, useEffect } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom'
import axios from '../../axios/axios'
import apiDetails from '../../constants/apiDetails';
import AuthContext from '../../contexts/authContext'
import googleicon from '../../icons/google.png'
import { auth } from '../../firebase/config';
import { googleProvider } from '../../firebase/config';
function Login() {

  let history = useHistory()
  let [email, setEmail] = useState('')
  let [password, setpassword] = useState('')
  let { user, setUser } = useContext(AuthContext)
  useEffect(() => {
    if (user.name == null) {
      console.log("no user");
      let temp = localStorage.getItem("user")
      if (temp) {
        setUser(temp)
        history.push("/")
      } else {
        history.push('/login')
      }
    } else {
      history.push("/")
    }
  })
  let loginuser = (e) => {
    e.preventDefault()
    let data = { email, password }
    axios.post(apiDetails.login, data).then((result) => {

      let id = result.data._id
      let name = result.data.name
      let phone = result.data.phone
      let email = result.data.email
      data = {
        name, id, phone, email
      }
      console.log(data);
      setUser(data)
      localStorage.setItem("id", id)
      localStorage.setItem("user", JSON.stringify(data))
      localStorage.setItem("dname", name)
      history.push('/')

    }).catch((err) => {
      
      console.log(err);
    })
  }

  const handleGoogleLogin=()=>{
    auth.signInWithPopup(googleProvider).then((result)=>{
      alert(result.user.photoURL)
      alert(result.user.email)
      alert(result.user.displayName)
      console.log(result.user);
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" alt='img' src={Logo}></img>
        <form>
          <label>Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="email"
            name="email"
            value={email}
          />
          <br />
          <label >Password</label>
          <br />
          <input
            onChange={(e) => setpassword(e.target.value)}
            className="input"
            type="password"
            name="password"
            value={password}
          />
          <br />
          <br />
          <button onClick={loginuser}>Login</button>
          <img src={googleicon} onClick={handleGoogleLogin} />
        </form>

      </div>
    </div>
  );
}

export default Login;

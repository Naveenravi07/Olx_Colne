import React, { useState, useEffect } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom'
import googleicon from '../../icons/google.png'
import { auth } from '../../firebase/config';
import { googleProvider } from '../../firebase/config';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../Store/States/AuthSlice';

function Login() {
  const dispatch = useDispatch();
  console.log(useSelector((state) => state.auth));
  let history = useHistory()
  let [email, setEmail] = useState('')
  let [password, setpassword] = useState('')


  let loginuser = (e) => {
    e.preventDefault()
    let data = { email, password }
    auth.signInWithEmailAndPassword(email, password).then((result) => {
      console.log(result.user);
      dispatch(addUser({
        user: {
          "name": result.user.displayName,
          "id": result.user.uid,
          "phone": result.user.phoneNumber,
          "email": result.user.email
        }
      }))
      history.push('/')
    })
  }

  const handleGoogleLogin = (e) => {
    e.preventDefault()
    auth.signInWithPopup(googleProvider).then((result) => {
      dispatch(addUser({
        user: {
          "id": result.user.uid,
          "name": result.user.displayName,
          "email": result.user.email,
          "pfp": result.user.photoURL,
          "phone": result.user.phoneNumber,
        },
      }));
      history.push('/')
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" alt='img' src={Logo}></img>
        <form onSubmit={loginuser}>
          <label>Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
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
            required
            name="password"
            value={password}
          />
          <br />
          <br />
          <button value={'submit'} type={'submit'} >Submit</button>
          {/* <button onClick={loginuser}>Login</button> */}
          <img src={googleicon} onClick={handleGoogleLogin} />
        </form>

      </div>
    </div>
  );
}

export default Login;

import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom'



function Login() {

  let history = useHistory()
  let [email, setEmail] = useState('')
  let [password, setpassword] = useState('')


  // let handleLogin = () => {
  //   auth.signInWithEmailAndPassword(email, password).then((res) => {
  //     console.log("succ");
  //     console.log(res);
  //     history.push('/')
  //   }).catch((err) => {
  //     console.log("err" + err);
  //   })
  // }
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
          {/* <button onClick={handleLogin}>Login</button> */}
        </form>

      </div>
    </div>
  );
}

export default Login;

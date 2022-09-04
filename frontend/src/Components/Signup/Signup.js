import React, { useContext, useEffect, useState } from 'react';
import axios from '../../axios/axios';
import apiDetails from '../../constants/apiDetails';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useHistory } from 'react-router-dom'
import AuthContext from '../../contexts/authContext'


export default function Signup() {

  let history = useHistory()
  let { setUser } = useContext(AuthContext)

  let [name, setName] = useState('')
  let [phone, setphone] = useState('')
  let [email, setemail] = useState('')
  let [password, setpassword] = useState('')

  useEffect(() => {
    if (localStorage.getItem("user")) {
      return history.push('/')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = { name, phone, email, password }

    axios.post(apiDetails.signup, data).then((details) => {
      console.log(details);
      let id = details.data.status.insertedId
      data = {
        name, phone, email, id
      }
      setUser(data)
      localStorage.setItem("user", data)
      history.push('/')
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" alt='img' src={Logo}></img>
        <form>
          <label >Username</label>
          <br />
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label >Email</label>
          <br />
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            name="phone"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            required
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Signup</button>
        </form>
        <a href='/'>Login</a>
      </div>
    </div>
  );
}

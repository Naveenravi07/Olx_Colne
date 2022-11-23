import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase/config';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Store/States/AuthSlice';


export default function Signup() {
  const dispatch=useDispatch()
  let history = useHistory()


  let [name, setName] = useState('')
  let [phone, setphone] = useState('')
  let [email, setemail] = useState('')
  let [password, setpassword] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    let data = { name, phone, email, password }

    auth.createUserWithEmailAndPassword(email,password).then((Response)=>{
     Response.user.updateProfile({displayName:name,photoURL:Response.user.photoURL}).then((res)=>{
      dispatch(addUser({
        user:{
          "name":name,
          "id":Response.user.uid,
          "email":Response.user.email,
          "phone":Response.user.phoneNumber
        }
      }))
      history.push('/')
     }) 
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

import React, { useContext, useEffect, useState } from 'react';
import { postContext } from '../../contexts/postContext';
import { useHistory } from 'react-router-dom'
import './View.css';
import axios from '../../axios/axios'

function View() {
  let [user, setUser] = useState()
  let history = useHistory()
  let { post } = useContext(postContext)


  useEffect(() => {

    axios.post('/userdetails', post).then((res) => {
      let userdetails = res.data
      setUser(userdetails)
      console.log(userdetails);

    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={post.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {post.price} </p>
          <span> {post.name} </span>
          <p>{post.category} </p>
          <span>{post.date}</span>
        </div>

        {user && <div className="contactDetails">
          <p>Seller details</p>
          <p> {user.name} </p>
          <p> {user.phone} </p>
        </div>}
      </div>
    </div>
  );
}
export default View;

import axios from '../../axios/axios';
import React, { useEffect, useState, useContext } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { useHistory } from 'react-router-dom'
import { postContext } from '../../contexts/postContext';

function Posts() {
  let history = useHistory()
  let [pro, setPro] = useState([])
  let { setPost } = useContext(postContext)

  useEffect(() => {
    axios.post("/products", "").then((res) => {
      console.log(res.data);
      setPro(res.data)
    })
  }, [Posts])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {
            pro.map((obj) => {
              return (
                <div
                  className="card" onClick={() => {
                    setPost(obj)
                    history.push('/view')
                  }}
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={obj.url} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {obj.name}</p>
                    <span className="kilometer">{obj.category}</span>
                    <p className="name"> {obj.price} </p>
                  </div>
                  <div className="date">
                    <span> {obj.date} </span>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;

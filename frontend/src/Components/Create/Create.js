import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import axios from "../../axios/axios"
import { useHistory } from 'react-router-dom'
import firebase from '../../firebase/config';


const Create = () => {
  let [name, setName] = useState('')
  let [category, setCategory] = useState('')
  let [price, setPrice] = useState('')
  let [image, setImage] = useState(null)
  let history = useHistory()
  let userid = localStorage.getItem("id")

  const handleUpload = (e) => {
    e.preventDefault()
    console.log(image);

    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      let date = new Date().toString()
      ref.getDownloadURL().then((url) => {
        let datas = {
          name, category, price, userid, url, date
        }
        axios.post('/addproduct', datas).then((resp) => {
          console.log(resp);
          history.push("/")
        })
      })
    })

  }
  return (
    <Fragment>
      {
        !userid ? history.push('/login') : < Fragment >
          <Header />
          <card>
            <div className="centerDiv">
              <form >
                <label >Name</label>
                <br />
                <input
                  className="input"
                  type="text"
                  id="fname"
                  name="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label >Category</label>
                <br />
                <input
                  className="input"
                  type="text"
                  id="fname"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <br />
                <label >Price</label>
                <br />
                <input
                  className="input" type="number" name="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)} />
                <br />
              </form>
              <br />
              <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
              <form>
                <br />
                <input onChange={(e) => {
                  setImage(e.target.files[0])
                }} type="file" />
                <br />

                <button onClick={handleUpload} className="uploadBtn">upload and Submit</button>
              </form>
            </div>
          </card>
        </Fragment >
      }
    </Fragment>

  );
};

export default Create;

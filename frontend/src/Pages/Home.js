import React, { useContext } from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';

import axios from '../axios/axios';
import AuthContext from '../contexts/authContext';
function Home(props) {
  let { user } = useContext(AuthContext)
  console.log(user);
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;


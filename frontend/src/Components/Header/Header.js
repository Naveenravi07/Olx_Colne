import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useHistory } from 'react-router-dom'
import AuthContext from '../../contexts/authContext';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Header() {
  let history = useHistory()
  let { user, setUser } = useContext(AuthContext)
  let data = localStorage.getItem("dname")
  if (data) {
    setUser(data)
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>

        <div className="loginPage">

          <span>{data ? data : <button onClick={() => history.push("/login")}>Login</button>}</span>
          <hr />
        </div>
        {/* <button className='btn'> {data ? "logout"} </button> */}
        {
          data ? <button onClick={() => {
            let des = window.confirm("Are you sure you want to logout")
            console.log(des);
          }}>Logout</button>
            : <button onClick={() => {
              history.push('/signup')
            }}> Signup</button>
        }
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Header;

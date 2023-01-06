import React from 'react'
import './Navbar.css'
import {IoSearch} from 'react-icons/io5'
import {FaShoppingCart} from 'react-icons/fa'
import {MdKeyboardArrowDown} from 'react-icons/md'
import LoginModel from '../../Components/LoginModel/LoginModel'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <>
    <div className="navbar-container">
        <div className="navbar">
            <Link to={'/'}>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipcartlogo" className="navbar-logo" />
            </Link>
            <div className="navbar-search">
                <input type="text" placeholder='Search for Products,brands and more' 
                className='navbar-searchbox'/>
                <button className="searchbtn">
                  <IoSearch />
                </button>
            </div>
            <button className="navbar-btn" 
            onClick={()=>setIsopen(true)}>Login</button>
            <div className="navbar-bcs"><h3>Become a Seller</h3></div>
            <div className="navbar-more"><h3>More <i className="moredown"><MdKeyboardArrowDown/></i></h3></div>
            <div className="navbar-cart">
              <div className="cart-icon"><FaShoppingCart/></div>
              <Link to={'/cart'} className='cart'>Cart</Link></div>
        </div>
        <LoginModel isopen={isopen} setClose={setIsopen}/>

    </div>
    </>
  )
}

export default Navbar
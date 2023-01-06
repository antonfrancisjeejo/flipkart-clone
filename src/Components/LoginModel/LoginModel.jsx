import React from 'react'
import './LoginModel.css'
import {RxCross2} from 'react-icons/rx'
const LoginModel = ({isopen,setClose}) => {
  return (isopen)? (
    <div className="overlay">
        <div className='LoginModel'>
            <div className="left">
                <div className="left-container">
                <p className="Login-title">
                    Login
                </p>
                <p className="Login-des">
                Get access to your Orders, Wishlist and Recommendations
                </p>
                </div>
            </div>
            <div className="right">
            <input type="email" className="Login-input" placeholder='Enter Email ' required/>
            <input type="password" className="Login-input" placeholder='Enter Password ' required/>
            <p className="termsandcon">By continuing, you agree to Flipkart's <span style={{color:'blue'}}>Terms of Use</span> and 
            <span style={{color:'blue'}}> Privacy Policy.</span> </p>
            <button className="Login-btn">Login</button>
            <p className="Login-signup">New to Flipkart? Create an account</p>
            </div>
        <div className="close" onClick={()=>setClose(false)}><RxCross2/></div>
        </div>
    </div>
  ):""
}

export default LoginModel
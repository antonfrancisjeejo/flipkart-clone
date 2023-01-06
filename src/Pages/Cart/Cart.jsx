import React from 'react'
import './Cart.css'
import { useState } from 'react'
const Cart = () => {
    const [active, setactive] = useState(1);
  return (
    <div className="Cart">
        <div className="Cart-tabs">
            <p className={`flipkart ${active===0?'active':''}`} onClick={()=>setactive(0)}>Flipkart</p>
            <p className={`grocery ${active===1?'active':''}`} onClick={()=>setactive(1)}>Grocery</p>
        </div>

    <div className="Cart-items">
        <div className="CartitemsNull">
            <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" className='CartitemsNull-img' />
            <p className="CartitemsNull-title">Missing Cart items?</p>
            <p className="CartitemsNull-des">Login to see the items you added previously</p>
            <button className="CartitemsNull-btn">Login</button>
        </div>
    </div>
    </div>
  )
}

export default Cart
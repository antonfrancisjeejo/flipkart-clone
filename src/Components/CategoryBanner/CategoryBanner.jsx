import React from 'react'
import './CategoryBanner.css'
const CategoryBanner = ({ImgSrc,Title,Brand}) => {
  return (
    <div className="CategoryBanner">
      <img src={ImgSrc} alt="" className='CategoryBanner-img'/>
      <p className="CategoryBanner-title">
        {Title.length<25?Title:Title.slice(0,25)+'...'}</p>
      <p className="CategoryBanner-ShopNow">Shop Now!</p>
      <p className="CategoryBanner-Brands">{Brand}</p>
    </div>
  )
}

export default CategoryBanner
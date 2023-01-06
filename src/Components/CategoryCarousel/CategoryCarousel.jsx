import React from 'react'
import './CategoryCarousel.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CategoryBanner from '../CategoryBanner/CategoryBanner'
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import {MdArrowForwardIos} from 'react-icons/md'
import { Link } from 'react-router-dom'
const CategoryCarousel = ({BgImg,Title,Data}) => {
  const Settings={
        dots:false,
        speed:500,
        slidesToShow:4,
        // slidesToScroll:4,
        infinite:false
  }
  const Next=(props)=>{
    console.log(props);
    const {className,onClick}=props
return(
 <div className={className} onClick={onClick}  >
     <MdArrowForwardIos style={{color:"black",fontSize:25,fontWeight:900}}/>
 </div>
)
}
const Prev=(props)=>{
    const {className,onClick}=props
return(
        <div className={className} onClick={onClick}>
            <MdOutlineArrowBackIosNew style={{color:'black',fontSize:25,fontWeight:900}} />
        </div>
       )
}
console.log(BgImg);
  return (
    <div className="CategoryCarousel" >
        <div className="CategoryCarousel-left" style={{background:`url(${BgImg}) no-repeat 0px bottom`}}>
            <p className="CategoryCarousel-title">{Title}</p>
            <button className="CategoryCarousel-btn">View All</button>
        </div>
        <div className="CategoryCarousel-right">
          <Slider 
          nextArrow={<Next />}
          prevArrow={<Prev/>}
          {...Settings}>
            {
              Data.map((item)=>(
                <Link to={'/products'}>
                <CategoryBanner ImgSrc={item.ImgSrc} Title={item.CategoryName} Brand={item.Brand} />
                </Link>
              ))
            }
          </Slider>
        </div>
    </div>
  )
}

export default CategoryCarousel
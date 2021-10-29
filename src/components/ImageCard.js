import React, {useState, useContext} from "react"
import {MyContext} from "../context/MyContext"
import PropTypes from 'prop-types'


function ImageCard({className, img}) {
    let [isHovered, setIsHovered] = useState(false)

    const {toggleFav, handleCartItems, cartItems} =  useContext(MyContext)
    
    const heartIcon = (isHovered || img.isFavorite) && 
        <i  onClick={() => toggleFav(img.id)} 
            className= {!img.isFavorite? "ri-heart-line favorite" : "ri-heart-fill favorite"}>    
        </i>  
    const plusIcon = () => {
        if (cartItems.find(item => item.id === img.id)){ //check if cartItems array contains the target image
            return <i onClick={() => handleCartItems(img)} className="ri-shopping-cart-fill cart"></i> //onClick handleCartItems() will remove from cart
        }
        else if (isHovered){
            return <i onClick={() => handleCartItems(img)} className="ri-add-circle-line cart"></i> //onClick handleCartItems() will add to cart
        } 
    }
    //console.log(img.id, isFavorite) //note that setState is async function so we might see the state both consoled as false first then true
    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >

            <img src={img.url} className="image-grid"/>

            {heartIcon}
            {plusIcon()}
        </div>
    )    
}

ImageCard.propTypes = {
    img: PropTypes.shape({
         id: PropTypes.string.isRequired,
         url: PropTypes.string.isRequired,
         isFavorite: PropTypes.bool //this is not required as the logic above can handle undefined
      }),
    className: PropTypes.string //this is not required as sometimes the function that pass classnName sometimes doesn't pass anything
}

export default ImageCard

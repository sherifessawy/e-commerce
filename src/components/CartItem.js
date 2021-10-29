import React, {useContext, useState,} from "react"
import {MyContext} from "../context/MyContext"
import PropTypes from 'prop-types'
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const {handleCartItems} =  useContext(MyContext)
    //let [isHovered, setIsHovered] = useState(false)
    const [isHovered, refEl] = useHover()

    const ClassName = isHovered? "ri-delete-bin-fill" : "ri-delete-bin-line" 

    return (
        <div className="cart-item">
            <i  className={ClassName}
                onClick={() => handleCartItems(item)}
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
                ref={refEl}
            >
            </i>
            <img src={item.url} width="130px" />
            {/* <i class="ri-add-circle-line"></i>
            <i class="ri-subtract-fill"></i> */}
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
import React, {useContext, useState} from "react"
import {MyContext} from "../context/MyContext"
import PropTypes from 'prop-types'
import useHover from "../hooks/useHover"

function CartItem({item, setTotalCost}) {
    const {handleCartItems} =  useContext(MyContext)
    const [isHovered, refEl] = useHover()
    const [quantity, setQuantity] = useState(1)

    const ClassName = isHovered? "ri-delete-bin-fill" : "ri-delete-bin-line" 

    return (
        <div className="cart-item">
            <i  className={ClassName}
                onClick={() => {
                    handleCartItems(item)
                    setTotalCost(prev => prev-5.99*quantity) //remove cost of item from total cost
                }}
                ref={refEl}
            >
            </i>
            <img src={item.url} width="130px" />
            <div className="add-remove">
                <i className="ri-subtract-fill" 
                    onClick={() => {
                        if (quantity > 1){
                            setQuantity(prev => prev-1)
                            setTotalCost(prev => prev-5.99)
                        }
                    }
                }></i>
                <p>Qty: {quantity}</p>
                <i className="ri-add-circle-line" 
                    onClick={() => {
                        setQuantity(prev => prev+1)
                        setTotalCost(prev => prev+5.99)
                    }
                }></i>
            </div>
            <p>${Math.round(5.99*quantity*100)/100}</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
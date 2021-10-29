import React, {useContext, useState} from 'react'
import { MyContext } from '../context/MyContext'

function OrderButton() {
    const {emptyCart} = useContext(MyContext)
    let [buttonText, setButtontext] = useState("Place Order") //note that for a component to rerender the variable must be put in state and update the state.

    function placeOrder() {
        setButtontext("ordering...")
        setTimeout(() =>{
            setButtontext("Place Order")
            emptyCart()
        },3000) //fake async
    }

    return (
        <div className="order-button">
            <button
                onClick={placeOrder}>
                {buttonText}
            </button>
        </div>
    )
}

export default OrderButton
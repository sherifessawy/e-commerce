import React, {useContext, useState} from 'react'
import { MyContext } from '../context/MyContext'

function OrderButton({setTotalCost}) {
    const {emptyCart} = useContext(MyContext)
    let [buttonText, setButtontext] = useState("Place Order") //note that for a component to rerender the variable must be put in state and update the state.

    function placeOrder() {
        setButtontext("ordering...")
        setTimeout(() =>{
            setButtontext("Place Order")
            emptyCart()
            setTotalCost(0)
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
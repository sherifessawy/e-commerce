import React, {useContext, useState} from "react"
import {MyContext} from "../context/MyContext"
import CartItem from "../components/CartItem"
import OrderButton from "../components/OrderButton"
import {Link} from "react-router-dom"

function Cart() {
    const {cartItems} = useContext(MyContext)
    const [totalCost, setTotalCost] = useState(cartItems.length*5.99)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} setTotalCost={setTotalCost}/>
    ))

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: ${totalCost >= 0 ? Math.round(totalCost): 0}</p>
            {
                cartItems.length? 
                <OrderButton setTotalCost={setTotalCost}/>:
                <Link to="/">
                    <p className='pic-some'>Your cart is empty, pick some?</p>
                </Link>
            }
        </main>
    )
}

export default Cart
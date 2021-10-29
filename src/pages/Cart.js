import React, {useContext} from "react"
import {MyContext} from "../context/MyContext"
import CartItem from "../components/CartItem"
import OrderButton from "../components/OrderButton"
import {Link} from "react-router-dom"

function Cart() {
    const {cartItems} = useContext(MyContext)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    const totalCost = (cartItems.length*5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost}</p>
            {
                cartItems.length? 
                <OrderButton />:
                <Link to="/">
                    <p className='pic-some'>Your cart is empty, pick some?</p>
                </Link>
            }
        </main>
    )
}

export default Cart
import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {MyContext} from "../context/MyContext"


function Header() {
    const {cartItems, auth, userName} = useContext(MyContext)
    
    return (
        <header>
            <Link to="/">
                <h2>Pic Some</h2>
            </Link>
            <div className="header-right">
            <Link to="/login">
                <h4 className="login-welcome-text">{auth? `Welcome, ${userName}`: "Log In"}</h4>
            </Link>
            <Link to="/cart">
                    <i className=
                        {cartItems.length?
                        "ri-shopping-cart-fill ri-fw ri-2x":
                        "ri-shopping-cart-line ri-fw ri-2x"}> 
                    </i>
            </Link>
            </div>
        </header>
    )
}

export default Header

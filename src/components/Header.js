import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {MyContext} from "../context/MyContext"


function Header() {
    const {cartItems, auth, userName, photos} = useContext(MyContext)
    const favoritedPhotos = photos.filter(photo => photo.isFavorite === true)
    
    return (
        <header>
            <Link to="/">
                <h2>Pic Some</h2>
            </Link>
            <div className="header-right">
            <Link to="/login">
                <h4 className="login-welcome-text">{auth? `Welcome, ${userName}`: "Log In"}</h4>
            </Link>
            <Link to="/favorites">
                <i className= {!favoritedPhotos.length ? "ri-heart-line fav-tab" : "ri-heart-2-fill fav-tab"}></i>
            </Link>
            <Link to="/cart">
                    <i className=
                        {cartItems.length?
                        "ri-shopping-cart-fill ri-fw ri-2x cart-icon":
                        "ri-shopping-cart-line ri-fw ri-2x cart-icon"}> 
                    </i>
            </Link>
            </div>
        </header>
    )
}

export default Header

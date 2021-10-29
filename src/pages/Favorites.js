import React, {useContext} from 'react'
import { MyContext } from '../context/MyContext'
import ImageCard from '../components/ImageCard'
import {Link} from 'react-router-dom'

function Favorites() {
    const {photos, cartItems} = useContext(MyContext)
    const favoritedPhotos = photos.filter(photo => photo.isFavorite === true)
    console.log(favoritedPhotos)
    const renderPhotos = favoritedPhotos.map((img, index) => { 
        return <ImageCard key={img.id} img={img} className="favorited-image"/>
    })

    return (
        <main>
            <h1 className="favorited-title">Favorited items</h1>
            {renderPhotos}
            {
                renderPhotos.length ? 
                cartItems.length?
                <Link to="/cart">
                    <p className='go-to-cart-btn'>go to cart</p>
                </Link> :
                <p className='pic-some'>Your cart is still empty, add favorited items to cart by hovering over them and clicking the plus icon</p> :
                <Link to="/">
                    <p className='pic-some'>You have no items favorited, pick some?</p>
                </Link>
            }
        </main>
    )
}

export default Favorites

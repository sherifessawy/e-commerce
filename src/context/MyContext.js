import React, {useState, useEffect} from 'react'

const MyContext = React.createContext("")

function ContextProvider(props){
    //console.log(props.Children) //undefined bec of uppercase C
    let [photos, setPhotos] = useState([])
    let [cartItems, setCartItems] = useState([])
    let [auth, setAuth] = useState(false) //authentication
    let [userName, setUserName] = useState("") //authentication
    
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    //console.log('s',photos)

    const toggleFav = (id) => {
        const newPhotos = photos.map( img => {
            if (img.id === id){
                img.isFavorite = !img.isFavorite  
            } 
            return img
        })
        setPhotos(newPhotos)
    }

    const handleCartItems = (targetCartItem) => {
        if (cartItems.find(item => item.id === targetCartItem.id)){ //item already in cart.
            const newCartItems = cartItems.filter(item => item.id !== targetCartItem.id) //remove item from cart
            setCartItems(newCartItems)
        } else { //item not currently in cart.
            setCartItems(prev => [...prev, targetCartItem]) // add item to cart
        }
    }

    function emptyCart(){setCartItems([])}
    
    //{photos} is short hand for object {photos: photos}. we did that to use value prop as object and pass many other props long with the photos
    return(
        <MyContext.Provider value = {{photos, toggleFav, cartItems, handleCartItems, emptyCart, auth, setAuth, userName, setUserName}}> 
            {props.children}
        </MyContext.Provider>
    )
}
export  {ContextProvider, MyContext}

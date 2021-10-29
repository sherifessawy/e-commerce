import React, {useContext} from 'react'
import { MyContext } from '../context/MyContext'
import {useLocation, useHistory} from "react-router-dom"

function Login() {
    const {auth, setAuth, userName, setUserName} = useContext(MyContext)

    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } } //default {from} value is set to "/" i.e. home page, in case location.state  is undefined
    
    const history = useHistory()

    const logOutText = from.pathname === "/cart" ? "You have to log in to view the cart" : "You are logged out"

    return (
        <div className="login-page">
            {
                auth?
                <h2>Welcome {userName || "user who did not give us his name"}, You are logged in</h2>:
                <>
                    <h2>{logOutText}</h2>
                    <label>
                        Enter your name: 
                        <input 
                            type="text" 
                            onChange={(e) => setUserName(e.target.value)}
                            value = {userName}
                        /> 
                    </label>
                    <hr/>
                </>
            }
            <button
                onClick={() => {
                    setAuth(prevState => !prevState) 
                    history.replace(from)
                    //history.goBack() //this will go back to home page because. it is the last page opened before the log in page and not the cart page
                    }
                }
                
                className="login-btn"
            >
            {auth? "Log Out" : "Log In"}
            </button>
        </div>
    )
}

export default Login

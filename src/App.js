import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import Login from "./pages/Login"
import Favorites from "./pages/Favorites"
import PrivateRoute from "./components/PrivateRoute"

import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            <Switch>
                <PrivateRoute path="/cart">
                    <Cart />
                </PrivateRoute>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/favorites">
                    <Favorites />
                </Route>
                <Route path="/">
                    <Photos />
                </Route>
            </Switch>
        </div>
    )
}

export default App
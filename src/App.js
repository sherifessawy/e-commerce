import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"

import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>
                <PrivateRoute path="/cart">
                    <Cart />
                </PrivateRoute>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </div>
    )
}

export default App
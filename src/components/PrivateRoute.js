import React, {useContext} from 'react'
import { MyContext } from '../context/MyContext'
import {Route, Redirect} from "react-router-dom"

function PrivateRoute({children, ...rest}) {
    const {auth} = useContext(MyContext)

    //console.log({...rest})
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    )
}

export default PrivateRoute

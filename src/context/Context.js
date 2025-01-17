"use client"
import {createContext, useContext } from "react"
let isUserLogedIn = false
let userOptions = ( ) => {
    return isUserLogedIn ? [
        {
            name:"Sign Off",
            link:"/"
        }
    ]:
    [
        {
            name:"Sign up",
            link:"/signup"
        },
        {
            name:"Log In",
            link:"/login"
        }
    ]

}

const links = {
    lin:[{
        name:"Home",
        link:"/",
        logo: "icon fa fa-home"
    },
    {
        name:"Donate",
        link:"/donate",
        logo: "fa fa-university"
    },
    {
        name:"About",
        link:"/about",
        logo: "fa fa-info-circle"
    },
    ...userOptions()
    ]
}

const UserContext = createContext(links)

export const UsersProvider = ({children}) =>{
    return (
        <UserContext.Provider value={links}>
            {children}
        </UserContext.Provider>
    )
}
export const mainData = () => useContext(UserContext)
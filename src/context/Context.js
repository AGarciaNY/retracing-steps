"use client"
import { Children, createContext, useContext } from "react"
let isUserLogedIn = false
let userOptions = ( ) => {
    return isUserLogedIn ? [
        {
            name:"Sign Off",
            link:"/home"
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
        link:"/home",
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
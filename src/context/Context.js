"use client"
import { Children, createContext, useContext } from "react"
let isUserLogedIn = false
let userOptions = ( ) => {
    return isUserLogedIn? [{
        name:"Sign up",
        href:"/signup"
    }]:[{
        name:"Sign Off",
        href:"/home"
    }]

}

const links = {
    lin:[{
        name:"Home",
        href:"/home"
    },
    {
        name:"Donate",
        href:"/Donate"
    },
    {
        name:"About",
        href:"/about"
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
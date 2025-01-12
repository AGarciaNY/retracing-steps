let isUserLogedIn = false
let userOptions = ()=>{
    return isUserLogedIn? {
        name:"Sign up",
        href:"/signup"
    }:{
        name:"Sign Off",
        href:"/home"
    }

}
export default {
    links:[
    {
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
    userOptions
    ]
}
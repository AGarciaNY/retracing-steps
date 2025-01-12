'use client'
import {mainData} from "../../context/Context" 
export default function SpecialNav (){
  // let navLinkist = links.map((val, i) => {
  //   return <li className="menu-item" key={`nave${i}`}><a onClick={() => { goToHomePage(val.link) }}>{val.name}</a></li >
  // })
  console.log(mainData(),"here")
  return (
    <div>
      i am here
    </div>
    // <div style={{padding:"0px"}}>
    //   <input className="menu-toggler" type="checkbox" />
    //     <label id="main-nav-text">Start Here</label>
    //     <ul>
    //       {/* {navLinkist} */}
    //       {isUserLogedIn ? <li className="menu-item" key={`signOuthere`}><a onClick={() => {
    //         userSignOut()
    //         goToHomePage("./")
    //       }}>Sign Out</a></li > : ""}
    //     </ul>
    // </div>
  )
}
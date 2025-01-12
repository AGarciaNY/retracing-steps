'use client'
import {mainData} from "../../context/Context" 
import styles from "./index.module.css"


export default function SpecialNav (){
  let navLinkist = mainData().lin.map((val, i) => {
    return <li className={styles.menu_item} key={`nave${i}`}><a >{val.name}</a></li >
  })
  return (
    <div>
      <div style={{padding:"00px"}}>
        <input className={styles.menu_toggler} type="checkbox" />
          <label id={styles.main_nav_text}>Start Here</label>
          <ul>
            {navLinkist}
          </ul>
      </div>
    </div>
  )
}
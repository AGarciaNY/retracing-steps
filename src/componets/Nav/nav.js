'use client'
import {mainData} from "../../context/Context" 
import Link from 'next/link';
import styles from './nav.module.css'
import {useState} from 'react'
import { redirect } from 'next/navigation'

// import {links} from "../../data/index";

export default function Nav() { 

    const [navBackground, setNavBackground] = useState("none")
    const navigateTo = (link) => {
      redirect(link)
    }
    let navLinkist = mainData().lin.map((val, i) => {
      return <a 
        key={`navlink${i}`} 
        className={val.logo} 
        onClick={()=>{navigateTo(val.link) }}>
          {val.name[0]}
        </a>
    })
    return (
      <div className={styles.center_menu_page}>
        
            <input className={styles.menu_open_page} 
              id="menu_open" 
              type="checkbox" 
              aria-hidden="true"
              onClick={() => {
                console.log("clicked")
                setNavBackground(navBackground === "none"?"block":"none")
              }}/>
              
            <label className={styles.menu_button_page} htmlFor="menu_open" aria-hidden="true">Menu</label>
            
            <nav className={styles.menu_page} role="navigation">
                {navLinkist}
            </nav>
      </div> 
    );
  }
  
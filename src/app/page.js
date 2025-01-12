import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/componets/Nav/nav";
import {links} from "../data/index"
import {UsersProvider, mainData} from "../context/Context" 
import SpecialNav from "../componets/specialNav/index";

export default function Home() {

  return (
    <>
      <div style={{display:"flex",flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
        <svg id="home-text" width="400" height="300" xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect style={{ fill: "none" }} id="canvas_background" height="402" width="400" y="-1" x="-1" />
            <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
              <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%" />
            </g>
          </g>
          <g>
            <path id="cool" style={{ fill: "none" }} d="M 30 200 A 43 160 270 1 1 352 200 " />
          </g>
          <text width="400">
            <textPath
              id="home-header"
              href="#cool"
              style={{
                fontSize: "30px",
                fontFamily: `'Quicksand', sans-serif`,
                textAlign: "center",
                fontWeight: "1500"
              }}>
              Welcome to Give-A-Way
            </textPath>
          </text>
        </svg>
        <UsersProvider>
          <SpecialNav/>
        </UsersProvider>
      </div>
    </>  
  );
}

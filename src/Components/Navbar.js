import React, { useContext } from 'react'
import '../CSS/navbar.css'
import codeContext from '../Context/codeContext'

export const Navbar = () => {
    const context = useContext(codeContext)
    const { compile } = context

    // ****** RUN BUTTON FUNCTIONALITY ******
    const runOnClick = () => {
        compile()
        document.getElementById("output-div").style.display = "flex"
        document.getElementsByClassName("seekerY")[0].style.display = "flex"

        if (window.matchMedia("(max-width: 800px)").matches) {
            setTimeout(() => {
                document.getElementById("run-function").style.opacity = "0%"
                document.getElementById("run-function").style.transition = "opacity 0.5s"
            }, 1500);
        }
    }

    // ****** ON HOVER FUNCTIONALITY ******
    const handleMouseOver = () => {
        document.getElementById("run-function").style.opacity = "100%"
        document.getElementById("run-function").style.transition = "opacity 0.5s"
    }

    const handleMouseLeave = () => {
        document.getElementById("run-function").style.opacity = "0%"
        document.getElementById("run-function").style.transition = "opacity 0.5s"
    }

    return (
        <>
            <div id='nav-div'>
                <div id='nav-heading'><i className="fa-solid fa-code"></i> Code Editor</div>
                <button id='run-button' type="button" onClick={runOnClick} onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver}><i className="fa-solid fa-play fa-sm"></i></button>
                <div id='run-function'>Run</div>
            </div>
        </>
    )
}

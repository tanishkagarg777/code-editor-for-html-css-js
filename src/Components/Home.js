import React from 'react'
import { TypeBox } from './TypeBox'
import { Output } from './Output'
import "../CSS/home.css"
import "../CSS/scrollbar.css"

export const Home = () => {
    // ****** RESIZABLE DIV FUNCTIONALITY ******
    let mouse_is_down = false;

    const seekerYMouseDown = () => {
        mouse_is_down = true;
    }

    // for desktop
    document.addEventListener('mousemove', (e) => {
        if (!mouse_is_down) return;
        document.getElementById("home-div").classList.add("prevent-select");
        document.getElementById('type').style.height = `${e.clientY}px`;
    })

    document.addEventListener('mouseup', () => {
        mouse_is_down = false;
        document.getElementById("home-div").classList.remove("prevent-select");
    })

    // for mobile
    document.addEventListener('touchmove', (e) => {
        if (!mouse_is_down) return;
        document.getElementById("home-div").classList.add("prevent-select");
        document.getElementById('type').style.height = `${e.touches[0].clientY}px`;
    })

    document.addEventListener('touchend', () => {
        mouse_is_down = false;
        document.getElementById("home-div").classList.remove("prevent-select");
    })

    return (
        <div id='home-div'>

            <div id="type">
                <TypeBox language={"html"} />
                <TypeBox language={"css"} />
                <TypeBox language={"js"} />
            </div>

            <div className='seekerY' onMouseDown={seekerYMouseDown} onTouchStart={seekerYMouseDown}>
                <div className='seeker-barY'></div>
                <div className='seeker-barY'></div>
            </div>

            <div id="output-div"><Output /> </div>

        </div>
    )
}

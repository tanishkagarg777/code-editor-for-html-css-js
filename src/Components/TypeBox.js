import React, { useContext, useState, useRef } from 'react'
import "../CSS/typeBox.css"
import "../CSS/scrollbar.css"
import codeContext from '../Context/codeContext'
import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';

export const TypeBox = (props) => {
    const context = useContext(codeContext)
    let intialText;
    let langLogo;
    let langName;
    let contextlang;
    const ref = useRef(null)

    // ****** FRONTEND ******
    if (props.language === "html") {
        langLogo = "fa-brands fa-html5 fa-lg"
        langName = "HTML"
        contextlang = context.html
        intialText = context.initialTextHtml
    }
    else if (props.language === "js") {
        langLogo = "fa-brands fa-square-js fa-lg"
        langName = "JS"
        contextlang = context.js
        intialText = context.initialTextJs
    }
    else {
        langLogo = "fa-brands fa-css3-alt fa-lg"
        langName = "CSS"
        contextlang = context.css
        intialText = context.initialTextCss
    }

    const textarea = document.getElementById(`${props.language}-code`);

    const handleKeyUp = () => {
        if (textarea !== null) {
            // ****** SENDING USER CODE IN CODESTATE FILE ******
            contextlang(textarea.innerText)
        }
    }

    // ****** SYNTAX HIGHLIGHTING ******
    document.querySelectorAll('div.code').forEach(e => {
        if (e.getAttribute("data-highlighted") !== "yes") {
            hljs.highlightElement(e);
        }
    });

    // ****** ENLARGE BUTTON FUNCTIONALITY ******
    const [enlarge, setEnlarge] = useState("fa-up-right-and-down-left-from-center");

    const handleEnlargeOnClick = () => {
        let css = document.getElementById("css")
        let html = document.getElementById("html")
        let js = document.getElementById("js")
        let editorDiv = document.getElementsByClassName("editor-div")
        let container = document.getElementsByClassName("container")

        enlarge === "fa-up-right-and-down-left-from-center" ? setEnlarge("fa-down-left-and-up-right-to-center") : setEnlarge("fa-up-right-and-down-left-from-center")

         if (ref.current.id === "html") {
            css.classList.contains("none-css") ? css.classList.remove("none-css") : css.classList.add("none-css");
            js.classList.contains("none-js") ? js.classList.remove("none-js") : js.classList.add("none-js");

            container[0].style.width === "100%" ? container[0].style.width = "501.9px" : container[0].style.width = "100%"
            editorDiv[0].style.width === "100%" ? editorDiv[0].style.width = "501.9px" : editorDiv[0].style.width = "100%"
        }
        else if (ref.current.id === "css") {
            html.classList.contains("none-html") ? html.classList.remove("none-html") : html.classList.add("none-html");
            js.classList.contains("none-js") ? js.classList.remove("none-js") : js.classList.add("none-js");

            container[1].style.width === "100%" ? container[1].style.width = "501.9px" : container[1].style.width = "100%"
            editorDiv[1].style.width === "100%" ? editorDiv[1].style.width = "501.9px" : editorDiv[1].style.width = "100%"
        }
        else if (ref.current.id === "js") {
            css.classList.contains("none-css") ? css.classList.remove("none-css") : css.classList.add("none-css");
            html.classList.contains("none-html") ? html.classList.remove("none-html") : html.classList.add("none-html");

            container[2].style.width === "100%" ? container[2].style.width = "501.9px" : container[2].style.width = "100%"
            editorDiv[2].style.width === "100%" ? editorDiv[2].style.width = "501.9px" : editorDiv[2].style.width = "100%"
        }
    }

    // ****** RESPONSIVE TYPING AREA ****** 
    const html = document.getElementById("html")
    const css = document.getElementById("css")
    const js = document.getElementById("js")
    const htmlBtn = document.getElementsByClassName("html-btn")
    const cssBtn = document.getElementsByClassName("css-btn")
    const jsBtn = document.getElementsByClassName("js-btn")

    // on language button click
    const respOnClick = (e) => {
        const langClick = e.target.innerText.toLowerCase()

        document.getElementById(langClick).classList.remove(`${langClick}-inactive`)
        document.getElementById(langClick).classList.add(`${langClick}-active`)

        if (langClick === "html") {
            htmlBtn[0].style.backgroundColor = "#444857"
            cssBtn[0].style.backgroundColor = "#2c303a"
            jsBtn[0].style.backgroundColor = "#2c303a"

            css.classList.add("css-inactive")
            css.classList.remove("css-active")

            js.classList.add("js-inactive")
            js.classList.remove("js-active")
        }

        else if (langClick === "css") {
            cssBtn[1].style.backgroundColor = "#444857"
            htmlBtn[1].style.backgroundColor = "#2c303a"
            jsBtn[1].style.backgroundColor = "#2c303a"

            html.classList.add("html-inactive")
            html.classList.remove("html-active")

            js.classList.add("js-inactive")
            js.classList.remove("js-active")
        }

        else if (langClick === "js") {
            jsBtn[2].style.backgroundColor = "#444857"
            cssBtn[2].style.backgroundColor = "#2c303a"
            htmlBtn[2].style.backgroundColor = "#2c303a"

            css.classList.add("css-inactive")
            css.classList.remove("css-active")

            html.classList.add("html-inactive")
            html.classList.remove("html-active")
        }
    }

    return (
        <>
            <div className="editor-div" id={`${props.language}`} style={{ minWidth: "125px", width: "505px", flexGrow: "4", flexShrink: "5" }} ref={ref}>

                <div className='heading-div'>
                    <div className='heading-logo'><i className={langLogo} style={{ color: "#ffffff" }}></i></div>
                    <div className='code-editor-heading'>{langName}</div>
                    <div className="enlarge-button heading-logo" onClick={handleEnlargeOnClick}><i className={`fa-solid ${enlarge} fa-sm`}></i></div>

                    <div id='resp-btn-div'>
                        <button type="button" className='resp-lang-btn html-btn' onClick={respOnClick}>HTML</button>
                        <button type="button" className='resp-lang-btn css-btn' onClick={respOnClick}>CSS</button>
                        <button type="button" className='resp-lang-btn js-btn' onClick={respOnClick}>JS</button>
                    </div>
                </div>


                <div className="code-editor container">
                    <div className="code-editor" id={`${props.language}-code`} contentEditable={true} suppressContentEditableWarning={true} onKeyUp={handleKeyUp}>
                        <div className={`code language-${props.language}`} style={{ padding: "0", margin: "0", overflowX: "inherit", backgroundColor: "#253238", whiteSpaceCollapse: "preserve" }}>{intialText}</div>
                    </div>

                </div>

            </div>
        </>
    )
}

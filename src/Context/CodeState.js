import CodeContext from "./codeContext"
import { useState, useEffect } from "react";

const CodeState = (props) => {
    const initialTextHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link type="text/css" href="/style.css">
    <title>Document</title>
</head>
<body>
    <p>Welcome To Code Editor</p>
    <script type="text/js" src="/script.js"></script>     
</body>
</html>`

    const initialTextCss = `body{
    margin: 0;
    padding: 0;
}`

    const initialTextJs = `// Type Something To Render It On Screen`

    const [htmlCode, setHtmlCode] = useState(initialTextHtml)
    const [cssCode, setCssCode] = useState(initialTextCss)
    const [jsCode, setJsCode] = useState(initialTextJs)
    const [code, setCode] = useState("Welcome To Code Editor")

    const html = (code) => {
        setHtmlCode(code)
    }

    const css = (code) => {
        setCssCode(code)
    }

    const js = (code) => {
        setJsCode(code)
    }

    const compile = () => {
        const titleindex = htmlCode.toString().indexOf('</title>') + 7
        const bodyindex = htmlCode.toString().indexOf('</body>') - 1

        const finalCode = htmlCode.toString().slice(0, titleindex + 1) + `
        <style>${cssCode}</style>` + htmlCode.toString().slice(titleindex + 1, bodyindex + 1) + `
        <script>${jsCode}</script>` + htmlCode.toString().slice(bodyindex)

        setCode(finalCode)
    }

    useEffect(() => {
        compile()
        // eslint-disable-next-line
    }, [])

    return (
        <CodeContext.Provider value={{ htmlCode, cssCode, jsCode, html, css, js, compile, code, initialTextCss, initialTextHtml, initialTextJs }}>
            {props.children}
        </CodeContext.Provider>
    )
}

export default CodeState;

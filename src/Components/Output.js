import React, { useContext } from 'react'
import codeContext from '../Context/codeContext'
import "../CSS/scrollbar.css"

export const Output = () => {
  const context = useContext(codeContext)
  const { code } = context

  return (
    <>
      <iframe srcDoc={code} sandbox='allow-scripts' title='output' frameBorder="0" style={{ minHeight: "100%", width: "100%" }}></iframe>
    </>
  )
}

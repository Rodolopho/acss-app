import React from 'react'
import './color.jsx.css'

export default function Color(props) {
    const copy = async (col) => {
    await navigator.clipboard.writeText(col);
  }
  return (
    <div className=" fs10px df cc  aic fdc jcc br8px  p10px md-m10px md-g8px" onClick={()=>copy(props.name)}  onDoubleClick={()=>copy(props.color)}>
            <div style={{background:props.color}} className="w72px h72px  br9px md-w100px md-h100px"></div>
            <span className="text-xs fw5" > {props.name}</span>
    </div>
  )
}

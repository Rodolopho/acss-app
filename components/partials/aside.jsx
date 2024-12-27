import React from 'react'
import './aside.jsx.css'


export default function Aside(props) {

  return (
    <div className='dif fdc  g8px '>
          {props.colorsCato.map((color,index)=>(
            <div  className={(color===props.selected) ? 'is-active c-gray500 cp' : 'c-gray500 cp'}
             key={index} onClick={()=>props.handleClick(color)} 
             class-is-active="_span-c-blue600 _span-bgc-blue50" 
             >
              <span class="dn cp c-gray500"></span>
              <span className='df ccc br6px g8px p-4px-8px tdn  --h-bgc-blue50 text-xs fw5'>{color}</span>
              </div>
          ))}
    </div>
  )
}

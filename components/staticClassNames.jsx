import { useEffect, useRef, useState } from 'react'
import './staticClassNames.jsx.css'
import { Search } from 'react-feather';
import { staticClassNames } from '../alias-css/lib/index'


export default function SearchStaticClassName(){
    const [classNames, setClassNames]=useState({});
   // const classNamesRef=useRef(null);
    // inputRef=useRef(null);
    // useEffect(()=>{
    //     console.log('running')
    //     document.addEventListener('click',(e)=>{
    //         if (classNamesRef.current && !classNamesRef.current.contains(e.target)) {
    //         //    inputRef.current.value='';
    //            setClassNames({})
    //         }
    //     })
 
    // },[])

    const handleChange=(e)=>{
        const value=e.target.value.trim();
        if(value.length < 2) {setClassNames({});return;};

        let newCollection={};
        for (const cn in staticClassNames) {
            if(cn.toLowerCase().startsWith(value.toLowerCase()) || staticClassNames[cn].toLowerCase().includes(value.toLowerCase())){
                newCollection[cn]=staticClassNames[cn];
            }
        }
        
        setClassNames(newCollection);

    }
    
        return (
        <div className='df pr g8px w100p fdc '  >
            <div class="df pr aic w100fr  g16px p8px12px bgc-gray100 br8px g8px b1px-s-gray300   ">
                <div class="df  aic w100p g12px text-lg oya">
                    <span class="df">
                        <Search className="w18px  h18px stroke-gray400 stroke-width2px stroke-linecap-round stroke-linejoin-round fill-none"/>
                    </span>


                    <input  onChange={handleChange} class="oln  bn -fv-bxsn c-gray bgc-transparent text-md w100p "  placeholder="Static classname" />
                </div>
            </div>
           
   
           { !! Object.keys(classNames).length &&  ( 
             <div 
            class=" zi12345 b1px-s-gray300 w100p p8px12px l0px t100p bgc-fff xh60vh  mw320px oya shadow-md mt2px br8px">
            <ul class="p0px m0px lsn  text-md _li-nc-2n-bgc-gray50">

                {Object.keys(classNames).map((key,i)=>(
                    <li class="df aic jcsb p8px12px  w100p" key={i}>
                        <div class="df  fdc w100p  ">
                            <div class="c-gray700 fwb text-sm" >{'.'+key}</div>
                            <div class="c-blue700 text-sm fw5 asfe ">{ '{ '+classNames[key]+ ' }'}</div>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
        )} 
        </div>
    )

}
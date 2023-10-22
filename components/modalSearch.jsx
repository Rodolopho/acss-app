import './modalSearch.jsx.css'
import { X, XCircle} from 'react-feather';
import { HelpCircle } from 'react-feather';
import SearchStaticClassNames from '../components/staticClassNames';
import { useEffect, useRef, useState } from 'react';
export default function ModalSearch(){
    const[show,setShow]=useState(false)
    const modalRef=useRef(null);
    // useEffect(()=>{
    //     document.addEventListener('click',(e)=>{
    //         if (modalRef.current && !modalRef.current.contains(e.target)) {
    //          //setShow(false)
    //         }
    //     })
 
    // },[])
    
    return ( <div className="p0px32px">
            <div onClick={()=>setShow(!show)} className='cursor-pointer'>
                <HelpCircle className='w18px  h18px stroke-blue500 stroke-width2px stroke-linecap-round stroke-linejoin-round fill-none'/>
            </div>
           
        {show && 
        <div className="bgc-red bgc-0000000000d6 w100vw h100vh zi99 pf  br8px df jcc  t0px l0px">

            <div ref={modalRef} class="m32px df bgc-gray100 shadow-xs hxc p32px pr pr62px br8px w80p">
                <SearchStaticClassNames/>
                <button onClick={()=>setShow(!show)} className='pa t16px r16px '><XCircle className='w18px  h18px stroke-error500 stroke-width2px stroke-linecap-round stroke-linejoin-round fill-none'/></button>
            </div>
            </div>}
        </div>
    )
}
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
    
    return ( <div className="p-0px-32px  ">
            <div onClick={()=>setShow(!show)} className='cursor-pointer'>
                <HelpCircle className='w18px  h18px stroke-blue500 stroke-width2px stroke-linecap-round stroke-linejoin-round fill-none'/>
            </div>
           
        {show && 
        <div className="bgc-red bgc-0000000000d6  w-100vw h100vh zi-99 pf  br-8px df jcc  t-0px l-0px">

            <div ref={modalRef} class="m-32px df --is(_html[class~=dark])&-border-1px-s-error500 --is(_html[class~=dark])&-filter-invert-100 bgc-gray100 shadow-xs hxc p-32px pr pr-62px br-8px w-80p">
                <SearchStaticClassNames/>
                <button onClick={()=>setShow(!show)} className='pa t-16px r-16px '><XCircle className='w-18px  h-18px stroke-error500 stroke-width2px stroke-linecap-round stroke-linejoin-round fill-none'/></button>
            </div>
            </div>}
        </div>
    )
}
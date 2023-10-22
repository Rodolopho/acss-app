import { useState } from 'react'
import './inputClassName.jsx.css'
import { Cpu } from 'react-feather';
export default function InputBox(props){
    const [term,setTerm]=useState('');
    const handleChange=(e)=>setTerm(e.target.value);

    return(
        <div>
            <form onSubmit={(e)=>props.handleSubmit(e,term)}>
                        <div class="d-f jc-sb g8px">
                            <div class="df aic w100p g8px p8px12px bgc-fff br8px b1px-s-gray300 shadow-xs">
                                <div class="df jcsb aic w100p g8px  ">
                                    <input onChange={handleChange} class="ol-n b-n -fo-oln -fo-bn -fv-bxsn -fv-bn w100p text-sm fw-4 c-gray500 bgc-fff" id="acss-input" autocomplete="off" spellcheck="false" placeholder="Type ACSS classname/s and get its compiled CSS defination e.g br5px" />
                                    <span class="df">
                                      
                                    </span>
                                </div>

                            </div>
                            <button class="button-sm text-sm   b1px-s-blue200 bgc-blue100 c-gray700 cp -h-bgc-blue300" id="acss-button" type="submit">
                                 <Cpu className='w18px  h18px stroke-gray700 stroke-width1px stroke-linecap-round stroke-linejoin-round fill-none'/> Compile
                            </button>
                        </div>
                    </form>
        </div>
    )
}
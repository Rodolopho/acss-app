
import {useState} from 'react'
import './codify.jsx.css'
import { Terminal } from 'react-feather';
export default function  Codify(props){
    const [show, setShow] = useState(false)
    return <div>
            <div class="df jcsb">
                <div>{props.code}</div>
                <button class="cp" onClick={()=>setShow(!show)}>
                    <Terminal class='w18px  h18px  stroke-gray700  color-red stroke-width1px stroke-linecap-round stroke-linejoin-round '/>
                </button>
            </div>
            {!!show && (
                <div>
                    {props.children}
                </div>
            )}          
        </div>
}



import { useState } from "react";

// just  create a simple extractorFunction with return the input
const x=(y:string)=>y;
export default function Button() {
    let [isActive,SetActive]=useState(false)
    return (
        <div>
            <button onClick={()=>SetActive(!isActive)} 
            className={
                isActive?
                x('bgc-primary100 border1-s-primary700 c-primary700')
                :
                x('bgc-gray200 c-gray700 b1px-s-gray700')
                }>Button</button>
        </div>
    );
}
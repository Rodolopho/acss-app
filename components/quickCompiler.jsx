import InputBox from './inputClassName.jsx'
import {main}  from '../node_modules/alias-css/lib/index.js'
import './quickCompiler.jsx.css'
import { HelpCircle } from 'react-feather';
import SearchStaticClassNames from '../components/staticClassNames';
import ModalSearch from './modalSearch.jsx';
import { useState } from 'react'


export default function QuickCompiler(){
    const[className,setClassName]=useState([]);
    const handleSubmit=(e,value)=>{
        e.preventDefault();
        if(value.trim()){
            setClassName([...value.split(/\s+/)]);
        }
        
    }
        return(
            <div class="df g16px fd-c">
                <InputBox handleSubmit={handleSubmit}/>

                <div className="df jcsb">
                    <div class="p4px10px4px4px br16px bgc-blue50 text-xs fw5 c-gray500 wxc aic g12px dif">
                        <span class="bgc-fff p2px10px br16px df aic g4px">Note</span>
                        <span class="df aic gap4px"> input classname/s seperated by space.</span>
                       
                    </div>

                   <ModalSearch />
                     
                </div>
                
                    <div id="acss-box" class="h-30rem b-1px-s-ccc oa br-5px p24px bl15px-s-blueLight600 df fdc   ff-courier text-sm o-a w100p">
                        {className.length?'':'[Here you can view Compiled ACSS className]'}
                        {className.map((value)=>{
                            if(value.trim())
                                return(
                                    <CSSStm statement={value}/>
                            )
                        })}
                    </div>
                <div>


                </div>
            </div>

        )
}

export function CSSStm(props){
    const stm=main.make(props.statement);
    
    if(stm){
        const split=stm.replace("{","----").replace(/}[\s]?$/,"----").split('----');
         return (
            <div className='df fdc c-green700 fw6 '>
                <span className="c-gray700">{split[0]+'{'}</span>
                <span className="c-blue700 fw5">&nbsp;&nbsp;&nbsp;&nbsp;{split[1]}</span>
                <span className="c-gray700">{'}'}</span>
                {/* <pre className=" -fln-c-primary700">
                    {//stm.replace("{","{\n\t").replace(/}[\s]?$/,"\n}")}
                </pre> */}
                
        
                {/* <br/>{props.selector}<span style="color:orange">{'{'}</span>
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:blue">{props.propertyAndValue}</span><br/><span style="color:orange">{'}'}</span><br/><br/> */}
            </div>
        )
    }
    return <em className="c-error400"><span className=" fwb c-error500">{props.statement}</span> : is Not  Valid AliasCSS class name<br/></em>
    
       
}
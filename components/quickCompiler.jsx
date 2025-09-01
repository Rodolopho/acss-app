import InputBox from './inputClassName.jsx';
import {main}  from '../node_modules/aliascss/lib/index.js';
import './quickCompiler.jsx.css';
// import { HelpCircle } from 'react-feather';
// import SearchStaticClassNames from '../components/staticClassNames';
import ModalSearch from './modalSearch.jsx';
import { useState,useEffect,useRef } from 'react'




export default function QuickCompiler(){
    const[className,setClassName]=useState([]);
    const compilerBox=useRef(null);
    useEffect(()=>{
            if(className.length)compilerBox.current.innerHTML=formatter(className,main);
    },[className]);

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
                    <div class="p4px-10px-4px-4px br16px bgc-blue50 --is(_html[class~=dark])&-bgc-gray700 --is(_html[class~=dark])&-c-blue100 text-xs fw5 c-gray500 wxc aic g12px dif">
                        <span class="bgc-fff p2px-10px br16px df aic g4px --is(_html[class~=dark])&-bgc-blue700 --is(_html[class~=dark])&-c-blue100">Note</span>
                        <span class="df aic gap4px"> input classname/s separated by space.</span>
                       
                    </div>

                   <ModalSearch />
                     
                </div>
                
                    <div 
                    id="acss-box" 
                    ref={compilerBox} 
                    class="h-30rem b-1px-s-ccc oa br-5px p24px bl15px-s-blueLight600  ff-courier text-sm o-a w100p"
                    
                    >
                        {className.length?
                        '':
                        '[Here you can view Compiled ACSS className]'
                        }
                        {/* {className.map((value)=>{
                            if(value.trim())
                                return(
                                    <CSSStm statement={value}/>
                            )
                        })} */}
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
                <span className="c-gray700 --is(_html[class~=dark])&-c-gray400">{split[0]+'{'}</span>
                <span className="c-blue700 fw5">&nbsp;&nbsp;&nbsp;&nbsp;{split[1]}</span>
                <span className="c-gray700 --is(_html[class~=dark])&-c-gray400">{'}'}</span>
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

function formatter( classes, acssCompiler) {

    let statement='';
  
      classes.forEach(function (eachClass) {
        var result = acssCompiler.make(eachClass);
        if (result) {
          var styledResult = result;
  
          styledResult = styledResult.replace(
            /{(.+)}/g,
            "<span style='color:orange'>{</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span  class='--is(_html[class~=dark])&-c-gray400 c-blue' xstyle='color:blue'>$1</span><br><span style='color:orange'>}</span><br>"
          );
  
          // statement+= '<span style="color:#f4433c" >.'+"</span><span style='color:olive'>"+"</span>"+ "<span style='color:blue'>{</span><br>"
          // +"&nbsp;&nbsp;&nbsp;&nbsp;"+styleresult + ";</sapn><br>" +"<span style='color:blue'>}</span><br>";
          statement += styledResult;
        } else {
          statement +=
            '<br><em><span class="c-warning"><i class="fas fa-warning"></i></span><span style="color:#f4433c" > ' +
            eachClass +
            "</span>" +
            " is Not a Valid ACSS Classname</em><br><br>";
        }
      });
  
      //box.innerHTML=statement;
      return statement;
  
    }
 
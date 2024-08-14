import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor,
   useActiveCode,
} from "@codesandbox/sandpack-react";
import './editor.jsx.css'
import CustomEditor from "./custom-editor";
import { useState } from "react";

export default function Editor({setConvert}){
  const[code,setCode]=useState('');
  return (
    <div className="h100vh _all-[class~=sp-editor]-height-50vh-i _all-[class~=sp-preview]-height-50vh-i zi-2000000 pf l0 t0 w100vw ">
        <button className="pa r32px t32px zi2 b1px-s-gray600 --hover-bgc-error200 br-8px p12px-14px" onClick={()=>setConvert(false)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 6.41L18.09 5L12.5 10.59L6.91 5L5.5 6.41L11.09 12L5.5 17.59L6.91 19L12.5 13.41L18.09 19L19.5 17.59L13.91 12L19.5 6.41Z" fill="#020202"/>
</svg></button>
     <SandpackProvider template="static" options={{
        externalResources: ["https://cdn.jsdelivr.net/npm/aliascss@latest/dist/aliascss.js"]
      }}> 
            <CustomEditor setCode={setCode}/>
    </SandpackProvider>

   <SandpackProvider template="static" options={{
        externalResources: ["https://cdn.jsdelivr.net/npm/aliascss@latest/dist/aliascss.js"]
      }}
     files={{'index.html':{code:code}}}>
    <SandpackLayout>
      <SandpackCodeEditor
        showLineNumbers={true}
        showInlineErrors
        wrapContent
        closableTabs
        

      >
      </SandpackCodeEditor>
      <SandpackPreview />
    </SandpackLayout>
  </SandpackProvider>
  
  </div>
  )  
 
}

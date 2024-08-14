import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor,
   useActiveCode,
} from "@codesandbox/sandpack-react";
import convert from '../utils/converts'
import { useSandpack } from "@codesandbox/sandpack-react";
 
// const SimpleCodeViewer = () => {
//   const { sandpack } = useSandpack();
//   const { files, activeFile } = sandpack;
//  console.log(files[activeFile])
//   const code = files[activeFile].code;
//   return <pre>{code}</pre>;
// };


export default function CustomEditor( {setCode}){
     
    const { sandpack } = useSandpack(); 

  const { files, activeFile } = sandpack;
  
    
  // console.log(sandpack)
  // updateCode(files[activeFile].code)

  
   setCode(convert(files[activeFile].code,{useAlias:true}));//+`\n\n\n\n\n\n\n\n\<script defer src="https://cdn.jsdelivr.net/npm/aliascss@latest/dist/aliascss.js"></script>`)
  // setCode(convert(files[activeFile].code,{useAlias:true})+`\n\n\n\n\n\n\n\n\<script defer src="https://cdn.jsdelivr.net/npm/aliascss@latest/dist/aliascss.js"></script>`)
  // setCode(convert(code.replace("</head>",`<script defer src="https://cdn.jsdelivr.net/npm/aliascss@latest/dist/aliascss.js"></script>
 //</head>`),{useAlias:true}))
   
  return (
    <SandpackLayout>
      <SandpackCodeEditor 
      
        showLineNumbers={true}
        showInlineErrors
        wrapContent
        closableTabs
        
      />
      <SandpackPreview />
    </SandpackLayout>
  )
}

import Input from './components/Input'
export default function Home() {
  const sideBarItems=[
    {'Typography':
      ['h1','h2','h3','h4']
    },
  ]
  return (
    <main className="">
      <div>
        <ul>
          {sideBarItems.map((item:{[key:string]:string[]},i:number)=>
            <li key={i}>
            <p>{Object.keys(item)[0]}</p>
             <ul>
              {item[Object.keys(item)[0]].map((list:string,i:number)=><li key={i}>{list}</li>)}
              
            </ul>
          </li>
          )}
          
        </ul>
       

      </div>
      <h1>FromUI</h1>
      <Input/>
    </main>
  )
}

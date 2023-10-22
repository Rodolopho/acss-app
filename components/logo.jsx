import Image from 'next/image'
import './logo.jsx.css'
import SearchStaticClassNames from '../components/staticClassNames';
export default function Logo(){
return <div className="df aic g8px">
            <Image src='/logo.svg' alt="AliasCSS Logo" width={100} height={100} />
            {/* <SearchStaticClassNames/> */}
        </div>
}
 const config={
    //input:['pages/**/*.mdx','components/**/*.(jsx|mdx)','src/app/**/*.(jsx|mdx)'],
    input:['src/app/**/*.(tsx|jsx|mdx)'],
    output:{
        '--file':true,
        //location:'public/main.css'
        location:'src/css/main.css'

    }
}

export default config;
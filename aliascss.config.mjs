 const config={
    //input:['pages/**/*.mdx','components/**/*.(jsx|mdx)','src/app/**/*.(jsx|mdx)'],
    input:['pages/beta-ui/**/*.(tsx|jsx|mdx)','pages/docs/keyframes-guide.mdx'],
    output:{
        '--file':true,
        //location:'public/main.css'
        location:'src/css/main.css'

    }
}

export default config;
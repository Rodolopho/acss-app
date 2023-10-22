 import Logo from 'components/logo'
 
 const theme={
    logo:<Logo/>,
    project:{
        link:'https://github.com/Rodolopho/alias-css'
    },
    docsRepositoryBase: 'https://github.com/Rodolopho/alias-css',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="AliasCSS" />
      <link rel="icon" type="image/svg" href="logo-acss-icon.svg" sizes="32x32" />
      <meta property="og:description" content="Official AliasCSS Site" />
    </>
  ),
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' Bikram Thapa '}
        <a href="https://aliascss.com" target="_blank">
          AliasCSS
        </a>
        <br/>
       <a href="mailto:var.bikram@gmail.com.com">var.bikram@gmail.com</a>
      </span>
    )
  }
}
export default theme;
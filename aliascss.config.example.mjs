export let config= {
    // input glob pattern or array of glob pattern
    input:'public/*.html',

    // Output css file , file must exist or should be created manully if file doesnot exist
    output:{
        // path to main/master css file which include every compiled css declaration for given input
        location:'./public/css/acss.css',
        "--file":true// output css file for each file
    },

    media:{
        prefix:{
            xs:'@media (max-width : 600px)'
        }
    },
    // name of extractorFunction
    extractorFunction:"x",
        

    //Truncate the css file , you should let it true unless you know what your are doing
    truncate:true,
    	
     //ADD Custom color Value
	custom:{
		color:{
            //custom name for color value  must not have  "-" or "_" to work perfectly.
			'main':"rgb(12,23,45)",// now you can use bgc-main
			'theme':'#c6c6c6'

		}

	},
    // Create your own compiler 
     extend:{
        'font-size':{
            alias:'fs',
            values:["2rem:xl"],
            compiler:(value)=>{
                return value;
            }
        },
        // Now you can use shadow as className property e.g shadow-xs 
        'shadow':{
            property:'box-shadow',
            compiler:(value)=>{
                value=value.slice(1);
                const values={
                    '3xl': ' 0px 32px 64px -12px var(--shadow-color)',
                    'xxxl': ' 0px 32px 64px -12px var(--shadow-color)',
                    '2xl': ' 0px 24px 48px -12px var(--shadow-color)',
                    'xxl': ' 0px 24px 48px -12px var(--shadow-color)',
                    'xl': ' 0px 20px 24px -4px var(--shadow-color)',
                    'lg': ' 0px 12px 16px -4px var(--shadow-color)',
                    'md': ' 0px 4px 8px -2px var(--shadow-color)',
                    'sm': ' 0px 1px 3px var(--shadow-color)',
                    'xs': ' 0px 1px 2px var(--shadow-color)',
                };
                if(values.hasOwnProperty(value)) return values[value];
            }
         
        }
    },
    // predefine className 
	prebuild:{

        'text-xl': 'font-size:20px;line-height:30px',
        'text-lg': 'font-size:18px;line-height:28px',
        'text-md': 'font-size:16px;line-height:24px',
        'text-sm': 'font-size:14px;line-height:20px',
        'text-xs': 'font-size:12px;line-height:18px',

        'radius-xs':'border-radius:4px',

        'flex-center':'display:flex;align-items:center;justify-content:center',
    },
    //Add some css statement in every compiled css file
	statement:`
        :root{
            --bg-dark-color:rgba(111,111,111,1) ;
            --bg-light-color:rgba(21,21,21,1) ;
            --outline-color:blue;
    
        }

        body{
            font-family:BlinkMacSystemFont , -apple-system , "Segoe UI" , Roboto , Oxygen , Ubuntu , Cantarell , "Fira Sans" , "Droid Sans" , "Helvetica Neue" , Helvetica , Arial , sans-serif , "Apple Color Emoji" , "Segoe UI Emoji" , "Segoe UI Symbol" , "Noto Color Emoji";
        }

	`,

	// pre group valid Aliascss classNames in single className
	group:{
		'container':' df fdc bsbb aic flex-shrink-1 flex-grow-1 ',
		'section':'flex-shrink0 bsbb'
	},
    // if some of the className collide with other CSS framework like bootstrap and tailwindcss
    // You wanna  tell aliascss to ignore it...
	ignore:['fs12px', 'c-red'],// these classnames will be ignored
}
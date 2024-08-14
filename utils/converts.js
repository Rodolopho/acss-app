import cssProps from "../node_modules/aliascss/lib/css-properties-all";
export default function styleToAliascss(data, options) {
    const JSX = (options === null || options === void 0 ? void 0 : options.JSX) ? true : false;
    const useAlias = (options === null || options === void 0 ? void 0 : options.useAlias) ? true : false;
    const matchJSXStyle = /(?<=[\s])style=[\{][\{]([^}]*)[\}][\}]/;
    const matchSingleQuotes = /(?<=[\s])style=[']([^']*)[']/;
    const matchDoubleQuotes = /(?<=[\s])style=["]([^"]+)["]/;
    if (JSX) {
        return data.replace(new RegExp(matchJSXStyle, 'g'), (m, s) => processJSX(m, s,useAlias));
    }
    return data.replace(new RegExp(matchSingleQuotes, 'g'), (m, s,) => process(m, s, true,useAlias))
        .replace(new RegExp(matchDoubleQuotes, 'g'), (m, s) => process(m, s, false,useAlias));
}
export function process(match, styleValue, isSingleQuote,useAlias) {
    let contentForStyle = '';
    let contentForClass = '';
    // console.log(styleValue,"3",match);
    styleValue.split(';').forEach((each) => {
        
        const split = each.split(':');
        if (split && split.length === 2) {
            let [property, value] = split;
            let reverseValue=null;
            if (cssProps.hasOwnProperty(property.trim())) {
                 console.log(property)
                 if(reverseCompiler.hasOwnProperty(property.trim())){
                    console.log(property,'rr')
                    reverseValue=reverseCompiler[property.trim()](value);
                 }

                if(useAlias && cssProps[property.trim()].hasOwnProperty('alias')){
                    property=cssProps[property.trim()]['alias'];
                }

                if(reverseValue){
                    
                    contentForClass += `${property.trim()}-${reverseValue} `;
                    return
                }  
               
                contentForClass += `${property.trim()}-${value.trim().replace(/\)[,\s]+\(/,'__').replace(/#/g, '').replace(/\(([^\(]+)\)/g, (m,s)=>'-'+s.replace(/[\s]*,[\s]*/g,'-'))
                .replace(/\s/g, '-').replace(/^var---/g,'-').replace(/-var-/g,'').replace(/(\d)\.(\d)/g,'$1d$2').replace(/%/g,'p')} `;
                return;
            }
        }
        contentForStyle += each + "; ";
    });
    if (isSingleQuote) {
        return `class="${contentForClass.trim()}" style='${contentForStyle.replace(/;[\s]*$/,'')}'`;
    }
    return `class="${contentForClass.trim()}" style="${contentForStyle.replace(/;[\s]*$/,'')}"`;
}
export function processJSX(match, styleValue,useAlias) {
    let contentForStyle = '';
    let contentForClass = '';
    styleValue.replace(/[,]([\s]*[a-zA-z]+\:)/g, "###$1").split("###").forEach((each) => {
        const split = each.split(':');
        if (split && split.length === 2) {
            const [property, value] = split;
            let formatProperty = property.replace(/([a-z])([A-Z])/g, (m, a, b) => a + '-' + b.toLowerCase());
            if (cssProps.hasOwnProperty(formatProperty.trim())) {
                if(useAlias && cssProps[formatProperty.trim()].hasOwnProperty('alias')){
                    formatProperty=cssProps[formatProperty.trim()]['alias'];
                }
                contentForClass += `${formatProperty.trim()}-${value.trim().replace(/['"]/g, '').replace(/#/g, '').replace(/\((.+)\)/g, (m,s)=>'-'+s.replace(/[\s]*,[\s]*/g,'-'))
                 .replace(/\s/g, '-').replace(/^var---/g,'-').replace(/-var-/g,'')} `;
                return;
            }
        }
        contentForStyle += each + ", ";
    });
    return `className="${contentForClass.trim()}" style={{${contentForStyle.replace(/,\s*$/,'')}}}`;
}

const reverseCompiler={
    'font-family':(value)=>value.replace(/(\w+)[\s]+(\w+)/g,"$1_$2").replace(/^\s+/,''),
}
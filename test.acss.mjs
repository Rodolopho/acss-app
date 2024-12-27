import {styleJSX} from 'alias-css';
import { getCompiler } from 'aliascss';
import fs from "fs"


console.log(styleJSX("bgc-red df m12"));
console.log(getCompiler('color').compiler('-000000000',{}));
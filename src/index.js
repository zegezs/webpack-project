// import './style.scss'
import vue from 'vue'
import { log }  from './foo.js'
import { log as log1 } from './inter/inter.js'
import image from './girl.jpg'
import image3 from './test.gif'
import txt from './file.txt'
import './index.css';
// import { isPlainObject } from 'lodash'
import  isPlainObject  from 'lodash/isPlainObject'
log1(image, isPlainObject)
import('vue')

const css =  require('./index.css')
console.log('css', css);
// raw-loader test
var title = document.createTextNode(txt)
title.class = 'title'
document.body.appendChild(title)


// let div = document.createElement("div");
// div.className = "title";
// div.innerText = "hello div";
// document.getElementsByTagName("body")[0].appendChild(div);

// import('vue-router')
// var im = document.getElementsByClassName('image')
// var img1 = document.createElement("img");
// var img2 = document.createElement("img");
// var imaged = require("./girl.jpg");
// var test = require("./static/test2.png");
// img1.src = `${imaged.default}`
// img2.src = `${test.default}`
// console.log('im', imaged.default);
// document.body.appendChild(img1);
// document.body.appendChild(img2);
// if (module.hot) {
//      module.hot.accept('./foo.js', function() {
//         console.log('Accepting the updated printMe module!');
//         // printMe();
//       })
//     }


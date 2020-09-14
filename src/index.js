import './style.scss'
import { foo, log }  from './foo.js'
import { log as log1 } from './inter/inter.js'
import image from './girl.jpg'
import image3 from './test.gif'
log(foo)
log1('132231231232132')
// var im = document.getElementsByClassName('image')
var img1 = document.createElement("img");
var img2 = document.createElement("img");
var imaged = require("./girl.jpg");
var test = require("./test.gif");
img1.src = `${imaged.default}`
img2.src = `${test.default}`
console.log('im', imaged.default);
document.body.appendChild(img1);
document.body.appendChild(img2);
if (module.hot) {
     module.hot.accept('./foo.js', function() {
        console.log('Accepting the updated printMe module!');
        // printMe();
      })
    }


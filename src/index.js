import _ from 'lodash';
import printMe from './print.js';
// import './style.css';
// import Icon from './debug-blue.png';
// import Data from './data.xml';

function component() {
    var element = document.createElement('div');  
    var btn = document.createElement('button');

    btn.innerHTML = 'Click me and check the console! ss';
    btn.onclick = printMe;
    element.appendChild(btn);
    // Lodash, currently included via a script, is required for this line to work
    //element.innerHTML = _.join(['你好', 'webpack'], ' ');
    // element.classList.add('hello' );
    // var myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);

    // element.onclick=function(){
    // 	element.innerHTML+=" oops ,you clicked me ! ";
    // };
    // element.onmouseover=function(){
    // 	element.title='click me and see what happend!';
    // }
    // console.log(Data);
    return element;
}

document.body.appendChild(component());
if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
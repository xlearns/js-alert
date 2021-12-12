
import {$} from './utils.js'
function parent(){
    let div = document.createElement("div")
    div.className = 'myAlert'
    div.style.cssText = `position: fixed;
	width: 100%;
	top: 16px;
	left: 0;
	text-align: center;
	pointer-events: none;`
    $('body').appendChild(div)
    return true
}
function add(content){
    let div = document.createElement("div")
    let child = document.createElement("div")
    child.className = 'content'
    child.innerHTML = content
    child.style.cssText = `display: inline-block;
	padding: 8px 16px;
	background: #fff;
	border-radius: 3px;
	box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
	margin-bottom: 8px;`
    div.appendChild(child)
    $('body .myAlert').appendChild(div)
    return div
}
function remove(name){
    $('body .myAlert').removeChild(name) 
}
let instance = null
function alert(options){
    let duration = options&&options.duration?options.duration:1.5;
    let content = options&&options.content?options.content:'';
    if(!instance){
        instance = parent()
    }
    let name = add(content);
    setTimeout(() => {
        remove(name);
    }, duration * 1000);
}

export default alert

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
function add(content,type){
    let div = document.createElement("div")
    let child = document.createElement("div")
    child.className = 'content'
    child.innerHTML = content
    let style = `display: inline-block;
	padding: 8px 16px;
	background: #fff;
	border-radius: 3px;
	box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
	margin-bottom: 8px;`
    if(type=='success'){
        style=`display: inline-block;
        padding: 8px 16px;
        background: #14cd4d;
        border-radius: 3px;
        color:#fff;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
        margin-bottom: 8px;`
    }else if(type=='error'){
        style=`display: inline-block;
        padding: 8px 16px;
        background: #f13434;
        border-radius: 3px;
        color:#fff;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
        margin-bottom: 8px;`
    }

    child.style.cssText = style
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
    let type = options&&options.type?options.type:'';
    if(!instance){
        instance = parent()
    }
    let name = add(content,type);
    setTimeout(() => {
        remove(name);
    }, duration * 1000);
}

export default alert
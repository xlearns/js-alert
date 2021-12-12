import myAlert from './alert.js'
import {$$} from './utils.js'
function click(e,type){
    myAlert({
        content:"hello",
        type:type,
        duration:3
    })
}
$$('button').forEach(btn=>{
    let name = btn.className
    btn.addEventListener('click',(e)=>{click(e,name)})
})
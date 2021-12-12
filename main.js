import myAlert from './alert.js'
import {$} from './utils.js'
function click(){
    myAlert({
        content:"hello",
        type:'success',
        // duration:3
    })
}
$('button').addEventListener('click',click)
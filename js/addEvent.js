/**
 * Created by liuxiaoyu on 2015/7/21 0021.
 */
function addEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onunload = funtion(){
            oldonload();
            func();
        }
    }
}
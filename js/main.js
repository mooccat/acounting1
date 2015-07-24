/**
 * Created by liuxiaoyu on 2015/7/18 0018.
 */



function display(element,value){
        element.style.display = value;
}

function addClass(element,value){
        if(!element.className){
                element.className = value;
        }else{
                newClassName = element.className;
                newClassName += " ";
                newClassName += value;
                element.className = newClassName;
        }
}

function addTap(element){
        var startTx, startTy;
        element.addEventListener('touchstart', function (e) {
                var touches = e.touches[0];
                startTx = touches.clientX;
                startTy = touches.clientY;
        }, false);
        element.addEventListener('touchend', function (e) {
                var touches = e.changedTouches[0];
                endTx = touches.clientX;
                endTy = touches.clientY;
                // 在部分设备上 touch 事件比较灵敏，导致按下和松开手指时的事件坐标会出现一点点变化
                if (Math.abs(startTx - endTx) < 6 && Math.abs(startTy - endTy) < 6) {
                        //c = page1.className;
                        //if(c != null && c.indexOf('out')>-1){
                        //        page1.className = c.replace('out','in ');
                        //}else{
                        //        page1.className "in";
                        //}
                        page1.className = "in";
                }
        }, false);
}

function reTap(element){
        var startTx, startTy;
        element.addEventListener('touchstart', function (e) {
                var touches = e.touches[0];
                startTx = touches.clientX;
                startTy = touches.clientY;
        }, false);
        element.addEventListener('touchend', function (e) {
                var touches = e.changedTouches[0];
                endTx = touches.clientX;
                endTy = touches.clientY;
                // 在部分设备上 touch 事件比较灵敏，导致按下和松开手指时的事件坐标会出现一点点变化
                if (Math.abs(startTx - endTx) < 6 && Math.abs(startTy - endTy) < 6) {
                        //c = page1.className;
                        //if(c != null && c.indexOf('out')>-1){
                        //        page1.className = c.replace('out','in ');
                        //}else{
                        //        page1.className "in";
                        //}
                        page1.className = "out";
                }
        }, false);
}
//记账薄
function income(time,count){
        this.time=time;
        this.count=count;

        this.changeCount = changeCount;
        function changeCount(changecount){
                this.count = changecount;
        }
}
function pay(kind,time,count){
        this.kind=kind;
        this.time=time;
        this.count=count;

        this.changeKind = changeKind;
        function changeKind(changekind){
                this.kind = changekind;
        }

        this.changeCount = changeCount;
        function changeCount(changecount){
                this.count = changecount;
        }
}
var inc = new Array();
var outc = new Array();
function addIn(time,count){
        var i = new income(time,count);
        inc.push(i);
        var str = JSON.stringify(inc);
        localStorage.inc = str;
}
function addOut(kind,time,count){
        var i = new pay(kind,time,count);
        outc.push(i);
        var str = JSON.stringify(outc);
        localStorage.outc = str;
}


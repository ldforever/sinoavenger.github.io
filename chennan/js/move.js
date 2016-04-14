function move(obj,attr,speed,target){
        //参数：要运动的元素，要运动的属性，速度，目标点，运动结束的回调。
        var n=parseFloat(getstyle(obj,attr));

        clearInterval(obj.timer);
        if(n<target){//计算要走的是正数还是负数。
            speed=Math.abs(speed);
        }else{
            speed=-Math.abs(speed);
        }
        //console.log(n,target);
        obj.timer=setInterval(function(){
            n+=speed;
              // -  400
//            - +
//             -400 -400
            //走负数的时候比的是谁小，走正数的时候比的是谁大。
            if((speed<0&&n<target)||(speed>0&&n>target)){
                //条件成立的时候清除定时器。
                n=target;
                clearInterval(obj.timer);
                //如果有endFn就调用
//              endFn&&endFn();
            }

            obj.style[attr]=n+'px';
        },30)
    }


    function getstyle(obj,attr){
       return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
    }
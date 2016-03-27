/**
 * Created by dandan on 2015/11/16.
 */
window.onload=function()
{
    var oList=document.getElementById("list");
    var aLi=oList.children;
    var iZ=document.documentElement.clientWidth/2;
    var iNow=0;
    var aBtns=document.getElementById("btns").children;
    oList.style.WebkitTransformOrigin="center center "+iZ+"px";
    window.onresize=function()
    {
        iZ=document.documentElement.clientWidth/2;
        oList.style.WebkitTransformOrigin="center center "+iZ+"px";
    }
    for(var i=0;i<aBtns.length;i++)
    {
        aBtns[i].index=i;
        aBtns[i].onclick=function()
        {
            if(iNow==this.index)
            {
                return;
            }
            aBtns[iNow].className="";
            tab(iNow,this.index);
            iNow=this.index;
            aBtns[iNow].className="active";

        };
    }
    function tab(iOld,iNow)
    {
        oList.style.transition=".5s";
        oList.addEventListener("webkitTransitionEnd",end,false);
        if(iOld>iNow)
        {
            aLi[iNow].className="prev";
            oList.style.WebkitTransform="rotateY(-90deg)";
        }
        else
        {
            aLi[iNow].className="next";
            oList.style.WebkitTransform="rotateY(90deg)";
        }
        function end()
        {
            aLi[iOld].className="";
            oList.style.transition="none";
            aLi[iNow].className="active";
            oList.style.WebkitTransform="rotateY(0deg)";
        }
    }



    /*360*/

    var oBtn=document.getElementById("home");
    var aMenus=document.getElementById("menu_list").getElementsByTagName("img");
    var oTitl=document.getElementById('titl');
    var oText=document.getElementById('text');
    var contextList=document.getElementById('context_list');
    var aContextList=contextList.getElementsByTagName('li');
    oBtn.off=true;
    setCss(oBtn,{$Transition:"0.5s ease all"});
    for(var i=0;i<aMenus.length;i++)
    {
        aMenus[i].deg=90/(aMenus.length-1)*i;
        aMenus[i].index=i;
        aMenus[i].onclick=function()
        {
            oTitl.innerHTML='';
            oText.innerHTML='';
            var obj=this;
            setCss(obj,{$Transition:"0.5s ease all",$Transform:"scale(2) rotate(-360deg)",opacity:0.1});
            setTimeout(function()
            {
                setCss(obj,{$Transition:"0.1s ease all",$Transform:"rotate(-360deg)",opacity:1});
            },300);
            oTitl.innerHTML=this.getAttribute('alt');
            oText.innerHTML=aContextList[this.index].innerHTML;
        };
    }
    oBtn.onclick=function()
    {console.log(aMenus.length)
        if(this.off)
        {
            setCss(this,{$Transform:"rotate(-360deg)"});
        }
        else
        {
            setCss(this,{$Transform:"rotate(0deg)"});
        }
        for(var i=0;i<aMenus.length;i++)
        {
            if(this.off)
                toMove(aMenus[i],i*50,this.off);
            else
                toMove(aMenus[i],(aMenus.length-1-i)*50,this.off);
        }
        this.off=!this.off;
    };
function toMove(obj,delay,bType)
{
    if(obj.timer)
    {
        clearTimeout(obj.timer);
    }
    obj.timer=setTimeout(function()
    {
        if(bType)
        {
            var oXY=getXY(obj.deg,150);
            setCss(obj,{
                $Transition:"0.3s all ease-in",
                left:-Math.round(oXY.x*1.1)+"px",
                top:-Math.round(oXY.y*1.1)+"px",
                $Transform:"rotate(-360deg)"
            });
            obj.timer=setTimeout(function()
            {
                setCss(obj,{
                    $Transition:"0.1s all ease-in-out",
                    left:-Math.round(oXY.x*0.9)+"px",
                    top:-Math.round(oXY.y*0.9)+"px"
                });
                obj.timer=setTimeout(function()
                {
                    setCss(obj,{
                        $Transition:"0.05s all ease",
                        left:-Math.round(oXY.x)+"px",
                        top:-Math.round(oXY.y)+"px"
                    });
                },105);
            },305);
        }
        else
        {
            setCss(obj,{
                MozTransition:"0.4s -moz-transform linear,0.3s 0.35s left ease,0.3s 0.35s top ease",
                OTransition:"0.3s 0.35s left ease,0.3s 0.35s top ease,0.4s -o-transform linear",
                WebkitTransition:"0.3s 0.35s left ease,0.3s 0.35s top ease,0.4s -webkit-transform linear",
                left:"0px",
                top:"0px",
                $Transform:"rotate(0deg)"
            });
        }
    },delay);
}
/*设置元素属性值*/
function setCss(obj,oAttr)
{
    var sName="";
    var aName=["Webkit","Moz","O"];
    for(sName in oAttr)
    {
        if(sName.charAt(0)==="$")
        {
            for(var i=0;i<aName.length;i++)
            {
                obj.style[aName[i]+sName.substring(1)]=oAttr[sName];
            }
            obj.style[sName.substring(1)]=oAttr[sName];
        }
        else
        {
            obj.style[sName]=oAttr[sName];
        }
    }
}
    /*=获取元素的半径*/
function getXY(iDeg,iRadius)
{
    if(iDeg==0)
    {
        return {x:0,y:iRadius};
    }
    else if(iDeg==90)
    {
        return {x:iRadius,y:0};
    }
    return {x:Math.sin(iDeg*Math.PI/180)*iRadius,y:Math.cos(iDeg*Math.PI/180)*iRadius};
};


    /*作品展示*/
    var worksList=document.getElementById("works_list");
    var aDiv=worksList.getElementsByTagName("div");
    var aBtn=document.getElementsByTagName("input");
    var oTimer=null;
    aBtn[1].onclick=function()
    {
        var i=aDiv.length-1;
        clearInterval(oTimer);
        oTimer=setInterval(function(){
            aDiv[i].className="";
            i--;
            if(i<0)
            {
                clearInterval(oTimer);
            }
        },50);
    };
    aBtn[0].onclick=function()
    {
        var i=0;
        clearInterval(oTimer);
        oTimer=setInterval(function(){
            aDiv[i].className="open";
            i++;
            if(i==aDiv.length)
            {
                clearInterval(oTimer);
            }
        },100);
    };



};
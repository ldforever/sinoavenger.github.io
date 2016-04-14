

window.onload=function (){
	
	
	
	
	//联系页面擦擦擦
	var len=100,
			str='',
			i;
	var Caca = document.getElementById('caca');
	var	Em = Caca.getElementsByTagName('em');		
		for(i=0;i<len;i++){
			str+='<em style="background-position:'+-(i%10)*52+'px '+-Math.floor(i/10)*52+'px;left:'+(i%10)*52+'px;top:'+Math.floor(i/10)*52+'px"></em>';
		}
		Caca.innerHTML=str;
		for (i=0;i<len;i++) {
			Em[i].onmouseover=function(){
			this.className='bjj';
			}
		}
			
	/*javascript页面*/
	
	var oLeft=document.getElementById('cont_left');
	var oRight=document.getElementById('cont_right');
	var Img=document.getElementById('cont_left').getElementsByTagName('img')[0];
	var aImg=['img/arrow_right.jpg','img/arrow_left.jpg'];
	var timer=null;
	Img.onmouseover=function(ev){
		var Ev=ev||event;
		Ev.cancelBubble=true;
		this.src=aImg[1];
		move(oRight,'left',10,350);
		move(oLeft,'left',10,-110);
		
	}
	Img.onmouseout=function(ev){
		timer=setTimeout(function(){
			this.src=aImg[0];
			move(oRight,'left',10,210);
			move(oLeft,'left',10,0);
		},500)	
	}
	
	var Mov_left=document.getElementById('mov_left');
	var Detail=document.getElementById('detail_cont');
	Mov_left.onmouseover=function(){
		clearTimeout(timer);
	}
	Mov_left.onmouseout=function(){
		//查看中间详情页是否显示，没有的话就延时收缩
		if(Detail.style.display=='none'){
			timer=setTimeout(function(){
				Img.src=aImg[0];
				move(oRight,'left',10,210);
				move(oLeft,'left',10,0);
			},50)	
		}else{
			clearTimeout(timer);
		}
	}
	
	
	

	
	//第四页碰撞检测
   var File=document.getElementById('file');
   var oBox=document.getElementById('box');
   var Lis=File.getElementsByTagName('li');
   var Content_5=document.getElementById('content_5');
    for(var i=0;i<Lis.length;i++){
    	Lis[i].onmousedown=function(e){
            e=e||event;
             //阻止冒泡,与父级document.onmousedown冲突
            e.cancelBubble=true;
        }
    	Lis[i].index=i;
    	 //点击文件夹的时候
    	Lis[i].onclick=function(){
    		if(this.className==='bg'){
    			this.className='';
    		}else{
    			this.className='bg';
    		}
    		
    	}
    }
    Content_5.onmousedown=function(ev){
    	ev=ev||event;
    	var disx= ev.clientX;
        var disy= ev.clientY;
        oBox.style.display='block';
        oBox.style.left=disx+'px';
        oBox.style.top=disy+'px';
    	document.onmousemove=function(e){
    		e=e||event;
    		var x= e.clientX-disx;
        	var y= e.clientY-disy;
//向左边拖动的时候，x和y值都小于零，故应该改变oBox的位置
        	if(x<0){
        		oBox.style.left=e.clientX+'px';
        	}
        	if(y<0){
        		oBox.style.top=e.clientY+'px';
        	}
        	oBox.style.width= Math.abs(x)+'px';
            oBox.style.height= Math.abs(y)+'px';
//                  console.log(Math.abs(x),Math.abs(y))
			for(var i=0;i<Lis.length;i++){
//						console.log(fn(oBox,Lis[i]));
				if(!fn(oBox,Lis[i])){
					Lis[i].className='bg';
				}else{
					Lis[i].className='';
				}
			}
    	}
    }
    document.onmouseup=function(){
    	document.onmousemove=null;
    	//下次再次点击的时候清除上次生成的oBox的宽高。
    	oBox.style.width= '';
    	oBox.style.height= '';
    	oBox.style.display='none';
    }
   
    //检测碰撞的函数封装，碰到就返回false，否则true(注意：obj1是移动的那个)
    function fn(obj1,obj2){
		var t1=obj1.offsetTop+obj1.offsetHeight;
		var r1=obj1.offsetLeft;
		var b1=obj1.offsetTop;
		var l1=obj1.offsetLeft+obj1.offsetWidth;

		var t2=obj2.offsetTop;
		var r2=obj2.offsetLeft+obj2.offsetWidth;
		var b2=obj2.offsetTop+obj2.offsetHeight;
		var l2=obj2.offsetLeft;
		if(t1<t2||r1>r2||b1>b2||l1<l2){
			return true;
		}else{
			return false;
		}
	}
   
    
}
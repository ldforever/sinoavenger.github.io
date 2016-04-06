 
 $(document).ready(function(){
 	/*首页*/
 	
 	//轮播图
 	var imgs=['img/s_banner1.jpg','img/s_banner2.jpg','img/s_banner3.jpg','img/s_banner4.jpg','img/s_banner5.jpg'];
 	var timer3=null;
 	var s=0;
 	$('#btn li').mouseover(function(){
 		s=$(this).index();
 		$('#btn li').removeClass('change').eq($(this).index()).addClass('change');
 		$('#lunbo img').attr('src',imgs[$(this).index()]);		
 	})
 	
 	timer3=setInterval(function(){
 		s++;
 		s%=imgs.length;
 		$('#lunbo img').attr('src',imgs[s]);
 		$('#btn li').removeClass('change').eq(s).addClass('change');
 	},2000);
 	
 	
 	
 	
 	
 	
 	//按钮运动
 	var Ico=['img/Arrow.png','img/Arrow_vert.png'];
 	$('#context_box>img').hover(function(){
 		$(this).attr('src',Ico[1]);
 	},function(){
 		$(this).attr('src',Ico[0]);
 	});
 	
 	var Onoff=true;
 	$('#context_box>img').click(function(){
 		if(Onoff){
 			$('#context_box').css('right',0);
 			Onoff=false;
 		}else{
 			$('#context_box').css('right',-350);
 			Onoff=true;
 		}
 		
 	})
 	
 	
 	
 	//选项卡
 	$('#bjList li').click(function(){
	 	$('#bjList li').removeClass('active').filter(this).addClass('active');
	 	$('#content>div').removeClass('show').eq($(this).index()).addClass('show');
	 });
	 
	 //轮播图
	var timer1=null;
	var num=0;
	var imgs=['img/s_banner1.jpg','img/s_banner2.jpg','img/s_banner3.jpg','img/s_banner4.jpg','img/s_banner5.jpg'];
	fn();	
	$('#list_nav li').mouseover(function(){
		var n=$(this).index();
	  	clearInterval(timer);
		$('#hover').css('top',n*60);
		$('#imges').attr('src',imgs[n]);
	})
	$('#list_nav li').mouseout(function(){
		fn();
	})
	function fn(){
 		timer=setInterval(function(){
		  num++;		 
		  num%=imgs.length;
		  $('#imges').attr('src',imgs[num]);
		  $('#hover').css('top',num*60);
		},2000);
 	}


	
	
	/*javascript页面*/
	//点击中间列表的时候		
	$('#mov_left li').hover(function(){		
		$(this).css('background-color','#493E2F')
	},function(){
		$('#mov_left li').css('background-color','')
	})	
	
	$('#mov_left li').click(function(){	
		$('#detail_cont').css('display','block');
		$('#detail_cont>div').removeClass('show').eq($(this).index()).addClass('show');
	})
	//控制中间详情页的右上开关
	$('#detail_cont>img').click(function(){
		$('#detail_cont').css('display','none');
	})
	

	//图片翻转
	
	$(function(){
		//每个li鼠标移入的时候触发的函数    jq里面hover() 内有两个参数  分别为鼠标移入要触发的函数和鼠标移除要触发的函数
		$('#list li').hover(function(){ //这个function为鼠标移入触发的函数
			       //当鼠标移入时 先从移入的li下获取到两个img
			var $imgs=$(this).find('img')
			//img下标为零的 开始运动            left值与width同时在100毫秒内运动到指定值
			$imgs.eq(0).stop().animate({left:'177px',width:'0px'},100,function(){//运动结束的回调函数
						//当img下标为0的运动结束的一瞬间img下标为1的开始运动慢慢的显示出来
						$imgs.eq(1).animate({left:'0px',width:'355px'},100)
					})
			},
			// 当鼠标移除的时候触发的函数  与上面同理
			function(){
				var $imgs=$(this).find('img')
				$imgs.eq(1).stop().animate({left:'177px',width:'0px'},100,function(){
						$imgs.eq(0).animate({left:'0px',width:'355px'},100)
					})
			}
		);
	});	
		
	
	
	
	
	
 })
 
















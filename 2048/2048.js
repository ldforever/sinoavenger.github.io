window.onload=function(){
		var span=document.getElementsByTagName('span')[0];
		var box = document.getElementById('box');
		var change=null;
		var divs=box.getElementsByTagName('div')
		var arr3=[];
		var gridArr = [
						[0,0,0,0],           
						[0,0,0,0],
						[0,0,0,0],
						[0,0,0,0]
					  ];
		
		//初始化
		
		init();
		setposition();
		paint();
		function init(){
			var num=0;
			for (var i=0;i<gridArr.length;i++) {
				for(var j=0;j<gridArr[i].length;j++){
					var div=document.createElement('div');
					div.setAttribute('index',num)
					div.className='grid'
					box.appendChild(div);
					num++;
				}
			}
			randomgrid();
			randomgrid();
			paint();
		}
		//设置生成divs的定位
		function setposition(){
			var l=0;
			var t=0
			for(var i=0;i<divs.length;i++){
				if(i%4==0&&i!=0){
					t++;
					l=0;
				}
				divs[i].style.left=10+l*100+'px';
				divs[i].style.top=10+t*100+'px';
				l++;
			}
		}
		//根据数组内的内容重绘页面  
		function  paint(){
			for (var i=0;i<gridArr.length;i++) {
				for(var j=0;j<gridArr[i].length;j++){
					divs[i*4+j].className = 'grid grid'+gridArr[i][j];
					divs[i*4+j].innerHTML = gridArr[i][j]>0?gridArr[i][j]:''
				}
			}
		}
		
		//生成随机数  在页面上创建2？4;
		function  randomgrid(){
			var i=Math.floor(Math.random()*gridArr.length);
			var j=Math.floor(Math.random()*gridArr[0].length);
			if(gridArr[i][j]==0){
				gridArr[i][j]= Math.random()>0.8?4:2
			}else{
				randomgrid()
			}
		}
		///////////////////////////////////////////////////////////////////////////////////////
		document.onkeydown=function(ev){
			var ev=ev||event;
			var dir=ev.keyCode;
			if(gameover()){
				alert("游戏结束")
				return
			}
			if(dir==37||dir==38||dir==39||dir==40){
				move(dir)
			}
		}
		///////////////////////////////////////////////////////////////////////////////////
		function move(dir){
				arr3=[];
			var clon=null;
			for(var i=0;i<gridArr.length;i++){
				if(dir == 37){
					gridArr[i]=sortArr(gridArr[i]);
				}
				if(dir == 38){
					clon=sortArr([gridArr[0][i],gridArr[1][i],gridArr[2][i],gridArr[3][i]])
					for(var k=0;k<clon.length;k++){
						gridArr[k][i]=clon[k];
					}
				}
				if(dir == 39){
					clon = sortArr([gridArr[i][3],gridArr[i][2],gridArr[i][1],gridArr[i][0]])
					for(var k = 0;k<clon.length;k++){
						gridArr[i][k]=clon[3-k]
					}
				}
				if(dir == 40){
					clon = sortArr([gridArr[3][i],gridArr[2][i],gridArr[1][i],gridArr[0][i]])
					for(var k = 0;k<clon.length;k++){
						gridArr[k][i]=clon[3-k]
					}
				}
			}
			
				for (var i=0;i<arr3.length;i++){
					if(arr3[i]==false){
						paint();
						randomgrid();
						paint();
						break;
					}
				}
				
			
			
		}
		
		function sortArr(arr){
			//如果传进来的数组中有不为0的数字  说明需要把数字移动到数组前面 把0移动到数组后面;
			//每一列的数组都排好顺序   数字的在前面  0在后面
				
			arr3.push(judg(arr))
			
			if(!judgezero(arr)){
				for(var i=0;i<arr.length;i++){
					for(var j=0;j<3;j++){
						if(arr[j]==0){
							arr[j]=arr[j+1];
							arr[j+1]=0
						}
					}
				}
			}
			//循环排好顺序的数组  如果arr[i]==arr[i+1]  说明这两个是需要相加合并的；
			//把arr[i]内的数字翻倍 然后让arr[i+1]后面的内容都向前进一格  这两个合并后就应该多出一个零在最后填补上  
			for(var i=0;i<arr.length;i++){
				if(arr[i]==arr[i+1]){    
					var j=i;
					arr[i]=arr[i+1]*2;
					span.innerHTML=Number(span.innerHTML)+arr[i]
					arr[i+1]=0;
					while(++j<3){
						arr[j]=arr[j+1];
					}
					arr[3]=0;
				}
			}
			return arr
		}
	
//////////判断传进来的数组内是不是全部为0///////////////////////////////////
		function judgezero(arr){
			for (var i=0;i<arr.length;i++) {
				if(arr[i]!=0) return false
			}
			return true
		}
		
		//判断每一行有没有发生数字合并或者是数字移动  如果有发生就返回false 并且把每一行的结果添加到arr3内  表示可以生成新的数字
		function judg(arr){
			for (var i=0;i<arr.length;i++) {
				var num=i
				if(arr[i]==0){
					while(num<arr.length-1){
						if(arr[num+1]!=0){
							return false;
						} 
						num++
					}
				}else{
					while(num<arr.length-1){
						if(arr[i]==arr[num+1]){
							return false;
						} 
						num++
					}
				}
			}
			return true
		}
		// 
		function gameover(){
			for (var i=0;i<gridArr.length;i++) {
				for (var j=0;j<gridArr[i].length;j++) {
					if(gridArr[i][j]==0){
						return false
					}
				}
			}
			for (var i=0;i<gridArr.length;i++) {
				for (var j=0;j<gridArr[i].length;j++) {
					if(j<3){
						if(gridArr[i][j]==gridArr[i][j+1])return false
					}
					if(i<3){
						if(gridArr[i][j]==gridArr[i+1][j])return false
					}
				}
			}
			return true;
		}
		
}
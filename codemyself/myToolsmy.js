//匀速运动包装函数

function move(obj,attr,speed,target,fn){
		//运动的目标  运动的属性  运动的速度  运动的目标位置  运动完之后需要进行的下一步
		
		//每次运动之前清除之前的定时器
//		clearInterval(obj.timer);
//		obj.timer=null;
//       通过函数获取运动的属性
		var dis =parseFloat(getStyle(obj,attr));
		//判断初始位置和目标位置的大小来控制speed的正负
		speed=dis>target? -speed:speed;
		//给目标元素加定时器
		obj.timer=setInterval(function(){
			//每30毫秒，加一次speed
			dis+=speed;
			//如果已经到达目标位置，限制它的数值
			if(dis>=target&&speed>0||dis<=target&&speed<0){
             dis=target;
			}
			//给目标属性赋值
			obj.style[attr]= dis+'px';
		   
		   //如果到达目标，清除定时器
		   if(dis==target){
		 	clearInterval(obj.timer);
		 	obj.timer=null;
		 	
		 	fn&&fn();//回调函数
		 }
		},30);
	}
	
//获取运动的属性函数
function getStyle(obj,attr){
     if(obj.currentStyle){
		return obj.currentStyle[attr];
	 }else{
		return getComputedStyle(obj)[attr];
		}
	}
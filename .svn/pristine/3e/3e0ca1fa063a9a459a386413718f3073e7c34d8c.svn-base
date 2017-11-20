/*默认值*/
Object.extend = function (destination, source) {
    if (!destination) return source;
    for (var property in source) {
        if (!destination[property]) {
            destination[property] = source[property];
        }
    }
    return destination;
};


var viewportType = {
    fullscreen: 0,
    smallscreen: 1
};

//屏幕旋转完成事件(横屏:horizontal|竖屏:vertical)
$.rotateEnd = function (fn) {
    var supportsOrientationChange = "onorientationchange" in window,
               orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
    function getWidth() {
        return document.documentElement.clientWidth || document.body.clientWidth;
    }

    function getHeight() {
        return document.documentElement.clientHeight || document.body.clientHeight;
    }
    window.addEventListener(orientationEvent, function () {
        setTimeout(function () { fn && fn(getWidth() > getHeight() ? "horizontal" : "vertical"); }, 500);
    }, false);
    fn(getWidth() > getHeight() ? "horizontal" : "vertical");
};

(function($){
	$.fn.viewport = function (options) {
        var setting = {
            width: 375,
            name: '[name=viewport]',
            typeArr: [
                ['width', 'initial-scale', 'maximum-scale', 'user-scalable'],
                ['width', 'initial-scale', 'target-densitydpi', 'minimum-scale', 'maximum-scale', 'user-scalable']
            ],
            currentType: 0 //smallscreen 
        }
        options = Object.extend(options, setting);
        var $viewport = this.find(options.name);

        var contentArr = [];
        options.typeArr[options.currentType].forEach(function (current, index) {
            switch (current) {
                case 'width':
                    contentArr.push('width=' + options.width);
                    break;
                case 'initial-scale':
                	var ch = 0 
                	if(screen.height< 568){
                		ch = 50;
                	}
                    contentArr.push('initial-scale=' + screen.width / (options.width + ch));
                    break;
                case 'target-densitydpi':
                    contentArr.push('target-densitydpi=target-densitydpi');
                    break;
                case 'minimum-scale':
                    contentArr.push('minimum-scale=0.5');
                    break;
                case 'maximum-scale':
                    contentArr.push('maximum-scale=1.5');
                    break;
                case 'user-scalable':
                    contentArr.push('user-scalable=no');
                    break;
            }
        });
        $viewport.attr('content', contentArr.join(','));
       }
	
	   //循环列表
	   $.fn.scrollList = function(options){
			var setting={
				itemName:'li',
				speed:1500
			}
			var $root = this;
			options = Object.extend(options,setting);
			$root.times = 0;
			var $ul = $root.children(0),
			    count = $root.children().children().length,
			    items = $root.find(options.itemName),
			    rowsH = items.eq(0).height() + 10,
			    h = rowsH *  count;
			$ul.html($ul.html()+$ul.html());
			var t = 0
			$root.on('play',function(ev){
			    clearInterval($root.interval);
				$root.interval = setInterval(function(){
					if(Math.abs(t) >= h){
						$ul[0].style.top = t = 0;
					}
					t -= rowsH;
					$ul.animate({top: t});

				},options.speed)
			});
			
			$root.on('stop',function(ev){
				 clearInterval($root.interval);
			})
			return $root;
			
	   }
	   
	   //九宫格抽奖
	   $.fn.draw9 = function(options){
	   	  var setting={
	   	  	 itemName:'.lottery-unit',//表格样式
	   	  	 speed:100,//初始化转盘速度
	   	  	 currentName:'current',
	   	  	 cycle:500000, //转动基本次数：即至少需要转动多少次再进入抽奖环节
	   	  	 fnEnd:null //回调方法
	   	  }
	   	  options = Object.extend(options,setting);
	   	  var $root = this,
	   	  	  item = [];
	   	      $root.count = $root.find(options.itemName).length;
	   	      $root.index = -1; 
	   	      $root.times = 0;
	   	      for(var i=0;i<$root.count;i++){
	   	      	  item.push($root.find(options.itemName +'-' +i));
	   	      }
	   	      function curroll(){
	   	      	  var index = $root.index;
	   	      	  $(item[index]).removeClass(options.currentName);
	   	      	  index++;
	   	      	  if(index > $root.count - 1){
	   	      	  	 index = 0;
	   	      	  }
	   	      	  var $next = $(item[index]).addClass(options.currentName);
	   	      	  $root.index = index;
	   	      }
	   	      function roll(){ 
	   	      	  $root.times +=1;
	   	      	  curroll();
	   	      	  if($root.times > $root.cycle + 10 && $root.prize == $root.index ){
	   	      	  	 clearInterval($root.times);
	   	      	  	 $root.times = 0;
	   	      	  	 $root.isclick = false;
	   	      	  	 options.fnEnd && options.fnEnd.call($root);
	   	      	  }else{
	   	      	  	 if($root.times < $root.cycle){
	   	      	  	 	$root.speed -= 10;
	   	      	  	 }else if($root.times == $root.cycle){
	   	      	  	 	
	   	      	  	 }else{
	   	      	  	 	if($root.times > $root.cycle + 10 && (($root.prize == 0 && $root.index == 7) || $root.prize == $root.index + 1))
	   	      	  	 	{
	   	      	  	 		$root.speed +=110;
	   	      	  	 	}else{
	   	      	  	 		$root.speed +=20;
	   	      	  	 	}
	   	      	  	 }
	   	      	  	 
	   	      	  	 if($root.speed < 40){
	   	      	  	 	$root.speed = 40;
	   	      	  	 }
	   	      	  	 $root.times = setTimeout(roll,$root.speed);
	   	      	  }
	   	      }
	   	      
	   	    $root.on('play',function(ev){
	   	    		$root.cycle = options.cycle;
	   	    		$root.speed = options.speed;
				roll();
				$root.isclick = true;
			});
			
			$root.on('stop',function(evj,prize){
				$root.cycle = $root.times + 10;
	   	  	    $root.prize = prize;
			})
	   	    return $root;
	   }
})(jQuery);

$(function(){
	$.rotateEnd(function () {
		/*分辨率自适应*/
        $(document.head).viewport({ type: viewportType.smallscreen,width:390 });
    }); 
});

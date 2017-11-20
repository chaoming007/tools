(function($){
	$.fn.TabBox=function(opt){
		var def={
			cls:"active",      //默认选中样式
			evt:"mouseover",  //默认切换事件
			autoplay:false,     //是否自动执行
			tim:3000,           //自动执行事件
			check:0             //默认选中第一个
		};
		var setting=$.extend(def,opt);
		var $navBox=$(this).children("div").eq(0);
		var $conBox=$(this).children("div").eq(1);
		var $navList=$navBox.find("li");
	    var $conDiv=$conBox.children("div");
		var timer,stimer;
		var tnum=setting.check;
		tabFun(setting.check);
		autoPlay();
		$(this).on("mouseover",function(){
			clearInterval(timer);
		});
		$(this).on("mouseout",function(){
			autoPlay();
		});
		function autoPlay(){
			if(setting.autoplay){
				clearInterval(timer);
				timer=setInterval(function(){
					tnum=tnum>$navList.length-2?0:tnum+1;
					tabFun(tnum);
				},setting.tim);
			}
		}
		function tabFun(num){
			$navList.removeClass(setting.cls);
		    $conDiv.hide();
			$navList.eq(num).addClass(setting.cls);
			$conDiv.eq(num).show();
			$navList.each(function(ind){
				  var $this=$(this);
				  $this.on(setting.evt,function(){
				  	   if(setting.evt=="mouseover"){
				  	   	   clearTimeout(stimer);
				  	   	   stimer=setTimeout(function(){
				  	   	   	    $navList.removeClass(setting.cls);
						  		$this.addClass(setting.cls);
						  		$conDiv.hide();
						  		$conDiv.eq(ind).show();
						  		tnum=ind;
				  	   	   },150);
				  	   }else{
				  	   	    $navList.removeClass(setting.cls);
					  		$this.addClass(setting.cls);
					  		$conDiv.hide();
					  		$conDiv.eq(ind).show();
					  		tnum=ind;
				  	   }	
				  });
			});
		}

	}

})(jQuery)
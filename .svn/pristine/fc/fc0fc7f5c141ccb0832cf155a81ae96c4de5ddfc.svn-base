(function($){

$.fn.charTab=function(opt){
	  var def={
	  	maxNum:100,                         //最大值
	  	datArr:[{name:"01月",score:100}],   //数据
	  	lineNum:3,                          //背景线数量
	  	tabHeight:100,                      //图形高度
	  	moveType:"Bounce.easeOut"  //运动类型
	  };
	  var option=$.extend(def,opt);
	  var canObj=$(this).find(".canvas-content");
	  var canBg=$(this).find(".cylinder");
	  var cBg=$(this).find(".canvas-bg");     
	  var cTabList=canObj.find("ul");
	  var cBgList=cBg.find("ul");
	  var tweenFun =option.moveType.split(".")[1]?Tween[option.moveType.split(".")[0]][option.moveType.split(".")[1]]:Tween[option.moveType.split(".")[0]];
	  var canH=option.tabHeight;
		cBg.height(canH);
		cBgList.height(canH);
		cBgList.find("li").height((canH/option.lineNum));
		canObj.find("li").height(canH);
		for(var i=0;i<option.lineNum;i++){
			var liObj=$("<li></li>");
			liObj.height((canH/def.lineNum));
			cBgList.append(liObj);
		}
	   for(var j=0;j<option.datArr.length;j++){
	   		var tabObjLi=$("<li><div class='cylinder'><i><strong>"+option.datArr[j]["score"]+"</strong></i></div><span>"+option.datArr[j]["name"]+"</span></li>");
	   		cTabList.append(tabObjLi);
		 	animtFun(option.datArr[j],j);	
	   }
	   function animtFun(obj,num){	  		
	  		obj.speed=1.2;
	  		obj.t=0;
	  		obj.val=0;
	  		obj.tim=setInterval(function(){	  
				if(obj.t<100){
					obj.t+=obj.speed;
					obj.val=tweenFun(obj.t,0,obj["score"],100);
					setPiont(obj.val,num);
				}else{
					setPiont(obj.score,num);
					clearInterval(obj.tim);
				}
	  			
	  	   },1000/60);
	  }
	  function setPiont(val,num){
	 	 var hNum=val*canH/option.maxNum;
	 	 canObj.find("i").eq(num).height(hNum);			
	  }
}

 var Tween = {
        Linear:function (t, b, c, d) {
            return c * t / d + b;
        },
        Quad:{
            easeIn:function (t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOut:function (t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOut:function (t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t + b;
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            }
        },
        Cubic:{
            easeIn:function (t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOut:function (t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            },
            easeInOut:function (t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            }
        },
        Quart:{
            easeIn:function (t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            },
            easeOut:function (t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
            easeInOut:function (t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            }
        },
        Quint:{
            easeIn:function (t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOut:function (t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            },
            easeInOut:function (t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            }
        },
        Sine:{
            easeIn:function (t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            },
            easeOut:function (t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeInOut:function (t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            }
        },
        Expo:{
            easeIn:function (t, b, c, d) {
                return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOut:function (t, b, c, d) {
                return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOut:function (t, b, c, d) {
                if (t == 0) return b;
                if (t == d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        },
        Circ:{
            easeIn:function (t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOut:function (t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            },
            easeInOut:function (t, b, c, d) {
                if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            }
        },
        Elastic:{
            easeIn:function (t, b, c, d, a, p) {
                if (t == 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                if (!a || a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                }
                else var s = p / (2 * Math.PI) * Math.asin(c / a);
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOut:function (t, b, c, d, a, p) {
                if (t == 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                if (!a || a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                }
                else var s = p / (2 * Math.PI) * Math.asin(c / a);
                return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
            },
            easeInOut:function (t, b, c, d, a, p) {
                if (t == 0) return b;
                if ((t /= d / 2) == 2) return b + c;
                if (!p) p = d * (.3 * 1.5);
                if (!a || a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                }
                else var s = p / (2 * Math.PI) * Math.asin(c / a);
                if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
            }
        },
        Back:{
            easeIn:function (t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOut:function (t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOut:function (t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
            }
        },
        Bounce:{
            easeIn:function (t, b, c, d) {
                return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
            },
            easeOut:function (t, b, c, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                }
            },
            easeInOut:function (t, b, c, d) {
                if (t < d / 2) return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
                else return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        }

    }


})(jQuery)
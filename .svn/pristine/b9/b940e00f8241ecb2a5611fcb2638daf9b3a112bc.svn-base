(function(){

	var canvas=document.querySelector("#canvas");
	var ctx=canvas.getContext("2d");
	var cWidth=canvas.width;
	var cHeight=canvas.height;
	var imgWidth,imgHeight;
	var dots=[];
	var imgData;
	var rnum=3;
	var focallength = 250;   //焦距
	var imgObj=new Image();
	imgObj.src="./images/wlbh_img.png";
    imgObj.addEventListener("load",function(){
       imgWidth=imgObj.width;
       imgHeight=imgObj.height;
       getImgData();
    });
	window.requestAnimFrame = (function() {
	    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	        function( callback,element) {
	            return window.setTimeout(callback, 1000 / 60);
	        };
	})();
    // 获取
    function getImgData(){
    	 var data;
    	 ctx.drawImage(imgObj,(cWidth-imgWidth)/2,(cHeight-imgHeight)/2,imgWidth,imgHeight);
    	 imgData=ctx.getImageData((cWidth-imgWidth)/2,(cHeight-imgHeight)/2,imgWidth,imgHeight);
    	 ctx.clearRect(0,0,cWidth,cHeight);
    	 data=imgData.data;    
    	 for(var i=0;i<imgWidth;i+=rnum){
    	 	for(var j=0;j<imgHeight;j+=rnum){
    	 		var k=(j*imgWidth+i)*4;
    	 		if(data[k+3]>=100){
    	 		    var dot=new Dot((cWidth-imgWidth)/2+(i-rnum),(cHeight-imgHeight)/2+(j-rnum),0,rnum,data[k],data[k+1],data[k+2]);
    	 		    dots.push(dot);
    	 		}
    	 	}
    	 }
    	initPos();
    }

    function initPos(){
    	dots.forEach(function(item,i){
    		item.x=Math.random()*cWidth;
    		item.y=Math.random()*cHeight;
    		item.z=Math.random()*focallength*2 - focallength;

    		item.tx=Math.random()*cWidth;
    		item.ty=Math.random()*cHeight;
    		item.tz=Math.random()*focallength*2 - focallength;
    		item.paint();
    	});
    	animateFun();
    }
    
    var tuff=true;
    function animateFun(){
    	 // ctx.save();
         //    ctx.globalCompositeOperation = 'destination-out';
         //    ctx.globalAlpha = 0.1;
         //    ctx.fillRect(0, 0, cWidth, cHeight);
         //    ctx.restore();
         //    
         var thisTime = new Date();
         ctx.clearRect(0,0,cWidth,cHeight);
    	 dots.forEach(function(item,i){
    	 	if(tuff){
    	 		if(Math.abs(item.dx-item.x)<0.1 && Math.abs(item.dy-item.y)<0.1 && Math.abs(item.dz-item.z)<0.1){
	    	 	 	item.x=item.dx;
	    	 	 	item.y=item.dy;
	    	 	 	item.z=item.dz;
	    	 	 	if(thisTime-lastTime>300){
	    	 	 		lastTim=new Date();
	    	 	 		clearFun();
	    	 	 	}
	    	 	 }else{
	    	 	 	item.x=item.x+(item.dx-item.x)*0.1;
	    	 	 	item.y=item.y+(item.dy-item.y)*0.1;
	    	 	 	item.z=item.z+(item.dz-item.z)*0.1;
	    	 	 	lastTime = new Date();
	    	 	 }
    	 	}
    	 
    	 	item.paint();
    	 });

	    window.requestAnimFrame(animateFun);
    }

    function clearFun(){
    	ctx.clearRect(0,0,cWidth,cHeight);
	    //ctx.drawImage(imgObj,(cWidth-imgWidth)/2,(cHeight-imgHeight)/2,imgWidth,imgHeight);
	    tuff=false;
    }

    // 粒子类
    function Dot(cX,cY,cZ,r,R,G,B){
    	this.dx=cX;        //粒子原位置
    	this.dy=cY;
    	this.dz=cZ;
    	this.tx = 0;
        this.ty = 0;
        this.tz = 0;
        this.x = cX;
        this.y = cY;
        this.z = cZ;
        this.r = r;
        this.R=R;
        this.G=G;
        this.B=B;
    }
   Dot.prototype.paint=function(){
   		ctx.save();
   		ctx.beginPath();
   		var scale = focallength/(focallength + this.z);
   		 ctx.fillStyle = "rgba("+this.R+","+this.G+","+this.B+",1)";
        //ctx.arc(this.x ,this.y, this.r*scale , 0 , 2*Math.PI);
        ctx.fillRect(cWidth / 2 + (this.x - cWidth / 2) * scale, cHeight / 2 + (this.y - cHeight / 2) * scale, this.r * scale*2 , this.r * scale*2);
        ctx.fill();
        ctx.restore();
   }

})()
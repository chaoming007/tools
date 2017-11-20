function funImgLoading(containID,txtID,fnComplete) {
	if (sessionStorage.getItem("pageloaded")) {
	  fnComplete();
	  return false;
	}
	var box = document.getElementById(containID);
	var domTag = box.getElementsByTagName("*");
	//标签总数
	var domLen = domTag.length;
	//图片加载数
	var imgLoadedNum = 0;
	//图片总数
	var imgAllNum = 0;
	//进度条div
	var loadDiv = document.getElementById(txtID);
	//遍历对象
	for(var i = 0; i < domLen; i++) {
		var thisDom = domTag[i];
		//获取对象的background-image的值
		var imgUrl = window.getComputedStyle(thisDom).getPropertyValue("background-image");
		var imgBeforeUrl = window.getComputedStyle(thisDom,"::before").getPropertyValue("background-image");
		var imgAfterUrl = window.getComputedStyle(thisDom,"::after").getPropertyValue("background-image");
		
		//正则 全局匹配以http//开头,不包含单引号或者双引号或者)的内容
		//var imgNewUrl = imgUrl.match(/http:\/\/[^\'|\"|\)]+/gi);
		var imgNewUrl = imgUrl.match(/[^url\("'](.+)[^'"\)]/g);
		var imgBeforeNewUrl = imgBeforeUrl.match(/[^url\("'](.+)[^'"\)]/g);
		var imgAfterNewUrl = imgAfterUrl.match(/[^url\("'](.+)[^'"\)]/g);

		
		//创建一个数组 将img的url路径 和img的before的url路径 img的after url路径 加入数组
		var imgarr = [];
		imgarr.push(imgNewUrl[0]);
		imgarr.push(imgBeforeNewUrl[0]);
		imgarr.push(imgAfterNewUrl[0]);
		
		
//			console.log(imgarr) ;
		
		
		//img三个url 循环判断
		var imgarrlen = imgarr.length;
		for (var j = 0; j < imgarrlen; j++) {
			
			
			//判断正则是否匹配到'/'字符
			if(imgarr[j].indexOf("/") != -1) {
				//图片总数加1
				imgAllNum++;
//				console.log("bg" + imgAllNum);
				//取正则匹配到的结果
				var imgNewUrlStr = imgarr[j];
				//创建img对象
				var bgimgElement = document.createElement("img");
				bgimgElement.setAttribute("src", imgNewUrlStr);
				//监听加载完成，执行 funLoad
				bgimgElement.addEventListener("load", funLoad);
//				console.log(imgNewUrlStr);
	
			}
		}
		
		//判断是否是img标签
		if(thisDom.tagName == "IMG") {
			//图片总数加1
			imgAllNum++;
			
//			console.log("ALL img" + imgAllNum + " " + thisDom.id);
			//判断图片是否被缓存
			if(thisDom.complete){
				//如果被缓存了 加载完成 +1;
				++imgLoadedNum;
			}else{
				//否则绑定load监听
				//监听加载完成，执行 funLoad
				thisDom.addEventListener("load", funLoad);
				
//				console.log("this dom"+thisDom.id);
			}
			
		}
			
			
		
		
	}
	//loading时候 数字累加 判断
	function funLoad() {
		
			//已完成
			var percent = parseInt((++imgLoadedNum) / imgAllNum * 100);
			//x% / 100% = 已经加载累加/图片总数
			loadDiv.innerHTML = percent;
	
			if(percent >= 100) {
				//延迟 执行loadingComplete
				setTimeout(fnComplete,500);
				// 保存结果到 sessionStorage 对象中
				sessionStorage.setItem("pageloaded", "true");
			}
		
		
	}

	

};


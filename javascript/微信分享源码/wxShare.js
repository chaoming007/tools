//默认直接初始化执行分享代码
var weiXinShareJs = function (options, jsdata) {
	var $this = this;
    $this.isit = this.init();
    $this.jsdata = jsdata;
    $this.awaiTimeout = setTimeout(function(){
    		$this.initWeiXin(options);
    },1500);
}

//取消直接微信方法
weiXinShareJs.prototype.cancelInit = function(){
	clearTimeout(this.awaiTimeout);
}

//执行微信
weiXinShareJs.prototype.initWeiXin = function (options) {
    if (this.isit) {
        // 分享内容定制
        this.pageShareContent = this.extend({
            desc: '易车网-买车无难事',
            imgUrl: 'http://image.bitautoimg.com/2016/pc1200/img/wxyiche-logo.png'
        }, options);
        //调用

        var jsdataSetting = {
            url: 'http://mps.yiche.com/weixin/weixinconfig',
            data: {
                url: "http://" + window.location.hostname + window.location.pathname + window.location.search
            },
            callback: 'wxs_js.fweixin',
            success: function (data) {
                //console.log("success");
            }
        }

        var jsShareContent = this.extend(jsdataSetting, this.jsdata);


        this.Jsonp(jsShareContent);
    }

}


weiXinShareJs.prototype.init = function () {

    var isInWeixinNavigator = navigator.userAgent.match(/MicroMessenger/ig);
    if (isInWeixinNavigator) {
        document.write(unescape('%3Cscript type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"%3E%3C/script%3E'));
    } else {
        return false;
    };

    this.forweixinObj = {
        debug: false,
        appId: 'wx0c56521d4263f190',
        jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
    };
    return true;
}
weiXinShareJs.prototype.extend = function () {
    var _extend = function me(dest, source) {
        for (var name in dest) {
            if (dest.hasOwnProperty(name)) {
                //当前属性是否为对象,如果为对象，则进行递归  
                if ((dest[name] instanceof Object) && (source[name] instanceof Object)) {
                    me(dest[name], source[name]);
                }
                //检测该属性是否存在  
                if (source.hasOwnProperty(name)) {
                    continue;
                } else {
                    source[name] = dest[name];
                }
            }
        }
    }
    var _result = {},
        arr = arguments;
    //遍历属性，至后向前  
    if (!arr.length) return {};
    for (var i = arr.length - 1; i >= 0; i--) {
        _extend(arr[i], _result);
    }
    arr[0] = _result;
    return _result;
}
weiXinShareJs.prototype.readyAndConfigWeixin = function (forweixinObj) {
    var pageShareContent = this.pageShareContent;
    if (forweixinObj && (typeof wx == 'object')) {
        wx.config({
            debug: forweixinObj.debug,
            appId: forweixinObj.appId,
            timestamp: forweixinObj.timestamp,
            nonceStr: forweixinObj.nonceStr,
            signature: forweixinObj.signature,
            jsApiList: forweixinObj.jsApiList
        });
        //alert(forweixinObj.debug + ',' +forweixinObj.appId + ',' +forweixinObj.timestamp + ','+ forweixinObj.nonceStr + ',' +forweixinObj.signature + ',' +forweixinObj.jsApiList)
        wx.ready(function () {
            wx.checkJsApi({
                jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo'],
                success: function (res) {
                    //alert("wx.checkJsApi success");
                }
            });
            wx.onMenuShareAppMessage({
                title: pageShareContent.title,
                desc: pageShareContent.desc,
                link: pageShareContent.link,
                imgUrl: pageShareContent.imgUrl
                //                  trigger: function (res) {
                //                      alert('用户点击发送给朋友');
                //                  },
                //                  success: function (res) {
                //                      alert('已分享');
                //                  },
                //                  cancel: function (res) {
                //                      alert('已取消');
                //                  },
                //                  fail: function (res) {
                //                      alert(JSON.stringify(res));
                //                  }
            });

            wx.onMenuShareTimeline({
                title: pageShareContent.title,
                link: pageShareContent.link,
                imgUrl: pageShareContent.imgUrl
                //                  trigger: function (res) {
                //                      alert('用户点击分享到朋友圈');
                //                  },
                //                  success: function (res) {
                //                      alert('已分享');
                //                  },
                //                  cancel: function (res) {
                //                      alert('已取消');
                //                  },
                //                  fail: function (res) {
                //                      alert(JSON.stringify(res));
                //                  }
            });

            wx.onMenuShareQQ({
                title: pageShareContent.title,
                desc: pageShareContent.desc,
                link: pageShareContent.link,
                imgUrl: pageShareContent.imgUrl
                //                  trigger: function (res) {
                //                      alert('用户点击分享到QQ');
                //                  },
                //                  complete: function (res) {
                //                  },
                //                  success: function (res) {
                //                      alert('已分享');
                //                  },
                //                  cancel: function (res) {
                //                      alert('已取消');
                //                  },
                //                  fail: function (res) {
                //                      alert(JSON.stringify(res));
                //                  }
            });

            wx.onMenuShareWeibo({
                title: pageShareContent.title,
                desc: pageShareContent.desc,
                link: pageShareContent.link,
                imgUrl: pageShareContent.imgUrl
                //                  trigger: function (res) {
                //                      alert('用户点击分享到微博');
                //                  },
                //                  complete: function (res) {
                //                  },
                //                  success: function (res) {
                //                      alert('已分享');
                //                  },
                //                  cancel: function (res) {
                //                      alert('已取消');
                //                  },
                //                  fail: function (res) {
                //                      alert(JSON.stringify(res));
                //                  }
            });
        });

        //          wx.error(function (res) {
        //              alert(res.errMsg);
        //          });
    }

}
weiXinShareJs.prototype.formatParams = function (data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }
    return arr.join('&');
}
weiXinShareJs.prototype.Jsonp = function (options) {
    var forweixinObj = this.forweixinObj;
    var oHead = document.getElementsByTagName('head')[0];
    var params = "";
    var key = 'callback';
    if (options.data) {
        options.data[key] = options.callback;
        params += this.formatParams(options.data);
    } else {
        params += key + "=" + options.callback;
    }
    var oS = document.createElement('script');
    oS.setAttribute('id', 'os1');
    oHead.appendChild(oS);
    //发送请求
    oS.src = options.url + '?' + params;
}
weiXinShareJs.prototype.fweixin = function (data) {
    var forweixinObj = this.forweixinObj;
    //alert(data["yiche.timestamp"] + ',' +data["yiche.nonceStr"] + ',' + data["yiche.signature"]);
    if (typeof forweixinObj == 'undefined') {
        window.forweixinObj = {};
    }
    forweixinObj.timestamp = data["yiche.timestamp"];
    forweixinObj.nonceStr = data["yiche.nonceStr"];
    forweixinObj.signature = data["yiche.signature"];
    this.readyAndConfigWeixin(forweixinObj);
}

var wxs_js = new weiXinShareJs();
/*试例*/
//wxs_js.cancelInit() //取消初始化方法
//ajax
//wxs_js.initWeiXin({ //异步调用微信分享方法
//	 title:'易车网-买车无难事',
//	 desc: '易车网-买车无难事',
//   imgUrl: 'http://image.bitautoimg.com/2016/pc1200/img/wxyiche-logo.png'
//})
function weiXinShare (options) {
	
// document.write(navigator.userAgent);
var isInWeixinNavigator = navigator.userAgent.match(/MicroMessenger/ig);
    if (isInWeixinNavigator) {
        document.write(unescape('%3Cscript type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"%3E%3C/script%3E'));
    }else{
    		return false;
    }; 
    var forweixinObj = {
        debug: false,
        appId: 'wx0c56521d4263f190',
        jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
    };
    
    // 分享内容定制
    var pageShareContent =$.extend( {
        title: '',
        keywords: '易车网',
        desc: '易车网-买车无难事',
        link: '',
        imgUrl: 'http://image.bitautoimg.com/2016/pc1200/img/wxyiche-logo.png'
    }, options);
//   var settings = $.extend( {
//    'location'         : 'top',
//    'background-color' : 'blue'
//  }, options);

    function readyAndConfigWeixin() {
        if (forweixinObj && (typeof wx == 'object')) {
            wx.config({
                debug: forweixinObj.debug,
                appId: forweixinObj.appId,
                timestamp: forweixinObj.timestamp,
                nonceStr: forweixinObj.nonceStr,
                signature: forweixinObj.signature,
                jsApiList: forweixinObj.jsApiList
            });
            wx.ready(function () {
//              wx.checkJsApi({
//                  jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo'],
//                  success: function (res) {
//                      alert("wx.checkJsApi success");
//                  }
//              });
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

    (function () {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            // document.write("start jsonpCallback ");
            $.ajax({
                type: 'get',
                url: 'http://mps.yiche.com/weixin/weixinconfig',
                cache: false,
                dataType: 'jsonp',
                data: { url: "http://" + window.location.hostname + window.location.pathname + window.location.search },
                jsonpCallback: 'funcweixin',
                success: function (data) {
                    // document.write("jsonpCallback success");
                    if (typeof forweixinObj == 'undefined')
                    { window.forweixinObj = {}; }
                    forweixinObj.timestamp = data["yiche.timestamp"];
                    forweixinObj.nonceStr = data["yiche.nonceStr"];
                    forweixinObj.signature = data["yiche.signature"];
                    readyAndConfigWeixin();
                }
            });
        }
    })();
}
weiXinShare();
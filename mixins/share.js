Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = void 0;

var _index = require("./../config/index.js");

// 设置菜单中的转发按钮触发转发事件时的转发内容
var shareObj = {
    title: "冲啊，一起抢疫苗啊！",
    desc: "冲啊，一起抢疫苗啊！",
    path: "/pages/index",
    // 默认分享首页
    imageUrl: _index.imageRoot + "/bg-banner_share.png",
    //默认使用屏幕截图截图,图片比例5:4
    success: function success(res) {
        // 转发成功之后的回调
        if (res.errMsg == "shareAppMessage:ok") {}
    },
    fail: function fail() {
        // 转发失败之后的回调
        if (res.errMsg == "shareAppMessage:fail cancel") {// 用户取消转发
        } else if (res.errMsg == "shareAppMessage:fail") {// 转发失败，其中 detail message 为详细失败信息
        }
    },
    complete: function complete() {// 转发结束之后的回调
    }
};

var _default = {
    data: {},
    methods: {
        // 自定义分享给好友内容
        onShareAppMessage: function onShareAppMessage(options) {
            // 来自页面内的按钮的转发
            //if (options.from == 'button') {
            //var dataset = options.target.dataset;
            //}
            return shareObj;
        },
        // 自定义分享到朋友圈内容
        onShareTimeLine: function onShareTimeLine(options) {
            // 来自页面内的按钮的转发
            //if (options.from == 'button') {
            //var dataset = options.target.dataset;
            //}
            return shareObj;
        }
    },
    created: function created() {
        // 显示当前页面的转发按钮
        wx.showShareMenu({
            withShareTicket: true,
            menus: [ "shareAppMessage", "shareTimeLine" ]
        });
    }
};

exports["default"] = _default;
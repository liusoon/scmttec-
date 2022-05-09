Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = void 0;

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

/**
 * 提示与加载工具类
 */ var Tips = /* */ function() {
    function Tips() {
        _classCallCheck(this, Tips);
        this.isLoading = false;
    }
    /**
   * 弹出提示框
   */    _createClass(Tips, null, [ {
        key: "success",
        value: function success(title) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
            setTimeout(function() {
                wx.showToast({
                    title: title,
                    icon: "success",
                    mask: true,
                    duration: duration
                });
            }, 500);
            if (duration > 0) {
                return new Promise(function(resolve, reject) {
                    setTimeout(function() {
                        resolve();
                    }, duration);
                });
            }
        }
        /**
     * 弹出确认窗口
     * payload 回调函数
     */    }, {
        key: "confirm",
        value: function confirm(text, payload) {
            var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "提示";
            return new Promise(function(resolve, reject) {
                wx.showModal({
                    title: title,
                    content: text,
                    showCancel: true,
                    success: function success(res) {
                        if (res.confirm) {
                            if (payload && typeof payload == "function") {
                                payload();
                            }
                            //resolve(payload);
                                                } else if (res.cancel) {//reject(payload);
                        }
                    },
                    fail: function fail(res) {//reject(payload);
                    }
                });
            });
        }
    }, {
        key: "toast",
        value: function toast(title, onHide) {
            var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "none";
            setTimeout(function() {
                wx.showToast({
                    title: title,
                    icon: icon,
                    mask: true,
                    duration: 2e3
                });
            }, 300);
            // 隐藏结束回调
                        if (onHide) {
                setTimeout(function() {
                    onHide();
                }, 1e3);
            }
        }
        /**
     * 警告框
     */    }, {
        key: "alert",
        value: function alert(title) {
            wx.showToast({
                title: title,
                //image: "../images/alert.png",
                mask: true,
                duration: 11e3
            });
        }
        /**
     * 错误框
     */    }, {
        key: "error",
        value: function error(title, onHide) {
            wx.showToast({
                title: title,
                //image: "../images/error.png",
                mask: true,
                duration: 1e3
            });
            // 隐藏结束回调
                        if (onHide) {
                setTimeout(function() {
                    onHide();
                }, 1e3);
            }
        }
        /**
     * 弹出加载提示
     */    }, {
        key: "loading",
        value: function loading() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "加载中";
            if (Tips.isLoading) {
                return;
            }
            Tips.isLoading = true;
            wx.showLoading({
                title: title,
                mask: true
            });
        }
        /**
     * 加载完毕
     */    }, {
        key: "loaded",
        value: function loaded() {
            if (Tips.isLoading) {
                Tips.isLoading = false;
                wx.hideLoading();
            }
        }
    }, {
        key: "share",
        value: function share(title, url, desc) {
            return {
                title: title,
                path: url,
                desc: desc,
                success: function success(res) {
                    Tips.toast("分享成功");
                }
            };
        }
    } ]);
    return Tips;
}();

/**
 * 静态变量，是否加载中
 */ exports["default"] = Tips;

Tips.isLoading = false;
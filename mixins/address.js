Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = void 0;

var _apis = require("./../request/apis.js");

var _constant = require("./../utils/constant.js");

var _tip = _interopRequireDefault(require("./../utils/tip.js"));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

var _default = {
    data: {
        mixin: "address"
    },
    methods: {
        //获取地理位置授权
        getLocationAuth: function getLocationAuth() {
            var self = this;
            wx.getSetting({
                success: function success(res) {
                    // res.authSetting['scope.userLocation']
                    // undefined：初始化进入该页面 | false：非初始化进入该页面,且未授权 | true：地理位置授权
                    if (res.authSetting["scope.userLocation"] != undefined && res.authSetting["scope.userLocation"] != true) {
                        wx.showModal({
                            title: "请求授权当前位置",
                            content: "你的位置信息将用于小程序同城疫苗秒杀数据展示",
                            //秒苗需要获取您的地理位置，请点击确定同意授权
                            success: function success(res) {
                                if (res.cancel) {
                                    //重定向到位置授权页
                                    self.toAuthAddress();
                                } else if (res.confirm) {
                                    wx.openSetting({
                                        success: function success(dataAu) {
                                            if (dataAu.authSetting["scope.userLocation"] == true) {
                                                _tip["default"].success("授权成功");
                                                //再次授权，调用wx.getLocation的API
                                                                                                self.getLocation();
                                            } else {
                                                _tip["default"].toast("授权失败");
                                                //重定向到位置授权页
                                                                                                self.toAuthAddress();
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        //调用wx.getLocation的API
                        self.getLocation();
                    }
                }
            });
        },
        //获取地理位置
        getLocation: function getLocation(callback) {
            var self = this;
            _tip["default"].loading("定位获取中");
            wx.getLocation({
                type: "gcj02",
                //返回可以用于wx.openLocation的经纬度
                success: function success(res) {
                    if (res) {
                        var params = {
                            lat: res.latitude,
                            lng: res.longitude
                        };
                        // axios 解析经纬度具体地址
                                                (0, _apis.apiGeocoder)(params).then(function(res) {
                            var app = getApp().$wepy;
                            if (res.data.code == _constant.CODE_SUCCESS) {
                                var resData = res.data.data;
                                var address_id = resData.id;
                                // 区域地址码分割
                                                                if (!resData.pId && address_id && address_id.length >= 4) {
                                    resData.pId = address_id.substr(0, 2);
                                    // 省id
                                                                        resData.cId = address_id.substr(0, 4);
                                    // 城市id
                                                                }
                                try {
                                    // 缓存城市地址
                                    wx.setStorage({
                                        key: "cache_adress",
                                        data: resData,
                                        success: function success(res) {},
                                        fail: function fail(err) {
                                            console.log(err);
                                        },
                                        complete: function complete(res) {
                                            // 城市地理位置获取后, 为app定义一个回调，用于page页面接口执行先后顺序的判断
                                            if (app.cbAdressCallBack && typeof app.cbAdressCallBack == "function") {
                                                app.cbAdressCallBack();
                                            }
                                        }
                                    });
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    console.log(e);
                                }
                            } else {
                                // 城市地理位置获取后, 为app定义一个回调
                                if (app.cbAdressCallBack && typeof app.cbAdressCallBack == "function") {
                                    app.cbAdressCallBack();
                                }
                            }
                            // 如果有回调则执行回调函数
                                                        if (callback && typeof callback == "function") {
                                callback();
                            }
                            // 关闭loading提示
                                                        _tip["default"].loaded();
                        });
                    }
                    _tip["default"].loaded();
                },
                fail: function fail() {
                    // 关闭loading提示
                    _tip["default"].loaded();
                    //重定向到位置授权页
                                        self.toAuthAddress();
                }
            });
        },
        //重定向到授权位置页wx.redirectTo
        toAuthAddress: function toAuthAddress() {
            wx.navigateTo({
                url: "/pages/address/authAddress"
            });
        }
    },
    created: function created() {}
};

exports["default"] = _default;
Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = void 0;

var _index = require("./../config/index.js");

var _apis = require("./../request/apis.js");

var _tip = _interopRequireDefault(require("./../utils/tip.js"));

var _weappCookie = _interopRequireDefault(require("./../vendor.js")(2));

var _eventHub = _interopRequireDefault(require("./../common/eventHub.js"));

var _constant = require("./../utils/constant.js");

var _address = _interopRequireDefault(require("./address.js"));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

var Log = require("./../utils/log.js");

var flag = false;

// 登录接口调用旗帜，避免方法重复调用
var _default = {
    data: {
        // tabbar页面
        tabbar_pages: [ "/pages/index/index", "/pages/mine/mine" ]
    },
    mixins: [ _address["default"] ],
    methods: {
        /**
     * 获取用户信息,信息不存在则唤醒授权
     * object     回调操作对象
     * method     回调操作对象的函数
     * return     有用户数据直接返回, 则回调调用者
     */
        get_user_info: function get_user_info(object, method) {
            var user = this.get_user_cache_info();
            if (!user) {
                // 唤醒用户授权
                this.user_login(object, method);
                return false;
            } else {
                return user;
            }
        },
        /**
     * 从缓存获取用户信息
     */
        get_user_cache_info: function get_user_cache_info() {
            var user = wx.getStorageSync("cache_user_info") || null;
            if (user == null) {
                return false;
            }
            return user;
        },
        /**
     * 用户登录
     * object     回调操作对象
     * method     回调操作对象的函数
     * auth_data  授权数据
     */
        user_auth_login: function user_auth_login(object, method) {
            var self = this;
            //检查登录态是否过期
                        wx.checkSession({
                success: function success() {
                    var openid = wx.getStorageSync("cache_open_id") || null;
                    if (openid == null) {
                        self.wx_login(object, method);
                    } else {//session 未过期，并且在本生命周期一直有效
                    }
                },
                fail: function fail() {
                    self.wx_login(object, method);
                }
            });
        },
        /**
     * 用户登录
     * object     回调操作对象
     * method     回调操作对象的函数
     * auth_data  授权数据
     */
        user_login: function user_login(object, method) {
            var self = this;
            //var openid = wx.getStorageSync('cache_open_id') || null;
            // 新版getUserInfo接口不弹弹框，不包含微信userInfo信息
                        wx.getUserInfo({
                withCredentials: true,
                // 为true时,此前有调用过wx.login且登录态尚未过期,此时返回的数据会包含encryptedData,iv等敏感信息；
                success: function success(res) {
                    if (res && res.userInfo) {
                        // 解密用户信息
                        self.getWxappUserInfo(res);
                    } else {//用户拒绝停留在原界面
                    }
                },
                fail: function fail(err) {
                    console.log(err);
                    // 未授权，去登录页
                    // self.login_to_auth();
                                }
            });
        },
        // 解密用户信息
        getWxappUserInfo: function getWxappUserInfo(response) {
            var self = this;
            var userInfo = wx.getStorageSync("cache_wx_user_data") || null;
            var hasUserInfo = wx.getStorageSync("cache_hasUserInfo") || null;
            // 解密用户信息
                        (0, _apis.apiWxappUserInfo)({
                minaId: 10,
                encryptedData: response.encryptedData,
                iv: response.iv
            }).then(function(r) {
                var resCode = r.data.code;
                if (resCode == _constant.CODE_SUCCESS) {
                    var data = r.data.data;
                    var register = data.register, hasMobile = data.hasMobile, hasLinkman = data.hasLinkman;
                    Log.info("apiWxappUserInfo用戶数据", JSON.stringify(data));
                    if (!userInfo || !hasUserInfo) {
                        //缓存cache_user_register_status
                        wx.setStorage({
                            key: "cache_user_register_status",
                            data: data,
                            success: function success() {
                                // 未授权，去登录页, 获取微信用户信息
                                self.login_to_auth();
                            },
                            fail: function fail() {
                                _tip["default"].toast("用户注册状态信息缓存失败");
                            }
                        });
                    } else {
                        // 根据用户类型走不同的业务流程
                        self.user_type_process(register, hasMobile, hasLinkman);
                    }
                } else {
                    var msg = res.data.msg ? res.data.msg : "请求异常,请稍后重试！";
                    _tip["default"].toast(msg);
                    Log.info("apiWxappUserInfo接口CODE(NO-SUCCESS):", res);
                }
            });
        },
        /**
     * 微信登录
     * object     回调操作对象
     * method     回调操作对象的函数
     * auth_data  用户认证参数
     */
        wx_login: function wx_login(object, method) {
            var self = this;
            if (flag) return false;
            flag = true;
            // 避免接口重复调用
                        var cache_login_token = wx.getStorageSync("cache_login_token") || null;
            if (cache_login_token && cache_login_token != null) {
                // 清除上次失效token
                wx.removeStorage({
                    key: "cache_login_token"
                });
            }
            wx.login({
                success: function success(res) {
                    var Code = res.code;
                    if (Code) {
                        var params = {
                            code: Code,
                            minaId: 10
                        };
                        var header = {
                            "Content-Type": "application/x-www-form-urlencoded"
                        };
                        (0, _apis.wxappLogin)(params, header).then(function(res) {
                            var resCode = res.data.code;
                            if (resCode == _constant.CODE_SUCCESS) {
                                var resData = res.data.data;
                                var openId = resData.openId;
                                wx.uma.setOpenid(openId);
                                //使用用户openid进行统计
                                                                Log.info("wxappLogin用戶数据", JSON.stringify(resData));
                                //缓存openid
                                                                wx.setStorage({
                                    key: "cache_open_id",
                                    data: openId
                                });
                                // 未注册的新用户，需清空缓存, 回首页
                                                                if (!resData.register || !resData.hasMobile) {
                                    try {
                                        wx.clearStorageSync();
                                    } catch (err) {
                                        err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                                        console.log(err);
                                    }
                                    // 回首页
                                                                        wx.switchTab({
                                        url: "/pages/index"
                                    });
                                }
                                //缓存token
                                                                if (res.cookies || res.header["Set-Cookie"]) {
                                    var token = _weappCookie["default"].get("_xzkj_") || null;
                                    wx.setStorage({
                                        key: "cache_login_token",
                                        data: token,
                                        success: function success(res) {
                                            // 从缓存中取地址信息
                                            var cache_adress = wx.getStorageSync("cache_adress") || null;
                                            // 获取token后,如果地址信息存在,则刷新页面，不存在则重新获取地理位置
                                                                                        if (cache_adress && cache_adress != null) {
                                                var page = getCurrentPages().pop();
                                                if (page == undefined || page == null) return;
                                                page.onLoad(page.options);
                                                //获取新token，重置cache_clear_token状态
                                                // wx.setStorage({
                                                //   key: 'cache_clear_token',
                                                //   data: false, 
                                                // });
                                                                                        } else {
                                                //再获取地理位置（经纬度换城市的接口需要带token）
                                                _address["default"].methods.getLocationAuth();
                                            }
                                        }
                                    });
                                }
                            } else {
                                var msg = res.data.msg ? res.data.msg : "请求异常,请稍后重试！";
                                _tip["default"].toast(msg);
                                Log.info("wxappLogin接口CODE(NO-SUCCESS)", res);
                            }
                            flag = false;
                            // 重置状态
                                                }, function(err) {
                            _tip["default"].toast(err);
                            Log.info("wxappLogin接口(err)", err);
                        });
                    }
                },
                fail: function fail(err) {
                    _tip["default"].toast("fail:" + err);
                    Log.info("wx.login接口(err)", err);
                }
            });
        },
        /**
     * 跳转到登录页面授权
     */
        login_to_auth: function login_to_auth() {
            // 如果是tabbar页面, 登录弹框弹出时隐藏tabbar
            var self = this;
            if (self.is_tabbar_pages()) {
                wx.hideTabBar({
                    aniamtion: true
                });
            }
            // 显示登录弹框
                        self.isShowLogin = true;
        },
        /**
     * 当前地址是否存在tabbar中
     */
        is_tabbar_pages: function is_tabbar_pages() {
            var temp_tabbar_pages = this.tabbar_pages;
            var pages = getCurrentPages();
            var currPage, url;
            if (pages && pages.length) {
                currPage = pages[pages.length - 1];
                url = currPage.route;
            } else {
                return false;
            }
            if (url && url.indexOf("?") == -1) {
                var value = url;
            } else {
                var temp_str = url.split("?");
                var value = temp_str[0];
            }
            if ((value || null) == null) {
                return false;
            }
            for (var i in temp_tabbar_pages) {
                if (temp_tabbar_pages[i] == value) {
                    return true;
                }
            }
            return false;
        },
        /*
     * 用户类型判断（注意参数先后顺序）
     * register     是否是老用户
     * hasMobile    是否有手机号
     * hasLinkman   是否有联系人
     * object       当前this对象
     * callback     是否有回调函数
     */
        user_type_process: function user_type_process(register, hasMobile, hasLinkman) {
            var self = this;
            //如果是老用户、有手机号且有联系人——>正常业务
                        if (register && hasMobile && hasLinkman) {
                _tip["default"].toast("登录成功");
                return false;
            }
            //如果是老用户、有手机号、但没有联系人——>填个人信息
                        if (register && hasMobile && !hasLinkman) {
                return wx.redirectTo({
                    url: "/pages/member/memberEdit?isFirst=true"
                });
            }
            //如果是老用户且没有联系人——>获取手机号认证
                        if (!hasMobile) {
                return wx.navigateTo({
                    url: "/pages/login/authPhone"
                });
            }
        }
    },
    created: function created() {
        var self = this;
        _eventHub["default"].$on("toggle-login-modal", function(status) {
            self.isShowLogin = status;
        });
    }
};

exports["default"] = _default;
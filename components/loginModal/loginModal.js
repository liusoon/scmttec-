var _core = _interopRequireDefault(require("./../../vendor.js")(1));

var _x = require("./../../vendor.js")(6);

var _store = _interopRequireDefault(require("./../../store/index.js"));

var _login = _interopRequireDefault(require("./../../mixins/login.js"));

var _tip = _interopRequireDefault(require("./../../utils/tip.js"));

var _constant = require("./../../utils/constant.js");

var _apis = require("./../../request/apis.js");

var _eventHub = _interopRequireDefault(require("./../../common/eventHub.js"));

var _index = require("./../../config/index.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

var Log = require("./../../utils/log.js");

_core["default"].component({
    props: {
        showLoginModal: false
    },
    mixins: [ _login["default"] ],
    //混入login
    data: {
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        canIUseGetUserProfile: false,
        staticImg: {
            logo: _index.imageRoot + "/icon-logo.png"
        }
    },
    computed: {},
    created: function created() {
        // 通过判断该API是否存在来判断是否支持用户使用的基础库版本
        if (wx.getUserProfile) {
            this.canIUseGetUserProfile = true;
        }
    },
    methods: {
        /**
     * 登录授权事件
     */
        getuserInfo: function getuserInfo(e) {
            var self = this;
            var detail = e.$wx.detail;
            var register_status = wx.getStorageSync("cache_user_register_status") || false;
            // 用户注册流程状态
            //按钮点击量统计
                        this.$app.$options.globalData.uma.trackEvent("anthLoginBtn");
            _tip["default"].loading("登录中");
            // 新版本getuserinfo接口中的userInfo为匿名的用户个人信息
                        if (detail && detail.userInfo) {
                // 解密用户信息
                (0, _apis.apiWxappUserInfo)({
                    minaId: 10,
                    encryptedData: detail.encryptedData,
                    iv: detail.iv
                }).then(function(res) {
                    var resCode = res.data.code;
                    if (resCode == _constant.CODE_SUCCESS) {
                        var data = res.data.data;
                        var register = data.register, hasMobile = data.hasMobile, hasLinkman = data.hasLinkman;
                        //关闭登录弹框
                                                self.closeModel();
                        //缓存wx_user_data
                                                wx.setStorage({
                            key: "cache_wx_user_data",
                            data: detail.userInfo,
                            success: function success(res) {
                                // 缓存用户信息状态
                                wx.setStorage({
                                    key: "cache_hasUserInfo",
                                    data: true
                                });
                                //缓存cache_user_register_status
                                                                wx.setStorage({
                                    key: "cache_user_register_status",
                                    data: data,
                                    success: function success() {
                                        // 根据用户类型走不同的业务流程
                                        self.user_type_process(register, hasMobile, hasLinkman);
                                    },
                                    fail: function fail() {
                                        _tip["default"].toast("用户注册状态信息缓存失败");
                                    }
                                });
                            },
                            fail: function fail() {
                                _tip["default"].toast("用户信息缓存失败");
                            }
                        });
                    }
                    _tip["default"].loaded();
                });
            } else {
                //用户按了拒绝按钮停留在原界面
                _tip["default"].loaded();
                Log.info("getuserinfo数据失败:", detail);
            }
        },
        // 基础库 2.10.4 开始支持getUserProfile接口（获取用户信息，每次调用均会弹出弹框）
        getUserProfile: function getUserProfile(e) {
            var self = this;
            var userInfo = wx.getStorageSync("cache_wx_user_data") || null;
            // 缓存的用户数据
                        var hasUserInfo = wx.getStorageSync("cache_hasUserInfo") || false;
            // 是否有用户信息
                        var register_status = wx.getStorageSync("cache_user_register_status") || false;
            // 用户注册流程状态
            //按钮点击量统计
                        this.$app.$options.globalData.uma.trackEvent("anthLoginBtn");
            // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
            // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
                        if (!userInfo || !hasUserInfo) {
                wx.getUserProfile({
                    desc: "用于完善用户资料",
                    // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                    success: function success(r) {
                        console.log(r);
                        //关闭登录弹框
                                                self.closeModel();
                        //缓存wx_user_data
                                                wx.setStorage({
                            key: "cache_wx_user_data",
                            data: r.userInfo,
                            success: function success(res) {
                                // 缓存用户信息状态
                                wx.setStorage({
                                    key: "cache_hasUserInfo",
                                    data: true
                                });
                                if (register_status) {
                                    var register = register_status.register, hasMobile = register_status.hasMobile, hasLinkman = register_status.hasLinkman;
                                    // 根据用户类型走不同的业务流程
                                                                        self.user_type_process(register, hasMobile, hasLinkman);
                                } else {
                                    _tip["default"].toast("用户信息缓存失败");
                                }
                            },
                            fail: function fail() {
                                _tip["default"].toast("用户信息缓存失败");
                            }
                        });
                    }
                });
            } else {
                if (register_status) {
                    var register = register_status.register, hasMobile = register_status.hasMobile, hasLinkman = register_status.hasLinkman;
                    // 根据用户类型走不同的业务流程
                                        self.user_type_process(register, hasMobile, hasLinkman);
                }
            }
        },
        /*关闭登录弹框*/
        closeModel: function closeModel() {
            if (this.is_tabbar_pages()) {
                // 显示tabbar
                wx.showTabBar({
                    aniamtion: true
                });
            }
            this.showLoginModal = false;
            _eventHub["default"].$emit("toggle-login-modal", false);
        },
        /*路由跳转*/
        jumpRoute: function jumpRoute(type) {
            if (!type) return false;
            wx.navigateTo({
                url: "/package/pages/outurl/treaty?type=" + type
            });
        }
    },
    watch: {}
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "52-0": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.closeModel.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "52-1": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.getUserProfile.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "52-2": {
            getuserinfo: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.getuserInfo.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "52-3": {
            tap: function proxy() {
                var _vm = this;
                return function() {
                    _vm.jumpRoute("userAgreement");
                }();
            }
        },
        "52-4": {
            tap: function proxy() {
                var _vm = this;
                return function() {
                    _vm.jumpRoute("privacyPolicy");
                }();
            }
        }
    },
    models: {},
    refs: undefined
});
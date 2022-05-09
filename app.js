var _core = _interopRequireDefault(require("./vendor.js")(1));

var _tip = _interopRequireDefault(require("./utils/tip.js"));

var _login = _interopRequireDefault(require("./mixins/login.js"));

var _umtrackWx = _interopRequireDefault(require("./vendor.js")(0));

var _apis = require("./request/apis.js");

var _constant = require("./utils/constant.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

// import wepyRedux from '@wepy/redux'
// wepy.use(wepyRedux)
//友盟数据统计
// 初始化uma友盟数据统计
_umtrackWx["default"].init({
    appKey: "5ef7f3a7978eea088379de9a",
    //由友盟分配的APP_KEY
    useOpenid: true,
    // 是否使用openid进行统计，此项为false时将使用友盟+随机ID进行用户统计。使用openid来统计微信小程序的用户，会使统计的指标更为准确，对系统准确性要求高的应用推荐使用OpenID。
    autoGetOpenid: false,
    // 是否需要通过友盟后台获取openid，如若需要，请到友盟后台设置appId及secret
    debug: false,
    //是否打开调试模式
    uploadUserInfo: false,
    // 自动上传用户信息，设为false取消上传，默认为false
    enableVerify: false
});

_core["default"].app({
    hooks: {
        // App 级别 hook，对整个 App 生效
        // 同时存在 Page hook 和 App hook 时，优先执行 Page hook，返回值再交由 App hook 处
        "before-setData": function beforeSetData(dirty) {
            return dirty;
        }
    },
    // 全局变量
    globalData: {
        uma: _umtrackWx["default"],
        // 将uma模块绑定在gloabalData下，以便后续使用
        api: {},
        location: "",
        //地理位置经纬度信息
        address: "",
        //地理位置名称
        isLogin: false,
        userInfo: null,
        timeDiff: 0
    },
    mixins: [ _login["default"] ],
    config: {},
    constructor: function constructor() {
        //super();
        this.use("requestfix");
        //同时发起多个request时候的异常修复
                this.use("promisify");
        //开启异步 async/await
        },
    onLaunch: function onLaunch() {
        var self = this;
        // 更新新版本
                self.updateManager();
        // 如果缓存中没有token值或者token为空则调用登录
        // 接口请求在token失效时，会再次调用wx_login重获token
                var cache_login_token = wx.getStorageSync("cache_login_token") || null;
        if (!cache_login_token || cache_login_token == null) {
            // 调用wx.login()获的code码再换token
            self.wx_login();
        }
    },
    methods: {
        // 检测新版本
        updateManager: function updateManager() {
            if (wx.canIUse("getUpdateManager")) {
                var updateManager = wx.getUpdateManager();
                updateManager.onCheckForUpdate(function(res) {
                    console.log("onCheckForUpdate====", res);
                    // 请求完新版本信息的回调
                                        if (res.hasUpdate) {
                        console.log("res.hasUpdate====");
                        updateManager.onUpdateReady(function() {
                            wx.showModal({
                                title: "更新提示",
                                content: "检测到新版本，是否重启小程序？",
                                success: function success(res) {
                                    console.log("success====", res);
                                    // res: {errMsg: "showModal: ok", cancel: false, confirm: true}
                                                                        if (res.confirm) {
                                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                                        updateManager.applyUpdate();
                                    }
                                }
                            });
                        });
                        updateManager.onUpdateFailed(function() {
                            // 新的版本下载失败
                            wx.showModal({
                                title: "更新提示",
                                content: "新版本下载失败，请您删除当前小程序，重新搜索打开哟~"
                            });
                        });
                    }
                });
            }
        },
        /*获取当前服务器时间*/
        getNowTime: function getNowTime() {
            var self = this;
            var timeDiff = 0;
            var d = new Date();
            //创建一个Date对象
                        var localTime = d.getTime();
            var localOffset = (d.getTimezoneOffset() + 480) * 6e4;
            //获得当地时间偏移的毫秒数（时区差）
            // 存储时区差毫秒数
                        wx.setStorage({
                key: "cache_timezone_offset",
                data: localOffset
            });
            console.log("本地与东八区（北京）时区差：", localOffset + "ms");
            (0, _apis.apiSkNow)().then(function(res) {
                if (res.data.code == _constant.CODE_SUCCESS) {
                    var serverTime;
                    var _d = new Date();
                    //创建一个Date对象
                                        var _localTime = _d.getTime();
                    var data = res.data.data;
                    serverTime = new Date(data).getTime();
                    // 计算本地时间与服务器时间差值
                                        timeDiff = parseInt((_localTime - serverTime) / 1e3);
                    // 时间差(秒)
                                }
                console.log("本机与当地标准时间差：", timeDiff + "s");
                // 存储时间差秒数
                                wx.setStorage({
                    key: "cache_time_diff",
                    data: timeDiff
                });
            }, function(err) {
                console.log(err);
            });
        },
        /*热启动时删除接种人缓存信息*/
        removeMembersStorage: function removeMembersStorage() {
            try {
                wx.removeStorageSync("memberList");
                wx.removeStorageSync("defaultMember");
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                console.log(e);
            }
        }
    },
    onShow: function onShow() {
        //console.log('app---onShow');
        // 获取当前服务器时间，计算时间差
        this.getNowTime();
        // 删除接种人缓存数据，防止用户在公众号更改用户信息，小程序端不能及时更新
                this.removeMembersStorage();
    },
    onHide: function onHide() {},
    // 当page没找到时，重定向到首页
    onPageNotFound: function onPageNotFound(res) {
        wx.switchTab({
            url: "/pages/index"
        });
    }
}, {
    info: {
        noPromiseAPI: []
    },
    handlers: {},
    models: {},
    refs: undefined
});
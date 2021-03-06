var _regeneratorRuntime2 = _interopRequireDefault(require("./../vendor.js")(3));

var _weappCookie = _interopRequireDefault(require("./../vendor.js")(2));

var _tip = _interopRequireDefault(require("./../utils/tip.js"));

var _login = _interopRequireDefault(require("./../mixins/login.js"));

var _constant = require("./../utils/constant.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}

function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}

var request = /* */ function() {
    var _ref = _asyncToGenerator(/* */ _regeneratorRuntime2["default"].mark(function _callee(url) {
        var params, type, header, cache_login_token, isOutTime, defaultHeader, promiseTask, _args = arguments;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                    type = _args.length > 2 ? _args[2] : undefined;
                    header = _args.length > 3 ? _args[3] : undefined;
                    cache_login_token = wx.getStorageSync("cache_login_token") || null;
                    defaultHeader = {
                        "Content-Type": "application/json",
                        tk: cache_login_token ? cache_login_token : ""
                    };
                    promiseTask = new Promise(function(resolve, reject) {
                        var requestTask = wx.request({
                            url: url,
                            method: type || "GET",
                            data: params,
                            header: header ? Object.assign(defaultHeader, header) : defaultHeader,
                            success: function success(res) {
                                isOutTime = false;
                                var resCode = res.data.code;
                                // ??????cookies
                                                                if (res.cookies || res.header["Set-Cookie"]) {
                                    var token = _weappCookie["default"].get("_xzkj_") || null;
                                    var _xxhm_ = _weappCookie["default"].get("_xxhm_") || null;
                                    //??????token
                                                                        if (token && token !== cache_login_token || !cache_login_token) {
                                        //cache_login_token = token;
                                        wx.setStorage({
                                            key: "cache_login_token",
                                            data: token
                                        });
                                    }
                                    // ??????userInfo
                                                                        if (_xxhm_ && _xxhm_ != null) {
                                        var userInfo = decodeURIComponent(_xxhm_);
                                        if (userInfo && userInfo != "") {
                                            userInfo = JSON.parse(userInfo);
                                            // ???????????????????????????????????????????????????????????????????????????
                                                                                        if (userInfo.mobile && userInfo.mobile != "") {
                                                //??????userInfo
                                                wx.setStorage({
                                                    key: "cache_user_info",
                                                    data: userInfo
                                                });
                                            }
                                            // ????????????????????????????????????
                                                                                        if (userInfo.name && userInfo.sex && userInfo.birthday && userInfo.regionCode) {
                                                //?????????????????????????????????????????????
                                                wx.setStorage({
                                                    key: "cache_fill_default_user",
                                                    data: "true"
                                                });
                                            } else {
                                                wx.setStorage({
                                                    key: "cache_fill_default_user",
                                                    data: "false"
                                                });
                                            }
                                        }
                                    }
                                }
                                // token??????or?????????
                                                                if (resCode == _constant.CODE_NOT_LOGIN) {
                                    // ????????????token,????????????
                                    if (cache_login_token && cache_login_token != null) {
                                        //Tip.confirm('????????????,??????????????????????????????', function() {
                                        // ????????????token?????????
                                        wx.removeStorage({
                                            key: "cache_login_token",
                                            complete: function complete(res) {
                                                //??????wx.login()????????????
                                                _login["default"].methods.wx_login(function() {
                                                    // ??????????????????page??????onLoad?????????????????????????????????
                                                    var page = getCurrentPages().pop();
                                                    if (page == undefined || page == null) return;
                                                    page.onLoad(page.options);
                                                });
                                            }
                                        });
                                        //})
                                                                        }
                                    resolve(res);
                                    return false;
                                }
                                // ?????????????????????
                                                                if (resCode == _constant.CODE_UID_NO_AUTH) {
                                    var msg = res.data.msg ? res.data.msg : "????????????????????????,????????????";
                                    // ?????????????????????
                                                                        setTimeout(function() {
                                        _tip["default"].toast(msg);
                                    }, 1500);
                                    resolve(res);
                                    return false;
                                }
                                // ?????????code?????????????????????
                                                                if (resCode != _constant.CODE_SUCCESS) {
                                    var _msg = res.data.msg ? res.data.msg : "????????????????????????,????????????";
                                    _tip["default"].toast(_msg);
                                }
                                resolve(res);
                            },
                            fail: function fail(err) {
                                _tip["default"].toast("????????????????????????,????????????");
                                reject(err);
                            }
                            // complete: function(res) {
                            //   if (isOutTime) {
                            //     Tip.loading('????????????????????????,????????????');
                            //   }
                            //   isOutTime = false;
                            //   resolve(res);
                            // }
                                                });
                        //requestTask.abort();
                        // requestTask.onHeadersReceived((res) => {
                        // })
                                        })["catch"](function(error) {
                        console.log(error);
                        //Tip.toast('????????????????????????,????????????');
                                        });
                    return _context.abrupt("return", promiseTask);

                  case 7:
                  case "end":
                    return _context.stop();
                }
            }
        }, _callee);
    }));
    return function request(_x) {
        return _ref.apply(this, arguments);
    };
}();

module.exports = {
    request: request
};
var window = {
    Number: Number,
    Array: Array,
    Date: Date,
    Error: Error,
    Math: Math,
    Object: Object,
    Function: Function,
    RegExp: RegExp,
    String: String,
    TypeError: TypeError,
    parseInt: parseInt,
    parseFloat: parseFloat,
    isNaN: isNaN
};

var global = window;

var process = {
    env: {}
};

(function(modules) {
    // The module cache
    var installedModules = {};
    // The require function
        function __wepy_require(moduleId) {
        // Check if module is in cache
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        // Create a new module (and put it into the cache)
                var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: false
        };
        // Execute the module function
                modules[moduleId].call(module.exports, module, module.exports, __wepy_require);
        // Flag the module as loaded
                module.loaded = true;
        // Return the exports of the module
                return module.exports;
    }
    // expose the modules object (__webpack_modules__)
        __wepy_require.m = modules;
    // expose the module cache
        __wepy_require.c = installedModules;
    // __webpack_public_path__
        __wepy_require.p = "/";
    // Load entry module and return exports
        module.exports = __wepy_require;
    return __wepy_require;
})([ 
/***** module 0 start *****/
/***** D:\ym_xcx\node_modules\umtrack-wx\lib\index.js *****/
function(module, exports, __wepy_require) {
    "use strict";
    var e, t, n = "[UMENG] -- ", a = (t = !1, function() {
        null === e && (e = new i());
        return e;
    });
    function i() {
        this.setDebug = function(e) {
            t = e;
        };
        this.d = function() {
            if (t) try {
                "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]);
                console.debug.apply(console, arguments);
            } catch (e) {}
        };
        this.i = function() {
            try {
                if (t) try {
                    "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]);
                    console.info.apply(console, arguments);
                } catch (e) {}
            } catch (e) {}
        };
        this.e = function() {
            if (t) try {
                "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]);
                console.error.apply(console, arguments);
            } catch (e) {}
        };
        this.w = function() {
            if (t) try {
                "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]);
                console.warn.apply(console, arguments);
            } catch (e) {}
        };
        this.v = function() {
            if (t) try {
                "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]);
                console.log.apply(console, arguments);
            } catch (e) {}
        };
        this.t = function() {
            if (t) try {
                console.table.apply(console, arguments);
            } catch (e) {}
        };
        this.tip = function() {
            try {
                "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]);
                console.log.apply(console, arguments);
            } catch (e) {}
        };
        this.tip_w = function(e) {
            try {
                console.log("%c " + n + e, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;");
            } catch (e) {}
        };
        this.err = function() {
            try {
                "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]);
                console.error.apply(console, arguments);
            } catch (e) {}
        };
    }
    var r, s = (r = e = null, function() {
        return r = r || new o();
    });
    function o() {
        var n = {};
        this.useOpenid = function() {
            return !!n.useOpenid;
        };
        this.useSwanid = function() {
            return !!n.useSwanid;
        };
        this.autoGetOpenid = function() {
            return !!n.autoGetOpenid;
        };
        this.appKey = function() {
            return n.appKey;
        };
        this.uploadUserInfo = function() {
            return n.uploadUserInfo;
        };
        this.enableVerify = function() {
            return n.enableVerify;
        };
        this.set = function(e) {
            n = e;
        };
        this.get = function() {
            return n;
        };
        this.setItem = function(e, t) {
            n[e] = t;
        };
        this.getItem = function(e) {
            return n[e];
        };
    }
    function c() {
        this.listeners = {};
        this.maxListener = 2;
    }
    c.prototype.addListener = c.prototype.on = function(e, t) {
        var n = this.listeners;
        n[e] && n[e].length >= this.maxListener ? console.error("监听器的最大数量是%d,您已超出限制", this.maxListener) : n[e] instanceof Array ? -1 === n[e].indexOf(t) && n[e].push(t) : n[e] = [].concat(t);
    };
    c.prototype.emit = function(e) {
        var t = Array.prototype.slice.call(arguments);
        t.shift();
        var n = this.listeners;
        n[e] instanceof Array && n[e].forEach(function(e) {
            e.apply(null, t);
        });
    };
    c.prototype.listeners = function(e) {
        return this.listeners[e];
    };
    c.prototype.setMaxListeners = function(e) {
        this.maxListener = e;
    };
    c.prototype.removeListener = function(e, t) {
        var n = this.listeners, t = (n[e] || []).indexOf(t);
        0 <= t && n[e].splice(t, 1);
    };
    c.prototype.removeAllListener = function(e) {
        this.listeners[e] = [];
    };
    c.prototype.once = function(n, i) {
        var r = this;
        this.on(n, function e() {
            var t = Array.prototype.slice.call(arguments);
            i.apply(null, t);
            r.removeListener(n, e);
        });
    };
    var u = new c(), f = 0, p = 1, l = new (function() {
        function e() {}
        e.prototype.setStorage = function(e, t, n) {
            wx.setStorage({
                key: e,
                data: t,
                success: function() {
                    "function" == typeof n && n(!0);
                },
                fail: function() {
                    "function" == typeof n && n(!1);
                }
            });
        };
        e.prototype.getStorage = function(t, n) {
            wx.getStorage({
                key: t,
                success: function(e) {
                    "function" == typeof n && n(e.data);
                },
                fail: function(e) {
                    a().w(t + ": " + e.errMsg);
                    "function" == typeof n && n();
                }
            });
        };
        e.prototype.removeStorage = function(e, t) {
            wx.removeStorage({
                key: e,
                success: function() {
                    "function" == typeof t && t(!0);
                },
                fail: function() {
                    "function" == typeof t && t(!1);
                }
            });
        };
        e.prototype.getSystemInfo = function(i) {
            wx.getSystemInfo({
                success: function(e) {
                    var t = {
                        model: e.model,
                        brand: e.brand,
                        pixelRatio: e.pixelRatio,
                        screenWidth: e.screenWidth,
                        screenHeight: e.screenHeight,
                        fontSizeSetting: e.fontSizeSetting,
                        platform: e.platform,
                        platformVersion: e.version,
                        platformSDKVersion: e.SDKVersion,
                        language: e.language,
                        deviceName: e.model,
                        OSVersion: e.system,
                        resolution: ""
                    }, n = e.system.split(" ");
                    Array.isArray(n) && (t.OS = n[0]);
                    n = Math.round(e.screenWidth * e.pixelRatio), e = Math.round(e.screenHeight * e.pixelRatio);
                    t.resolution = e < n ? n + "*" + e : e + "*" + n;
                    "function" == typeof i && i(t);
                },
                fail: function() {
                    "function" == typeof i && i();
                }
            });
        };
        e.prototype.getDeviceInfo = function(e) {
            "function" == typeof e && e("");
        };
        e.prototype.checkNetworkAvailable = function(t) {
            wx.getNetworkType({
                success: function(e) {
                    "function" == typeof t && t(e && "none" !== e.networkType);
                },
                fail: function() {
                    "function" == typeof t && t(!1);
                }
            });
        };
        e.prototype.getNetworkInfo = function(t) {
            wx.getNetworkType({
                success: function(e) {
                    "function" == typeof t && t({
                        networkAvailable: "none" !== e.networkType,
                        networkType: e.networkType
                    });
                },
                fail: function() {
                    "function" == typeof t && t();
                }
            });
        };
        e.prototype.getDeviceId = function(e) {
            e("");
        };
        e.prototype.getAdvertisingId = function(e) {
            "function" == typeof e && e("");
        };
        e.prototype.onNetworkStatusChange = function(t) {
            wx.onNetworkStatusChange(function(e) {
                "function" == typeof t && t(e.isConnected);
            });
        };
        e.prototype.request = function(e) {
            var t = e.success, n = e.fail, i = !1, r = null;
            e.success = function(e) {
                if (!i) {
                    r && clearTimeout(r);
                    "function" == typeof t && t(e);
                }
            };
            e.fail = function() {
                if (!i) {
                    r && clearTimeout(r);
                    "function" == typeof n && n(!1);
                }
            };
            wx.request(e);
            r = setTimeout(function() {
                r && clearTimeout(r);
                i = !0;
                "function" == typeof n && n(i);
            }, e.timeout || 5e3);
        };
        e.prototype.getSdkType = function() {
            return "wxmp";
        };
        e.prototype.getPlatform = function() {
            return "wx";
        };
        e.prototype.connectSocket = function(e) {
            wx.connectSocket(e);
        };
        e.prototype.closeSocket = function(e) {
            wx.closeSocket(e);
        };
        e.prototype.sendSocketMessage = function(e) {
            wx.sendSocketMessage(e);
        };
        e.prototype.onSocketOpen = function(e) {
            wx.onSocketOpen(e);
        };
        e.prototype.onSocketClose = function(e) {
            wx.onSocketClose(e);
        };
        e.prototype.onSocketMessage = function(e) {
            wx.onSocketMessage(e);
        };
        e.prototype.onSocketError = function(e) {
            wx.onSocketError(e);
        };
        e.prototype.getClipboard = function(t) {
            try {
                wx.getClipboardData({
                    success: function(e) {
                        "function" == typeof t && t(e.data);
                    },
                    fail: function() {
                        "function" == typeof t && t("");
                    }
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                a.e("读取clipboard发生错误", e);
            }
        };
        e.prototype.showModal = function(e) {
            try {
                wx.showModal(e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                a.e("展示Modal时发生错误", e);
            }
        };
        e.prototype.showToast = function(e) {
            try {
                wx.showToast(e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                a.e("showToast error", e);
            }
        };
        e.prototype.getUserInfo = function(t) {
            var n = {
                fail: function() {
                    t && t();
                },
                success: function(e) {
                    if (e && e.userInfo) {
                        e = e.userInfo;
                        t && t({
                            avatar: e.avatarUrl,
                            nickName: e.nickName,
                            gender: e.gender,
                            country: e.country,
                            province: e.province,
                            city: e.city,
                            language: e.language
                        });
                    }
                }
            };
            try {
                wx.getSetting({
                    success: function(e) {
                        e.authSetting["scope.userInfo"] && wx.getUserInfo(n);
                    },
                    fail: function() {
                        t();
                    }
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                a.e("getUserInfo error", e);
            }
        };
        e.prototype.getAppInfoSync = function() {
            if (wx.getAccountInfoSync) {
                var e = wx.getAccountInfoSync(), e = e && e.miniProgram ? e.miniProgram : {};
                return {
                    appId: e.appId,
                    appEnv: e.envVersion,
                    appVersion: e.version
                };
            }
            return {};
        };
        e.prototype.onShareAppMessage = function(e) {
            wx.onShareAppMessage(e);
        };
        e.prototype.shareAppMessage = function(e) {
            wx.shareAppMessage(e);
        };
        return e;
    }())(), d = function(e, t) {
        return (d = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    function h(e, t) {
        d(e, t);
        function n() {
            this.constructor = e;
        }
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
    }
    var g = {
        SESSION_INTERVAL: 3e4,
        LOG_URL: "https://umini.shujupie.com/wxm_logs",
        GET_OPENID_URL: "https://umini.shujupie.com/uminiprogram_logs/wx/getuut",
        USERINFO_URL: "https://umini.shujupie.com/uminiprogram_logs/comm/uif",
        DEVICE_INFO_KEY: "device_info",
        ADVERTISING_ID: "mobile_ad_id",
        ANDROID_ID: "android_id",
        CURRENT_SESSION: "current_session",
        SESSION_PAUSE_TIME: "session_pause_time",
        EVENT_SEND_DEFAULT_INTERVAL: 15e3,
        EVENT_LAST_SEND_TIME: "last_send_time",
        MAX_EVENTID_LENGTH: 128,
        MAX_PROPERTY_KEY_LENGTH: 256,
        MAX_PROPERTY_KEYS_COUNT: 100,
        REPORT_POLICY: "report_policy",
        REPORT_INTERVAL_TIME: "report_interval_time",
        REPORT_POLICY_START_SEND: "1",
        REPORT_POLICY_INTERVAL: "6",
        IMPRINT: "imprint",
        SEED_VERSION: "1.0.0",
        IMPL_VERSION: "2.4.14",
        ALIPAY_AVAILABLE_VERSION: "10.1.52",
        SHARE_PATH: "um_share_path",
        SHARES: "shares",
        REQUESTS: "requests",
        UUID: "um_uuid",
        UUID_SUFFIX: "ud",
        OPENID: "um_od",
        UNIONID: "um_unid",
        ALIPAYID: "um_alipayid",
        USERID: "um_userid",
        PROVIDER: "um_provider",
        SWANID: "um_swanid",
        ANONYMOUSID: "um_anonymousid",
        LAUNCH_OPTIONS: "LAUNCH_OPTIONS",
        UM_SSRC: "_um_ssrc",
        USER_INFO: "user_info",
        IS_ALIYUN: !1,
        ALIYUN_URL: "serverless.huoban.youmeng.network.forward"
    };
    var v, y, _ = {
        isNumber: function(e) {
            return !Number.isNaN(parseInt(e, 10));
        },
        compareVersion: function(e, t) {
            for (var n = String(e).split("."), i = String(t).split("."), r = 0; r < Math.max(n.length, i.length); r++) {
                var o = parseInt(n[r] || 0, 10), s = parseInt(i[r] || 0, 10);
                if (s < o) return 1;
                if (o < s) return -1;
            }
            return 0;
        },
        getRandomStr: function(e) {
            for (var t = "", n = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], i = 0; i < Number(e); i++) t += n[Math.round(Math.random() * (n.length - 1))];
            return t;
        },
        clone: function(e) {
            return JSON.parse(JSON.stringify(e));
        },
        startsWith: function(e, t) {
            return !(!e || !t || 0 === t.length || t.length > e.length) && e.substr(0, t.length) === t;
        },
        endsWith: function(e, t) {
            return !(!t || 0 === e.length || t.length > e.length) && e.substring(e.length - t.length) === t;
        },
        assign: function(e) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (i) for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
            }
            return t;
        },
        deepEqual: function e(t, n) {
            if (t === n) return !0;
            if (t && "object" == typeof t && n && "object" == typeof n) {
                if (Object.keys(t).length !== Object.keys(n).length) return !1;
                for (var i in t) {
                    if (Object.prototype.hasOwnProperty.call(n, i)) return !1;
                    if (!e(t[i], n[i])) return !1;
                }
                return !0;
            }
            return !1;
        },
        trimStart: function(e, t) {
            if (!e) return "";
            if ("string" == typeof t && t.length) {
                t = new RegExp("^" + t + "*");
                e = e.replace(t, "");
            } else e = e.replace(/^s*/, "");
            return e;
        },
        trimEnd: function(e, t) {
            if (!e) return "";
            var n, i;
            if ("string" == typeof t && t.length) {
                n = new RegExp(t);
                i = e.length;
                for (;n.test(e.charAt(i)); ) --i;
                return e.slice(0, i + 1);
            }
            n = /s/;
            i = e.length - 1;
            for (;n.test(e.charAt(i)); ) --i;
            return e.slice(0, i + 1);
        }
    }, m = function(e) {
        h(t, e);
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        t.prototype.getOpenIdAsync = function(t, n) {
            var i = this;
            wx.login({
                success: function(e) {
                    e.code ? l.request({
                        url: g.GET_OPENID_URL,
                        method: "GET",
                        data: {
                            key: t,
                            code: e.code
                        },
                        success: function(e) {
                            if (e && 200 === e.statusCode && e.data && e.data.data) {
                                e = e.data.data;
                                i.setOpenid(e.oid);
                                i.setUnionid(e.uid);
                                return n && n(!0);
                            }
                            n && n();
                        },
                        fail: function(e) {
                            a().v("wx request failed...", e);
                            n && n();
                        }
                    }) : n && n();
                },
                fail: function() {
                    n && n();
                }
            });
        };
        return t;
    }(function(t) {
        h(e, t);
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            e._openid = "";
            e._unionid = "";
            e._useOpenid = !1;
            return e;
        }
        e.prototype.initID = function(t) {
            var n = this;
            n._idType = n._useOpenid ? "openid" : "uuid";
            a().v("id type: ", n._idType);
            l.getStorage(g.UNIONID, function(e) {
                n._unionid = e;
            });
            this._useOpenid ? l.getStorage(g.OPENID, function(e) {
                n._openid = e;
                t && t();
            }) : t && t();
        };
        e.prototype.setUseOpenid = function(e) {
            this._useOpenid = e;
        };
        e.prototype.setOpenid = function(e) {
            if (!this._openid && e) {
                this._openid = e;
                l.setStorage(g.OPENID, e);
            }
        };
        e.prototype.setUnionid = function(e) {
            if (!this._unionid && e) {
                this._unionid = e;
                l.setStorage(g.UNIONID, e);
            }
        };
        e.prototype.getIdTracking = function() {
            var e = t.prototype.getIdTracking.call(this);
            this._openid && (e.openid = this._openid);
            this._unionid && (e.unionid = this._unionid);
            this._userid && (e.userid = this._userid);
            return e;
        };
        e.prototype.getId = function() {
            return this._useOpenid ? this._openid : this._uuid;
        };
        return e;
    }(function() {
        function e() {
            this._uuid = "";
            this._userid = "";
            this._provider = "";
            this._idType = "";
        }
        e.prototype.createUUID = function() {
            return _.getRandomStr(10) + Date.now() + _.getRandomStr(7) + g.UUID_SUFFIX;
        };
        e.prototype.initUUID = function(t) {
            var n = this;
            l.getStorage(g.UUID, function(e) {
                if (e) n._uuid = e; else {
                    n._uuid = n.createUUID();
                    l.setStorage(g.UUID, n._uuid);
                }
                t && t(e);
            });
        };
        e.prototype.initUserid = function() {
            var t = this;
            l.getStorage(g.USERID, function(e) {
                if (!t._userid && e) {
                    t._userid = e;
                    a().v("userId is ", e);
                }
            });
            l.getStorage(g.PROVIDER, function(e) {
                if (!t._provider && e) {
                    t._provider = e;
                    a().v("provider is ", e);
                }
            });
        };
        e.prototype.init = function(e) {
            var t = this;
            t.initUUID(function() {
                t.initUserid();
                t.initID(e);
            });
        };
        e.prototype.setUserid = function(e, t) {
            if (!this._userid && e) {
                this._userid = e;
                this._provider = t;
                l.setStorage(g.USERID, e);
                l.setStorage(g.PROVIDER, t);
            }
        };
        e.prototype.getUserId = function() {
            return this._userid;
        };
        e.prototype.getProvider = function() {
            return this._provider;
        };
        e.prototype.getIdType = function() {
            return this._idType;
        };
        e.prototype.getIdTracking = function() {
            var e = {};
            this._uuid && (e.uuid = this._uuid);
            this._userid && (e.userid = this._userid);
            return e;
        };
        return e;
    }())), S = function() {
        return v = v || new m();
    }, I = function() {
        return y = y || new E();
    };
    function E() {
        var t = !1, n = null, i = [];
        this.addPageStart = function(e) {
            if (e && !t) {
                n = {
                    ts: Date.now(),
                    path: e,
                    page_name: e
                };
                t = !0;
            }
        };
        this.addPageEnd = function(e) {
            if (t && e && n && e === n.page_name) {
                e = Date.now() - n.ts;
                n.duration = Math.abs(e);
                i.push(n);
                n = null;
                t = !1;
            }
        };
        this.get = function() {
            return i;
        };
        this.getCurrentPage = function() {
            return n;
        };
        this.clear = function() {
            i.length = 0;
        };
    }
    var O = {};
    function A() {
        return function(e) {
            var t, n = [];
            for (t in e) "_um_ssrc" !== t && "_um_sts" !== t && n.push(t + "=" + e[t]);
            return n.join("&");
        }(O);
    }
    var w, N, T, k = function() {
        return w = w || new R();
    };
    function R() {
        return {
            add: function(e, t) {
                a().v("share origin: %o", e);
                var n = {
                    title: e && e.title,
                    path: e && e.path && e.path.split("?")[0],
                    _um_sts: Date.now()
                };
                n.path && 1 < n.path.length && _.startsWith(n.path, "/") && (n.path = _.trimStart(n.path, "/"));
                var i = e.path || "", r = S().getId();
                if (r) {
                    var o = T.split(","), s = (o = o.filter(function(e) {
                        return 0 < e.length;
                    })).indexOf(r);
                    0 <= s && (o = o.slice(0, s));
                    o.length < 3 && o.push(r);
                    r = o.join(",");
                    -1 !== i.indexOf("?") ? i += "&_um_ssrc=" + r : i += "?_um_ssrc=" + r;
                    o = Date.now();
                    i += "&_um_sts=" + o;
                    if (t) {
                        t = A(), t = t ? t + "&_um_ssrc=" + r + "&_um_sts=" + o : "_um_ssrc=" + r + "&_um_sts=" + o;
                        e.query = e.query ? e.query + "&_um_ssrc=" + r + "&_um_sts=" + o : t;
                    } else e.path = i;
                    n._um_ssrc = r;
                    n._um_sts = o;
                }
                N.push(n);
                a().v("share: %o", e);
                return e;
            },
            setShareSource: function(e) {
                T = e;
            },
            clear: function() {
                N.length = 0;
            },
            get: function() {
                return N;
            }
        };
    }
    var U, b, L, P, D = {
        stringify: function(e) {
            if (e) try {
                return JSON.stringify(e);
            } catch (e) {}
            return "";
        },
        parse: function(e) {
            if (e) try {
                return JSON.parse(e);
            } catch (e) {}
            return null;
        },
        parseToArray: function(e) {
            if (e) try {
                return JSON.parse(e);
            } catch (e) {}
            return [];
        }
    }, C = (P = !(N = []), function() {
        return U = U || new M();
    });
    function M() {
        this.load = function(t) {
            if (L) {
                l.removeStorage(b);
                t();
            } else {
                b = "um_cache_" + s().appKey();
                l.getStorage(b, function(e) {
                    L = D.parse(e) || {};
                    P = !0;
                    l.removeStorage(b);
                    t();
                });
            }
        };
        this.save = function() {
            L && l.setStorage(b, D.stringify(L));
        };
        this.set = function(e, t) {
            L && (L[e] = t);
        };
        this.get = function(e) {
            return (L || {})[e];
        };
        this.remove = function(e) {
            L && L[e] && delete L[e];
        };
        this.getAll = function() {
            return L;
        };
        this.clear = function() {
            L = null;
        };
        this.has = function(e) {
            return !!this.get(e);
        };
        this.isLoaded = function() {
            return P;
        };
    }
    var x, V, j, K, G = "ekvs", F = 1e4, q = (j = [], K = [], function() {
        return x = x || {
            addEvent: function(e) {
                if (V) {
                    j.unshift(e);
                    if (1 < j.length) {
                        H();
                        j.length = 0;
                    }
                } else {
                    a().w("session id is null: ", V);
                    K.unshift(e);
                }
            },
            setSessionId: function(e) {
                V = e;
                a().v("setSessionId: ", V);
                if (Array.isArray(K) && K.length && V) {
                    for (var t = 0; t < K.length; t++) this.addEvent(K[t]);
                    K.length = 0;
                }
            },
            getEkvs: function() {
                var e = C().get(G);
                j && j.length && (e = Y(e, j));
                return e;
            },
            clear: function() {
                C().remove(G);
                j.length = 0;
            }
        };
    });
    function H() {
        if (j.length) {
            var e = C().get(G);
            if (function(e) {
                var t, n = 0;
                for (t in e) Array.isArray(e[t]) && (n += e[t].length);
                return n;
            }(e) + j.length <= F) {
                e = Y(e, j);
                C().set(G, e);
            }
        }
    }
    function Y(e, t) {
        var n = (e = e || {})[V];
        Array.isArray(n) && n.length ? e[V] = n.concat(t) : e[V] = [].concat(t);
        return e;
    }
    var W, J = "2g", B = "3g", X = "4g", z = {
        HALF_SESSION: "half_session",
        CLOSE_SESSION: "close_session",
        EKV: "ekv",
        ENTER_PAGE: "enter_page",
        LEAVE_PAGE: "leave_page"
    }, Q = [ "access", "access_subtype" ], Z = {
        instance: function() {
            return W = W || $();
        }
    };
    function $() {
        var e = !1, r = {};
        function t(n) {
            var e = C().get(g.IMPRINT);
            e && (r.imprint = e);
            r.device_type = "Phone";
            r.sdk_version = g.IMPL_VERSION;
            r.appkey = s().appKey();
            l.getDeviceInfo(function(e) {
                r.device_info = e || "";
            });
            e = l.getAppInfoSync();
            r.appid = e.appId;
            r.app_env = e.appEnv;
            r.app_version = e.appVersion;
            l.getSystemInfo(function(t) {
                l.getNetworkInfo(function(e) {
                    e = function(e, t) {
                        var n = {}, i = (t = t || {}).networkType;
                        "none" === i && (i = "unknown");
                        var r = (e = e || {}).model || "", o = e.platform || "", s = e.brand || "", t = s.toLowerCase();
                        n.sdk_type = l.getSdkType();
                        n.platform = l.getPlatform();
                        n.platform_sdk_version = e.platformSDKVersion;
                        n.platform_version = e.platformVersion;
                        n.resolution = e.resolution;
                        n.pixel_ratio = e.pixelRatio;
                        n.os = o;
                        n.font_size_setting = e.fontSizeSetting;
                        n.device_model = r;
                        n.device_brand = s;
                        n.device_manufacturer = t;
                        n.device_manuid = r;
                        n.device_name = r;
                        n.os_version = e.OSVersion;
                        n.language = e.language;
                        switch (i = i ? i.toLowerCase() : "") {
                          case X:
                            n.access_subtype = "LTE";
                            n.access = "4G";
                            break;

                          case B:
                            n.access_subtype = "CDMA";
                            n.access = "3G";
                            break;

                          case J:
                            n.access_subtype = "GRPS";
                            n.access = "2G";
                            break;

                          default:
                            n.access = i;
                            delete n.access_subtype;
                        }
                        return n;
                    }(t, e);
                    _.assign(r, e);
                    !function() {
                        var e = [];
                        if (void 0) {
                            e.push({
                                name: "系统名",
                                value: r.platform
                            });
                            e.push({
                                name: "支付宝版本号",
                                value: r.platform_version
                            });
                        }
                        e.push({
                            name: "设备型号",
                            value: r.device_model
                        });
                        e.push({
                            name: "设备生产商",
                            value: r.device_brand
                        });
                        e.push({
                            name: "os版本号",
                            value: r.os_version
                        });
                        e.push({
                            name: "网络类型",
                            value: r.access
                        });
                        e.push({
                            name: "运营商",
                            value: r.access_subtype
                        });
                        e.push({
                            name: "分辨率",
                            value: r.resolution
                        });
                        e.push({
                            name: "pixelRatio",
                            value: r.pixel_ratio
                        });
                        for (var t = "", n = 0; n < e.length; n++) {
                            var i = e[n];
                            t += i.name + ": " + i.value + "; ";
                        }
                        a().v("调试辅助信息: ", t);
                    }();
                    n && n();
                });
            });
        }
        return {
            init: function() {
                t(function() {
                    e = !0;
                });
            },
            isLoaded: function() {
                return e;
            },
            get: function() {
                return r;
            },
            getRealtimeFields: function() {
                var t = {};
                Q.forEach(function(e) {
                    t[e] = r[e];
                });
                return t;
            },
            setIdTracking: function(e) {
                this.setItem("id_tracking", e);
            },
            setIdType: function(e) {
                this.setItem("id_type", e);
            },
            setAppVersion: function(e) {
                this.setItem("app_version", e);
            },
            setSuperProperty: function(e) {
                r.sp || (r.sp = {});
                r.sp.isv = e;
            },
            getSuperProperty: function() {
                return r && r.sp ? r.sp.isv : "";
            },
            setItem: function(e, t) {
                r[e] = t;
            },
            getItem: function(e) {
                return r[e];
            }
        };
    }
    var ee, te, ne, ie = (ne = te = ee = W = L = U = w = y = v = null, function() {
        return ee = ee || re();
    });
    function re() {
        return {
            resume: function(e) {
                var t = !1;
                ne = ne || C().get(g.CURRENT_SESSION);
                var n = new Date();
                te = n.getTime();
                if (!ne || !ne.end_time || te - ne.end_time > g.SESSION_INTERVAL) {
                    t = !0;
                    !function(e) {
                        try {
                            var t = (ne || {}).options || {}, n = _.assign({}, function(e) {
                                var t, n = {};
                                for (t in e) 0 === t.indexOf("_um_") && (n[t] = e[t]);
                                a().v("query: ", e);
                                a().v("_um_params: ", n);
                                return n;
                            }(e.query));
                            n.path = e.path || t.path;
                            n.scene = e.scene ? l.getPlatform() + "_" + e.scene : t.scene;
                            t = e.referrerInfo;
                            t && (n.referrerAppId = t.appId);
                            a().v("session options: ", n);
                            t = n[g.UM_SSRC];
                            t && k().setShareSource(t);
                            t = Date.now();
                            ne = {
                                id: _.getRandomStr(10) + t,
                                start_time: t,
                                options: n
                            };
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            a().e("生成新session失败: ", e);
                        }
                    }(e);
                    a().v("开始新的session(%s): ", ne.id, ne);
                } else a().v("延续上一次session(%s): %s ", ne.id, n.toLocaleTimeString(), ne);
                return t;
            },
            pause: function() {
                !function() {
                    if (ne) {
                        var e = new Date();
                        ne.end_time = e.getTime();
                        "number" != typeof ne.duration && (ne.duration = 0);
                        ne.duration = ne.end_time - te;
                        C().set(g.CURRENT_SESSION, ne);
                        a().v("退出会话(%s): %s ", ne.id, e.toLocaleTimeString(), ne);
                    }
                }();
            },
            getCurrentSessionId: function() {
                return (ne || {}).id;
            },
            getCurrentSession: function() {
                return ne;
            },
            cloneCurrentSession: function() {
                return _.clone(ne);
            }
        };
    }
    function oe(e) {
        var t = null;
        switch (e) {
          case z.HALF_SESSION:
            t = function() {
                var e = null, t = ie().cloneCurrentSession();
                t && (e = {
                    header: {
                        st: "1"
                    },
                    analytics: {
                        sessions: [ t ]
                    }
                });
                return e;
            }();
            break;

          case z.CLOSE_SESSION:
            t = function() {
                var e = null, t = {}, n = ie().cloneCurrentSession();
                if (n) {
                    var i = I().get(), r = k().get();
                    Array.isArray(i) && i.length && (n.pages = _.clone(i));
                    Array.isArray(r) && r.length && (n.shares = _.clone(r));
                    I().clear();
                    k().clear();
                    t.sessions = [ n ];
                }
                n = q().getEkvs();
                if (n) {
                    t.ekvs = _.clone(n);
                    q().clear();
                }
                (t.sessions || t.ekvs) && (e = {
                    analytics: t
                });
                return e;
            }();
            break;

          case z.EKV:
            t = function() {
                var e = null, t = q().getEkvs();
                if (t) {
                    e = {
                        analytics: {
                            ekvs: _.clone(t)
                        }
                    };
                    q().clear();
                }
                return e;
            }();
        }
        return t;
    }
    var se = {
        sessions: "sn",
        ekvs: "e",
        active_user: "active_user"
    }, ae = {
        sdk_type: "sdt",
        access: "ac",
        access_subtype: "acs",
        device_model: "dm",
        language: "lang",
        device_type: "dt",
        device_manufacturer: "dmf",
        device_name: "dn",
        platform_version: "pv",
        id_type: "it",
        font_size_setting: "fss",
        os_version: "ov",
        device_manuid: "did",
        platform_sdk_version: "psv",
        device_brand: "db",
        appkey: "ak",
        _id: "id",
        id_tracking: "itr",
        imprint: "imp",
        sdk_version: "sv",
        resolution: "rl",
        testToken: "ttn"
    }, ce = {
        uuid: "ud",
        unionid: "und",
        openid: "od",
        anonymousid: "nd",
        alipay_id: "ad",
        device_id: "dd",
        userid: "puid"
    };
    function ue(e) {
        return {
            h: function(e, t) {
                var n = fe(e, t);
                e && e.id_tracking && (n[t.id_tracking || "id_tracking"] = fe(e.id_tracking, ce));
                return n;
            }(e.header, ae),
            a: function(e, t) {
                var n = {};
                if (e) for (var i in e) e[i] && (n[t[i]] = e[i]);
                return n;
            }(e.analytics, se)
        };
    }
    function fe(e, t) {
        var n, i = {};
        for (n in e) t[n] ? i[t[n]] = e[n] : i[n] = e[n];
        return i;
    }
    var pe = b = T = "";
    function le(e) {
        if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? Se(192 | t >>> 6) + Se(128 | 63 & t) : Se(224 | t >>> 12 & 15) + Se(128 | t >>> 6 & 63) + Se(128 | 63 & t);
        var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
        return Se(240 | t >>> 18 & 7) + Se(128 | t >>> 12 & 63) + Se(128 | t >>> 6 & 63) + Se(128 | 63 & t);
    }
    function de(e) {
        var t = [ 0, 2, 1 ][e.length % 3], e = e.charCodeAt(0) << 16 | (1 < e.length ? e.charCodeAt(1) : 0) << 8 | (2 < e.length ? e.charCodeAt(2) : 0);
        return [ _e.charAt(e >>> 18), _e.charAt(e >>> 12 & 63), 2 <= t ? "=" : _e.charAt(e >>> 6 & 63), 1 <= t ? "=" : _e.charAt(63 & e) ].join("");
    }
    function he(e) {
        return e.replace(Ie, le).replace(/[\s\S]{1,3}/g, de);
    }
    function ge(e) {
        switch (e.length) {
          case 4:
            var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
            return Se(55296 + (t >>> 10)) + Se(56320 + (1023 & t));

          case 3:
            return Se((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

          default:
            return Se((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
        }
    }
    function ve(e) {
        var t = e.length, n = t % 4, e = (0 < t ? me[e.charAt(0)] << 18 : 0) | (1 < t ? me[e.charAt(1)] << 12 : 0) | (2 < t ? me[e.charAt(2)] << 6 : 0) | (3 < t ? me[e.charAt(3)] : 0);
        (e = [ Se(e >>> 16), Se(e >>> 8 & 255), Se(255 & e) ]).length -= [ 0, 0, 2, 1 ][n];
        return e.join("");
    }
    function ye(e) {
        return e.replace(/[\s\S]{1,4}/g, ve).replace(Ee, ge);
    }
    var _e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", me = function(e) {
        for (var t = {}, n = 0, i = e.length; n < i; n++) t[e.charAt(n)] = n;
        return t;
    }(_e), Se = String.fromCharCode, Ie = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, Ee = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), Oe = {
        encode: function(e, t) {
            return t ? he(String(e)).replace(/[+\/]/g, function(e) {
                return "+" == e ? "-" : "_";
            }).replace(/=/g, "") : he(String(e));
        },
        decode: function(e) {
            return ye(String(e).replace(/[-_]/g, function(e) {
                return "-" == e ? "+" : "/";
            }).replace(/[^A-Za-z0-9\+\/]/g, ""));
        }
    };
    var Ae = new function() {
        var t = "", n = this;
        this.set = function(e) {
            t = e;
        };
        this.get = function() {
            return t;
        };
        this.getImpObj = function() {
            return D.parse(Oe.decode(t));
        };
        this.getItem = function(e) {
            var t = n.getImpObj();
            return t && t[e] || "";
        };
        this.load = function() {
            t = C().get(g.IMPRINT);
        };
        this.save = function() {
            t && C().set(g.IMPRINT, t);
        };
    }();
    function we(n, i, r, e) {
        Z.instance().setIdType(S().getIdType());
        Z.instance().setIdTracking(S().getIdTracking());
        var t = S().getUserId();
        t && n.analytics && (n.analytics.active_user = {
            puid: t,
            provider: S().getProvider()
        });
        t = _.clone(Z.instance().get());
        n.header = _.assign(t, n.header, {
            ts: Date.now(),
            testToken: pe,
            traceId: _.getRandomStr(10) + Date.now() + _.getRandomStr(9)
        });
        var t = ue(n), o = D.stringify(t), t = {
            url: g.LOG_URL,
            method: "POST",
            data: Oe.encode(o),
            success: function(e) {
                var t = e.code || e.status || e.statusCode;
                if (200 === t || 413 === t) {
                    a().i("数据发送成功: ", n, o);
                    !function(e) {
                        if (e) {
                            Z.instance().setItem(g.IMPRINT, e);
                            Ae.set(e);
                            Ae.save();
                            a().v("imprint: ", Ae.getImpObj());
                            Ae.getItem("ttn_invalid") && (pe = "");
                        }
                    }((e.data || {}).imprint);
                    "function" == typeof i && i(e);
                } else {
                    a().w("数据发送失败: ", o);
                    "function" == typeof r && r();
                }
            },
            fail: function(e) {
                a().w("超时: ", o);
                "function" == typeof r && r();
            },
            complete: function() {
                "function" == typeof e && e();
            }
        };
        l.request(_.assign(t, {
            header: {
                "Content-Type": t = l.getSdkType() + "/json",
                "Msg-Type": t
            }
        }));
    }
    function Ne(e) {
        var t = e, n = [];
        this.enqueue = function(e) {
            "number" == typeof t && this.size() >= t && this.dequeue();
            n.push(e);
        };
        this.dequeue = function() {
            return n.shift();
        };
        this.front = function() {
            return n[0];
        };
        this.isEmpty = function() {
            return 0 === n.length;
        };
        this.clear = function() {
            n.length = 0;
        };
        this.size = function() {
            return n.length;
        };
        this.items = function() {
            return n;
        };
        this.print = function() {
            console.log(n.toString());
        };
    }
    var Te, ke, Re, Ue, be = (Te = null, ke = !1, Re = [], Ue = new Ne(50), function() {
        return Te = Te || new De();
    });
    function Le(t) {
        var e = Ue.front();
        if (e) we(e, function() {
            Ue.dequeue();
            Le(t);
        }, function() {
            var e = Ue.dequeue();
            e && !e.noCache && Re.push(e);
            Le(t);
        }); else {
            !function() {
                Re.forEach(function(e) {
                    Ue.enqueue(e);
                });
                Re.length = 0;
            }();
            t();
        }
    }
    function Pe(e) {
        if (S().getId()) if (ke) a().i("队列正在发送中"); else {
            ke = !0;
            Le(function() {
                ke = !1;
                "function" == typeof e && e();
            });
        } else {
            a().i("获取id标识失败，暂缓发送");
            "function" == typeof e && e();
        }
    }
    function De() {
        this.send = function(e, t, n) {
            e ? this.add(e, t, function() {
                Pe(n);
            }) : Pe(n);
        };
        this.add = function(e, t, n) {
            !function e(t, n, i) {
                if (Z.instance().isLoaded()) {
                    n = n || {};
                    var r = oe(t);
                    if (r) {
                        var o = Z.instance().getRealtimeFields();
                        r.header = _.assign({}, r.header, o);
                        r.noCache = n.noCache;
                        Ue.enqueue(r);
                    }
                    "function" == typeof i && i();
                } else setTimeout(function() {
                    e(t, n, i);
                }, 100);
            }(e, t, n);
        };
        this.load = function() {
            var e = C().get(g.REQUESTS);
            e && e.length && e.forEach(function(e) {
                Ue.enqueue(e);
            });
            C().remove(g.REQUESTS);
        };
        this.save = function() {
            C().set(g.REQUESTS, _.clone(Ue.items()));
            Ue.clear();
        };
    }
    var Ce, Me = (Ce = null, function() {
        return Ce = Ce || new xe();
    });
    function xe() {
        this.update = function() {
            l.getUserInfo(function(t) {
                if (t) {
                    var e = C().get(g.USER_INFO);
                    e && _.deepEqual(t, e) || function(t, n) {
                        var e = s().appKey(), i = l.getSdkType(), r = S().getId(), o = S().getIdType();
                        if (e && i && r && o) {
                            o = {
                                ak: s().appKey(),
                                sdt: l.getSdkType(),
                                uin: t.nickName,
                                uia: t.avatar,
                                uig: t.gender,
                                uit: t.country,
                                uip: t.province,
                                uic: t.city,
                                uil: t.language,
                                id: S().getId(),
                                it: S().getIdType()
                            }, o = JSON.stringify(o);
                            o = Oe.encode(o);
                            l.request({
                                url: g.USERINFO_URL,
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                data: "ui=" + o,
                                success: function(e) {
                                    a().v("用户信息上传成功: ", t);
                                    n && n(e && e.data && 200 === e.data.code);
                                },
                                fail: function() {
                                    a().e("用户信息上传失败: ", t);
                                    n && n(!1);
                                }
                            });
                        }
                    }(t, function(e) {
                        e && C().set(g.USER_INFO, t);
                    });
                }
            });
        };
    }
    function Ve(e, t) {
        this.id = e;
        this.ts = Date.now();
        var n = typeof t;
        if ("string" == n && t) this[e] = t; else if ("object" == n) for (var i in t) !{}.hasOwnProperty.call(t, i) || (this[i] = t[i]);
    }
    function je() {
        var r = !1, n = !1, o = 0;
        this.init = function(e) {
            a().v("sdk version: " + g.IMPL_VERSION);
            r ? a().v("Lib重复实例化") : C().load(function() {
                a().v("cache初始化成功: ", C().getAll());
                !function() {
                    S().setUseOpenid && S().setUseOpenid(s().useOpenid());
                    S().init(function() {
                        Z.instance().init();
                        a().v("Header初始化成功");
                    });
                }();
                r = !0;
                "function" == typeof e && e();
                a().tip("SDK集成成功");
            });
        };
        this.resume = function(e) {
            if (r && !n) {
                a().v("showOptions: ", e);
                var t;
                n = !0;
                s().enableVerify() && e && e.query && (t = e.query._ttn, pe = t || pe);
                this._resume(e);
            }
        };
        this._resume = function(e) {
            be().load();
            var t = ie().resume(e), e = ie().getCurrentSessionId();
            q().setSessionId(e);
            t && be().add(z.HALF_SESSION, {}, function() {
                S().setUseOpenid && S().setUseOpenid(s().useOpenid());
                if (s().useOpenid() && s().autoGetOpenid() && !S().getId()) {
                    a().v("get id async");
                    !function t(n, i) {
                        if (S().getId() || n <= 0) return;
                        S().getOpenIdAsync(s().appKey(), function(e) {
                            if (e) {
                                a().v("获取id成功");
                                be().send();
                            } else {
                                a().v("获取openid失败,启动重试,剩余可用次数", n - 1);
                                setTimeout(function() {
                                    t(n - 1, i);
                                }, i);
                            }
                        });
                    }(10, 3e3);
                } else {
                    a().v("session auto send");
                    be().send();
                }
            });
        };
        this.pause = function(e) {
            if (r) {
                n = !1;
                o = 0;
                ie().pause();
                s().uploadUserInfo() && Me().update();
                be().send(z.CLOSE_SESSION, {}, function() {
                    be().save();
                    C().save();
                    a().v("cache save success");
                    "function" == typeof e && e();
                });
            }
        };
        this.setOpenid = function(e) {
            a().v("setOpenId: %s", e);
            S().setOpenid(e);
            be().send();
        };
        this.setUnionid = function(e) {
            a().v("setUnionid: %s", e);
            S().setUnionid(e);
        };
        this.setUserid = function(e, t) {
            a().v("setUserid: %s", e, t);
            S().setUserid(e, t);
        };
        this.setAnonymousid = function(e) {
            a().v("setAnonymousId: %s", e);
            S().setAnonymousid(e);
            be().send();
        };
        this.setAppVersion = function(e) {
            e && "string" != typeof e ? a().w("setAppVersion方法只接受字符串类型参数") : Z.instance().setAppVersion(e);
        };
        this.setAlipayUserid = function(e) {
            if (e && "string" != typeof e) a().w("setAlipayUserid方法只接受字符串类型参数"); else {
                a().v("setAlipayUserid: %s", e);
                S().setAlipayUserid(e);
            }
        };
        this.setSuperProperty = function(e) {
            if (e && "string" != typeof e) a().w("超级属性只支持字符串类型"); else {
                var t = this;
                if (Z.instance().getSuperProperty() !== e) {
                    Z.instance().setSuperProperty(e);
                    t.pause(function() {
                        t.resume();
                    });
                }
            }
        };
        this.trackEvent = function(e, t) {
            if (r) {
                a().v("event: ", e, t);
                if (function(e, t) {
                    if (e && "string" == typeof e) {
                        var n = [ "id", "ts", "du" ], i = {};
                        n.forEach(function(e) {
                            i[e] = 1;
                        });
                        if (i[e]) a().e("eventId不能与以下保留字冲突: " + n.join(",")); else if (e.length > g.MAX_EVENTID_LENGTH) a().e("The maximum length of event id shall not exceed " + g.MAX_EVENTID_LENGTH); else {
                            if (!t || "object" == typeof t && !Array.isArray(t) || "string" == typeof t) {
                                if ("object" == typeof t) {
                                    var r, o = 0;
                                    for (r in t) if ({}.hasOwnProperty.call(t, r)) {
                                        if (r.length > g.MAX_PROPERTY_KEY_LENGTH) {
                                            a().e("The maximum length of property key shall not exceed " + g.MAX_PROPERTY_KEY_LENGTH);
                                            return;
                                        }
                                        if (o >= g.MAX_PROPERTY_KEYS_COUNT) {
                                            a().e("The maximum count of properties shall not exceed " + g.MAX_PROPERTY_KEYS_COUNT);
                                            return;
                                        }
                                        if (i[r]) {
                                            a().e("属性中的key不能与以下保留字冲突: " + n.join(","));
                                            return;
                                        }
                                        o += 1;
                                    }
                                }
                                return 1;
                            }
                            a().e("please check trackEvent properties. properties should be string or object(not include Array)");
                        }
                    } else a().e('please check trackEvent id. id should be "string" and not null');
                }(e, t)) {
                    var n = new Ve(e, t);
                    q().addEvent(n);
                    var i = !!pe, e = i ? 0 : g.EVENT_SEND_DEFAULT_INTERVAL, t = Date.now();
                    if (n = t, e = e, "number" != typeof o || "number" != typeof e || (o <= 0 || e < n - o)) {
                        o = t;
                        be().send(z.EKV, {
                            noCache: i
                        }, function() {});
                    }
                }
            }
        };
        this.trackShare = function(e) {
            if (r) {
                try {
                    if (-1 < l.getSdkType().indexOf("game")) {
                        e = k().add(e, !0);
                        a().v("shareQuery: ", e);
                    } else {
                        e = k().add(e, !1);
                        a().v("sharePath: ", e.path);
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    a().v("shareAppMessage: ", e);
                }
                return e;
            }
        };
        this.trackPageStart = function(e) {
            r && I().addPageStart(e);
        };
        this.trackPageEnd = function(e) {
            r && I().addPageEnd(e);
        };
        this.onShareAppMessage = function(e) {
            var t = this;
            l.onShareAppMessage(function() {
                return t.trackShare(e());
            });
        };
        this.shareAppMessage = function(e) {
            this.trackShare(e);
            l.shareAppMessage(e);
        };
    }
    var Ke = [];
    function Ge() {}
    Ge.prototype = {
        createMethod: function(e, t, n) {
            try {
                e[t] = n && n[t] ? function() {
                    return n[t].apply(n, arguments);
                } : function() {
                    Ke.push([ t, [].slice.call(arguments) ]);
                };
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                a().v("create method errror: ", e);
            }
        },
        installApi: function(e, t) {
            try {
                for (var n = "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setUnionid,setSuperProperty".split(","), i = 0, r = n.length; i < r; i++) this.createMethod(e, n[i], t);
                if (t) for (i = 0, r = Ke.length; i < r; i++) {
                    var o = Ke[i];
                    try {
                        t[o[0]].apply(t, o[1]);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a().v("impl[v[0]].apply error: ", o[0], e);
                    }
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                a().v("install api errror: ", e);
            }
        }
    };
    var Fe = [ "https://umini.shujupie.com", "https://ulogs.umeng.com" ], qe = 0;
    function He(t, e) {
        if (t >= Fe.length || e) {
            e && function() {
                var e = "https://umini.shujupie.com";
                g.LOG_URL = g.LOG_URL.replace(e, Fe[qe]);
                g.GET_OPENID_URL = g.GET_OPENID_URL.replace(e, Fe[qe]);
                g.USERINFO_URL = g.USERINFO_URL.replace(e, Fe[qe]);
            }();
            e && a().v("命中可用服务", Fe[qe]);
            e || a().tip_w("未命中可用服务");
        } else l.request({
            url: Fe[t] + "/uminiprogram_logs/ckdh",
            success: function(e) {
                200 === (e.code || e.status || e.statusCode) && e.data && 200 === e.data.code ? He((qe = t) + 1, !0) : He(t + 1, !1);
            },
            fail: function() {
                He(t + 1, !1);
            }
        });
    }
    ({
        init: function(e) {
            setTimeout(function() {
                He(0, !1);
            }, e);
        }
    }).init(3e3);
    var Ye = new Ge(), We = {
        _inited: !1,
        init: function(e) {
            if (this._inited) a().v("已经实例过，请避免重复初始化"); else if (e) if (e.appKey) {
                "boolean" != typeof e.useOpenid && (e.useOpenid = !0);
                s().set(e);
                a().setDebug(e.debug);
                this._inited = !0;
                var t = this;
                u.emit(f, e);
                try {
                    var n = new je();
                    a().v("成功创建Lib对象");
                    n.init(function() {
                        a().v("Lib对象初始化成功");
                        Ye.installApi(t, n);
                        a().v("安装Lib接口成功");
                        u.emit(p, e);
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    a().w("创建Lib对象异常: " + e);
                }
            } else a().err("请确保传入正确的appkey"); else a().err("请正确设置相关信息！");
        }
    };
    try {
        Ye.installApi(We, null);
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        a().w("uma赋值异常: ", e);
    }
    var Je = {
        FETCH_URL: "https://ucc.umeng.com/v1/mini/fetch",
        ABLOG_URL: "https://pslog.umeng.com/mini_ablog",
        SDK_VERSION: "2.4.14",
        MOBILE_NETWORK_NONE: "none",
        MOBILE_NETWORK_2G: "2g",
        MOBILE_NETWORK_3G: "3g",
        MOBILE_NETWORK_4G: "4g",
        MOBILE_NETWORK_5G: "5g",
        MOBILE_NETWORK_WIFI: "wifi",
        IMPRINT: "imprint"
    }, Be = {}, Xe = Array.isArray;
    Be.isArray = Xe || function(e) {
        return "[object Array]" === toString.call(e);
    };
    Be.isObject = function(e) {
        return e === Object(e) && !Be.isArray(e);
    };
    Be.isEmptyObject = function(e) {
        if (Be.isObject(e)) {
            for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
            return !0;
        }
        return !1;
    };
    Be.isUndefined = function(e) {
        return void 0 === e;
    };
    Be.isString = function(e) {
        return "[object String]" === toString.call(e);
    };
    Be.isDate = function(e) {
        return "[object Date]" === toString.call(e);
    };
    Be.isNumber = function(e) {
        return "[object Number]" === toString.call(e);
    };
    Be.each = function(e, t, n) {
        if (null != e) {
            var i = {}, r = Array.prototype.forEach;
            if (r && e.forEach === r) e.forEach(t, n); else if (e.length === +e.length) {
                for (var o = 0, s = e.length; o < s; o++) if (o in e && t.call(n, e[o], o, e) === i) return;
            } else for (var a in e) if (hasOwnProperty.call(e, a) && t.call(n, e[a], a, e) === i) return;
        }
    };
    Be.buildQuery = function(e, t) {
        var n, i, r = [];
        void 0 === t && (t = "&");
        Be.each(e, function(e, t) {
            n = encodeURIComponent(e.toString());
            i = encodeURIComponent(t);
            r[r.length] = i + "=" + n;
        });
        return r.join(t);
    };
    Be.JSONDecode = function(e) {
        if (e) {
            try {
                return JSON.parse(e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                console.error("JSONDecode error", e);
            }
            return null;
        }
    };
    Be.JSONEncode = function(e) {
        try {
            return JSON.stringify(e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.error("JSONEncode error", e);
        }
    };
    var ze = Object.create(null);
    function Qe(n) {
        a().v("开始构建 fetch body");
        l.getSystemInfo(function(t) {
            l.getNetworkInfo(function(e) {
                e = (e = (e = e || {}).networkType) === Je.MOBILE_NETWORK_NONE ? "unknown" : e.toUpperCase();
                ze.access = e;
                !function(e, t) {
                    var n = e.brand || "";
                    ze.deviceType = "Phone";
                    ze.sdkVersion = Je.SDK_VERSION;
                    ze.appkey = s().appKey();
                    ze.sdkType = l.getSdkType();
                    ze.umid = S().getId();
                    if (e) {
                        ze.language = e.language || "";
                        ze.os = e.OS;
                        ze.osVersion = e.OSVersion;
                        ze.deviceName = e.deviceName;
                        ze.platformVersion = e.platformVersion;
                        ze.platformSdkVersion = e.platformSDKVersion;
                        ze.deviceBrand = n;
                        e = e.resolution.split("*");
                        if (Be.isArray(e)) {
                            ze.resolutionHeight = Number(e[0]);
                            ze.resolutionWidth = Number(e[1]);
                        }
                    }
                    !function(e) {
                        if (e) {
                            ze.installTime = e.install_datetime && Date.parse(e.install_datetime);
                            ze.scene = e.install_scene;
                            ze.channel = e.install_channel;
                            ze.campaign = e.install_campaign;
                        }
                    }(Ae.getImpObj());
                    t && t(ze);
                }(t, n);
            });
        });
    }
    var Ze = Object.create(null), $e = null, et = !1, tt = {
        minFetchIntervalSeconds: 43200
    };
    function nt(e) {
        e && Be.each(e, function(e) {
            Ze[e.k] = e;
        });
    }
    function it() {
        var t = this;
        this.STORAGE_NAME = null;
        u.on(f, function(e) {
            a().v("云配初始化开始...");
            t.init(e);
        });
    }
    it.prototype = {
        setDefaultValues: function(e) {
            et && Be.isObject(e) && Be.each(e, function(e, t) {
                Ze[t] && Ze[t].v || (Ze[t] = {
                    v: e
                });
            });
        },
        getValue: function(t) {
            a().v("从配置项中读取 value, 当前配置为: ", Ze);
            a().v("待读取的 key : ", t);
            try {
                if (!et) return;
                var e = Ze[t] || {};
                a().v("读取相应配置ing..., 结果为: ", e);
                if (Be.isNumber(e.e) && Be.isNumber(e.g)) {
                    a().v("读取到相应配置, 开始数据上报...");
                    !function(e) {
                        var t = {
                            appkey: s().appKey(),
                            sdkType: l.getSdkType(),
                            expId: e && e.e,
                            groupId: e && e.g,
                            clientTs: Date.now(),
                            key: e && e.k,
                            value: e && e.v,
                            umid: S().getId()
                        };
                        try {
                            l.request({
                                url: Je.ABLOG_URL,
                                method: "POST",
                                data: [ t ],
                                success: function(e) {
                                    e && 200 === e.statusCode ? a().v("上传数据成功", t) : a().w("ablog 请求成功, 返回结果异常 ", e);
                                },
                                fail: function(e) {
                                    a().w("ablog 请求数据错误 ", t, e);
                                }
                            });
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            a().w("urequest 调用错误", e);
                        }
                    }(e);
                }
                return e.v;
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                a().w("getValue error, key: ", t);
            }
        },
        active: function(e) {
            try {
                if (!et) return;
                var t, n;
                e && e.params && (t = e.params);
                e && e.callback && (n = e.callback);
                a().v("激活配置项: ", t);
                if (t) {
                    a().v("本地已缓存的配置项: ", Ze);
                    nt(t);
                    a().v("合并后的配置项: ", Ze);
                    n && n(Ze);
                    a().v("active 结束");
                } else {
                    a().v("配置项为空!! 读取本地配置...");
                    l.getStorage(this.STORAGE_NAME, function(e) {
                        if (e) {
                            nt((e = Be.JSONDecode(e) || {}).params);
                            a().v("当前本地配置项为: ", Ze);
                            n && n(Ze);
                            a().v("active 结束");
                        } else a().v("当前本地配置项为空, 退出激活");
                    });
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                a().w("SDK active 错误", e);
            }
        },
        init: function(e) {
            if (e.appKey) {
                $e = e.appKey;
                this.STORAGE_NAME = "um_remote_config_{{" + $e + "}}";
            }
            if ($e) if (et) a().w("SDK 已经初始化, 请避免重复初始化"); else {
                et = !0;
                this.setOptions(e);
                this.active();
            } else a().err("请检查您的小程序 appKey, appKey 不能为空");
        },
        setOptions: function(e) {
            if (Be.isObject(e)) {
                e = e.minFetchIntervalSeconds;
                Be.isNumber(e) && (tt.minFetchIntervalSeconds = Math.max(e, 5));
            }
        },
        fetch: function(e) {
            if (et && this.STORAGE_NAME) {
                var i, r;
                e && e.active && (i = e.active);
                e && e.callback && (r = e.callback);
                var o = this;
                l.getStorage(this.STORAGE_NAME, function(e) {
                    a().v("开始读缓存 data is ", e);
                    if ((e = Be.JSONDecode(e) || {}).params && e.ts && Date.now() - e.ts < 1e3 * tt.minFetchIntervalSeconds) {
                        a().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch");
                        r && r(e.params);
                    } else Qe(function(t) {
                        a().v("缓存数据不存在, 构建 fetch body :", t);
                        try {
                            l.request({
                                url: Je.FETCH_URL,
                                method: "POST",
                                data: t,
                                success: function(e) {
                                    if (e && 200 === e.statusCode && e.data && e.data.cc) {
                                        a().v("fetch 请求成功, 响应数据: ", e.data);
                                        var t = Object.create(null);
                                        Be.each(e.data.cc, function(e) {
                                            t[e.k] = e;
                                        });
                                        var n = {
                                            ts: Date.now(),
                                            params: t
                                        };
                                        a().v("开始缓存 fetch 请求的云配置结果...");
                                        l.setStorage(o.STORAGE_NAME, Be.JSONEncode(n), function(e) {
                                            a().v("缓存云配置成功, 缓存数据为: ", n);
                                            a().v("缓存云配置成功, 成功消息为: ", e);
                                            a().v("云配拉取数据是否自动激活: ", i);
                                            if (e && i) {
                                                a().v("激活云配置...");
                                                o.active({
                                                    params: t,
                                                    callback: r
                                                });
                                            }
                                        });
                                    } else {
                                        a().w("fetch 请求成功,返回结果异常 ", e.data);
                                        r && r();
                                    }
                                },
                                fail: function(e) {
                                    a().w("fetch请求数据错误 ", t, e);
                                    r && r();
                                }
                            });
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            a().w("urequest调用错误", e);
                        }
                    });
                });
            }
        }
    };
    var rt = "", ot = {};
    function st(e) {
        e && (rt = e);
    }
    function at() {
        return function(e, t) {
            if (!e) return "";
            var n, i = [];
            for (n in t) "_um_ssrc" !== n && "_um_sts" !== n && i.push(n + "=" + t[n]);
            var r = i.join("&");
            return r ? e + "?" + r : e;
        }(rt, ot[rt]);
    }
    function ct(e, n) {
        if (e.onShareAppMessage) {
            var i = e.onShareAppMessage;
            e.onShareAppMessage = function(e) {
                var t = i.call(this, e) || {}, e = at();
                !t.path && e && (t.path = e);
                return n.trackShare.call(this, t);
            };
        }
    }
    function ut(e, t, n) {
        var i = e[t];
        e[t] = function(e) {
            n.call(this, e);
            i && i.call(this, e);
        };
    }
    function ft(e) {
        try {
            We.resume(e, !0);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            a().v("onAppShow: ", e);
        }
    }
    function pt() {
        try {
            We.pause();
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            a().v("onAppHide: ", e);
        }
    }
    function lt() {
        try {
            st(this.route);
            We.trackPageStart(this.route);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            a().v("onPageShow: ", e);
        }
    }
    function dt(e) {
        try {
            st(this.route);
            e && (t = this.route, n = e, t && (ot[t] = n));
            a().v("Page onLoad: ", this.route, e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            a().v("onPageLoad: ", e);
        }
        var t, n;
    }
    function ht() {
        try {
            We.trackPageEnd(this.route);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            a().v("onPageHide: ", e);
        }
    }
    try {
        var gt = App;
        App = function(e) {
            ut(e, "onLaunch", function() {
                !function(e) {
                    try {
                        We.init(e);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a().v("onAppLaunch: ", e);
                    }
                }(e.umengConfig);
            });
            ut(e, "onShow", ft);
            ut(e, "onHide", pt);
            gt(e);
        };
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        a().w("App重写异常");
    }
    try {
        var vt = Page;
        Page = function(e) {
            ut(e, "onShow", lt);
            ut(e, "onHide", ht);
            ut(e, "onUnload", ht);
            ut(e, "onLoad", dt);
            ct(e, We);
            vt(e);
        };
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        a().w("Page重写异常");
    }
    try {
        var yt = Component;
        Component = function(t) {
            try {
                t.methods = t.methods || {};
                var e = t.methods;
                ut(e, "onShow", lt);
                ut(e, "onHide", ht);
                ut(e, "onUnload", ht);
                ut(e, "onLoad", dt);
                ct(e, We);
                yt(t);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                yt(t);
            }
        };
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        a().w("Component重写异常");
    }
    var _t = We.init;
    We.init = function(e) {
        if (e && e.useOpenid) {
            a().tip_w("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            a().tip_w("您选择了使用openid进行统计，请确保使用setOpenid回传openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取");
            a().tip_w("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        }
        _t.call(We, e);
    };
    Xe = new it();
    !function(e, t, n) {
        if ("object" == typeof e) {
            if ("string" == typeof t && t.length) e[t] = n; else for (var i in n) if ({}.hasOwnProperty.call(n, i)) {
                if (e[i]) {
                    a().v("方法已定义，无法注入此插件方法: ", i);
                    return;
                }
                n[i] && (e[i] = function() {
                    n[i](arguments);
                });
            }
        } else a().v("插件安装失败，宿主对象不能为空");
    }(We, "rc", Xe);
    wx.uma = We;
    module.exports = We;
}, /***** module 0 end *****/
/***** module 1 start *****/
/***** D:\ym_xcx\node_modules\@wepy\core\dist\wepy.js *****/
function(module, exports, __wepy_require) {
    "use strict";
    // can we use __proto__?
        function getHasProto() {
        var hasProto = false;
        if ("__proto__" in {}) {
            var fn = function() {};
            var arr = [];
            arr.__proto__ = {
                push: fn
            };
            hasProto = fn === arr.push;
        }
        return hasProto;
    }
    var hasProto = getHasProto();
    var _Set;
    // $flow-disable-line
    /* istanbul ignore if */    if (typeof Set !== "undefined" && isNative(Set)) {
        // use native Set when available.
        _Set = Set;
    } else {
        // a non-standard Set polyfill that only works with primitive keys.
        _Set = /* */ function() {
            function Set() {
                this.set = Object.create(null);
            }
            Set.prototype.has = function has(key) {
                return this.set[key] === true;
            };
            Set.prototype.add = function add(key) {
                this.set[key] = true;
            };
            Set.prototype.clear = function clear() {
                this.set = Object.create(null);
            };
            return Set;
        }();
    }
    /* istanbul ignore next */    function isNative(Ctor) {
        return typeof Ctor === "function" && /native code/.test(Ctor.toString());
    }
    /**
 * String type check
 */    var isStr = function(v) {
        return typeof v === "string";
    };
    /**
 * Number type check
 */    var isNum = function(v) {
        return typeof v === "number";
    };
    /**
 * Array type check
 */    var isArr = Array.isArray;
    /**
 * undefined type check
 */    var isUndef = function(v) {
        return v === undefined;
    };
    /**
 * Function type check
 */    var isFunc = function(v) {
        return typeof v === "function";
    };
    /**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */    function isObject(obj) {
        return obj !== null && typeof obj === "object";
    }
    var isObj = isObject;
    /**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */    var _toString = Object.prototype.toString;
    function isPlainObject(obj) {
        return _toString.call(obj) === "[object Object]";
    }
    /**
 * Check whether the object has the property.
 */    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
    }
    /**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
    // eslint-disable-next-line
        function noop(a, b, c) {}
    /**
 * Check if val is a valid array index.
 */    function isValidArrayIndex(val) {
        var n = parseFloat(String(val));
        return n >= 0 && Math.floor(n) === n && isFinite(val);
    }
    /**
 * Convert an Array-lik object to a real Array
 */    function toArray(list, start) {
        if (start === void 0) start = 0;
        var i = list.length - start;
        var rst = new Array(i);
        while (i--) {
            rst[i] = list[i + start];
        }
        return rst;
    }
    /**
 * Cached simply key function return
 */    var cached = function(fn) {
        var cache = {};
        return function(str) {
            return cache[str] || (cache[str] = fn(str));
        };
    };
    var camelizeRE = /-(\w)/g;
    /**
 * camelize words
 * e.g. my-key => myKey
 */    var camelize = cached(function(str) {
        return str.replace(camelizeRE, function(_, c) {
            return c ? c.toUpperCase() : "";
        });
    });
    /*
 * extend objects
 * e.g.
 * extend({}, {a: 1}) : extend {a: 1} to {}
 * extend(true, [], [1,2,3]) : deep extend [1,2,3] to an empty array
 * extend(true, {}, {a: 1}, {b: 2}) : deep extend two objects to {}
 */    function extend() {
        var arguments$1 = arguments;
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        // Handle a deep copy situation
                if (typeof target === "boolean") {
            deep = target;
            // Skip the boolean and the target
                        target = arguments[i] || {};
            i++;
        }
        // Handle case when target is a string or something (possible in deep copy)
                if (typeof target !== "object" && !(typeof target === "function")) {
            target = {};
        }
        // Extend jQuery itself if only one argument is passed
                if (i === length) {
            target = this;
            i--;
        }
        for (;i < length; i++) {
            // Only deal with non-null/undefined values
            if (options = arguments$1[i]) {
                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    // Prevent never-ending loop
                                        if (target === copy) {
                        continue;
                    }
                    // Recurse if we're merging plain objects or arrays
                                        if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];
                        } else {
                            clone = src && isPlainObject(src) ? src : {};
                        }
                        // Never move original objects, clone them
                                                target[name] = extend(deep, clone, copy);
                        // Don't bring in undefined values => bring undefined values
                                        } else {
                        target[name] = copy;
                    }
                }
            }
        }
        // Return the modified object
                return target;
    }
    /*
 * clone objects, return a cloned object default to use deep clone
 * e.g.
 * clone({a: 1})
 * clone({a: b: {c : 1}}, false);
 */    function clone(sth, deep) {
        if (deep === void 0) deep = true;
        if (isArr(sth)) {
            return extend(deep, [], sth);
        } else if ("" + sth === "null") {
            return sth;
        } else if (isPlainObject(sth)) {
            return extend(deep, {}, sth);
        } else {
            return sth;
        }
    }
    var WEAPP_APP_LIFECYCLE = [ "onLaunch", "onShow", "onHide", "onError", "onPageNotFound" ];
    var WEAPP_PAGE_LIFECYCLE = [ "onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap", "onResize" ];
    var WEAPP_COMPONENT_LIFECYCLE = [ "beforeCreate", "created", "attached", "ready", "moved", "detached" ];
    var WEAPP_LIFECYCLE = [].concat(WEAPP_APP_LIFECYCLE).concat(WEAPP_PAGE_LIFECYCLE).concat(WEAPP_COMPONENT_LIFECYCLE);
    var config = {};
    var warn = noop;
    var generateComponentTrace = function(vm) {
        return 'Found in component: "' + vm.$is + '"';
    };
    {
        var hasConsole = typeof console !== "undefined";
        // TODO
                warn = function(msg, vm) {
            if (hasConsole && !config.silent) {
                // eslint-disable-next-line
                console.error("[WePY warn]: " + msg + (vm ? generateComponentTrace(vm) : ""));
            }
        };
    }
    function handleError(err, vm, info) {
        if (vm) {
            var cur = vm;
            while (cur = cur.$parent) {
                var hooks = cur.$options.errorCaptured;
                if (hooks) {
                    for (var i = 0; i < hooks.length; i++) {
                        try {
                            var capture = hooks[i].call(cur, err, vm, info) === false;
                            if (capture) {
                                return;
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            globalHandleError(e, cur, "errorCaptured hook");
                        }
                    }
                }
            }
        }
        globalHandleError(err, vm, info);
    }
    function globalHandleError(err, vm, info) {
        if (config.errorHandler) {
            try {
                return config.errorHandler.call(null, err, vm, info);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                logError(e, null, "config.errorHandler");
            }
        }
        logError(err, vm, info);
    }
    function logError(err, vm, info) {
        {
            warn("Error in " + info + ': "' + err.toString() + '"', vm);
        }
        /* istanbul ignore else */        if (typeof console !== "undefined") {
            // eslint-disable-next-line
            console.error(err);
        } else {
            throw err;
        }
    }
    var callbacks = [];
    var pending = false;
    function flushCallbacks() {
        pending = false;
        var copies = callbacks.slice(0);
        callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
    // Here we have async deferring wrappers using both micro and macro tasks.
    // In < 2.4 we used micro tasks everywhere, but there are some scenarios where
    // micro tasks have too high a priority and fires in between supposedly
    // sequential events (e.g. #4521, #6690) or even between bubbling of the same
    // event (#6566). However, using macro tasks everywhere also has subtle problems
    // when state is changed right before repaint (e.g. #6813, out-in transitions).
    // Here we use micro task by default, but expose a way to force macro task when
    // needed (e.g. in event handlers attached by v-on).
        var microTimerFunc;
    var macroTimerFunc;
    var useMacroTask = false;
    // Determine (macro) Task defer implementation.
    // Technically setImmediate should be the ideal choice, but it's only available
    // in IE. The only polyfill that consistently queues the callback after all DOM
    // events triggered in the same loop is by using MessageChannel.
    /* istanbul ignore if */    if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
        macroTimerFunc = function() {
            setImmediate(flushCallbacks);
        };
    } else if (
    /* eslint-disable no-undef */
    typeof MessageChannel !== "undefined" && (isNative(MessageChannel) || 
    // PhantomJS
    MessageChannel.toString() === "[object MessageChannelConstructor]")) {
        var channel = new MessageChannel();
        var port = channel.port2;
        channel.port1.onmessage = flushCallbacks;
        macroTimerFunc = function() {
            port.postMessage(1);
        };
        /* eslint-enable no-undef */    } else {
        /* istanbul ignore next */
        macroTimerFunc = function() {
            setTimeout(flushCallbacks, 0);
        };
    }
    // Determine MicroTask defer implementation.
    /* istanbul ignore next, $flow-disable-line */    if (typeof Promise !== "undefined" && isNative(Promise)) {
        var p = Promise.resolve();
        microTimerFunc = function() {
            p.then(flushCallbacks);
            // in problematic UIWebViews, Promise.then doesn't completely break, but
            // it can get stuck in a weird state where callbacks are pushed into the
            // microtask queue but the queue isn't being flushed, until the browser
            // needs to do some other work, e.g. handle a timer. Therefore we can
            // "force" the microtask queue to be flushed by adding an empty timer.
            // if (isIOS) setTimeout(noop)
                };
    } else {
        // fallback to macro
        microTimerFunc = macroTimerFunc;
    }
    function nextTick(cb, ctx) {
        var _resolve;
        callbacks.push(function() {
            if (cb) {
                try {
                    cb.call(ctx);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    handleError(e, ctx, "nextTick");
                }
            } else if (_resolve) {
                _resolve(ctx);
            }
        });
        if (!pending) {
            pending = true;
            if (useMacroTask) {
                macroTimerFunc();
            } else {
                microTimerFunc();
            }
        }
        // $flow-disable-line
                if (!cb && typeof Promise !== "undefined") {
            return new Promise(function(resolve) {
                _resolve = resolve;
            });
        }
    }
    var renderCallbacks = [];
    function renderFlushCallbacks() {
        var copies = renderCallbacks.slice(0);
        renderCallbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
    function renderNextTick(cb, ctx) {
        var _resolve;
        renderCallbacks.push(function() {
            if (cb) {
                try {
                    cb.call(ctx);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    handleError(e, ctx, "nextTick");
                }
            } else if (_resolve) {
                _resolve(ctx);
            }
        });
        if (!cb && typeof Promise !== "undefined") {
            return new Promise(function(resolve) {
                _resolve = resolve;
            });
        }
    }
    /**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */
    /**
 * Remove an item from an array
 */    function remove(arr, item) {
        if (arr.length) {
            var index = arr.indexOf(item);
            if (index > -1) {
                return arr.splice(index, 1);
            }
        }
    }
    /**
 * Define a property.
 */    function def(obj, key, val, enumerable) {
        Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true
        });
    }
    /**
 * Parse simple path.
 */    var bailRE = /[^\w.$]/;
    function parsePath(path) {
        if (bailRE.test(path)) {
            return;
        }
        var segments = path.split(".");
        return function(obj) {
            for (var i = 0; i < segments.length; i++) {
                if (!obj) {
                    return;
                }
                obj = obj[segments[i]];
            }
            return obj;
        };
    }
    // import type Watcher from './watcher'
        var uid = 0;
    /**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */    var Dep = function Dep() {
        this.id = uid++;
        this.subs = [];
    };
    Dep.prototype.addSub = function addSub(sub) {
        this.subs.push(sub);
    };
    Dep.prototype.removeSub = function removeSub(sub) {
        remove(this.subs, sub);
    };
    Dep.prototype.depend = function depend() {
        if (Dep.target) {
            Dep.target.addDep(this);
        }
    };
    Dep.prototype.notify = function notify() {
        // stabilize the subscriber list first
        var subs = this.subs.slice();
        for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
        }
    };
    // the current target watcher being evaluated.
    // this is globally unique because there could be only one
    // watcher being evaluated at any time.
        Dep.target = null;
    var targetStack = [];
    function pushTarget(_target) {
        if (Dep.target) {
            targetStack.push(Dep.target);
        }
        Dep.target = _target;
    }
    function popTarget() {
        Dep.target = targetStack.pop();
    }
    /**
 * @desc ObserverPath 类以及相关处理函数
 * Observer 所在位置对应在整棵 data tree 的路径集合
 * @createDate 2019-07-21
 */
    /**
 * 生成完整路径
 * @param key  {String|Number} 当为字符串时，说明是属性名，当为数字时，说明是索引
 * @param parentPath {String} 父路径
 * @return {string}
 */    var setPath = function(key, parentPath) {
        return isNum(key) ? parentPath + "[" + key + "]" : parentPath + "." + key;
    };
    /**
 * 得到 ObserverPath
 * @param value 被观察对象
 * @return {ObserverPath|null}
 */    var pickOp = function(value) {
        return isObject(value) && hasOwn(value, "__ob__") ? value.__ob__.op : null;
    };
    var ObserverPath = function ObserverPath(key, ob, parentOp) {
        this.ob = ob;
        // eslint-disable-next-line eqeqeq
                if (parentOp) {
            var ref = getPathMap(key, parentOp.pathKeys, parentOp.pathMap);
            var combinePathKeys = ref.combinePathKeys;
            var combinePathMap = ref.combinePathMap;
            this.pathKeys = combinePathKeys;
            this.pathMap = combinePathMap;
        } else {
            this.pathKeys = null;
            this.pathMap = null;
        }
    };
    ObserverPath.prototype.traverseOp = function traverseOp(key, pathKeys, pathMap, handler) {
        // 得到 newKey 和 pathMap 组合的路径集合
        var ref = getPathMap(key, pathKeys, pathMap);
        var combinePathMap = ref.combinePathMap;
        var combinePathKeys = ref.combinePathKeys;
        var handlePathKeys = [];
        var handlePathMap = {};
        var hasChange = false;
        // 遍历 combinePathMap
                for (var i = 0; i < combinePathKeys.length; i++) {
            var pathObj = handler(combinePathMap[combinePathKeys[i]], this);
            if (pathObj) {
                hasChange = true;
                handlePathKeys.push(pathObj.path);
                handlePathMap[pathObj.path] = pathObj;
            }
        }
        if (hasChange) {
            var value = this.ob.value;
            if (Array.isArray(value)) {
                for (var i$1 = 0; i$1 < value.length; i$1++) {
                    var op = pickOp(value[i$1]);
                    op && op.traverseOp(i$1, handlePathKeys, handlePathMap, handler);
                }
            } else {
                var keys = Object.keys(value);
                for (var i$2 = 0; i$2 < keys.length; i$2++) {
                    var key$1 = keys[i$2];
                    var op$1 = pickOp(value[key$1]);
                    op$1 && op$1.traverseOp(key$1, handlePathKeys, handlePathMap, handler);
                }
            }
        }
    };
    ObserverPath.prototype.addPath = function addPath(pathObj) {
        this.pathKeys.push(pathObj.path);
        this.pathMap[pathObj.path] = pathObj;
    };
    ObserverPath.prototype.delPath = function delPath(path) {
        remove(this.pathKeys, path);
        delete this.pathMap[path];
    };
    /**
 * 添加新的 __ob__ 的 path
 */    function addPaths(newKey, op, parentOp) {
        op.traverseOp(newKey, parentOp.pathKeys, parentOp.pathMap, handler);
        function handler(pathObj, op) {
            if (!(pathObj.path in op.pathMap)) {
                // 新增一条 path
                op.addPath(pathObj);
                return pathObj;
            } else {
                return null;
            }
        }
    }
    /**
 * 删除指定的 __ob__ 的 path
 */    function cleanPaths(oldKey, op, parentOp) {
        op.traverseOp(oldKey, parentOp.pathKeys, parentOp.pathMap, handler);
        function handler(pathObj, op) {
            // 删除一条 path
            op.delPath(pathObj.path);
            return pathObj;
        }
    }
    /**
 * 得到 pathMap 与 key 组合后的路径集合
 */    function getPathMap(key, pathKeys, pathMap) {
        var obj;
        if (pathMap) {
            // console.log('pathMap', pathMap)
            var combinePathKeys = [];
            var combinePathMap = {};
            for (var i = 0; i < pathKeys.length; i++) {
                var path = setPath(key, pathMap[pathKeys[i]].path);
                combinePathKeys.push(path);
                combinePathMap[path] = {
                    key: key,
                    root: pathMap[pathKeys[i]].root,
                    path: path
                };
            }
            return {
                combinePathKeys: combinePathKeys,
                combinePathMap: combinePathMap
            };
        } else {
            return {
                combinePathKeys: [ key ],
                combinePathMap: (obj = {}, obj[key] = {
                    key: key,
                    root: key,
                    path: key
                }, obj)
            };
        }
    }
    /*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */    var arrayProto = Array.prototype;
    var arrayMethods = Object.create(arrayProto);
    var methodsToPatch = [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ];
    /**
 * Intercept mutating methods and emit events
 */    methodsToPatch.forEach(function(method) {
        // cache original method
        var original = arrayProto[method];
        def(arrayMethods, method, function mutator() {
            var args = [], len$1 = arguments.length;
            while (len$1--) args[len$1] = arguments[len$1];
            var len = this.length;
            // 清除已经失效的 paths
                        if (len > 0) {
                switch (method) {
                  case "pop":
                    delInvalidPaths(len - 1, this[len - 1], this);
                    break;

                  case "shift":
                    delInvalidPaths(0, this[0], this);
                    break;

                  case "splice":
                  case "sort":
                  case "reverse":
                    for (var i = 0; i < this.length; i++) {
                        delInvalidPaths(i, this[i], this);
                    }
                }
            }
            var result = original.apply(this, args);
            var ob = this.__ob__;
            var vm = ob.vm;
            // push parent key to dirty, wait to setData
                        if (vm.$dirty) {
                if (method === "push") {
                    var lastIndex = ob.value.length - 1;
                    vm.$dirty.set(ob.op, lastIndex, ob.value[lastIndex]);
                } else {
                    vm.$dirty.set(ob.op, null, ob.value);
                }
            }
            // 这里和 vue 不一样，所有变异方法都需要更新 path
                        ob.observeArray(ob.key, ob.value);
            // notify change
                        ob.dep.notify();
            return result;
        });
    });
    function delInvalidPaths(key, value, parent) {
        if (isObject(value) && hasOwn(value, "__ob__")) {
            // delete invalid paths
            cleanPaths(key, value.__ob__.op, parent.__ob__.op);
        }
    }
    var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
    /**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */    var observerState = {
        shouldConvert: true
    };
    /**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */    var Observer = function Observer(ref) {
        var vm = ref.vm;
        var key = ref.key;
        var value = ref.value;
        var parent = ref.parent;
        this.value = value;
        this.dep = new Dep();
        this.vmCount = 0;
        this.vm = vm;
        this.op = new ObserverPath(key, this, parent && parent.__ob__ && parent.__ob__.op);
        def(value, "__ob__", this);
        if (Array.isArray(value)) {
            var augment = hasProto ? protoAugment : copyAugment;
            augment(value, arrayMethods, arrayKeys);
            this.observeArray(key, value);
        } else {
            this.walk(key, value);
        }
    };
    /**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */    Observer.prototype.walk = function walk(key, obj) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            defineReactive({
                vm: this.vm,
                obj: obj,
                key: keys[i],
                value: obj[keys[i]],
                parent: obj
            });
            //defineReactive(this.vm, obj, keys[i], obj[keys[i]]);
                }
    };
    /**
 * Observe a list of Array items.
 */    Observer.prototype.observeArray = function observeArray(key, items) {
        for (var i = 0, l = items.length; i < l; i++) {
            observe({
                vm: this.vm,
                key: i,
                value: items[i],
                parent: items
            });
        }
    };
    /**
 * Check if path exsit in vm
 */    Observer.prototype.hasPath = function hasPath(path) {
        var value = this.vm;
        var key = "";
        var i = 0;
        while (i < path.length) {
            if (path[i] !== "." && path[i] !== "[" && path[i] !== "]") {
                key += path[i];
            } else if (key.length !== 0) {
                value = value[key];
                key = "";
                if (!isObject(value)) {
                    return false;
                }
            }
            i++;
        }
        return true;
    };
    /**
 * Is this path value equal
 */    Observer.prototype.isPathEq = function isPathEq(path, value) {
        var objValue = this.vm;
        var key = "";
        var i = 0;
        while (i < path.length) {
            if (path[i] !== "." && path[i] !== "[" && path[i] !== "]") {
                key += path[i];
            } else if (key.length !== 0) {
                objValue = objValue[key];
                key = "";
                if (!isObject(objValue)) {
                    return false;
                }
            }
            i++;
        }
        if (key.length !== 0) {
            objValue = objValue[key];
        }
        return value === objValue;
    };
    // helpers
    /**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */    function protoAugment(target, src) {
        /* eslint-disable no-proto */
        target.__proto__ = src;
        /* eslint-enable no-proto */    }
    /**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
    /* istanbul ignore next */    function copyAugment(target, src, keys) {
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            def(target, key, src[key]);
        }
    }
    /**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */    function observe(ref) {
        var vm = ref.vm;
        var key = ref.key;
        var value = ref.value;
        var parent = ref.parent;
        var root = ref.root;
        if (!isObject(value)) {
            return;
        }
        var ob;
        if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
            ob = value.__ob__;
            var op = ob.op;
            addPaths(key, op, parent.__ob__.op);
        } else if (observerState.shouldConvert && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
            ob = new Observer({
                vm: vm,
                key: key,
                value: value,
                parent: parent
            });
        }
        if (root && ob) {
            ob.vmCount++;
        }
        return ob;
    }
    /**
 * Define a reactive property on an Object.
 */    function defineReactive(ref) {
        var vm = ref.vm;
        var obj = ref.obj;
        var key = ref.key;
        var value = ref.value;
        var parent = ref.parent;
        var customSetter = ref.customSetter;
        var shallow = ref.shallow;
        var dep = new Dep();
        var property = Object.getOwnPropertyDescriptor(obj, key);
        if (property && property.configurable === false) {
            return;
        }
        // cater for pre-defined getter/setters
                var getter = property && property.get;
        if (!getter && arguments.length === 2) {
            value = obj[key];
        }
        var setter = property && property.set;
        var childOb = !shallow && observe({
            vm: vm,
            key: key,
            value: value,
            parent: obj
        });
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function reactiveGetter() {
                var val = getter ? getter.call(obj) : value;
                if (Dep.target) {
                    dep.depend();
                    if (childOb) {
                        childOb.dep.depend();
                        if (Array.isArray(val)) {
                            dependArray(val);
                        }
                    }
                }
                return val;
            },
            set: function reactiveSetter(newVal) {
                var val = getter ? getter.call(obj) : value;
                /* eslint-disable no-self-compare */                if (newVal === val || newVal !== newVal && val !== val) {
                    return;
                }
                if (isObject(value) && hasOwn(value, "__ob__")) {
                    /**
         * 删掉无效的 paths
         * 注意：即使 path 只有一个也要删掉，因为其子节点可能有多个 path
         */
                    cleanPaths(key, value.__ob__.op, parent.__ob__.op);
                }
                /* eslint-enable no-self-compare */                if ("development" !== "production" && customSetter) {
                    customSetter();
                }
                if (setter) {
                    setter.call(obj, newVal);
                } else {
                    value = newVal;
                }
                // Have to set dirty after value assigned, otherwise the dirty key is incrrect.
                                if (vm) {
                    // push parent key to dirty, wait to setData
                    if (vm.$dirty) {
                        vm.$dirty.set(obj.__ob__.op, key, newVal);
                    }
                }
                childOb = !shallow && observe({
                    vm: vm,
                    key: key,
                    value: newVal,
                    parent: parent
                });
                dep.notify();
            }
        });
    }
    /**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */    function set(vm, target, key, val) {
        if (Array.isArray(target) && isValidArrayIndex(key)) {
            target.length = Math.max(target.length, key);
            target.splice(key, 1, val);
            return val;
        }
        if (key in target && !(key in Object.prototype)) {
            target[key] = val;
            return val;
        }
        var ob = target.__ob__;
        if (target._isVue || ob && ob.vmCount) {
            "development" !== "production" && warn("Avoid adding reactive properties to a Vue instance or its root $data " + "at runtime - declare it upfront in the data option.");
            return val;
        }
        if (!ob) {
            target[key] = val;
            return val;
        }
        if (isObject(target[key]) && hasOwn(target[key], "__ob__")) {
            // delete invalid paths
            cleanPaths(key, target[key].__ob__.op, ob.op);
        }
        defineReactive({
            vm: vm,
            obj: ob.value,
            key: key,
            value: val,
            parent: ob.value
        });
        if (vm) {
            // push parent key to dirty, wait to setData
            if (vm.$dirty && hasOwn(target, "__ob__")) {
                vm.$dirty.set(target.__ob__.op, key, val);
            }
        }
        ob.dep.notify();
        return val;
    }
    /**
 * Delete a property and trigger change if necessary.
 */    function del(target, key) {
        if (Array.isArray(target) && isValidArrayIndex(key)) {
            target.splice(key, 1);
            return;
        }
        var ob = target.__ob__;
        if (target._isVue || ob && ob.vmCount) {
            "development" !== "production" && warn("Avoid deleting properties on a Vue instance or its root $data " + "- just set it to null.");
            return;
        }
        if (!hasOwn(target, key)) {
            return;
        }
        // set $dirty
                target[key] = null;
        delete target[key];
        if (!ob) {
            return;
        }
        ob.dep.notify();
    }
    /**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */    function dependArray(value) {
        for (var e = void 0, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
            if (Array.isArray(e)) {
                dependArray(e);
            }
        }
    }
    var Base = function Base() {
        this._events = {};
        this._watchers = [];
    };
    Base.prototype.$set = function $set(target, key, val) {
        return set(this, target, key, val);
    };
    Base.prototype.$delete = function $delete(target, key) {
        return del(target, key);
    };
    Base.prototype.$on = function $on(event, fn) {
        var this$1 = this;
        if (isArr(event)) {
            event.forEach(function(item) {
                if (isStr(item)) {
                    this$1.$on(item, fn);
                } else if (isObj(item)) {
                    this$1.$on(item.event, item.fn);
                }
            });
        } else {
            (this._events[event] || (this._events[event] = [])).push(fn);
        }
        return this;
    };
    Base.prototype.$once = function $once() {};
    Base.prototype.$off = function $off(event, fn) {
        var this$1 = this;
        if (!event && !fn) {
            this._events = Object.create(null);
            return this;
        }
        if (isArr(event)) {
            event.forEach(function(item) {
                if (isStr(item)) {
                    this$1.$off(item, fn);
                } else if (isObj(item)) {
                    this$1.$off(item.event, item.fn);
                }
            });
            return this;
        }
        if (!this._events[event]) {
            return this;
        }
        if (!fn) {
            this._events[event] = null;
            return this;
        }
        if (fn) {
            var fns = this._events[event];
            var i = fns.length;
            while (i--) {
                var tmp = fns[i];
                if (tmp === fn || tmp.fn === fn) {
                    fns.splice(i, 1);
                    break;
                }
            }
        }
        return this;
    };
    Base.prototype.$emit = function $emit(event) {
        var this$1 = this;
        var vm = this;
        var lowerCaseEvent = event.toLowerCase();
        var fns = this._events[event] || [];
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
            // TODO: handler warn
        }
        var args = toArray(arguments, 1);
        fns.forEach(function(fn) {
            try {
                fn.apply(this$1, args);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                handleError(e, vm, 'event handler for "' + event + '"');
            }
        });
        return this;
    };
    var seenObjects = new _Set();
    /**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */    function traverse(val) {
        _traverse(val, seenObjects);
        seenObjects.clear();
    }
    function _traverse(val, seen) {
        var i, keys;
        var isA = Array.isArray(val);
        if (!isA && !isObject(val) || Object.isFrozen(val)) {
            return;
        }
        if (val.__ob__) {
            var depId = val.__ob__.dep.id;
            if (seen.has(depId)) {
                return;
            }
            seen.add(depId);
        }
        if (isA) {
            i = val.length;
            while (i--) {
                _traverse(val[i], seen);
            }
        } else {
            keys = Object.keys(val);
            i = keys.length;
            while (i--) {
                _traverse(val[keys[i]], seen);
            }
        }
    }
    //import { callHook, activateChildComponent } from '../instance/lifecycle';
        var MAX_UPDATE_COUNT = 100;
    var queue = [];
    var activatedChildren = [];
    var has = {};
    var circular = {};
    var waiting = false;
    var flushing = false;
    var index = 0;
    /**
 * Reset the scheduler's state.
 */    function resetSchedulerState() {
        index = queue.length = activatedChildren.length = 0;
        has = {};
        {
            circular = {};
        }
        waiting = flushing = false;
    }
    /**
 * Flush both queues and run the watchers.
 */    function flushSchedulerQueue(times) {
        if (times === void 0) times = 0;
        flushing = true;
        var watcher, id;
        // Sort queue before flush.
        // This ensures that:
        // 1. Components are updated from parent to child. (because parent is always
        //    created before the child)
        // 2. A component's user watchers are run before its render watcher (because
        //    user watchers are created before the render watcher)
        // 3. If a component is destroyed during a parent component's watcher run,
        //    its watchers can be skipped.
                times === 0 && queue.sort(function(a, b) {
            return a.id - b.id;
        });
        // do not cache length because more watchers might be pushed
        // as we run existing watchers
        // there would be mutilple renderWatcher in the queue.
                var renderWatcher = [];
        if (times === 0) {
            index = 0;
        }
        for (;index < queue.length; index++) {
            // if it's renderWatcher, run it in the end
            watcher = queue[index];
            if (watcher && watcher.isRenderWatcher) {
                renderWatcher.push(watcher);
                continue;
            }
            id = watcher.id;
            has[id] = null;
            watcher.run();
            // in dev build, check and stop circular updates.
            // eslint-disable-next-line
                        if ("development" !== "production" && has[id] != null) {
                circular[id] = (circular[id] || 0) + 1;
                if (circular[id] > MAX_UPDATE_COUNT) {
                    warn("You may have an infinite update loop " + (watcher.user ? 'in watcher with expression "' + watcher.expression + '"' : "in a component render function."), watcher.vm);
                    resetSchedulerState();
                    return;
                }
            }
        }
        // Run renderWatcher in the end.
                if (renderWatcher.length) {
            renderWatcher.forEach(function(watcher) {
                has[watcher.id] = null;
                watcher.run();
            });
        }
        // It may added new watcher to the queue in render watcher
                var pendingQueue = queue.slice(index);
        if (pendingQueue.length) {
            flushSchedulerQueue(times + 1);
        } else {
            // keep copies of post queues before resetting state
            // const activatedQueue = activatedChildren.slice()
            // const updatedQueue = queue.slice()
            resetSchedulerState();
            // call component updated and activated hooks
            // callActivatedHooks(activatedQueue)
            // callUpdatedHooks(updatedQueue)
            // devtool hook
            /* istanbul ignore if */
            /*
    if (devtools && config.devtools) {
      devtools.emit('flush')
    }*/        }
    }
    /*
function callActivatedHooks(queue) {
  for (let i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true);
  }
}
*/
    /**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */    function queueWatcher(watcher) {
        var id = watcher.id;
        // eslint-disable-next-line
                if (has[id] == null) {
            has[id] = true;
            if (!flushing) {
                queue.push(watcher);
            } else {
                // if already flushing, splice the watcher based on its id
                // if already past its id, it will be run next immediately.
                var i = queue.length - 1;
                while (i > index && queue[i].id > watcher.id) {
                    i--;
                }
                queue.splice(i + 1, 0, watcher);
            }
            // queue the flush
                        if (!waiting) {
                waiting = true;
                nextTick(flushSchedulerQueue);
            }
        }
    }
    //import { SimpleSet } from '../util/index';
        var uid$1 = 0;
    /**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */    var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
        this.vm = vm;
        if (isRenderWatcher) {
            vm._watcher = this;
        }
        vm._watchers.push(this);
        // options
                if (options) {
            this.deep = !!options.deep;
            this.user = !!options.user;
            this.computed = !!options.computed;
            this.sync = !!options.sync;
        } else {
            this.deep = this.user = this.computed = this.sync = false;
        }
        this.cb = cb;
        this.id = ++uid$1;
        // uid for batching
                this.active = true;
        this.dirty = this.computed;
        // for computed watchers
                this.deps = [];
        this.newDeps = [];
        this.depIds = new _Set();
        this.newDepIds = new _Set();
        this.isRenderWatcher = isRenderWatcher;
        this.expression = expOrFn.toString();
        // parse expression for getter
                if (typeof expOrFn === "function") {
            this.getter = expOrFn;
        } else {
            this.getter = parsePath(expOrFn);
            if (!this.getter) {
                this.getter = function() {};
                "development" !== "production" && warn('Failed watching path: "' + expOrFn + '" ' + "Watcher only accepts simple dot-delimited paths. " + "For full control, use a function instead.", vm);
            }
        }
        this.value = this.computed ? undefined : this.get();
    };
    /**
 * Evaluate the getter, and re-collect dependencies.
 */    Watcher.prototype.get = function get() {
        pushTarget(this);
        var value;
        var vm = this.vm;
        try {
            value = this.getter.call(vm, vm);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            if (this.user) {
                handleError(e, vm, 'getter for watcher "' + this.expression + '"');
            } else {
                throw e;
            }
        } finally {
            // "touch" every property so they are all tracked as
            // dependencies for deep watching
            if (this.deep) {
                traverse(value);
            }
            popTarget();
            if (!this.isRenderWatcher) {
                this.cleanupDeps();
            }
        }
        return value;
    };
    /**
 * Add a dependency to this directive.
 */    Watcher.prototype.addDep = function addDep(dep) {
        var id = dep.id;
        if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id);
            this.newDeps.push(dep);
            if (!this.depIds.has(id)) {
                dep.addSub(this);
            }
        }
    };
    /**
 * Clean up for dependency collection.
 */    Watcher.prototype.cleanupDeps = function cleanupDeps() {
        var i = this.deps.length;
        while (i--) {
            var dep = this.deps[i];
            if (!this.newDepIds.has(dep.id)) {
                dep.removeSub(this);
            }
        }
        var tmp = this.depIds;
        this.depIds = this.newDepIds;
        this.newDepIds = tmp;
        this.newDepIds.clear();
        tmp = this.deps;
        this.deps = this.newDeps;
        this.newDeps = tmp;
        this.newDeps.length = 0;
    };
    /**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */    Watcher.prototype.update = function update() {
        /* istanbul ignore else */
        if (this.computed) {
            this.dirty = true;
        } else if (this.sync) {
            this.run();
        } else {
            queueWatcher(this);
        }
    };
    /**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */    Watcher.prototype.run = function run() {
        if (this.active) {
            var value = this.get();
            if (value !== this.value || 
            // Deep watchers and watchers on Object/Arrays should fire even
            // when the value is the same, because the value may
            // have mutated.
            isObject(value) || this.deep) {
                // set new value
                var oldValue = this.value;
                this.value = value;
                if (this.user) {
                    try {
                        this.cb.call(this.vm, value, oldValue);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        handleError(e, this.vm, 'callback for watcher "' + this.expression + '"');
                    }
                } else {
                    this.cb.call(this.vm, value, oldValue);
                }
            }
        }
    };
    /**
 * Evaluate the value of the watcher.
 * This only gets called for computed watchers.
 */    Watcher.prototype.evaluate = function evaluate() {
        this.value = this.get();
        if (this.vm.$dirty) {
            var keyVal = this._computedWatchers && this._computedWatchers[this.key] ? this.vm._computedWatchers[this.key].value : this.value;
            this.vm.$dirty.push(this.key, this.key, keyVal, this.value);
        }
        this.dirty = false;
        return this.value;
    };
    /**
 * Depend on all deps collected by this watcher.
 */    Watcher.prototype.depend = function depend() {
        if (Dep.target) {
            var i = this.deps.length;
            while (i--) {
                this.deps[i].depend();
            }
        }
    };
    /**
 * Remove self from all dependencies' subscriber list.
 */    Watcher.prototype.teardown = function teardown() {
        if (this.active) {
            // remove self from vm's watcher list
            // this is a somewhat expensive operation so we skip it
            // if the vm is being destroyed.
            if (!this.vm._isBeingDestroyed) {
                remove(this.vm._watchers, this);
            }
            var i = this.deps.length;
            while (i--) {
                this.deps[i].removeSub(this);
            }
            this.active = false;
        }
    };
    var WepyComponent = /* */ function(Base$$1) {
        function WepyComponent() {
            Base$$1.apply(this, arguments);
        }
        if (Base$$1) WepyComponent.__proto__ = Base$$1;
        WepyComponent.prototype = Object.create(Base$$1 && Base$$1.prototype);
        WepyComponent.prototype.constructor = WepyComponent;
        WepyComponent.prototype.$watch = function $watch(expOrFn, cb, options) {
            var this$1 = this;
            var vm = this;
            if (isArr(cb)) {
                cb.forEach(function(handler) {
                    this$1.$watch(expOrFn, handler, options);
                });
            }
            if (isPlainObject(cb)) {
                var handler = cb;
                options = handler;
                handler = handler.handler;
                if (typeof handler === "string") {
                    handler = this[handler];
                }
                return this.$watch(expOrFn, handler, options);
            }
            options = options || {};
            options.user = true;
            var watcher = new Watcher(vm, expOrFn, cb, options);
            if (options.immediate) {
                cb.call(vm, watcher.value);
            }
            return function unwatchFn() {
                watcher.teardown();
            };
        };
        WepyComponent.prototype.$forceUpdate = function $forceUpdate() {
            if (this._watcher) {
                this._watcher.update();
            }
        };
        WepyComponent.prototype.$emit = function $emit(event) {
            var args = [], len = arguments.length - 1;
            while (len-- > 0) args[len] = arguments[len + 1];
            var fns = this._events[event];
            if (fns) {
                Base$$1.prototype.$emit.apply(this, arguments);
            } else {
                this.$wx.triggerEvent(event, {
                    arguments: args
                });
            }
            return this;
        };
        WepyComponent.prototype.$trigger = function $trigger(event, data, option) {
            this.$wx.triggerEvent(event, {
                arguments: [ data ]
            }, option);
        };
        return WepyComponent;
    }(Base);
    WepyComponent.prototype.$nextTick = renderNextTick;
    var sharedPropertyDefinition = {
        enumerable: true,
        configurable: true,
        get: noop,
        set: noop
    };
    function proxy(target, sourceKey, key) {
        sharedPropertyDefinition.get = function proxyGetter() {
            return this[sourceKey][key];
        };
        sharedPropertyDefinition.set = function proxySetter(val) {
            this[sourceKey][key] = val;
        };
        Object.defineProperty(target, key, sharedPropertyDefinition);
    }
    /*
 * patch data option
 */    function patchData(output, data) {
        if (!data) {
            data = {};
        }
        output.data = data;
    }
    /*
 * init data
 */    function initData(vm, data) {
        if (!data) {
            data = {};
        }
        var _data;
        if (typeof data === "function") {
            _data = data.call(vm);
        } else {
            _data = clone(data);
        }
        vm._data = _data;
        Object.keys(_data).forEach(function(key) {
            proxy(vm, "_data", key);
        });
        observe({
            vm: vm,
            key: "",
            value: _data,
            parent: "",
            root: true
        });
        //observe(vm, _data, null, true);
        }
    function initWatch(vm, watch) {
        if (watch) {
            Object.keys(watch).forEach(function(key) {
                vm.$watch(key, watch[key]);
            });
        }
    }
    function createComputedGetter(key) {
        return function computedGetter() {
            var watcher = this._computedWatchers && this._computedWatchers[key];
            if (watcher) {
                watcher.key = key;
                if (watcher.dirty) {
                    watcher.evaluate();
                }
                if (Dep.target) {
                    watcher.depend();
                }
                return watcher.value;
            }
        };
    }
    /*
 * init computed
 */    function initComputed(vm, computed) {
        if (!computed) {
            return;
        }
        var watchers = vm._computedWatchers = Object.create(null);
        var computedWatcherOptions = {
            computed: true
        };
        Object.keys(computed).forEach(function(key) {
            var def = computed[key];
            var getter = typeof def === "object" ? def.get : def;
            if (!getter || typeof getter !== "function") {
                // eslint-disable-next-line
                console.error('Getter is missing for computed property "' + key + '"');
            }
            // push to dirty after dep called.
                        watchers[key] = new Watcher(vm, getter || function() {}, function() {
                // evaluate will set dirty
                // vm.$dirty.push(key, key, newv);
            }, computedWatcherOptions);
            if (typeof def === "function") {
                sharedPropertyDefinition.get = createComputedGetter(key);
                sharedPropertyDefinition.set = function() {};
            } else {
                sharedPropertyDefinition.get = def.cache !== false ? createComputedGetter(key) : def.get;
                sharedPropertyDefinition.set = def.set;
            }
            Object.defineProperty(vm, key, sharedPropertyDefinition);
        });
    }
    var WepyConstructor = /* */ function(WepyComponent$$1) {
        function WepyConstructor(opt) {
            if (opt === void 0) opt = {};
            WepyComponent$$1.call(this);
            var vm = new WepyComponent$$1();
            // Only need data and watchers for a empty WepyComponent
                        if (opt.data) {
                initData(vm, opt.data);
            }
            initWatch(vm);
            initComputed(vm, opt.computed);
            return vm;
        }
        if (WepyComponent$$1) WepyConstructor.__proto__ = WepyComponent$$1;
        WepyConstructor.prototype = Object.create(WepyComponent$$1 && WepyComponent$$1.prototype);
        WepyConstructor.prototype.constructor = WepyConstructor;
        return WepyConstructor;
    }(WepyComponent);
    var $global = Object.create(null);
    function use(plugin) {
        var args = [], len = arguments.length - 1;
        while (len-- > 0) args[len] = arguments[len + 1];
        if (plugin.installed) {
            return this;
        }
        var install = plugin.install || plugin;
        if (isFunc(install)) {
            install.apply(plugin, [ this ].concat(args));
        }
        plugin.installed = 1;
    }
    function mixin(options) {
        if (options === void 0) options = {};
        $global.mixin = ($global.mixin || []).concat(options);
    }
    var WepyApp = /* */ function(Base$$1) {
        function WepyApp() {
            Base$$1.call(this);
        }
        if (Base$$1) WepyApp.__proto__ = Base$$1;
        WepyApp.prototype = Object.create(Base$$1 && Base$$1.prototype);
        WepyApp.prototype.constructor = WepyApp;
        return WepyApp;
    }(Base);
    var WepyPage = /* */ function(WepyComponent$$1) {
        function WepyPage() {
            WepyComponent$$1.apply(this, arguments);
        }
        if (WepyComponent$$1) WepyPage.__proto__ = WepyComponent$$1;
        WepyPage.prototype = Object.create(WepyComponent$$1 && WepyComponent$$1.prototype);
        WepyPage.prototype.constructor = WepyPage;
        WepyPage.prototype.$launch = function $launch(url, params) {
            this.$route("reLaunch", url, params);
        };
        WepyPage.prototype.$navigate = function $navigate(url, params) {
            this.$route("navigate", url, params);
        };
        WepyPage.prototype.$redirect = function $redirect(url, params) {
            this.$route("redirect", url, params);
        };
        WepyPage.prototype.$back = function $back(p) {
            if (p === void 0) p = {};
            if (isNum(p)) {
                p = {
                    delta: p
                };
            }
            if (!p.delta) {
                p.delta = 1;
            }
            return wx.navigateBack(p);
        };
        WepyPage.prototype.$route = function $route(type, url, params) {
            if (params === void 0) params = {};
            var wxparams;
            if (isStr(url)) {
                var paramsList = [];
                if (isObj(params)) {
                    for (var k in params) {
                        if (!isUndef(params[k])) {
                            paramsList.push(k + "=" + encodeURIComponent(params[k]));
                        }
                    }
                }
                if (paramsList.length) {
                    url = url + "?" + paramsList.join("&");
                }
                wxparams = {
                    url: url
                };
            } else {
                wxparams = url;
            }
            var fn = wx[type] || wx[type + "To"];
            if (isFunc(fn)) {
                return fn(wxparams);
            }
        };
        return WepyPage;
    }(WepyComponent);
    function callUserHook(vm, hookName, arg) {
        var pageHook = vm.hooks ? vm.hooks[hookName] : null;
        var appHook = vm.$app && vm.$app.hooks ? vm.$app.hooks[hookName] : null;
        if (!vm.$app) {
            warn("$app is not initialized in this Component", vm);
        }
        var result = arg;
        // First run page hook, and then run app hook
        // Pass page hook result to app hook
        // If return undefined, then return default argument
                [ pageHook, appHook ].forEach(function(fn) {
            if (isFunc(fn)) {
                result = fn.call(vm, result);
                if (isUndef(result)) {
                    result = arg;
                }
            }
        });
        return result;
    }
    function initHooks(vm, hooks) {
        if (hooks === void 0) hooks = {};
        vm.hooks = hooks;
    }
    var AllowedTypes = [ String, Number, Boolean, Object, Array, null ];
    var observerFn = function() {
        return function(newVal, oldVal, changedPaths) {
            var vm = this.$wepy;
            // changedPaths 长度大于 1，说明是由内部赋值改变的 prop
                        if (changedPaths.length > 1) {
                return;
            }
            var _data = newVal;
            if (typeof _data === "function") {
                _data = _data.call(vm);
            }
            vm[changedPaths[0]] = _data;
        };
    };
    /*
 * patch props option
 */    function patchProps(output, props) {
        var newProps = {};
        if (isStr(props)) {
            newProps = [ props ];
        }
        if (isArr(props)) {
            props.forEach(function(prop) {
                newProps[prop] = {
                    type: null,
                    observer: observerFn(output, props, prop)
                };
            });
        } else if (isObj(props)) {
            for (var k in props) {
                var prop = props[k];
                var newProp = {};
                // props.type
                                if (isUndef(prop.type)) {
                    newProp.type = null;
                } else if (isArr(prop.type)) {
                    newProp.type = null;
                    // eslint-disable-next-line
                                        console.warn('In mini-app, mutiple type is not allowed. The type of "' + k + '" will changed to "null"');
                } else if (AllowedTypes.indexOf(prop.type) === -1) {
                    newProp.type = null;
                    // eslint-disable-next-line
                                        console.warn('Type property of props "' + k + '" is invalid. Only String/Number/Boolean/Object/Array/null is allowed in weapp Component');
                } else {
                    newProp.type = prop.type;
                }
                // props.default
                                if (!isUndef(prop.default)) {
                    if (isFunc(prop.default)) {
                        newProp.value = prop.default.call(output);
                    } else {
                        newProp.value = prop.default;
                    }
                }
                // TODO
                // props.validator
                // props.required
                                newProp.observer = observerFn(output, props, prop);
                newProps[k] = newProp;
            }
        }
        // eslint-disable-next-line
                Object.keys(newProps).forEach(function(prop) {});
        output.properties = newProps;
    }
    /*
 * init props
 */    function initProps(vm, properties) {
        vm._props = {};
        if (!properties) {
            return;
        }
        Object.keys(properties).forEach(function(key) {
            vm._props[key] = properties[key].value;
            proxy(vm, "_props", key);
        });
        observe({
            vm: vm,
            key: "",
            value: vm._props,
            root: true
        });
    }
    function initRender(vm, keys, computedKeys) {
        vm._init = false;
        var dirtyFromAttach = null;
        return new Watcher(vm, function() {
            if (!vm._init) {
                keys.forEach(function(key) {
                    return clone(vm[key]);
                });
            }
            if (vm.$dirty.length() || dirtyFromAttach) {
                var keys$1 = vm.$dirty.get("key");
                computedKeys.forEach(function(key) {
                    return vm[key];
                });
                var dirty = vm.$dirty.pop();
                // TODO: reset subs
                                Object.keys(keys$1).forEach(function(key) {
                    return clone(vm[key]);
                });
                if (vm._init) {
                    dirty = callUserHook(vm, "before-setData", dirty);
                }
                // vm._fromSelf = true;
                                if (dirty || dirtyFromAttach) {
                    // init render is in lifecycle, setData in lifecycle will not work, so cacheData is needed.
                    if (!vm._init) {
                        if (dirtyFromAttach === null) {
                            dirtyFromAttach = {};
                        }
                        Object.assign(dirtyFromAttach, dirty);
                    } else if (dirtyFromAttach) {
                        // setData in attached
                        vm.$wx.setData(Object.assign(dirtyFromAttach, dirty || {}), renderFlushCallbacks);
                        dirtyFromAttach = null;
                    } else {
                        vm.$wx.setData(dirty, renderFlushCallbacks);
                    }
                }
            }
            vm._init = true;
        }, function() {}, null, true);
    }
    var Event = function Event(e) {
        var detail = e.detail;
        var target = e.target;
        var currentTarget = e.currentTarget;
        this.$wx = e;
        this.type = e.type;
        this.timeStamp = e.timeStamp;
        if (detail) {
            this.x = detail.x;
            this.y = detail.y;
        }
        this.target = target;
        this.currentTarget = currentTarget;
        this.touches = e.touches;
        this.changedTouches = e.changedTouches;
    };
    /**
 * Transform wxml data-xx params to an array
 */    function transformParams(dataset, type, hasModel) {
        if (hasModel === void 0) hasModel = false;
        var i = 0;
        var params = [];
        var modelParams = [];
        var noParams = false;
        var noModelParams = !hasModel;
        var camelizedType = camelize(type);
        while (i++ < 26 && (!noParams || !noModelParams)) {
            var alpha = String.fromCharCode(64 + i);
            if (!noParams) {
                var key = "wpy" + camelizedType + alpha;
                if (!(key in dataset)) {
                    // it can be undefined;
                    noParams = true;
                } else {
                    params.push(dataset[key]);
                }
            }
            if (!noModelParams && hasModel) {
                var modelKey = "model" + alpha;
                if (!(modelKey in dataset)) {
                    noModelParams = true;
                } else {
                    modelParams.push(dataset[modelKey]);
                }
            }
        }
        return {
            handler: params,
            model: modelParams
        };
    }
    var dispatcher = function(e) {
        var vm = this.$wepy;
        var type = e.type;
        // touchstart do not have currentTarget
                var dataset = (e.currentTarget || e.target).dataset || {};
        var evtid = dataset.wpyEvt;
        var modelId = dataset.modelId;
        var rel = vm.$rel || {};
        var handler = rel.handlers && rel.handlers[evtid] && rel.handlers[evtid][type];
        var model = rel.models && rel.models[modelId];
        if (!handler && !model) {
            return;
        }
        var params = transformParams(dataset, type, !!model);
        // Call model method
                if (model && type === model.type && isFunc(model.handler)) {
            model.handler.call(vm, e.detail.value, params.model);
        }
        // Call handler method
                if (isFunc(handler)) {
            var $event = new Event(e);
            var paramsWithEvent = params.handler.concat($event);
            var args = e.detail && e.detail.arguments || [];
            var hookRes = callUserHook(vm, "before-event", {
                event: $event,
                params: paramsWithEvent,
                args: args
            });
            if (hookRes === false) {
                // Event cancelled.
                return;
            }
            return handler.apply(vm, paramsWithEvent);
        } else if (!model) {
            throw new Error("Unrecognized event");
        }
    };
    /*
 * initialize page methods, also the app
 */    function initMethods(vm, methods) {
        if (methods) {
            Object.keys(methods).forEach(function(method) {
                vm[method] = methods[method];
            });
        }
    }
    /*
 * patch method option
 */    function patchMethods(output, methods) {
        output.methods = {};
        var target = output.methods;
        target.__initComponent = function(e) {
            var child = e.detail;
            var ref$1 = e.target.dataset;
            var ref = ref$1.ref;
            var wpyEvt = ref$1.wpyEvt;
            var vm = this.$wepy;
            vm.$children.push(child);
            if (ref) {
                if (vm.$refs[ref]) {
                    warn('duplicate ref "' + ref + '" will be covered by the last instance.\n', vm);
                }
                vm.$refs[ref] = child;
            }
            child.$evtId = wpyEvt;
            child.$parent = vm;
            child.$app = vm.$app;
            child.$root = vm.$root;
            return vm;
        };
        target.__dispatcher = dispatcher;
        // TODO: perf
        // Only orginal component method goes to target. no need to add all methods.
                if (methods) {
            Object.keys(methods).forEach(function(method) {
                target[method] = methods[method];
            });
        }
    }
    var Dirty = function Dirty(type) {
        this.reset();
        // path||key
                this.type = type || "path";
    };
    Dirty.prototype.push = function push(key, path, keyValue, pathValue) {
        if (pathValue === undefined) {
            return;
        }
        this._keys[key] = keyValue;
        this._path[path] = pathValue;
        this._length++;
    };
    Dirty.prototype.pop = function pop() {
        var data = Object.create(null);
        if (this.type === "path") {
            data = this._path;
        } else if (this.type === "key") {
            data = this._keys;
        }
        this.reset();
        return data;
    };
    Dirty.prototype.get = function get(type) {
        return type === "path" ? this._path : this._keys;
    };
    /**
 * Set dirty from a ObserverPath
 */    Dirty.prototype.set = function set(op, key, value) {
        var pathMap;
        var pathKeys;
        // eslint-disable-next-line eqeqeq
                if (key != null) {
            var ref = getPathMap(key, op.pathKeys, op.pathMap);
            var combinePathKeys = ref.combinePathKeys;
            var combinePathMap = ref.combinePathMap;
            pathKeys = combinePathKeys;
            pathMap = combinePathMap;
        } else {
            pathKeys = op.pathKeys;
            pathMap = op.pathMap;
        }
        /**
   * 出于性能考虑，使用 usingComponents 时， setData 内容不会被直接深复制，
   * 即 this.setData({ field: obj }) 后 this.data.field === obj 。
   * 因此不需要所有 path 都 setData 。
   */        var ref$1 = pathMap[pathKeys[0]];
        var root = ref$1.root;
        var path = ref$1.path;
        this.push(root, path, root === path ? value : op.ob.vm[root], value);
    };
    Dirty.prototype.reset = function reset() {
        this._keys = {};
        this._path = {};
        this._length = 0;
        return this;
    };
    Dirty.prototype.length = function length() {
        return this._length;
    };
    var comid = 0;
    var app;
    var callUserMethod = function(vm, userOpt, method, args) {
        var result;
        var methods = userOpt[method];
        if (isFunc(methods)) {
            result = userOpt[method].apply(vm, args);
        } else if (isArr(methods)) {
            for (var i in methods) {
                if (isFunc(methods[i])) {
                    result = methods[i].apply(vm, args);
                }
            }
        }
        return result;
    };
    var getLifecycycle = function(defaultLifecycle, rel, type) {
        var lifecycle = defaultLifecycle.concat([]);
        if (rel && rel.lifecycle && rel.lifecycle[type]) {
            var userDefinedLifecycle = [];
            if (isFunc(rel.lifecycle[type])) {
                userDefinedLifecycle = rel.lifecycle[type].call(null, lifecycle);
            }
            userDefinedLifecycle.forEach(function(u) {
                if (lifecycle.indexOf(u) > -1) {
                    warn("'" + u + "' is already implemented in current version, please remove it from your lifecycel config");
                } else {
                    lifecycle.push(u);
                }
            });
        }
        return lifecycle;
    };
    /*
 * patch app lifecyle
 */    function patchAppLifecycle(appConfig, options, rel) {
        if (rel === void 0) rel = {};
        appConfig.onLaunch = function() {
            var args = [], len = arguments.length;
            while (len--) args[len] = arguments[len];
            var vm = new WepyApp();
            app = vm;
            vm.$options = options;
            vm.$route = {};
            vm.$rel = rel;
            vm.$wx = this;
            this.$wepy = vm;
            initHooks(vm, options.hooks);
            initMethods(vm, options.methods);
            return callUserMethod(vm, vm.$options, "onLaunch", args);
        };
        var lifecycle = getLifecycycle(WEAPP_APP_LIFECYCLE, rel, "app");
        lifecycle.forEach(function(k) {
            // it's not defined aready && user defined it && it's an array or function
            if (!appConfig[k] && options[k] && (isFunc(options[k]) || isArr(options[k]))) {
                appConfig[k] = function() {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];
                    return callUserMethod(app, app.$options, k, args);
                };
            }
        });
    }
    function patchLifecycle(output, options, rel, isComponent) {
        var initClass = isComponent ? WepyComponent : WepyPage;
        var initLifecycle = function() {
            var args = [], len = arguments.length;
            while (len--) args[len] = arguments[len];
            var vm = new initClass();
            vm.$dirty = new Dirty("path");
            vm.$children = [];
            vm.$refs = {};
            this.$wepy = vm;
            vm.$wx = this;
            vm.$is = this.is;
            vm.$options = options;
            vm.$rel = rel;
            vm._watchers = [];
            if (!isComponent) {
                vm.$root = vm;
            }
            if (app) {
                vm.$app = app;
            }
            if (this.is === "custom-tab-bar/index") {
                vm.$app = app;
                vm.$parent = app;
            }
            vm.$id = ++comid + (isComponent ? ".1" : ".0");
            callUserMethod(vm, vm.$options, "beforeCreate", args);
            initHooks(vm, options.hooks);
            initProps(vm, output.properties);
            initData(vm, output.data, isComponent);
            initMethods(vm, options.methods);
            initComputed(vm, options.computed, true);
            initWatch(vm, options.watch);
            // create render watcher
                        initRender(vm, Object.keys(vm._data).concat(Object.keys(vm._props)).concat(Object.keys(vm._computedWatchers || {})), Object.keys(vm._computedWatchers || {}));
            return callUserMethod(vm, vm.$options, "created", args);
        };
        output.created = initLifecycle;
        if (isComponent) {
            output.attached = function() {
                var args = [], len = arguments.length;
                while (len--) args[len] = arguments[len];
                // Component attached
                                var outProps = output.properties || {};
                // this.propperties are includes datas
                                var acceptProps = this.properties;
                var vm = this.$wepy;
                this.triggerEvent("_init", vm);
                // created 不能调用 setData，如果有 dirty 在此更新
                                vm.$forceUpdate();
                Object.keys(outProps).forEach(function(k) {
                    return vm[k] = acceptProps[k];
                });
                return callUserMethod(vm, vm.$options, "attached", args);
            };
        } else {
            output.attached = function() {
                var args = [], len = arguments.length;
                while (len--) args[len] = arguments[len];
                // Page attached
                                var vm = this.$wepy;
                var app = vm.$app;
                // eslint-disable-next-line
                                var pages = getCurrentPages();
                var currentPage = pages[pages.length - 1];
                var path = currentPage.__route__;
                var webViewId = currentPage.__wxWebviewId__;
                var refs = rel.refs || [];
                var query = wx.createSelectorQuery();
                refs.forEach(function(item) {
                    // {
                    //   id: { name: 'hello', bind: true },
                    //   ref: { name: 'value', bind: false }
                    // }
                    var idAttr = item.id;
                    var refAttr = item.ref;
                    var actualAttrIdName = idAttr.name;
                    var actualAttrRefName = refAttr.name;
                    var selector = "#" + actualAttrIdName;
                    if (idAttr.bind) {
                        // if id is a bind attr
                        actualAttrIdName = vm[idAttr.name];
                        selector = "#" + actualAttrIdName;
                        vm.$watch(idAttr.name, function(newAttrName) {
                            actualAttrIdName = newAttrName;
                            selector = "#" + actualAttrIdName;
                            vm.$refs[actualAttrRefName] = query.select(selector);
                        });
                    }
                    if (refAttr.bind) {
                        // if ref is a bind attr
                        actualAttrRefName = vm[refAttr.name];
                        vm.$watch(refAttr.name, function(newAttrName, oldAttrName) {
                            actualAttrRefName = newAttrName;
                            vm.$refs[oldAttrName] = null;
                            vm.$refs[newAttrName] = query.select(selector);
                        });
                    }
                    vm.$refs[actualAttrRefName] = query.select(selector);
                });
                // created 不能调用 setData，如果有 dirty 在此更新
                                vm.$forceUpdate();
                if (app.$route.path !== path) {
                    app.$route.path = path;
                    app.$route.webViewId = webViewId;
                    vm.routed && vm.routed();
                }
                // TODO: page attached
                                return callUserMethod(vm, vm.$options, "attached", args);
            };
            // Page lifecycle will be called under methods
            // e.g:
            // Component({
            //   methods: {
            //     onLoad () {
            //       console.log('page onload')
            //     }
            //   }
            // })
                        var lifecycle$1 = getLifecycycle(WEAPP_PAGE_LIFECYCLE, rel, "page");
            lifecycle$1.forEach(function(k) {
                if (!output[k] && options[k] && (isFunc(options[k]) || isArr(options[k]))) {
                    output.methods[k] = function() {
                        var args = [], len = arguments.length;
                        while (len--) args[len] = arguments[len];
                        return callUserMethod(this.$wepy, this.$wepy.$options, k, args);
                    };
                }
            });
        }
        var lifecycle = getLifecycycle(WEAPP_COMPONENT_LIFECYCLE, rel, "component");
        lifecycle.forEach(function(k) {
            // beforeCreate is not a real lifecycle
            if (!output[k] && k !== "beforeCreate" && (isFunc(options[k]) || isArr(options[k]))) {
                output[k] = function() {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];
                    return callUserMethod(this.$wepy, this.$wepy.$options, k, args);
                };
            }
        });
    }
    var config$1 = {
        optionMergeStrategies: {},
        constants: {
            WEAPP_LIFECYCLE: WEAPP_LIFECYCLE,
            WEAPP_APP_LIFECYCLE: WEAPP_APP_LIFECYCLE,
            WEAPP_PAGE_LIFECYCLE: WEAPP_PAGE_LIFECYCLE,
            WEAPP_COMPONENT_LIFECYCLE: WEAPP_COMPONENT_LIFECYCLE
        }
    };
    // [Default Strategy]
    // Update if it's not exist in output. Can be replaced by option[key].
    // e.g.
    // export default {
    //   myCustomMethod () {
    //     // doSomething
    //   }
    // }
    //
    // [Merge Strategy]
    // Replaced by the latest mixins property.
    // e.g.
    // export default {
    //   data: {
    //     a: 1
    //   }
    // }
    //
    // [Lifecycle Strategy]
    // Extend lifecycle. update lifecycle to an array.
    // e.g.
    // export default {
    //   onShow: {
    //     console.log('onShow');
    //   }
    // }
        var globalMixinPatched = false;
    var strats = null;
    function getStrategy(key) {
        if (!strats) {
            initStrats();
        }
        if (strats[key]) {
            return strats[key];
        } else {
            return defaultStrat;
        }
    }
    function defaultStrat(output, option, key, data) {
        if (!output[key]) {
            output[key] = data;
        }
    }
    function simpleMerge(parentVal, childVal) {
        return !parentVal || !childVal ? parentVal || childVal : Object.assign({}, parentVal, childVal);
    }
    function initStrats() {
        if (strats) {
            return strats;
        }
        strats = config$1.optionMergeStrategies;
        strats.data = strats.props = strats.methods = strats.computed = strats.watch = strats.hooks = function mergeStrategy(output, option, key, data) {
            option[key] = simpleMerge(option[key], data);
        };
        WEAPP_LIFECYCLE.forEach(function(lifecycle) {
            if (!strats[lifecycle]) {
                strats[lifecycle] = function lifeCycleStrategy(output, option, key, data) {
                    if (!option[key]) {
                        option[key] = isArr(data) ? data : [ data ];
                    } else {
                        option[key] = [ data ].concat(option[key]);
                    }
                };
            }
        });
    }
    function patchMixins(output, option, mixins) {
        if (!mixins && !$global.mixin) {
            return;
        }
        if (!globalMixinPatched) {
            var globalMixin = $global.mixin || [];
            mixins = globalMixin.concat(mixins);
            globalMixinPatched = true;
        }
        if (isArr(mixins)) {
            mixins.forEach(function(mixin) {
                return patchMixins(output, option, mixin);
            });
            globalMixinPatched = false;
        } else {
            if (!strats) {
                initStrats();
            }
            for (var k in mixins) {
                strat = getStrategy(k);
                var strat = strats[k] || defaultStrat;
                strat(output, option, k, mixins[k]);
            }
        }
    }
    function patchRelations(output, relations) {
        if (!relations) {
            relations = {};
        }
        output.relations = relations;
    }
    function app$1(option, rel) {
        var appConfig = {};
        patchMixins(appConfig, option, option.mixins);
        patchAppLifecycle(appConfig, option, rel);
        return App(appConfig);
    }
    function component(opt, rel) {
        if (opt === void 0) opt = {};
        var compConfig = {
            externalClasses: opt.externalClasses || [],
            // support component options property
            // example: options: {addGlobalClass:true}
            options: opt.options || {}
        };
        patchMixins(compConfig, opt, opt.mixins);
        if (opt.properties) {
            compConfig.properties = opt.properties;
            if (opt.props) {
                // eslint-disable-next-line no-console
                console.warn("props will be ignore, if properties is set");
            }
        } else if (opt.props) {
            patchProps(compConfig, opt.props);
        }
        patchMethods(compConfig, opt.methods, true);
        patchData(compConfig, opt.data, true);
        patchRelations(compConfig, opt.relations);
        patchLifecycle(compConfig, opt, rel, true);
        return Component(compConfig);
    }
    function page(opt, rel) {
        if (opt === void 0) opt = {};
        var pageConfig = {
            externalClasses: opt.externalClasses || [],
            // support component options property
            // example: options: {addGlobalClass:true}
            options: opt.options || {}
        };
        patchMixins(pageConfig, opt, opt.mixins);
        if (opt.properties) {
            pageConfig.properties = opt.properties;
            if (opt.props) {
                // eslint-disable-next-line
                console.warn("props will be ignore, if properties is set");
            }
        } else if (opt.props) {
            patchProps(pageConfig, opt.props);
        }
        patchMethods(pageConfig, opt.methods);
        patchData(pageConfig, opt.data);
        patchLifecycle(pageConfig, opt, rel);
        return Component(pageConfig);
    }
    function initGlobalAPI(wepy) {
        wepy.use = use;
        wepy.mixin = mixin;
        wepy.set = function(target, key, val) {
            set.apply(wepy, [ undefined, target, key, val ]);
        };
        wepy.delete = del;
        wepy.observe = observe;
        wepy.nextTick = renderNextTick;
        wepy.app = app$1;
        wepy.page = page;
        wepy.component = component;
        return wepy;
    }
    var wepy = initGlobalAPI(WepyConstructor);
    wepy.config = config$1;
    wepy.global = $global;
    wepy.version = "2.0.0-alpha.15";
    module.exports = wepy;
}, /***** module 1 end *****/
/***** module 2 start *****/
/***** D:\ym_xcx\node_modules\weapp-cookie\dist\weapp-cookie.js *****/
function(module, exports, __wepy_require) {
    (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.weappCookie = factory();
    })(this, function() {
        "use strict";
        function unwrapExports(x) {
            return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
        }
        function createCommonjsModule(fn, module) {
            return module = {
                exports: {}
            }, fn(module, module.exports), module.exports;
        }
        var _global = createCommonjsModule(function(module) {
            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
            if (typeof __g == "number") __g = global;
            // eslint-disable-line no-undef
                });
        var _core = createCommonjsModule(function(module) {
            var core = module.exports = {
                version: "2.5.7"
            };
            if (typeof __e == "number") __e = core;
            // eslint-disable-line no-undef
                });
        var _aFunction = function(it) {
            if (typeof it != "function") throw TypeError(it + " is not a function!");
            return it;
        };
        // optional / simple context binding
                var _ctx = function(fn, that, length) {
            _aFunction(fn);
            if (that === undefined) return fn;
            switch (length) {
              case 1:
                return function(a) {
                    return fn.call(that, a);
                };

              case 2:
                return function(a, b) {
                    return fn.call(that, a, b);
                };

              case 3:
                return function(a, b, c) {
                    return fn.call(that, a, b, c);
                };
            }
            return function() {
                return fn.apply(that, arguments);
            };
        };
        var _isObject = function(it) {
            return typeof it === "object" ? it !== null : typeof it === "function";
        };
        var _anObject = function(it) {
            if (!_isObject(it)) throw TypeError(it + " is not an object!");
            return it;
        };
        var _fails = function(exec) {
            try {
                return !!exec();
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return true;
            }
        };
        // Thank's IE8 for his funny defineProperty
                var _descriptors = !_fails(function() {
            return Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
        var document = _global.document;
        // typeof document.createElement is 'object' in old IE
                var is = _isObject(document) && _isObject(document.createElement);
        var _domCreate = function(it) {
            return is ? document.createElement(it) : {};
        };
        var _ie8DomDefine = !_descriptors && !_fails(function() {
            return Object.defineProperty(_domCreate("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
                var _toPrimitive = function(it, S) {
            if (!_isObject(it)) return it;
            var fn, val;
            if (S && typeof (fn = it.toString) == "function" && !_isObject(val = fn.call(it))) return val;
            if (typeof (fn = it.valueOf) == "function" && !_isObject(val = fn.call(it))) return val;
            if (!S && typeof (fn = it.toString) == "function" && !_isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };
        var dP = Object.defineProperty;
        var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
            _anObject(O);
            P = _toPrimitive(P, true);
            _anObject(Attributes);
            if (_ie8DomDefine) try {
                return dP(O, P, Attributes);
            } catch (e) {/* empty */}
            if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
            if ("value" in Attributes) O[P] = Attributes.value;
            return O;
        };
        var _objectDp = {
            f: f
        };
        var _propertyDesc = function(bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };
        var _hide = _descriptors ? function(object, key, value) {
            return _objectDp.f(object, key, _propertyDesc(1, value));
        } : function(object, key, value) {
            object[key] = value;
            return object;
        };
        var hasOwnProperty = {}.hasOwnProperty;
        var _has = function(it, key) {
            return hasOwnProperty.call(it, key);
        };
        var PROTOTYPE = "prototype";
        var $export = function(type, name, source) {
            var IS_FORCED = type & $export.F;
            var IS_GLOBAL = type & $export.G;
            var IS_STATIC = type & $export.S;
            var IS_PROTO = type & $export.P;
            var IS_BIND = type & $export.B;
            var IS_WRAP = type & $export.W;
            var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
            var expProto = exports[PROTOTYPE];
            var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
            var key, own, out;
            if (IS_GLOBAL) source = name;
            for (key in source) {
                // contains in native
                own = !IS_FORCED && target && target[key] !== undefined;
                if (own && _has(exports, key)) continue;
                // export native or passed
                                out = own ? target[key] : source[key];
                // prevent global pollution for namespaces
                                exports[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? _ctx(out, _global) : IS_WRAP && target[key] == out ? function(C) {
                    var F = function(a, b, c) {
                        if (this instanceof C) {
                            switch (arguments.length) {
                              case 0:
                                return new C();

                              case 1:
                                return new C(a);

                              case 2:
                                return new C(a, b);
                            }
                            return new C(a, b, c);
                        }
                        return C.apply(this, arguments);
                    };
                    F[PROTOTYPE] = C[PROTOTYPE];
                    return F;
                    // make static versions for prototype methods
                                }(out) : IS_PROTO && typeof out == "function" ? _ctx(Function.call, out) : out;
                // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
                                if (IS_PROTO) {
                    (exports.virtual || (exports.virtual = {}))[key] = out;
                    // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
                                        if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
                }
            }
        };
        // type bitmap
                $export.F = 1;
        // forced
                $export.G = 2;
        // global
                $export.S = 4;
        // static
                $export.P = 8;
        // proto
                $export.B = 16;
        // bind
                $export.W = 32;
        // wrap
                $export.U = 64;
        // safe
                $export.R = 128;
        // real proto method for `library`
                var _export = $export;
        // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
                _export(_export.S + _export.F * !_descriptors, "Object", {
            defineProperty: _objectDp.f
        });
        var $Object = _core.Object;
        var defineProperty$1 = function defineProperty(it, key, desc) {
            return $Object.defineProperty(it, key, desc);
        };
        var defineProperty = createCommonjsModule(function(module) {
            module.exports = {
                default: defineProperty$1,
                __esModule: true
            };
        });
        var _Object$defineProperty = unwrapExports(defineProperty);
        var toString = {}.toString;
        var _cof = function(it) {
            return toString.call(it).slice(8, -1);
        };
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        // eslint-disable-next-line no-prototype-builtins
                var _iobject = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
            return _cof(it) == "String" ? it.split("") : Object(it);
        };
        // 7.2.1 RequireObjectCoercible(argument)
                var _defined = function(it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
        };
        // to indexed object, toObject with fallback for non-array-like ES3 strings
                var _toIobject = function(it) {
            return _iobject(_defined(it));
        };
        // 7.1.4 ToInteger
                var ceil = Math.ceil;
        var floor = Math.floor;
        var _toInteger = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
        // 7.1.15 ToLength
                var min = Math.min;
        var _toLength = function(it) {
            return it > 0 ? min(_toInteger(it), 9007199254740991) : 0;
            // pow(2, 53) - 1 == 9007199254740991
                };
        var max = Math.max;
        var min$1 = Math.min;
        var _toAbsoluteIndex = function(index, length) {
            index = _toInteger(index);
            return index < 0 ? max(index + length, 0) : min$1(index, length);
        };
        // false -> Array#indexOf
        // true  -> Array#includes
                var _arrayIncludes = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var O = _toIobject($this);
                var length = _toLength(O.length);
                var index = _toAbsoluteIndex(fromIndex, length);
                var value;
                // Array#includes uses SameValueZero equality algorithm
                // eslint-disable-next-line no-self-compare
                                if (IS_INCLUDES && el != el) while (length > index) {
                    value = O[index++];
                    // eslint-disable-next-line no-self-compare
                                        if (value != value) return true;
                    // Array#indexOf ignores holes, Array#includes - not
                                } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
                    if (O[index] === el) return IS_INCLUDES || index || 0;
                }
                return !IS_INCLUDES && -1;
            };
        };
        var _library = true;
        var _shared = createCommonjsModule(function(module) {
            var SHARED = "__core-js_shared__";
            var store = _global[SHARED] || (_global[SHARED] = {});
            (module.exports = function(key, value) {
                return store[key] || (store[key] = value !== undefined ? value : {});
            })("versions", []).push({
                version: _core.version,
                mode: _library ? "pure" : "global",
                copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
            });
        });
        var id = 0;
        var px = Math.random();
        var _uid = function(key) {
            return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + px).toString(36));
        };
        var shared = _shared("keys");
        var _sharedKey = function(key) {
            return shared[key] || (shared[key] = _uid(key));
        };
        var arrayIndexOf = _arrayIncludes(false);
        var IE_PROTO = _sharedKey("IE_PROTO");
        var _objectKeysInternal = function(object, names) {
            var O = _toIobject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
            // Don't enum bug & hidden keys
                        while (names.length > i) if (_has(O, key = names[i++])) {
                ~arrayIndexOf(result, key) || result.push(key);
            }
            return result;
        };
        // IE 8- don't enum bug keys
                var _enumBugKeys = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
                var _objectKeys = Object.keys || function keys(O) {
            return _objectKeysInternal(O, _enumBugKeys);
        };
        var f$1 = Object.getOwnPropertySymbols;
        var _objectGops = {
            f: f$1
        };
        var f$2 = {}.propertyIsEnumerable;
        var _objectPie = {
            f: f$2
        };
        // 7.1.13 ToObject(argument)
                var _toObject = function(it) {
            return Object(_defined(it));
        };
        "use strict";
        // 19.1.2.1 Object.assign(target, source, ...)
                var $assign = Object.assign;
        // should work with symbols and should have deterministic property order (V8 bug)
                var _objectAssign = !$assign || _fails(function() {
            var A = {};
            var B = {};
            // eslint-disable-next-line no-undef
                        var S = Symbol();
            var K = "abcdefghijklmnopqrst";
            A[S] = 7;
            K.split("").forEach(function(k) {
                B[k] = k;
            });
            return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K;
        }) ? function assign(target, source) {
            // eslint-disable-line no-unused-vars
            var T = _toObject(target);
            var aLen = arguments.length;
            var index = 1;
            var getSymbols = _objectGops.f;
            var isEnum = _objectPie.f;
            while (aLen > index) {
                var S = _iobject(arguments[index++]);
                var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
                var length = keys.length;
                var j = 0;
                var key;
                while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
            }
            return T;
        } : $assign;
        // 19.1.3.1 Object.assign(target, source)
                _export(_export.S + _export.F, "Object", {
            assign: _objectAssign
        });
        var assign$1 = _core.Object.assign;
        var assign = createCommonjsModule(function(module) {
            module.exports = {
                default: assign$1,
                __esModule: true
            };
        });
        var _Object$assign = unwrapExports(assign);
        var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
            _anObject(O);
            var keys = _objectKeys(Properties);
            var length = keys.length;
            var i = 0;
            var P;
            while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
            return O;
        };
        // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
                _export(_export.S + _export.F * !_descriptors, "Object", {
            defineProperties: _objectDps
        });
        var $Object$1 = _core.Object;
        var defineProperties$1 = function defineProperties(T, D) {
            return $Object$1.defineProperties(T, D);
        };
        var defineProperties = createCommonjsModule(function(module) {
            module.exports = {
                default: defineProperties$1,
                __esModule: true
            };
        });
        var _Object$defineProperties = unwrapExports(defineProperties);
        var _addToUnscopables = function() {/* empty */};
        var _iterStep = function(done, value) {
            return {
                value: value,
                done: !!done
            };
        };
        var _iterators = {};
        var _redefine = _hide;
        var document$1 = _global.document;
        var _html = document$1 && document$1.documentElement;
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
                var IE_PROTO$1 = _sharedKey("IE_PROTO");
        var Empty = function() {/* empty */};
        var PROTOTYPE$1 = "prototype";
        // Create object with fake `null` prototype: use iframe Object with cleared prototype
                var createDict = function() {
            // Thrash, waste and sodomy: IE GC bug
            var iframe = _domCreate("iframe");
            var i = _enumBugKeys.length;
            var lt = "<";
            var gt = ">";
            var iframeDocument;
            iframe.style.display = "none";
            _html.appendChild(iframe);
            iframe.src = "javascript:";
            // eslint-disable-line no-script-url
            // createDict = iframe.contentWindow.Object;
            // html.removeChild(iframe);
                        iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
            iframeDocument.close();
            createDict = iframeDocument.F;
            while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
            return createDict();
        };
        var _objectCreate = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
                Empty[PROTOTYPE$1] = _anObject(O);
                result = new Empty();
                Empty[PROTOTYPE$1] = null;
                // add "__proto__" for Object.getPrototypeOf polyfill
                                result[IE_PROTO$1] = O;
            } else result = createDict();
            return Properties === undefined ? result : _objectDps(result, Properties);
        };
        var _wks = createCommonjsModule(function(module) {
            var store = _shared("wks");
            var Symbol = _global.Symbol;
            var USE_SYMBOL = typeof Symbol == "function";
            var $exports = module.exports = function(name) {
                return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)("Symbol." + name));
            };
            $exports.store = store;
        });
        var def = _objectDp.f;
        var TAG = _wks("toStringTag");
        var _setToStringTag = function(it, tag, stat) {
            if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
                configurable: true,
                value: tag
            });
        };
        "use strict";
        var IteratorPrototype = {};
        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
                _hide(IteratorPrototype, _wks("iterator"), function() {
            return this;
        });
        var _iterCreate = function(Constructor, NAME, next) {
            Constructor.prototype = _objectCreate(IteratorPrototype, {
                next: _propertyDesc(1, next)
            });
            _setToStringTag(Constructor, NAME + " Iterator");
        };
        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
                var IE_PROTO$2 = _sharedKey("IE_PROTO");
        var ObjectProto = Object.prototype;
        var _objectGpo = Object.getPrototypeOf || function(O) {
            O = _toObject(O);
            if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
            if (typeof O.constructor == "function" && O instanceof O.constructor) {
                return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
        };
        "use strict";
        var ITERATOR = _wks("iterator");
        var BUGGY = !([].keys && "next" in [].keys());
        // Safari has buggy iterators w/o `next`
                var FF_ITERATOR = "@@iterator";
        var KEYS = "keys";
        var VALUES = "values";
        var returnThis = function() {
            return this;
        };
        var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            _iterCreate(Constructor, NAME, next);
            var getMethod = function(kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch (kind) {
                  case KEYS:
                    return function keys() {
                        return new Constructor(this, kind);
                    };

                  case VALUES:
                    return function values() {
                        return new Constructor(this, kind);
                    };
                }
                return function entries() {
                    return new Constructor(this, kind);
                };
            };
            var TAG = NAME + " Iterator";
            var DEF_VALUES = DEFAULT == VALUES;
            var VALUES_BUG = false;
            var proto = Base.prototype;
            var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
            var $default = $native || getMethod(DEFAULT);
            var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : undefined;
            var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
            var methods, key, IteratorPrototype;
            // Fix native
                        if ($anyNative) {
                IteratorPrototype = _objectGpo($anyNative.call(new Base()));
                if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                    // Set @@toStringTag to native iterators
                    _setToStringTag(IteratorPrototype, TAG, true);
                    // fix for some old engines
                                        if (!_library && typeof IteratorPrototype[ITERATOR] != "function") _hide(IteratorPrototype, ITERATOR, returnThis);
                }
            }
            // fix Array#{values, @@iterator}.name in V8 / FF
                        if (DEF_VALUES && $native && $native.name !== VALUES) {
                VALUES_BUG = true;
                $default = function values() {
                    return $native.call(this);
                };
            }
            // Define iterator
                        if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                _hide(proto, ITERATOR, $default);
            }
            // Plug for library
                        _iterators[NAME] = $default;
            _iterators[TAG] = returnThis;
            if (DEFAULT) {
                methods = {
                    values: DEF_VALUES ? $default : getMethod(VALUES),
                    keys: IS_SET ? $default : getMethod(KEYS),
                    entries: $entries
                };
                if (FORCED) for (key in methods) {
                    if (!(key in proto)) _redefine(proto, key, methods[key]);
                } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
            return methods;
        };
        "use strict";
        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
                var es6_array_iterator = _iterDefine(Array, "Array", function(iterated, kind) {
            this._t = _toIobject(iterated);
            // target
                        this._i = 0;
            // next index
                        this._k = kind;
            // kind
            // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
                }, function() {
            var O = this._t;
            var kind = this._k;
            var index = this._i++;
            if (!O || index >= O.length) {
                this._t = undefined;
                return _iterStep(1);
            }
            if (kind == "keys") return _iterStep(0, index);
            if (kind == "values") return _iterStep(0, O[index]);
            return _iterStep(0, [ index, O[index] ]);
        }, "values");
        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
                _iterators.Arguments = _iterators.Array;
        _addToUnscopables("keys");
        _addToUnscopables("values");
        _addToUnscopables("entries");
        var TO_STRING_TAG = _wks("toStringTag");
        var DOMIterables = ("CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList," + "DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement," + "MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList," + "SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList," + "TextTrackList,TouchList").split(",");
        for (var i = 0; i < DOMIterables.length; i++) {
            var NAME = DOMIterables[i];
            var Collection = _global[NAME];
            var proto = Collection && Collection.prototype;
            if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
            _iterators[NAME] = _iterators.Array;
        }
        // true  -> String#at
        // false -> String#codePointAt
                var _stringAt = function(TO_STRING) {
            return function(that, pos) {
                var s = String(_defined(that));
                var i = _toInteger(pos);
                var l = s.length;
                var a, b;
                if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
                a = s.charCodeAt(i);
                return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
            };
        };
        "use strict";
        var $at = _stringAt(true);
        // 21.1.3.27 String.prototype[@@iterator]()
                _iterDefine(String, "String", function(iterated) {
            this._t = String(iterated);
            // target
                        this._i = 0;
            // next index
            // 21.1.5.2.1 %StringIteratorPrototype%.next()
                }, function() {
            var O = this._t;
            var index = this._i;
            var point;
            if (index >= O.length) return {
                value: undefined,
                done: true
            };
            point = $at(O, index);
            this._i += point.length;
            return {
                value: point,
                done: false
            };
        });
        // getting tag from 19.1.3.6 Object.prototype.toString()
                var TAG$1 = _wks("toStringTag");
        // ES3 wrong here
                var ARG = _cof(function() {
            return arguments;
        }()) == "Arguments";
        // fallback for IE11 Script Access Denied error
                var tryGet = function(it, key) {
            try {
                return it[key];
            } catch (e) {/* empty */}
        };
        var _classof = function(it) {
            var O, T, B;
            return it === undefined ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG$1)) == "string" ? T : ARG ? _cof(O) : (B = _cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
        };
        var ITERATOR$1 = _wks("iterator");
        var core_isIterable = _core.isIterable = function(it) {
            var O = Object(it);
            return O[ITERATOR$1] !== undefined || "@@iterator" in O || _iterators.hasOwnProperty(_classof(O));
        };
        var isIterable$2 = core_isIterable;
        var isIterable = createCommonjsModule(function(module) {
            module.exports = {
                default: isIterable$2,
                __esModule: true
            };
        });
        unwrapExports(isIterable);
        var ITERATOR$2 = _wks("iterator");
        var core_getIteratorMethod = _core.getIteratorMethod = function(it) {
            if (it != undefined) return it[ITERATOR$2] || it["@@iterator"] || _iterators[_classof(it)];
        };
        var core_getIterator = _core.getIterator = function(it) {
            var iterFn = core_getIteratorMethod(it);
            if (typeof iterFn != "function") throw TypeError(it + " is not iterable!");
            return _anObject(iterFn.call(it));
        };
        var getIterator$1 = core_getIterator;
        var getIterator = createCommonjsModule(function(module) {
            module.exports = {
                default: getIterator$1,
                __esModule: true
            };
        });
        var _getIterator = unwrapExports(getIterator);
        var slicedToArray = createCommonjsModule(function(module, exports) {
            "use strict";
            exports.__esModule = true;
            var _isIterable3 = _interopRequireDefault(isIterable);
            var _getIterator3 = _interopRequireDefault(getIterator);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            exports.default = function() {
                function sliceIterator(arr, i) {
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;
                    try {
                        for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);
                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i["return"]) _i["return"]();
                        } finally {
                            if (_d) throw _e;
                        }
                    }
                    return _arr;
                }
                return function(arr, i) {
                    if (Array.isArray(arr)) {
                        return arr;
                    } else if ((0, _isIterable3.default)(Object(arr))) {
                        return sliceIterator(arr, i);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();
        });
        var _slicedToArray = unwrapExports(slicedToArray);
        var _redefineAll = function(target, src, safe) {
            for (var key in src) {
                if (safe && target[key]) target[key] = src[key]; else _hide(target, key, src[key]);
            }
            return target;
        };
        var _anInstance = function(it, Constructor, name, forbiddenField) {
            if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
                throw TypeError(name + ": incorrect invocation!");
            }
            return it;
        };
        // call something on iterator step with safe closing on error
                var _iterCall = function(iterator, fn, value, entries) {
            try {
                return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
                // 7.4.6 IteratorClose(iterator, completion)
                        } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                var ret = iterator["return"];
                if (ret !== undefined) _anObject(ret.call(iterator));
                throw e;
            }
        };
        // check on default Array iterator
                var ITERATOR$3 = _wks("iterator");
        var ArrayProto = Array.prototype;
        var _isArrayIter = function(it) {
            return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$3] === it);
        };
        var _forOf = createCommonjsModule(function(module) {
            var BREAK = {};
            var RETURN = {};
            var exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
                var iterFn = ITERATOR ? function() {
                    return iterable;
                } : core_getIteratorMethod(iterable);
                var f = _ctx(fn, that, entries ? 2 : 1);
                var index = 0;
                var length, step, iterator, result;
                if (typeof iterFn != "function") throw TypeError(iterable + " is not iterable!");
                // fast case for arrays with default iterator
                                if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
                    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                    if (result === BREAK || result === RETURN) return result;
                } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
                    result = _iterCall(iterator, f, step.value, entries);
                    if (result === BREAK || result === RETURN) return result;
                }
            };
            exports.BREAK = BREAK;
            exports.RETURN = RETURN;
        });
        "use strict";
        var SPECIES = _wks("species");
        var _setSpecies = function(KEY) {
            var C = typeof _core[KEY] == "function" ? _core[KEY] : _global[KEY];
            if (_descriptors && C && !C[SPECIES]) _objectDp.f(C, SPECIES, {
                configurable: true,
                get: function() {
                    return this;
                }
            });
        };
        var _meta = createCommonjsModule(function(module) {
            var META = _uid("meta");
            var setDesc = _objectDp.f;
            var id = 0;
            var isExtensible = Object.isExtensible || function() {
                return true;
            };
            var FREEZE = !_fails(function() {
                return isExtensible(Object.preventExtensions({}));
            });
            var setMeta = function(it) {
                setDesc(it, META, {
                    value: {
                        i: "O" + ++id,
                        // object ID
                        w: {}
                    }
                });
            };
            var fastKey = function(it, create) {
                // return primitive with prefix
                if (!_isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
                if (!_has(it, META)) {
                    // can't set metadata to uncaught frozen object
                    if (!isExtensible(it)) return "F";
                    // not necessary to add metadata
                                        if (!create) return "E";
                    // add missing metadata
                                        setMeta(it);
                    // return object ID
                                }
                return it[META].i;
            };
            var getWeak = function(it, create) {
                if (!_has(it, META)) {
                    // can't set metadata to uncaught frozen object
                    if (!isExtensible(it)) return true;
                    // not necessary to add metadata
                                        if (!create) return false;
                    // add missing metadata
                                        setMeta(it);
                    // return hash weak collections IDs
                                }
                return it[META].w;
            };
            // add metadata on freeze-family methods calling
                        var onFreeze = function(it) {
                if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
                return it;
            };
            var meta = module.exports = {
                KEY: META,
                NEED: false,
                fastKey: fastKey,
                getWeak: getWeak,
                onFreeze: onFreeze
            };
        });
        var _validateCollection = function(it, TYPE) {
            if (!_isObject(it) || it._t !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required!");
            return it;
        };
        "use strict";
        var dP$1 = _objectDp.f;
        var fastKey = _meta.fastKey;
        var SIZE = _descriptors ? "_s" : "size";
        var getEntry = function(that, key) {
            // fast case
            var index = fastKey(key);
            var entry;
            if (index !== "F") return that._i[index];
            // frozen object case
                        for (entry = that._f; entry; entry = entry.n) {
                if (entry.k == key) return entry;
            }
        };
        var _collectionStrong = {
            getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
                var C = wrapper(function(that, iterable) {
                    _anInstance(that, C, NAME, "_i");
                    that._t = NAME;
                    // collection type
                                        that._i = _objectCreate(null);
                    // index
                                        that._f = undefined;
                    // first entry
                                        that._l = undefined;
                    // last entry
                                        that[SIZE] = 0;
                    // size
                                        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
                });
                _redefineAll(C.prototype, {
                    // 23.1.3.1 Map.prototype.clear()
                    // 23.2.3.2 Set.prototype.clear()
                    clear: function clear() {
                        for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
                            entry.r = true;
                            if (entry.p) entry.p = entry.p.n = undefined;
                            delete data[entry.i];
                        }
                        that._f = that._l = undefined;
                        that[SIZE] = 0;
                    },
                    // 23.1.3.3 Map.prototype.delete(key)
                    // 23.2.3.4 Set.prototype.delete(value)
                    delete: function(key) {
                        var that = _validateCollection(this, NAME);
                        var entry = getEntry(that, key);
                        if (entry) {
                            var next = entry.n;
                            var prev = entry.p;
                            delete that._i[entry.i];
                            entry.r = true;
                            if (prev) prev.n = next;
                            if (next) next.p = prev;
                            if (that._f == entry) that._f = next;
                            if (that._l == entry) that._l = prev;
                            that[SIZE]--;
                        }
                        return !!entry;
                    },
                    // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
                    // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
                    forEach: function forEach(callbackfn /* , that = undefined */) {
                        _validateCollection(this, NAME);
                        var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                        var entry;
                        while (entry = entry ? entry.n : this._f) {
                            f(entry.v, entry.k, this);
                            // revert to the last existing entry
                                                        while (entry && entry.r) entry = entry.p;
                        }
                    },
                    // 23.1.3.7 Map.prototype.has(key)
                    // 23.2.3.7 Set.prototype.has(value)
                    has: function has(key) {
                        return !!getEntry(_validateCollection(this, NAME), key);
                    }
                });
                if (_descriptors) dP$1(C.prototype, "size", {
                    get: function() {
                        return _validateCollection(this, NAME)[SIZE];
                    }
                });
                return C;
            },
            def: function(that, key, value) {
                var entry = getEntry(that, key);
                var prev, index;
                // change existing entry
                                if (entry) {
                    entry.v = value;
                    // create new entry
                                } else {
                    that._l = entry = {
                        i: index = fastKey(key, true),
                        // <- index
                        k: key,
                        // <- key
                        v: value,
                        // <- value
                        p: prev = that._l,
                        // <- previous entry
                        n: undefined,
                        // <- next entry
                        r: false
                    };
                    if (!that._f) that._f = entry;
                    if (prev) prev.n = entry;
                    that[SIZE]++;
                    // add to index
                                        if (index !== "F") that._i[index] = entry;
                }
                return that;
            },
            getEntry: getEntry,
            setStrong: function(C, NAME, IS_MAP) {
                // add .keys, .values, .entries, [@@iterator]
                // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
                _iterDefine(C, NAME, function(iterated, kind) {
                    this._t = _validateCollection(iterated, NAME);
                    // target
                                        this._k = kind;
                    // kind
                                        this._l = undefined;
                    // previous
                                }, function() {
                    var that = this;
                    var kind = that._k;
                    var entry = that._l;
                    // revert to the last existing entry
                                        while (entry && entry.r) entry = entry.p;
                    // get next entry
                                        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                        // or finish the iteration
                        that._t = undefined;
                        return _iterStep(1);
                    }
                    // return step by kind
                                        if (kind == "keys") return _iterStep(0, entry.k);
                    if (kind == "values") return _iterStep(0, entry.v);
                    return _iterStep(0, [ entry.k, entry.v ]);
                }, IS_MAP ? "entries" : "values", !IS_MAP, true);
                // add [@@species], 23.1.2.2, 23.2.2.2
                                _setSpecies(NAME);
            }
        };
        // 7.2.2 IsArray(argument)
                var _isArray = Array.isArray || function isArray(arg) {
            return _cof(arg) == "Array";
        };
        var SPECIES$1 = _wks("species");
        var _arraySpeciesConstructor = function(original) {
            var C;
            if (_isArray(original)) {
                C = original.constructor;
                // cross-realm fallback
                                if (typeof C == "function" && (C === Array || _isArray(C.prototype))) C = undefined;
                if (_isObject(C)) {
                    C = C[SPECIES$1];
                    if (C === null) C = undefined;
                }
            }
            return C === undefined ? Array : C;
        };
        // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
                var _arraySpeciesCreate = function(original, length) {
            return new (_arraySpeciesConstructor(original))(length);
        };
        // 0 -> Array#forEach
        // 1 -> Array#map
        // 2 -> Array#filter
        // 3 -> Array#some
        // 4 -> Array#every
        // 5 -> Array#find
        // 6 -> Array#findIndex
                var _arrayMethods = function(TYPE, $create) {
            var IS_MAP = TYPE == 1;
            var IS_FILTER = TYPE == 2;
            var IS_SOME = TYPE == 3;
            var IS_EVERY = TYPE == 4;
            var IS_FIND_INDEX = TYPE == 6;
            var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
            var create = $create || _arraySpeciesCreate;
            return function($this, callbackfn, that) {
                var O = _toObject($this);
                var self = _iobject(O);
                var f = _ctx(callbackfn, that, 3);
                var length = _toLength(self.length);
                var index = 0;
                var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
                var val, res;
                for (;length > index; index++) if (NO_HOLES || index in self) {
                    val = self[index];
                    res = f(val, index, O);
                    if (TYPE) {
                        if (IS_MAP) result[index] = res; // map
                         else if (res) switch (TYPE) {
                          case 3:
                            return true;

                            // some
                                                      case 5:
                            return val;

                            // find
                                                      case 6:
                            return index;

                            // findIndex
                                                      case 2:
                            result.push(val);
                            // filter
                                                } else if (IS_EVERY) return false;
                        // every
                                        }
                }
                return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
            };
        };
        "use strict";
        var dP$2 = _objectDp.f;
        var each = _arrayMethods(0);
        var _collection = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
            var Base = _global[NAME];
            var C = Base;
            var ADDER = IS_MAP ? "set" : "add";
            var proto = C && C.prototype;
            var O = {};
            if (!_descriptors || typeof C != "function" || !(IS_WEAK || proto.forEach && !_fails(function() {
                new C().entries().next();
            }))) {
                // create collection constructor
                C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
                _redefineAll(C.prototype, methods);
                _meta.NEED = true;
            } else {
                C = wrapper(function(target, iterable) {
                    _anInstance(target, C, NAME, "_c");
                    target._c = new Base();
                    if (iterable != undefined) _forOf(iterable, IS_MAP, target[ADDER], target);
                });
                each("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(KEY) {
                    var IS_ADDER = KEY == "add" || KEY == "set";
                    if (KEY in proto && !(IS_WEAK && KEY == "clear")) _hide(C.prototype, KEY, function(a, b) {
                        _anInstance(this, C, KEY);
                        if (!IS_ADDER && IS_WEAK && !_isObject(a)) return KEY == "get" ? undefined : false;
                        var result = this._c[KEY](a === 0 ? 0 : a, b);
                        return IS_ADDER ? this : result;
                    });
                });
                IS_WEAK || dP$2(C.prototype, "size", {
                    get: function() {
                        return this._c.size;
                    }
                });
            }
            _setToStringTag(C, NAME);
            O[NAME] = C;
            _export(_export.G + _export.W + _export.F, O);
            if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
            return C;
        };
        "use strict";
        var MAP = "Map";
        // 23.1 Map Objects
                var es6_map = _collection(MAP, function(get) {
            return function Map() {
                return get(this, arguments.length > 0 ? arguments[0] : undefined);
            };
        }, {
            // 23.1.3.6 Map.prototype.get(key)
            get: function get(key) {
                var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
                return entry && entry.v;
            },
            // 23.1.3.9 Map.prototype.set(key, value)
            set: function set(key, value) {
                return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
            }
        }, _collectionStrong, true);
        var _arrayFromIterable = function(iter, ITERATOR) {
            var result = [];
            _forOf(iter, false, result.push, result, ITERATOR);
            return result;
        };
        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
                var _collectionToJson = function(NAME) {
            return function toJSON() {
                if (_classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
                return _arrayFromIterable(this);
            };
        };
        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
                _export(_export.P + _export.R, "Map", {
            toJSON: _collectionToJson("Map")
        });
        "use strict";
        // https://tc39.github.io/proposal-setmap-offrom/
                var _setCollectionOf = function(COLLECTION) {
            _export(_export.S, COLLECTION, {
                of: function of() {
                    var length = arguments.length;
                    var A = new Array(length);
                    while (length--) A[length] = arguments[length];
                    return new this(A);
                }
            });
        };
        // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
                _setCollectionOf("Map");
        "use strict";
        // https://tc39.github.io/proposal-setmap-offrom/
                var _setCollectionFrom = function(COLLECTION) {
            _export(_export.S, COLLECTION, {
                from: function from(source /* , mapFn, thisArg */) {
                    var mapFn = arguments[1];
                    var mapping, A, n, cb;
                    _aFunction(this);
                    mapping = mapFn !== undefined;
                    if (mapping) _aFunction(mapFn);
                    if (source == undefined) return new this();
                    A = [];
                    if (mapping) {
                        n = 0;
                        cb = _ctx(mapFn, arguments[2], 2);
                        _forOf(source, false, function(nextItem) {
                            A.push(cb(nextItem, n++));
                        });
                    } else {
                        _forOf(source, false, A.push, A);
                    }
                    return new this(A);
                }
            });
        };
        // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
                _setCollectionFrom("Map");
        var map$1 = _core.Map;
        var map = createCommonjsModule(function(module) {
            module.exports = {
                default: map$1,
                __esModule: true
            };
        });
        var _Map = unwrapExports(map);
        var classCallCheck = createCommonjsModule(function(module, exports) {
            "use strict";
            exports.__esModule = true;
            exports.default = function(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            };
        });
        var _classCallCheck = unwrapExports(classCallCheck);
        var createClass = createCommonjsModule(function(module, exports) {
            "use strict";
            exports.__esModule = true;
            var _defineProperty2 = _interopRequireDefault(defineProperty);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            exports.default = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        (0, _defineProperty2.default)(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
        });
        var _createClass = unwrapExports(createClass);
        "use strict";
        var defaultParseOptions = {
            decodeValues: true,
            map: false
        };
        function extend(target, source) {
            return Object.keys(source).reduce(function(target, key) {
                target[key] = source[key];
                return target;
            }, target);
        }
        function isNonEmptyString(str) {
            return typeof str === "string" && !!str.trim();
        }
        function parseString(setCookieValue, options) {
            var parts = setCookieValue.split(";").filter(isNonEmptyString);
            var nameValue = parts.shift().split("=");
            var name = nameValue.shift();
            var value = nameValue.join("=");
            // everything after the first =, joined by a "=" if there was more than one part
                        var cookie = {
                name: name,
                // grab everything before the first =
                value: options.decodeValues ? decodeURIComponent(value) : value
            };
            parts.forEach(function(part) {
                var sides = part.split("=");
                var key = sides.shift().trimLeft().toLowerCase();
                var value = sides.join("=");
                if (key === "expires") {
                    cookie.expires = new Date(value);
                } else if (key === "max-age") {
                    cookie.maxAge = parseInt(value, 10);
                } else if (key === "secure") {
                    cookie.secure = true;
                } else if (key === "httponly") {
                    cookie.httpOnly = true;
                } else if (key === "samesite") {
                    cookie.sameSite = value;
                } else {
                    cookie[key] = value;
                }
            });
            return cookie;
        }
        function parse(input, options) {
            if (!input) {
                return [];
            }
            if (input.headers) {
                input = 
                // fast-path for node.js (which automatically normalizes header names to lower-case
                input.headers["set-cookie"] || 
                // slow-path for other environments - see #25
                input.headers[Object.keys(input.headers).find(function(key) {
                    return key.toLowerCase() === "set-cookie";
                })];
            }
            if (!Array.isArray(input)) {
                input = [ input ];
            }
            var defaultOptions = extend({}, defaultParseOptions);
            if (options) {
                options = extend(defaultOptions, options);
            } else {
                options = defaultOptions;
            }
            if (!options.map) {
                return input.filter(isNonEmptyString).map(function(str) {
                    return parseString(str, options);
                });
            } else {
                var cookies = {};
                return input.filter(isNonEmptyString).reduce(function(cookies, str) {
                    var cookie = parseString(str, options);
                    cookies[cookie.name] = cookie;
                    return cookies;
                }, cookies);
            }
        }
        /*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.

  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.

  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/        function splitCookiesString(cookiesString) {
            if (Array.isArray(cookiesString)) {
                return cookiesString;
            }
            if (typeof cookiesString !== "string") {
                return [];
            }
            var cookiesStrings = [];
            var pos = 0;
            var start;
            var ch;
            var lastComma;
            var nextStart;
            var cookiesSeparatorFound;
            function skipWhitespace() {
                while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
                    pos += 1;
                }
                return pos < cookiesString.length;
            }
            function notSpecialChar() {
                ch = cookiesString.charAt(pos);
                return ch !== "=" && ch !== ";" && ch !== ",";
            }
            while (pos < cookiesString.length) {
                start = pos;
                cookiesSeparatorFound = false;
                while (skipWhitespace()) {
                    ch = cookiesString.charAt(pos);
                    if (ch === ",") {
                        // ',' is a cookie separator if we have later first '=', not ';' or ','
                        lastComma = pos;
                        pos += 1;
                        skipWhitespace();
                        nextStart = pos;
                        while (pos < cookiesString.length && notSpecialChar()) {
                            pos += 1;
                        }
                        // currently special character
                                                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                            // we found cookies separator
                            cookiesSeparatorFound = true;
                            // pos is inside the next cookie, so back up and return it.
                                                        pos = nextStart;
                            cookiesStrings.push(cookiesString.substring(start, lastComma));
                            start = pos;
                        } else {
                            // in param ',' or param separator ';',
                            // we continue from that comma
                            pos = lastComma + 1;
                        }
                    } else {
                        pos += 1;
                    }
                }
                if (!cookiesSeparatorFound || pos >= cookiesString.length) {
                    cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
                }
            }
            return cookiesStrings;
        }
        var setCookie = parse;
        var parse_1 = parse;
        var splitCookiesString_1 = splitCookiesString;
        setCookie.parse = parse_1;
        setCookie.splitCookiesString = splitCookiesString_1;
        /**
 * Util 类
 */        var Util = function() {
            function Util() {
                _classCallCheck(this, Util);
            }
            _createClass(Util, [ {
                key: "getCookieScopeDomain",
                /**
     * 根据域名获取该域名的 cookie 作用域范围列表
     * @param  {String} domain 指定域名
     * @return {String}        cookie 作用域范围列表
     */
                value: function getCookieScopeDomain() {
                    var domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    if (!domain) return [];
                    // 获取 cookie 作用域范围列表
                                        domain = domain.replace(/^\.+/gi, "");
                    var scopes = domain.split(".").map(function(k) {
                        return [ ".", domain.slice(domain.indexOf(k)) ].join("");
                    });
                    return [ domain ].concat(scopes);
                }
                /**
     * 根据最新的 RFC 6265 标准化域名作用域
     * @param  {String} domain 域名
     * @return {String}        标准化后的域名
     */            }, {
                key: "normalizeDomain",
                value: function normalizeDomain() {
                    var domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    return domain.replace(/^(\.*)?(?=\S)/gi, ".");
                }
            } ]);
            return Util;
        }();
        var util = new Util();
        /**
 * Cookie 类
 */        var Cookie = function() {
            /**
   * 构造函数
   */
            function Cookie(props) {
                _classCallCheck(this, Cookie);
                this.name = props.name || "";
                this.value = props.value || "";
                // other
                                this.domain = props.domain || "";
                this.path = props.path || "/";
                this.expires = props.expires ? new Date(props.expires) : null;
                this.maxAge = props.maxAge ? parseInt(props.maxAge) : null;
                this.httpOnly = !!props.httpOnly;
                // 记录时间
                                this.dateTime = props.dateTime ? new Date(props.dateTime) : new Date();
            }
            /**
   * 设置 cookie, 将 set-cookie 字符串转换为 Cookie 对象
   */            _createClass(Cookie, [ {
                key: "set",
                value: function set() {
                    var setCookieStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    var cookie = setCookie.parse(setCookieStr, {
                        decodeValues: false
                    })[0];
                    if (cookie) {
                        _Object$assign(this, cookie);
                        // 更新设置时间
                                                this.dateTime = new Date();
                    }
                    return this;
                }
                /**
     * 合并 cookie
     * @param  {Cookie} cookie cookie 对象
     * @return {Cookie}        this
     */            }, {
                key: "merge",
                value: function merge(cookie) {
                    return _Object$assign(this, cookie);
                }
                /**
     * 验证 cookie 是否还有效
     * @return {Boolean} 是否有效
     */            }, {
                key: "isExpired",
                value: function isExpired() {
                    // maxAge 为 0，无效
                    if (this.maxAge === 0) {
                        return true;
                    }
                    // 存活秒数超出 maxAge，无效
                                        if (this.maxAge > 0) {
                        var seconds = (Date.now() - this.dateTime.getTime()) / 1e3;
                        return seconds > this.maxAge;
                    }
                    // expires 小于当前时间，无效
                                        if (this.expires && this.expires < new Date()) {
                        return true;
                    }
                    return false;
                }
                /**
     * 验证 cookie 是否可持久化
     * @return {Boolean} 是否可持久化
     */            }, {
                key: "isPersistence",
                value: function isPersistence() {
                    return this.maxAge ? this.maxAge > 0 : true;
                }
                /**
     * 验证 cookie 是否在指定的 domain 范围内
     * @param  {String}  domain    域名
     * @return {Boolean}           是否在指定的 domain 范围内
     */            }, {
                key: "isInDomain",
                value: function isInDomain(domain) {
                    var scopeDomains = util.getCookieScopeDomain(domain);
                    return scopeDomains.indexOf(this.domain) >= 0;
                }
                /**
     * 验证 cookie 是否在指定的 path 范围内
     * @param  {String}  path    url路径
     * @return {Boolean}         是否在指定的 path 范围内
     */            }, {
                key: "isInPath",
                value: function isInPath(path) {
                    return path.indexOf(this.path) === 0 || this.path.replace(/\/$/, "") === path;
                }
                /**
     * 重写对象的 toString 方法
     */            }, {
                key: "toString",
                value: function toString() {
                    return [ this.name, this.value ].join("=");
                }
            } ]);
            return Cookie;
        }();
        /**
 * 适配小程序API宿主对象
 */        function getApi() {
            if (typeof my !== "undefined") {
                my.platform = "my";
                return my;
            } else if (typeof tt !== "undefined") {
                tt.platform = "tt";
                return tt;
            } else if (typeof swan !== "undefined") {
                swan.platform = "swan";
                return swan;
            } else if (typeof qq !== "undefined") {
                qq.platform = "qq";
                return qq;
            } else if (typeof wx !== "undefined") {
                wx.platform = typeof window !== "undefined" && typeof location !== "undefined" ? "h5" : "wx";
                return wx;
            }
            return {
                platform: "none"
            };
        }
        var api = getApi();
        /**
 * LocalStorage 类
 */        var LocalStorage = function() {
            function LocalStorage() {
                _classCallCheck(this, LocalStorage);
            }
            _createClass(LocalStorage, [ {
                key: "getItem",
                /**
     * 获取数据项
     * @param {String} key   键
     */
                value: function getItem(key) {
                    // 屏蔽支付宝小程序语法差异
                    if (api.platform === "my") {
                        return api.getStorageSync({
                            key: key
                        }).data;
                    }
                    return api.getStorageSync(key);
                }
                /**
     * 设置数据项
     * @param {String} key   键
     * @param {Any} value 值
     */            }, {
                key: "setItem",
                value: function setItem(key, value) {
                    // 屏蔽支付宝小程序语法差异
                    if (api.platform === "my") {
                        return api.setStorageSync({
                            key: key,
                            data: value
                        });
                    }
                    return api.setStorageSync(key, value);
                }
            } ]);
            return LocalStorage;
        }();
        // 单例
                var localStorage = new LocalStorage(api);
        /**
 * CookieStore 类
 */        var CookieStore = function() {
            /**
   * 构造函数
   */
            function CookieStore() {
                _classCallCheck(this, CookieStore);
                // storageKey
                                this.__storageKey = "__cookie_store__";
                // cookies Map缓存（domain -> cookie 二级结构）
                                this.__cookiesMap = this.__readFromStorage() || new _Map();
            }
            /**
   * 是否存在某个 cookie
   * @param  {String}  name       cookie 名称
   * @param  {String}  [domain]   指定域名（可选）
   * @param  {String}  [path]     指定path（可选）
   * @return {Boolean}            是否存在
   */            _createClass(CookieStore, [ {
                key: "has",
                value: function has(name, domain, path) {
                    // 返回是否存在 cookie 值
                    return this.getCookie(name, domain, path) !== undefined;
                }
                /**
     * 获取 cookie 值
     * @param {String} name       cookie 名称
     * @param {String} [domain]   指定域名（可选）
     * @param {String} [path]     指定path（可选）
     * @return {String}           cookie 值
     */            }, {
                key: "get",
                value: function get() {
                    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                    var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/";
                    // 获取 cookie
                                        var cookie = this.getCookie(name, domain, path);
                    // 返回 cookie 值
                                        return cookie ? cookie.value : undefined;
                }
                /**
     * 设置域名 cookie
     * @param {String}  name              cookie 名称
     * @param {String}  value             cookie 值
     * @param {Object}  options           cookie 选项
     * @param {String}  options.domain
     * @param {String}  [options.path]
     * @param {Date}    [options.expires]
     * @param {Number}  [options.maxAge]
     * @param {Boolean} [options.httpOnly]
     * @return {Cookie}           cookie 对象
     */            }, {
                key: "set",
                value: function set() {
                    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    // 构建 Cookie 实例
                                        var domain = options.domain;
                    if (!domain || !name) throw new Error("name 和 options.domain 值不正确！");
                    var cookie = new Cookie(_Object$assign(options, {
                        name: name,
                        value: value
                    }));
                    // 设置到指定域名
                                        var cookies = this.__cookiesMap.get(domain) || new _Map();
                    cookies.set(name, cookie);
                    this.__cookiesMap.set(domain, cookies);
                    // 保存到 Storage
                                        this.__saveToStorage();
                    return cookie;
                }
                /**
     * 获取所有域名和 cookies 结构
     * @return {Object}  obj  结构JSON对象
     */            }, {
                key: "dir",
                value: function dir() {
                    var dirObj = {};
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
                    try {
                        for (var _iterator = _getIterator(this.__cookiesMap.keys()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var domain = _step.value;
                            dirObj[domain] = this.getCookies(domain);
                        }
                    } catch (err) {
                        err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return dirObj;
                }
                /**
     * 删除 cookie
     * @param  {Array}  name      cookie 键
     * @param  {String} [domain]  指定域名（可选）
     * @return {Boolean}          是否删除成功
     */            }, {
                key: "remove",
                value: function remove() {
                    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                    if (domain) {
                        // 删除指定域名的 cookie
                        var cookies = this.__cookiesMap.get(domain);
                        cookies && cookies.delete(name);
                        cookies = this.__cookiesMap.get(util.normalizeDomain(domain));
                        cookies && cookies.delete(name);
                    } else {
                        // 删除所有域名的 cookie
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;
                        try {
                            for (var _iterator2 = _getIterator(this.__cookiesMap.values()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var _cookies = _step2.value;
                                _cookies.delete(name);
                            }
                        } catch (err) {
                            err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    }
                    // 保存到 Storage
                                        this.__saveToStorage();
                    return true;
                }
                /**
     * 获取 cookie 对象
     * @param {String} name       cookie 名称
     * @param {String} [domain]   指定域名（可选）
     * @param {String} [path]     指定path（可选）
     * @return {Cookie}           cookie 对象
     */            }, {
                key: "getCookie",
                value: function getCookie() {
                    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                    var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/";
                    var cookie = void 0;
                    // 获取 cookie scope 域名数组
                                        var scopeDomains = util.getCookieScopeDomain(domain);
                    // 获取任意域名的 cookie
                                        var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;
                    try {
                        for (var _iterator3 = _getIterator(this.__cookiesMap.entries()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var _step3$value = _slicedToArray(_step3.value, 2), key = _step3$value[0], cookies = _step3$value[1];
                            // 如果有域名，则根据域名过滤
                                                        if (domain && scopeDomains.indexOf(key) < 0) continue;
                            // 获取 cookie
                                                        cookie = cookies.get(name);
                            if (cookie && cookie.isInPath(path) && !cookie.isExpired()) break;
                            cookie = undefined;
                        }
                        // 返回 cookie 值
                                        } catch (err) {
                        err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }
                    return cookie;
                }
                /**
     * 获取 cookies key/value 对象
     * @param  {String} [domain]  指定域名（可选）
     * @return {Object}           cookie 值列表对象
     */            }, {
                key: "getCookies",
                value: function getCookies(domain, path) {
                    var cookieValues = {};
                    // 将 cookie 值添加到对象
                                        this.getCookiesArray(domain, path).forEach(function(cookie) {
                        cookieValues[cookie.name] = cookie.value;
                    });
                    // 返回获取的 cookie 值对象
                                        return cookieValues;
                }
                /**
     * 获取 cookies 对象数组
     * @param  {String} [domain]  指定域名（可选）
     * @return {Array}            Cookie 对象数组
     */            }, {
                key: "getCookiesArray",
                value: function getCookiesArray() {
                    var domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
                    var cookiesArr = [];
                    // 获取 cookie scope 域名数组
                                        var scopeDomains = util.getCookieScopeDomain(domain);
                    // 获取任意域名的 cookie
                                        var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;
                    try {
                        for (var _iterator4 = _getIterator(this.__cookiesMap.entries()), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var _step4$value = _slicedToArray(_step4.value, 2), key = _step4$value[0], cookies = _step4$value[1];
                            // 如果有域名，则根据域名过滤
                                                        if (domain && scopeDomains.indexOf(key) < 0) continue;
                            // 循环当前域名下所有 cookie
                                                        var _iteratorNormalCompletion5 = true;
                            var _didIteratorError5 = false;
                            var _iteratorError5 = undefined;
                            try {
                                for (var _iterator5 = _getIterator(cookies.values()), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                    var cookie = _step5.value;
                                    // 筛选符合 path 条件并且未过期的 cookie
                                                                        if (cookie.isInPath(path) && !cookie.isExpired()) {
                                        cookiesArr.push(cookie);
                                    }
                                }
                            } catch (err) {
                                err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                                _didIteratorError5 = true;
                                _iteratorError5 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                        _iterator5.return();
                                    }
                                } finally {
                                    if (_didIteratorError5) {
                                        throw _iteratorError5;
                                    }
                                }
                            }
                        }
                        // 返回获取的 cookie 值对象
                                        } catch (err) {
                        err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }
                    return cookiesArr;
                }
                /**
     * 设置 cookies 对象数组到 store
     * @param  {Array} cookies  Cookie 对象数组
     * @return {Map}            cookies Map 对象
     */            }, {
                key: "setCookiesArray",
                value: function setCookiesArray() {
                    var _this = this;
                    var cookies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    this.__cookiesMap = this.__cookiesMap || new _Map();
                    // Cookie 数组转换 Map 对象
                                        cookies.forEach(function(cookie) {
                        var cookieMap = _this.__cookiesMap.get(cookie.domain);
                        if (!cookieMap) {
                            cookieMap = new _Map();
                            _this.__cookiesMap.set(cookie.domain, cookieMap);
                        }
                        cookieMap.set(cookie.name, cookie);
                    });
                    // 保存到 Storage
                                        this.__saveToStorage();
                    return this.__cookiesMap;
                }
                /**
     * 清除 cookies
     * @param  {String} [domain]  指定域名（可选）
     * @return {Boolean}          是否清除成功
     */            }, {
                key: "clearCookies",
                value: function clearCookies(domain) {
                    if (domain) {
                        var cookies = this.__cookiesMap.get(domain);
                        cookies && cookies.clear();
                    } else {
                        this.__cookiesMap.clear();
                    }
                    // 保存到 Storage
                                        this.__saveToStorage();
                    return true;
                }
                /**
     * 获取 request cookies
     * @param  {String} domain 指定域名
     * @return {String}        request cookies 字符串
     */            }, {
                key: "getRequestCookies",
                value: function getRequestCookies(domain, path) {
                    // cookies 数组
                    var cookiesArr = this.getCookiesArray(domain, path);
                    // 转化为 request cookies 字符串
                                        return this.stringify(cookiesArr);
                }
                /**
     * 设置 response cookies
     * @param {String} setCookieStr response set-cookie 字符串
     * @param {String} domain       默认域名（如果 set-cookie 中没有设置 domain 则使用该域名）
     */            }, {
                key: "setResponseCookies",
                value: function setResponseCookies(setCookieStr, domain) {
                    // 转换为 cookie 对象数组
                    var parsedCookies = this.parse(setCookieStr, domain);
                    // 设置 cookies
                                        return this.setCookiesArray(parsedCookies);
                }
                /**
     * 解析 response set-cookie 字段
     * @param  {String} setCookieStr response set-cookie 字符串
     * @param  {String} domain       默认域名（如果 set-cookie 中没有设置 domain 则使用该域名）
     * @return {Array}               Cookie 对象数组
     */            }, {
                key: "parse",
                value: function parse() {
                    var setCookieStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    var domain = arguments[1];
                    // parse
                                        var cookies = setCookie.parse(setCookie.splitCookiesString(setCookieStr), {
                        decodeValues: false
                    });
                    // 转换为 Cookie 对象
                                        return cookies.map(function(item) {
                        item.domain = util.normalizeDomain(item.domain) || domain;
                        return new Cookie(item);
                    });
                }
                /**
     * 将 cookies 字符串化，转化为 request cookies 字符串
     * @param  {Array} cookies Cookie 对象数组
     * @return {String}        cookie 字符串
     */            }, {
                key: "stringify",
                value: function stringify(cookies) {
                    return cookies.map(function(item) {
                        return item.toString();
                    }).join("; ");
                }
                /**
     * 将 cookies 保存到 Storage
     */            }, {
                key: "__saveToStorage",
                value: function __saveToStorage() {
                    try {
                        var saveCookies = [];
                        // 获取需要持久化的 cookie
                                                var _iteratorNormalCompletion6 = true;
                        var _didIteratorError6 = false;
                        var _iteratorError6 = undefined;
                        try {
                            for (var _iterator6 = _getIterator(this.__cookiesMap.values()), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                var cookies = _step6.value;
                                var _iteratorNormalCompletion7 = true;
                                var _didIteratorError7 = false;
                                var _iteratorError7 = undefined;
                                try {
                                    for (var _iterator7 = _getIterator(cookies.values()), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                        var cookie = _step7.value;
                                        if (cookie.isExpired()) {
                                            // 清除无效 cookie
                                            cookies.delete(cookie.name);
                                        } else if (cookie.isPersistence()) {
                                            // 只存储可持久化 cookie
                                            saveCookies.push(cookie);
                                        }
                                    }
                                } catch (err) {
                                    err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                                    _didIteratorError7 = true;
                                    _iteratorError7 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                            _iterator7.return();
                                        }
                                    } finally {
                                        if (_didIteratorError7) {
                                            throw _iteratorError7;
                                        }
                                    }
                                }
                            }
                            // 保存到本地存储
                                                } catch (err) {
                            err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                            _didIteratorError6 = true;
                            _iteratorError6 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                    _iterator6.return();
                                }
                            } finally {
                                if (_didIteratorError6) {
                                    throw _iteratorError6;
                                }
                            }
                        }
                        localStorage.setItem(this.__storageKey, saveCookies);
                    } catch (err) {
                        err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                        console.warn("Cookie 存储异常：", err);
                    }
                }
                /**
     * 从 Storage 读取 cookies
     */            }, {
                key: "__readFromStorage",
                value: function __readFromStorage() {
                    try {
                        // 从本地存储读取 cookie 数据数组
                        var cookies = localStorage.getItem(this.__storageKey) || [];
                        // 转化为 Cookie 对象数组
                                                cookies = cookies.map(function(item) {
                            return new Cookie(item);
                        });
                        // 转化为 cookie map 对象
                                                return this.setCookiesArray(cookies);
                    } catch (err) {
                        err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                        console.warn("Cookie 读取异常：", err);
                    }
                }
            } ]);
            return CookieStore;
        }();
        /**
 * 微信 Cookie 代理
 */        var cookieStore = function() {
            // 创建 cookieStore 实例
            var cookieStore = new CookieStore();
            /**
   * 定义请求 cookie 代理函数
   * @param  {Object} options 请求参数
   */            function cookieRequestProxy(options) {
                // 是否启用 cookie（默认 true）
                options.cookie = options.cookie === undefined || !!options.cookie;
                // 数据类型
                                options.dataType = options.dataType || "json";
                options.header = options.headers = options.header || options.headers || {};
                options.header["X-Requested-With"] = "XMLHttpRequest";
                if (options.dataType === "json") {
                    options.header["Accept"] = "application/json, text/plain, */*";
                }
                // 判断在小程序环境是否启用 cookie
                                if (api.platform !== "h5" && options.cookie) {
                    // 域名
                    var domain = (options.url || "").split("/")[2];
                    var path = options.url.split(domain).pop();
                    // 获取请求 cookies
                                        var requestCookies = cookieStore.getRequestCookies(domain, path);
                    // 请求时带上设置的 cookies
                                        options.header["Cookie"] = requestCookies;
                    // 请求成功回调
                                        var successCallback = options.success;
                    options.success = function(response) {
                        response.header = response.header || response.headers;
                        // 获取响应 cookies
                                                var responseCookies = response.header ? response.header["Set-Cookie"] || response.header["set-cookie"] : "";
                        if (responseCookies) {
                            // 处理QQ小程序下cookie分隔符问题：https://github.com/charleslo1/weapp-cookie/issues/39
                            responseCookies = responseCookies.replace(/\;([^\s\;]*?(?=\=))/gi, ",$1");
                            // 设置 cookies，以便下次请求带上
                                                        cookieStore.setResponseCookies(responseCookies, domain);
                        }
                        // 调用成功回调函数
                                                successCallback && successCallback(response);
                    };
                }
                // 发送网络请求
                                return this(options);
            }
            // 绑定新的
                        var requestProxy = cookieRequestProxy.bind(api.request);
            var uploadFileProxy = cookieRequestProxy.bind(api.uploadFile);
            var downloadFileProxy = cookieRequestProxy.bind(api.downloadFile);
            try {
                // 增加 requestWithCookie、uploadFileWithCookie、downloadFileWithCookie 接口
                _Object$defineProperties(api, {
                    // request
                    requestWithCookie: {
                        value: requestProxy
                    },
                    // uploadFile
                    uploadFileWithCookie: {
                        value: uploadFileProxy
                    },
                    // downloadFile
                    downloadFileWithCookie: {
                        value: downloadFileProxy
                    }
                });
                // 使用 requestProxy 覆盖微信原生 request、uploadFile、downloadFile 接口
                                _Object$defineProperties(api, {
                    // request
                    request: {
                        value: requestProxy
                    },
                    // uploadFile
                    uploadFile: {
                        value: uploadFileProxy
                    },
                    // downloadFile
                    downloadFile: {
                        value: downloadFileProxy
                    }
                });
            } catch (err) {
                err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                console.error("weapp-cookie: ", err);
            }
            // 配置
                        cookieStore.config = function(options) {
                options = _Object$assign({
                    requestAlias: "requestWithCookie",
                    uploadFileAlias: "uploadFileWithCookie",
                    downloadFileAlias: "downloadFileWithCookie"
                }, options);
                // 配置请求别名
                                if (options.requestAlias) {
                    _Object$defineProperty(api, options.requestAlias, {
                        value: requestProxy
                    });
                }
                if (options.uploadFileAlias) {
                    _Object$defineProperty(api, options.uploadFileAlias, {
                        value: uploadFileProxy
                    });
                }
                if (options.downloadFileAlias) {
                    _Object$defineProperty(api, options.downloadFileAlias, {
                        value: downloadFileProxy
                    });
                }
            };
            // 返回 cookieStore
                        return cookieStore;
        }();
        return cookieStore;
    });
    //# sourceMappingURL=weapp-cookie.js.map
}, /***** module 2 end *****/
/***** module 3 start *****/
/***** D:\ym_xcx\node_modules\regenerator-runtime\runtime.js *****/
function(module, exports, __wepy_require) {
    /**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    var runtime = function(exports) {
        "use strict";
        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined;
        // More compressible than void 0.
                var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define(obj, key, value) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
            return obj[key];
        }
        try {
            // IE 8 has a broken Object.defineProperty that only works on DOM objects.
            define({}, "");
        } catch (err) {
            err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
            define = function(obj, key, value) {
                return obj[key] = value;
            };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);
            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
                        generator._invoke = makeInvokeMethod(innerFn, self, context);
            return generator;
        }
        exports.wrap = wrap;
        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
                function tryCatch(fn, obj, arg) {
            try {
                return {
                    type: "normal",
                    arg: fn.call(obj, arg)
                };
            } catch (err) {
                err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
                return {
                    type: "throw",
                    arg: err
                };
            }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";
        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
                var ContinueSentinel = {};
        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
                function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.
                var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function() {
            return this;
        };
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
        }
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
                function defineIteratorMethods(prototype) {
            [ "next", "throw", "return" ].forEach(function(method) {
                define(prototype, method, function(arg) {
                    return this._invoke(method, arg);
                });
            });
        }
        exports.isGeneratorFunction = function(genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction || 
            // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };
        exports.mark = function(genFun) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
                genFun.__proto__ = GeneratorFunctionPrototype;
                define(genFun, toStringTagSymbol, "GeneratorFunction");
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
        };
        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.
                exports.awrap = function(arg) {
            return {
                __await: arg
            };
        };
        function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
                var record = tryCatch(generator[method], generator, arg);
                if (record.type === "throw") {
                    reject(record.arg);
                } else {
                    var result = record.arg;
                    var value = result.value;
                    if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                        return PromiseImpl.resolve(value.__await).then(function(value) {
                            invoke("next", value, resolve, reject);
                        }, function(err) {
                            invoke("throw", err, resolve, reject);
                        });
                    }
                    return PromiseImpl.resolve(value).then(function(unwrapped) {
                        // When a yielded Promise is resolved, its final value becomes
                        // the .value of the Promise<{value,done}> result for the
                        // current iteration.
                        result.value = unwrapped;
                        resolve(result);
                    }, function(error) {
                        // If a rejected Promise was yielded, throw the rejection back
                        // into the async generator function so it can be handled there.
                        return invoke("throw", error, resolve, reject);
                    });
                }
            }
            var previousPromise;
            function enqueue(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new PromiseImpl(function(resolve, reject) {
                        invoke(method, arg, resolve, reject);
                    });
                }
                return previousPromise = 
                // If enqueue has been called before, then we want to wait until
                // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, 
                // Avoid propagating failures to Promises returned by later
                // invocations of the iterator.
                callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
                        this._invoke = enqueue;
        }
        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function() {
            return this;
        };
        exports.AsyncIterator = AsyncIterator;
        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
                exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            if (PromiseImpl === void 0) PromiseImpl = Promise;
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
                return result.done ? result.value : iter.next();
            });
        };
        function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
                if (state === GenStateExecuting) {
                    throw new Error("Generator is already running");
                }
                if (state === GenStateCompleted) {
                    if (method === "throw") {
                        throw arg;
                    }
                    // Be forgiving, per 25.3.3.3.3 of the spec:
                    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                                        return doneResult();
                }
                context.method = method;
                context.arg = arg;
                while (true) {
                    var delegate = context.delegate;
                    if (delegate) {
                        var delegateResult = maybeInvokeDelegate(delegate, context);
                        if (delegateResult) {
                            if (delegateResult === ContinueSentinel) continue;
                            return delegateResult;
                        }
                    }
                    if (context.method === "next") {
                        // Setting context._sent for legacy support of Babel's
                        // function.sent implementation.
                        context.sent = context._sent = context.arg;
                    } else if (context.method === "throw") {
                        if (state === GenStateSuspendedStart) {
                            state = GenStateCompleted;
                            throw context.arg;
                        }
                        context.dispatchException(context.arg);
                    } else if (context.method === "return") {
                        context.abrupt("return", context.arg);
                    }
                    state = GenStateExecuting;
                    var record = tryCatch(innerFn, self, context);
                    if (record.type === "normal") {
                        // If an exception is thrown from innerFn, we leave state ===
                        // GenStateExecuting and loop back for another invocation.
                        state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                        if (record.arg === ContinueSentinel) {
                            continue;
                        }
                        return {
                            value: record.arg,
                            done: context.done
                        };
                    } else if (record.type === "throw") {
                        state = GenStateCompleted;
                        // Dispatch the exception by looping back around to the
                        // context.dispatchException(context.arg) call above.
                                                context.method = "throw";
                        context.arg = record.arg;
                    }
                }
            };
        }
        // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.
                function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined) {
                // A .throw or .return when the delegate iterator has no .throw
                // method always terminates the yield* loop.
                context.delegate = null;
                if (context.method === "throw") {
                    // Note: ["return"] must be used for ES3 parsing compatibility.
                    if (delegate.iterator["return"]) {
                        // If the delegate iterator has a return method, give it a
                        // chance to clean up.
                        context.method = "return";
                        context.arg = undefined;
                        maybeInvokeDelegate(delegate, context);
                        if (context.method === "throw") {
                            // If maybeInvokeDelegate(context) changed context.method from
                            // "return" to "throw", let that override the TypeError below.
                            return ContinueSentinel;
                        }
                    }
                    context.method = "throw";
                    context.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if (record.type === "throw") {
                context.method = "throw";
                context.arg = record.arg;
                context.delegate = null;
                return ContinueSentinel;
            }
            var info = record.arg;
            if (!info) {
                context.method = "throw";
                context.arg = new TypeError("iterator result is not an object");
                context.delegate = null;
                return ContinueSentinel;
            }
            if (info.done) {
                // Assign the result of the finished delegate to the temporary
                // variable specified by delegate.resultName (see delegateYield).
                context[delegate.resultName] = info.value;
                // Resume execution at the desired location (see delegateYield).
                                context.next = delegate.nextLoc;
                // If context.method was "throw" but the delegate handled the
                // exception, let the outer generator proceed normally. If
                // context.method was "next", forget context.arg since it has been
                // "consumed" by the delegate iterator. If context.method was
                // "return", allow the original .return call to continue in the
                // outer generator.
                                if (context.method !== "return") {
                    context.method = "next";
                    context.arg = undefined;
                }
            } else {
                // Re-yield the result returned by the delegate method.
                return info;
            }
            // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
                        context.delegate = null;
            return ContinueSentinel;
        }
        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
                defineIteratorMethods(Gp);
        define(Gp, toStringTagSymbol, "Generator");
        // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.
                Gp[iteratorSymbol] = function() {
            return this;
        };
        Gp.toString = function() {
            return "[object Generator]";
        };
        function pushTryEntry(locs) {
            var entry = {
                tryLoc: locs[0]
            };
            if (1 in locs) {
                entry.catchLoc = locs[1];
            }
            if (2 in locs) {
                entry.finallyLoc = locs[2];
                entry.afterLoc = locs[3];
            }
            this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
        }
        function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [ {
                tryLoc: "root"
            } ];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
        }
        exports.keys = function(object) {
            var keys = [];
            for (var key in object) {
                keys.push(key);
            }
            keys.reverse();
            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
                        return function next() {
                while (keys.length) {
                    var key = keys.pop();
                    if (key in object) {
                        next.value = key;
                        next.done = false;
                        return next;
                    }
                }
                // To avoid creating an additional object, we just hang the .value
                // and .done properties off the next function object itself. This
                // also ensures that the minifier will not anonymize the function.
                                next.done = true;
                return next;
            };
        };
        function values(iterable) {
            if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];
                if (iteratorMethod) {
                    return iteratorMethod.call(iterable);
                }
                if (typeof iterable.next === "function") {
                    return iterable;
                }
                if (!isNaN(iterable.length)) {
                    var i = -1, next = function next() {
                        while (++i < iterable.length) {
                            if (hasOwn.call(iterable, i)) {
                                next.value = iterable[i];
                                next.done = false;
                                return next;
                            }
                        }
                        next.value = undefined;
                        next.done = true;
                        return next;
                    };
                    return next.next = next;
                }
            }
            // Return an iterator with no values.
                        return {
                next: doneResult
            };
        }
        exports.values = values;
        function doneResult() {
            return {
                value: undefined,
                done: true
            };
        }
        Context.prototype = {
            constructor: Context,
            reset: function(skipTempReset) {
                this.prev = 0;
                this.next = 0;
                // Resetting context._sent for legacy support of Babel's
                // function.sent implementation.
                                this.sent = this._sent = undefined;
                this.done = false;
                this.delegate = null;
                this.method = "next";
                this.arg = undefined;
                this.tryEntries.forEach(resetTryEntry);
                if (!skipTempReset) {
                    for (var name in this) {
                        // Not sure about the optimal order of these conditions:
                        if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                            this[name] = undefined;
                        }
                    }
                }
            },
            stop: function() {
                this.done = true;
                var rootEntry = this.tryEntries[0];
                var rootRecord = rootEntry.completion;
                if (rootRecord.type === "throw") {
                    throw rootRecord.arg;
                }
                return this.rval;
            },
            dispatchException: function(exception) {
                if (this.done) {
                    throw exception;
                }
                var context = this;
                function handle(loc, caught) {
                    record.type = "throw";
                    record.arg = exception;
                    context.next = loc;
                    if (caught) {
                        // If the dispatched exception was caught by a catch block,
                        // then let that catch block handle the exception normally.
                        context.method = "next";
                        context.arg = undefined;
                    }
                    return !!caught;
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    var record = entry.completion;
                    if (entry.tryLoc === "root") {
                        // Exception thrown outside of any try block that could handle
                        // it, so set the completion value of the entire function to
                        // throw the exception.
                        return handle("end");
                    }
                    if (entry.tryLoc <= this.prev) {
                        var hasCatch = hasOwn.call(entry, "catchLoc");
                        var hasFinally = hasOwn.call(entry, "finallyLoc");
                        if (hasCatch && hasFinally) {
                            if (this.prev < entry.catchLoc) {
                                return handle(entry.catchLoc, true);
                            } else if (this.prev < entry.finallyLoc) {
                                return handle(entry.finallyLoc);
                            }
                        } else if (hasCatch) {
                            if (this.prev < entry.catchLoc) {
                                return handle(entry.catchLoc, true);
                            }
                        } else if (hasFinally) {
                            if (this.prev < entry.finallyLoc) {
                                return handle(entry.finallyLoc);
                            }
                        } else {
                            throw new Error("try statement without catch or finally");
                        }
                    }
                }
            },
            abrupt: function(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                        var finallyEntry = entry;
                        break;
                    }
                }
                if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                    // Ignore the finally entry if control is not jumping to a
                    // location outside the try/catch block.
                    finallyEntry = null;
                }
                var record = finallyEntry ? finallyEntry.completion : {};
                record.type = type;
                record.arg = arg;
                if (finallyEntry) {
                    this.method = "next";
                    this.next = finallyEntry.finallyLoc;
                    return ContinueSentinel;
                }
                return this.complete(record);
            },
            complete: function(record, afterLoc) {
                if (record.type === "throw") {
                    throw record.arg;
                }
                if (record.type === "break" || record.type === "continue") {
                    this.next = record.arg;
                } else if (record.type === "return") {
                    this.rval = this.arg = record.arg;
                    this.method = "return";
                    this.next = "end";
                } else if (record.type === "normal" && afterLoc) {
                    this.next = afterLoc;
                }
                return ContinueSentinel;
            },
            finish: function(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.finallyLoc === finallyLoc) {
                        this.complete(entry.completion, entry.afterLoc);
                        resetTryEntry(entry);
                        return ContinueSentinel;
                    }
                }
            },
            catch: function(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc === tryLoc) {
                        var record = entry.completion;
                        if (record.type === "throw") {
                            var thrown = record.arg;
                            resetTryEntry(entry);
                        }
                        return thrown;
                    }
                }
                // The context.catch method must only be called with a location
                // argument that corresponds to a known catch block.
                                throw new Error("illegal catch attempt");
            },
            delegateYield: function(iterable, resultName, nextLoc) {
                this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc
                };
                if (this.method === "next") {
                    // Deliberately forget the last sent value so that we don't
                    // accidentally pass it on to the delegate.
                    this.arg = undefined;
                }
                return ContinueSentinel;
            }
        };
        // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.
                return exports;
    }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    typeof module === "object" ? module.exports : {});
    try {
        regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        accidentalStrictMode = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(accidentalStrictMode);
        Function("r", "regeneratorRuntime = r")(runtime);
    }
}, /***** module 3 end *****/
/***** module 4 start *****/
/***** D:\ym_xcx\node_modules\moment\moment.js *****/
function(module, exports, __wepy_require) {
    (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.moment = factory();
    })(this, function() {
        "use strict";
        var hookCallback;
        function hooks() {
            return hookCallback.apply(null, arguments);
        }
        // This is done to register the method called with moment()
        // without creating circular dependencies.
                function setHookCallback(callback) {
            hookCallback = callback;
        }
        function isArray(input) {
            return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
        }
        function isObject(input) {
            // IE8 will treat undefined and null as object if it wasn't for
            // input != null
            return input != null && Object.prototype.toString.call(input) === "[object Object]";
        }
        function hasOwnProp(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b);
        }
        function isObjectEmpty(obj) {
            if (Object.getOwnPropertyNames) {
                return Object.getOwnPropertyNames(obj).length === 0;
            } else {
                var k;
                for (k in obj) {
                    if (hasOwnProp(obj, k)) {
                        return false;
                    }
                }
                return true;
            }
        }
        function isUndefined(input) {
            return input === void 0;
        }
        function isNumber(input) {
            return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
        }
        function isDate(input) {
            return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
        }
        function map(arr, fn) {
            var res = [], i;
            for (i = 0; i < arr.length; ++i) {
                res.push(fn(arr[i], i));
            }
            return res;
        }
        function extend(a, b) {
            for (var i in b) {
                if (hasOwnProp(b, i)) {
                    a[i] = b[i];
                }
            }
            if (hasOwnProp(b, "toString")) {
                a.toString = b.toString;
            }
            if (hasOwnProp(b, "valueOf")) {
                a.valueOf = b.valueOf;
            }
            return a;
        }
        function createUTC(input, format, locale, strict) {
            return createLocalOrUTC(input, format, locale, strict, true).utc();
        }
        function defaultParsingFlags() {
            // We need to deep clone this object.
            return {
                empty: false,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: false,
                invalidEra: null,
                invalidMonth: null,
                invalidFormat: false,
                userInvalidated: false,
                iso: false,
                parsedDateParts: [],
                era: null,
                meridiem: null,
                rfc2822: false,
                weekdayMismatch: false
            };
        }
        function getParsingFlags(m) {
            if (m._pf == null) {
                m._pf = defaultParsingFlags();
            }
            return m._pf;
        }
        var some;
        if (Array.prototype.some) {
            some = Array.prototype.some;
        } else {
            some = function(fun) {
                var t = Object(this), len = t.length >>> 0, i;
                for (i = 0; i < len; i++) {
                    if (i in t && fun.call(this, t[i], i, t)) {
                        return true;
                    }
                }
                return false;
            };
        }
        function isValid(m) {
            if (m._isValid == null) {
                var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
                    return i != null;
                }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
                if (m._strict) {
                    isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
                }
                if (Object.isFrozen == null || !Object.isFrozen(m)) {
                    m._isValid = isNowValid;
                } else {
                    return isNowValid;
                }
            }
            return m._isValid;
        }
        function createInvalid(flags) {
            var m = createUTC(NaN);
            if (flags != null) {
                extend(getParsingFlags(m), flags);
            } else {
                getParsingFlags(m).userInvalidated = true;
            }
            return m;
        }
        // Plugins that add properties should also add the key here (null value),
        // so we can properly clone ourselves.
                var momentProperties = hooks.momentProperties = [], updateInProgress = false;
        function copyConfig(to, from) {
            var i, prop, val;
            if (!isUndefined(from._isAMomentObject)) {
                to._isAMomentObject = from._isAMomentObject;
            }
            if (!isUndefined(from._i)) {
                to._i = from._i;
            }
            if (!isUndefined(from._f)) {
                to._f = from._f;
            }
            if (!isUndefined(from._l)) {
                to._l = from._l;
            }
            if (!isUndefined(from._strict)) {
                to._strict = from._strict;
            }
            if (!isUndefined(from._tzm)) {
                to._tzm = from._tzm;
            }
            if (!isUndefined(from._isUTC)) {
                to._isUTC = from._isUTC;
            }
            if (!isUndefined(from._offset)) {
                to._offset = from._offset;
            }
            if (!isUndefined(from._pf)) {
                to._pf = getParsingFlags(from);
            }
            if (!isUndefined(from._locale)) {
                to._locale = from._locale;
            }
            if (momentProperties.length > 0) {
                for (i = 0; i < momentProperties.length; i++) {
                    prop = momentProperties[i];
                    val = from[prop];
                    if (!isUndefined(val)) {
                        to[prop] = val;
                    }
                }
            }
            return to;
        }
        // Moment prototype object
                function Moment(config) {
            copyConfig(this, config);
            this._d = new Date(config._d != null ? config._d.getTime() : NaN);
            if (!this.isValid()) {
                this._d = new Date(NaN);
            }
            // Prevent infinite loop in case updateOffset creates new moment
            // objects.
                        if (updateInProgress === false) {
                updateInProgress = true;
                hooks.updateOffset(this);
                updateInProgress = false;
            }
        }
        function isMoment(obj) {
            return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
        }
        function warn(msg) {
            if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
                console.warn("Deprecation warning: " + msg);
            }
        }
        function deprecate(msg, fn) {
            var firstTime = true;
            return extend(function() {
                if (hooks.deprecationHandler != null) {
                    hooks.deprecationHandler(null, msg);
                }
                if (firstTime) {
                    var args = [], arg, i, key;
                    for (i = 0; i < arguments.length; i++) {
                        arg = "";
                        if (typeof arguments[i] === "object") {
                            arg += "\n[" + i + "] ";
                            for (key in arguments[0]) {
                                if (hasOwnProp(arguments[0], key)) {
                                    arg += key + ": " + arguments[0][key] + ", ";
                                }
                            }
                            arg = arg.slice(0, -2);
                            // Remove trailing comma and space
                                                } else {
                            arg = arguments[i];
                        }
                        args.push(arg);
                    }
                    warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack);
                    firstTime = false;
                }
                return fn.apply(this, arguments);
            }, fn);
        }
        var deprecations = {};
        function deprecateSimple(name, msg) {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(name, msg);
            }
            if (!deprecations[name]) {
                warn(msg);
                deprecations[name] = true;
            }
        }
        hooks.suppressDeprecationWarnings = false;
        hooks.deprecationHandler = null;
        function isFunction(input) {
            return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
        }
        function set(config) {
            var prop, i;
            for (i in config) {
                if (hasOwnProp(config, i)) {
                    prop = config[i];
                    if (isFunction(prop)) {
                        this[i] = prop;
                    } else {
                        this["_" + i] = prop;
                    }
                }
            }
            this._config = config;
            // Lenient ordinal parsing accepts just a number in addition to
            // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
            // TODO: Remove "ordinalParse" fallback in next major release.
                        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
        }
        function mergeConfigs(parentConfig, childConfig) {
            var res = extend({}, parentConfig), prop;
            for (prop in childConfig) {
                if (hasOwnProp(childConfig, prop)) {
                    if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                        res[prop] = {};
                        extend(res[prop], parentConfig[prop]);
                        extend(res[prop], childConfig[prop]);
                    } else if (childConfig[prop] != null) {
                        res[prop] = childConfig[prop];
                    } else {
                        delete res[prop];
                    }
                }
            }
            for (prop in parentConfig) {
                if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
                    // make sure changes to properties don't modify parent config
                    res[prop] = extend({}, res[prop]);
                }
            }
            return res;
        }
        function Locale(config) {
            if (config != null) {
                this.set(config);
            }
        }
        var keys;
        if (Object.keys) {
            keys = Object.keys;
        } else {
            keys = function(obj) {
                var i, res = [];
                for (i in obj) {
                    if (hasOwnProp(obj, i)) {
                        res.push(i);
                    }
                }
                return res;
            };
        }
        var defaultCalendar = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        };
        function calendar(key, mom, now) {
            var output = this._calendar[key] || this._calendar["sameElse"];
            return isFunction(output) ? output.call(mom, now) : output;
        }
        function zeroFill(number, targetLength, forceSign) {
            var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign = number >= 0;
            return (sign ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
        }
        var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
        // token:    'M'
        // padded:   ['MM', 2]
        // ordinal:  'Mo'
        // callback: function () { this.month() + 1 }
                function addFormatToken(token, padded, ordinal, callback) {
            var func = callback;
            if (typeof callback === "string") {
                func = function() {
                    return this[callback]();
                };
            }
            if (token) {
                formatTokenFunctions[token] = func;
            }
            if (padded) {
                formatTokenFunctions[padded[0]] = function() {
                    return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
                };
            }
            if (ordinal) {
                formatTokenFunctions[ordinal] = function() {
                    return this.localeData().ordinal(func.apply(this, arguments), token);
                };
            }
        }
        function removeFormattingTokens(input) {
            if (input.match(/\[[\s\S]/)) {
                return input.replace(/^\[|\]$/g, "");
            }
            return input.replace(/\\/g, "");
        }
        function makeFormatFunction(format) {
            var array = format.match(formattingTokens), i, length;
            for (i = 0, length = array.length; i < length; i++) {
                if (formatTokenFunctions[array[i]]) {
                    array[i] = formatTokenFunctions[array[i]];
                } else {
                    array[i] = removeFormattingTokens(array[i]);
                }
            }
            return function(mom) {
                var output = "", i;
                for (i = 0; i < length; i++) {
                    output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
                }
                return output;
            };
        }
        // format date using native date object
                function formatMoment(m, format) {
            if (!m.isValid()) {
                return m.localeData().invalidDate();
            }
            format = expandFormat(format, m.localeData());
            formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
            return formatFunctions[format](m);
        }
        function expandFormat(format, locale) {
            var i = 5;
            function replaceLongDateFormatTokens(input) {
                return locale.longDateFormat(input) || input;
            }
            localFormattingTokens.lastIndex = 0;
            while (i >= 0 && localFormattingTokens.test(format)) {
                format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
                localFormattingTokens.lastIndex = 0;
                i -= 1;
            }
            return format;
        }
        var defaultLongDateFormat = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        };
        function longDateFormat(key) {
            var format = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
            if (format || !formatUpper) {
                return format;
            }
            this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
                if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
                    return tok.slice(1);
                }
                return tok;
            }).join("");
            return this._longDateFormat[key];
        }
        var defaultInvalidDate = "Invalid date";
        function invalidDate() {
            return this._invalidDate;
        }
        var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
        function ordinal(number) {
            return this._ordinal.replace("%d", number);
        }
        var defaultRelativeTime = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            w: "a week",
            ww: "%d weeks",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        };
        function relativeTime(number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
        }
        function pastFuture(diff, output) {
            var format = this._relativeTime[diff > 0 ? "future" : "past"];
            return isFunction(format) ? format(output) : format.replace(/%s/i, output);
        }
        var aliases = {};
        function addUnitAlias(unit, shorthand) {
            var lowerCase = unit.toLowerCase();
            aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
        }
        function normalizeUnits(units) {
            return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : undefined;
        }
        function normalizeObjectUnits(inputObject) {
            var normalizedInput = {}, normalizedProp, prop;
            for (prop in inputObject) {
                if (hasOwnProp(inputObject, prop)) {
                    normalizedProp = normalizeUnits(prop);
                    if (normalizedProp) {
                        normalizedInput[normalizedProp] = inputObject[prop];
                    }
                }
            }
            return normalizedInput;
        }
        var priorities = {};
        function addUnitPriority(unit, priority) {
            priorities[unit] = priority;
        }
        function getPrioritizedUnits(unitsObj) {
            var units = [], u;
            for (u in unitsObj) {
                if (hasOwnProp(unitsObj, u)) {
                    units.push({
                        unit: u,
                        priority: priorities[u]
                    });
                }
            }
            units.sort(function(a, b) {
                return a.priority - b.priority;
            });
            return units;
        }
        function isLeapYear(year) {
            return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        }
        function absFloor(number) {
            if (number < 0) {
                // -0 -> 0
                return Math.ceil(number) || 0;
            } else {
                return Math.floor(number);
            }
        }
        function toInt(argumentForCoercion) {
            var coercedNumber = +argumentForCoercion, value = 0;
            if (coercedNumber !== 0 && isFinite(coercedNumber)) {
                value = absFloor(coercedNumber);
            }
            return value;
        }
        function makeGetSet(unit, keepTime) {
            return function(value) {
                if (value != null) {
                    set$1(this, unit, value);
                    hooks.updateOffset(this, keepTime);
                    return this;
                } else {
                    return get(this, unit);
                }
            };
        }
        function get(mom, unit) {
            return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
        }
        function set$1(mom, unit, value) {
            if (mom.isValid() && !isNaN(value)) {
                if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                    value = toInt(value);
                    mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value, mom.month(), daysInMonth(value, mom.month()));
                } else {
                    mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
                }
            }
        }
        // MOMENTS
                function stringGet(units) {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units]();
            }
            return this;
        }
        function stringSet(units, value) {
            if (typeof units === "object") {
                units = normalizeObjectUnits(units);
                var prioritized = getPrioritizedUnits(units), i;
                for (i = 0; i < prioritized.length; i++) {
                    this[prioritized[i].unit](units[prioritized[i].unit]);
                }
            } else {
                units = normalizeUnits(units);
                if (isFunction(this[units])) {
                    return this[units](value);
                }
            }
            return this;
        }
        var match1 = /\d/, //       0 - 9
        match2 = /\d\d/, //      00 - 99
        match3 = /\d{3}/, //     000 - 999
        match4 = /\d{4}/, //    0000 - 9999
        match6 = /[+-]?\d{6}/, // -999999 - 999999
        match1to2 = /\d\d?/, //       0 - 99
        match3to4 = /\d\d\d\d?/, //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
        match1to3 = /\d{1,3}/, //       0 - 999
        match1to4 = /\d{1,4}/, //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
        matchUnsigned = /\d+/, //       0 - inf
        matchSigned = /[+-]?\d+/, //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
        regexes = {};
        function addRegexToken(token, regex, strictRegex) {
            regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
                return isStrict && strictRegex ? strictRegex : regex;
            };
        }
        function getParseRegexForToken(token, config) {
            if (!hasOwnProp(regexes, token)) {
                return new RegExp(unescapeFormat(token));
            }
            return regexes[token](config._strict, config._locale);
        }
        // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
                function unescapeFormat(s) {
            return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
                return p1 || p2 || p3 || p4;
            }));
        }
        function regexEscape(s) {
            return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        var tokens = {};
        function addParseToken(token, callback) {
            var i, func = callback;
            if (typeof token === "string") {
                token = [ token ];
            }
            if (isNumber(callback)) {
                func = function(input, array) {
                    array[callback] = toInt(input);
                };
            }
            for (i = 0; i < token.length; i++) {
                tokens[token[i]] = func;
            }
        }
        function addWeekParseToken(token, callback) {
            addParseToken(token, function(input, array, config, token) {
                config._w = config._w || {};
                callback(input, config._w, config, token);
            });
        }
        function addTimeToArrayFromToken(token, input, config) {
            if (input != null && hasOwnProp(tokens, token)) {
                tokens[token](input, config._a, config, token);
            }
        }
        var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
        function mod(n, x) {
            return (n % x + x) % x;
        }
        var indexOf;
        if (Array.prototype.indexOf) {
            indexOf = Array.prototype.indexOf;
        } else {
            indexOf = function(o) {
                // I know
                var i;
                for (i = 0; i < this.length; ++i) {
                    if (this[i] === o) {
                        return i;
                    }
                }
                return -1;
            };
        }
        function daysInMonth(year, month) {
            if (isNaN(year) || isNaN(month)) {
                return NaN;
            }
            var modMonth = mod(month, 12);
            year += (month - modMonth) / 12;
            return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
        }
        // FORMATTING
                addFormatToken("M", [ "MM", 2 ], "Mo", function() {
            return this.month() + 1;
        });
        addFormatToken("MMM", 0, 0, function(format) {
            return this.localeData().monthsShort(this, format);
        });
        addFormatToken("MMMM", 0, 0, function(format) {
            return this.localeData().months(this, format);
        });
        // ALIASES
                addUnitAlias("month", "M");
        // PRIORITY
                addUnitPriority("month", 8);
        // PARSING
                addRegexToken("M", match1to2);
        addRegexToken("MM", match1to2, match2);
        addRegexToken("MMM", function(isStrict, locale) {
            return locale.monthsShortRegex(isStrict);
        });
        addRegexToken("MMMM", function(isStrict, locale) {
            return locale.monthsRegex(isStrict);
        });
        addParseToken([ "M", "MM" ], function(input, array) {
            array[MONTH] = toInt(input) - 1;
        });
        addParseToken([ "MMM", "MMMM" ], function(input, array, config, token) {
            var month = config._locale.monthsParse(input, token, config._strict);
            // if we didn't find a month name, mark the date as invalid.
                        if (month != null) {
                array[MONTH] = month;
            } else {
                getParsingFlags(config).invalidMonth = input;
            }
        });
        // LOCALES
                var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
        function localeMonths(m, format) {
            if (!m) {
                return isArray(this._months) ? this._months : this._months["standalone"];
            }
            return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? "format" : "standalone"][m.month()];
        }
        function localeMonthsShort(m, format) {
            if (!m) {
                return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
            }
            return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? "format" : "standalone"][m.month()];
        }
        function handleStrictParse(monthName, format, strict) {
            var i, ii, mom, llc = monthName.toLocaleLowerCase();
            if (!this._monthsParse) {
                // this is not used
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
                for (i = 0; i < 12; ++i) {
                    mom = createUTC([ 2e3, i ]);
                    this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
                    this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
                }
            }
            if (strict) {
                if (format === "MMM") {
                    ii = indexOf.call(this._shortMonthsParse, llc);
                    return ii !== -1 ? ii : null;
                } else {
                    ii = indexOf.call(this._longMonthsParse, llc);
                    return ii !== -1 ? ii : null;
                }
            } else {
                if (format === "MMM") {
                    ii = indexOf.call(this._shortMonthsParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._longMonthsParse, llc);
                    return ii !== -1 ? ii : null;
                } else {
                    ii = indexOf.call(this._longMonthsParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._shortMonthsParse, llc);
                    return ii !== -1 ? ii : null;
                }
            }
        }
        function localeMonthsParse(monthName, format, strict) {
            var i, mom, regex;
            if (this._monthsParseExact) {
                return handleStrictParse.call(this, monthName, format, strict);
            }
            if (!this._monthsParse) {
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
            }
            // TODO: add sorting
            // Sorting makes sure if one month (or abbr) is a prefix of another
            // see sorting in computeMonthsParse
                        for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                mom = createUTC([ 2e3, i ]);
                if (strict && !this._longMonthsParse[i]) {
                    this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
                    this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
                }
                if (!strict && !this._monthsParse[i]) {
                    regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
                    this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
                }
                // test the regex
                                if (strict && format === "MMMM" && this._longMonthsParse[i].test(monthName)) {
                    return i;
                } else if (strict && format === "MMM" && this._shortMonthsParse[i].test(monthName)) {
                    return i;
                } else if (!strict && this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        }
        // MOMENTS
                function setMonth(mom, value) {
            var dayOfMonth;
            if (!mom.isValid()) {
                // No op
                return mom;
            }
            if (typeof value === "string") {
                if (/^\d+$/.test(value)) {
                    value = toInt(value);
                } else {
                    value = mom.localeData().monthsParse(value);
                    // TODO: Another silent failure?
                                        if (!isNumber(value)) {
                        return mom;
                    }
                }
            }
            dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
            mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
            return mom;
        }
        function getSetMonth(value) {
            if (value != null) {
                setMonth(this, value);
                hooks.updateOffset(this, true);
                return this;
            } else {
                return get(this, "Month");
            }
        }
        function getDaysInMonth() {
            return daysInMonth(this.year(), this.month());
        }
        function monthsShortRegex(isStrict) {
            if (this._monthsParseExact) {
                if (!hasOwnProp(this, "_monthsRegex")) {
                    computeMonthsParse.call(this);
                }
                if (isStrict) {
                    return this._monthsShortStrictRegex;
                } else {
                    return this._monthsShortRegex;
                }
            } else {
                if (!hasOwnProp(this, "_monthsShortRegex")) {
                    this._monthsShortRegex = defaultMonthsShortRegex;
                }
                return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
            }
        }
        function monthsRegex(isStrict) {
            if (this._monthsParseExact) {
                if (!hasOwnProp(this, "_monthsRegex")) {
                    computeMonthsParse.call(this);
                }
                if (isStrict) {
                    return this._monthsStrictRegex;
                } else {
                    return this._monthsRegex;
                }
            } else {
                if (!hasOwnProp(this, "_monthsRegex")) {
                    this._monthsRegex = defaultMonthsRegex;
                }
                return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
            }
        }
        function computeMonthsParse() {
            function cmpLenRev(a, b) {
                return b.length - a.length;
            }
            var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                mom = createUTC([ 2e3, i ]);
                shortPieces.push(this.monthsShort(mom, ""));
                longPieces.push(this.months(mom, ""));
                mixedPieces.push(this.months(mom, ""));
                mixedPieces.push(this.monthsShort(mom, ""));
            }
            // Sorting makes sure if one month (or abbr) is a prefix of another it
            // will match the longer piece.
                        shortPieces.sort(cmpLenRev);
            longPieces.sort(cmpLenRev);
            mixedPieces.sort(cmpLenRev);
            for (i = 0; i < 12; i++) {
                shortPieces[i] = regexEscape(shortPieces[i]);
                longPieces[i] = regexEscape(longPieces[i]);
            }
            for (i = 0; i < 24; i++) {
                mixedPieces[i] = regexEscape(mixedPieces[i]);
            }
            this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
            this._monthsShortRegex = this._monthsRegex;
            this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
            this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
        }
        // FORMATTING
                addFormatToken("Y", 0, 0, function() {
            var y = this.year();
            return y <= 9999 ? zeroFill(y, 4) : "+" + y;
        });
        addFormatToken(0, [ "YY", 2 ], 0, function() {
            return this.year() % 100;
        });
        addFormatToken(0, [ "YYYY", 4 ], 0, "year");
        addFormatToken(0, [ "YYYYY", 5 ], 0, "year");
        addFormatToken(0, [ "YYYYYY", 6, true ], 0, "year");
        // ALIASES
                addUnitAlias("year", "y");
        // PRIORITIES
                addUnitPriority("year", 1);
        // PARSING
                addRegexToken("Y", matchSigned);
        addRegexToken("YY", match1to2, match2);
        addRegexToken("YYYY", match1to4, match4);
        addRegexToken("YYYYY", match1to6, match6);
        addRegexToken("YYYYYY", match1to6, match6);
        addParseToken([ "YYYYY", "YYYYYY" ], YEAR);
        addParseToken("YYYY", function(input, array) {
            array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
        });
        addParseToken("YY", function(input, array) {
            array[YEAR] = hooks.parseTwoDigitYear(input);
        });
        addParseToken("Y", function(input, array) {
            array[YEAR] = parseInt(input, 10);
        });
        // HELPERS
                function daysInYear(year) {
            return isLeapYear(year) ? 366 : 365;
        }
        // HOOKS
                hooks.parseTwoDigitYear = function(input) {
            return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
        };
        // MOMENTS
                var getSetYear = makeGetSet("FullYear", true);
        function getIsLeapYear() {
            return isLeapYear(this.year());
        }
        function createDate(y, m, d, h, M, s, ms) {
            // can't just apply() to create a date:
            // https://stackoverflow.com/q/181348
            var date;
            // the date constructor remaps years 0-99 to 1900-1999
                        if (y < 100 && y >= 0) {
                // preserve leap years using a full 400 year cycle, then reset
                date = new Date(y + 400, m, d, h, M, s, ms);
                if (isFinite(date.getFullYear())) {
                    date.setFullYear(y);
                }
            } else {
                date = new Date(y, m, d, h, M, s, ms);
            }
            return date;
        }
        function createUTCDate(y) {
            var date, args;
            // the Date.UTC function remaps years 0-99 to 1900-1999
                        if (y < 100 && y >= 0) {
                args = Array.prototype.slice.call(arguments);
                // preserve leap years using a full 400 year cycle, then reset
                                args[0] = y + 400;
                date = new Date(Date.UTC.apply(null, args));
                if (isFinite(date.getUTCFullYear())) {
                    date.setUTCFullYear(y);
                }
            } else {
                date = new Date(Date.UTC.apply(null, arguments));
            }
            return date;
        }
        // start-of-first-week - start-of-year
                function firstWeekOffset(year, dow, doy) {
            var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy, 
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
            return -fwdlw + fwd - 1;
        }
        // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
                function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
            var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
            if (dayOfYear <= 0) {
                resYear = year - 1;
                resDayOfYear = daysInYear(resYear) + dayOfYear;
            } else if (dayOfYear > daysInYear(year)) {
                resYear = year + 1;
                resDayOfYear = dayOfYear - daysInYear(year);
            } else {
                resYear = year;
                resDayOfYear = dayOfYear;
            }
            return {
                year: resYear,
                dayOfYear: resDayOfYear
            };
        }
        function weekOfYear(mom, dow, doy) {
            var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
            if (week < 1) {
                resYear = mom.year() - 1;
                resWeek = week + weeksInYear(resYear, dow, doy);
            } else if (week > weeksInYear(mom.year(), dow, doy)) {
                resWeek = week - weeksInYear(mom.year(), dow, doy);
                resYear = mom.year() + 1;
            } else {
                resYear = mom.year();
                resWeek = week;
            }
            return {
                week: resWeek,
                year: resYear
            };
        }
        function weeksInYear(year, dow, doy) {
            var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
            return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
        }
        // FORMATTING
                addFormatToken("w", [ "ww", 2 ], "wo", "week");
        addFormatToken("W", [ "WW", 2 ], "Wo", "isoWeek");
        // ALIASES
                addUnitAlias("week", "w");
        addUnitAlias("isoWeek", "W");
        // PRIORITIES
                addUnitPriority("week", 5);
        addUnitPriority("isoWeek", 5);
        // PARSING
                addRegexToken("w", match1to2);
        addRegexToken("ww", match1to2, match2);
        addRegexToken("W", match1to2);
        addRegexToken("WW", match1to2, match2);
        addWeekParseToken([ "w", "ww", "W", "WW" ], function(input, week, config, token) {
            week[token.substr(0, 1)] = toInt(input);
        });
        // HELPERS
        // LOCALES
                function localeWeek(mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        }
        var defaultLocaleWeek = {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6
        };
        function localeFirstDayOfWeek() {
            return this._week.dow;
        }
        function localeFirstDayOfYear() {
            return this._week.doy;
        }
        // MOMENTS
                function getSetWeek(input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, "d");
        }
        function getSetISOWeek(input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, "d");
        }
        // FORMATTING
                addFormatToken("d", 0, "do", "day");
        addFormatToken("dd", 0, 0, function(format) {
            return this.localeData().weekdaysMin(this, format);
        });
        addFormatToken("ddd", 0, 0, function(format) {
            return this.localeData().weekdaysShort(this, format);
        });
        addFormatToken("dddd", 0, 0, function(format) {
            return this.localeData().weekdays(this, format);
        });
        addFormatToken("e", 0, 0, "weekday");
        addFormatToken("E", 0, 0, "isoWeekday");
        // ALIASES
                addUnitAlias("day", "d");
        addUnitAlias("weekday", "e");
        addUnitAlias("isoWeekday", "E");
        // PRIORITY
                addUnitPriority("day", 11);
        addUnitPriority("weekday", 11);
        addUnitPriority("isoWeekday", 11);
        // PARSING
                addRegexToken("d", match1to2);
        addRegexToken("e", match1to2);
        addRegexToken("E", match1to2);
        addRegexToken("dd", function(isStrict, locale) {
            return locale.weekdaysMinRegex(isStrict);
        });
        addRegexToken("ddd", function(isStrict, locale) {
            return locale.weekdaysShortRegex(isStrict);
        });
        addRegexToken("dddd", function(isStrict, locale) {
            return locale.weekdaysRegex(isStrict);
        });
        addWeekParseToken([ "dd", "ddd", "dddd" ], function(input, week, config, token) {
            var weekday = config._locale.weekdaysParse(input, token, config._strict);
            // if we didn't get a weekday name, mark the date as invalid
                        if (weekday != null) {
                week.d = weekday;
            } else {
                getParsingFlags(config).invalidWeekday = input;
            }
        });
        addWeekParseToken([ "d", "e", "E" ], function(input, week, config, token) {
            week[token] = toInt(input);
        });
        // HELPERS
                function parseWeekday(input, locale) {
            if (typeof input !== "string") {
                return input;
            }
            if (!isNaN(input)) {
                return parseInt(input, 10);
            }
            input = locale.weekdaysParse(input);
            if (typeof input === "number") {
                return input;
            }
            return null;
        }
        function parseIsoWeekday(input, locale) {
            if (typeof input === "string") {
                return locale.weekdaysParse(input) % 7 || 7;
            }
            return isNaN(input) ? null : input;
        }
        // LOCALES
                function shiftWeekdays(ws, n) {
            return ws.slice(n, 7).concat(ws.slice(0, n));
        }
        var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
        function localeWeekdays(m, format) {
            var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? "format" : "standalone"];
            return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
        }
        function localeWeekdaysShort(m) {
            return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
        }
        function localeWeekdaysMin(m) {
            return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
        }
        function handleStrictParse$1(weekdayName, format, strict) {
            var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
                this._shortWeekdaysParse = [];
                this._minWeekdaysParse = [];
                for (i = 0; i < 7; ++i) {
                    mom = createUTC([ 2e3, 1 ]).day(i);
                    this._minWeekdaysParse[i] = this.weekdaysMin(mom, "").toLocaleLowerCase();
                    this._shortWeekdaysParse[i] = this.weekdaysShort(mom, "").toLocaleLowerCase();
                    this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
                }
            }
            if (strict) {
                if (format === "dddd") {
                    ii = indexOf.call(this._weekdaysParse, llc);
                    return ii !== -1 ? ii : null;
                } else if (format === "ddd") {
                    ii = indexOf.call(this._shortWeekdaysParse, llc);
                    return ii !== -1 ? ii : null;
                } else {
                    ii = indexOf.call(this._minWeekdaysParse, llc);
                    return ii !== -1 ? ii : null;
                }
            } else {
                if (format === "dddd") {
                    ii = indexOf.call(this._weekdaysParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._shortWeekdaysParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._minWeekdaysParse, llc);
                    return ii !== -1 ? ii : null;
                } else if (format === "ddd") {
                    ii = indexOf.call(this._shortWeekdaysParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._weekdaysParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._minWeekdaysParse, llc);
                    return ii !== -1 ? ii : null;
                } else {
                    ii = indexOf.call(this._minWeekdaysParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._weekdaysParse, llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = indexOf.call(this._shortWeekdaysParse, llc);
                    return ii !== -1 ? ii : null;
                }
            }
        }
        function localeWeekdaysParse(weekdayName, format, strict) {
            var i, mom, regex;
            if (this._weekdaysParseExact) {
                return handleStrictParse$1.call(this, weekdayName, format, strict);
            }
            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
                this._minWeekdaysParse = [];
                this._shortWeekdaysParse = [];
                this._fullWeekdaysParse = [];
            }
            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                mom = createUTC([ 2e3, 1 ]).day(i);
                if (strict && !this._fullWeekdaysParse[i]) {
                    this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i");
                    this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i");
                    this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i");
                }
                if (!this._weekdaysParse[i]) {
                    regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
                    this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
                }
                // test the regex
                                if (strict && format === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
                    return i;
                } else if (strict && format === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
                    return i;
                } else if (strict && format === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
                    return i;
                } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        }
        // MOMENTS
                function getSetDayOfWeek(input) {
            if (!this.isValid()) {
                return input != null ? this : NaN;
            }
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, "d");
            } else {
                return day;
            }
        }
        function getSetLocaleDayOfWeek(input) {
            if (!this.isValid()) {
                return input != null ? this : NaN;
            }
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, "d");
        }
        function getSetISODayOfWeek(input) {
            if (!this.isValid()) {
                return input != null ? this : NaN;
            }
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
                        if (input != null) {
                var weekday = parseIsoWeekday(input, this.localeData());
                return this.day(this.day() % 7 ? weekday : weekday - 7);
            } else {
                return this.day() || 7;
            }
        }
        function weekdaysRegex(isStrict) {
            if (this._weekdaysParseExact) {
                if (!hasOwnProp(this, "_weekdaysRegex")) {
                    computeWeekdaysParse.call(this);
                }
                if (isStrict) {
                    return this._weekdaysStrictRegex;
                } else {
                    return this._weekdaysRegex;
                }
            } else {
                if (!hasOwnProp(this, "_weekdaysRegex")) {
                    this._weekdaysRegex = defaultWeekdaysRegex;
                }
                return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
            }
        }
        function weekdaysShortRegex(isStrict) {
            if (this._weekdaysParseExact) {
                if (!hasOwnProp(this, "_weekdaysRegex")) {
                    computeWeekdaysParse.call(this);
                }
                if (isStrict) {
                    return this._weekdaysShortStrictRegex;
                } else {
                    return this._weekdaysShortRegex;
                }
            } else {
                if (!hasOwnProp(this, "_weekdaysShortRegex")) {
                    this._weekdaysShortRegex = defaultWeekdaysShortRegex;
                }
                return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
            }
        }
        function weekdaysMinRegex(isStrict) {
            if (this._weekdaysParseExact) {
                if (!hasOwnProp(this, "_weekdaysRegex")) {
                    computeWeekdaysParse.call(this);
                }
                if (isStrict) {
                    return this._weekdaysMinStrictRegex;
                } else {
                    return this._weekdaysMinRegex;
                }
            } else {
                if (!hasOwnProp(this, "_weekdaysMinRegex")) {
                    this._weekdaysMinRegex = defaultWeekdaysMinRegex;
                }
                return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
            }
        }
        function computeWeekdaysParse() {
            function cmpLenRev(a, b) {
                return b.length - a.length;
            }
            var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                mom = createUTC([ 2e3, 1 ]).day(i);
                minp = regexEscape(this.weekdaysMin(mom, ""));
                shortp = regexEscape(this.weekdaysShort(mom, ""));
                longp = regexEscape(this.weekdays(mom, ""));
                minPieces.push(minp);
                shortPieces.push(shortp);
                longPieces.push(longp);
                mixedPieces.push(minp);
                mixedPieces.push(shortp);
                mixedPieces.push(longp);
            }
            // Sorting makes sure if one weekday (or abbr) is a prefix of another it
            // will match the longer piece.
                        minPieces.sort(cmpLenRev);
            shortPieces.sort(cmpLenRev);
            longPieces.sort(cmpLenRev);
            mixedPieces.sort(cmpLenRev);
            this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
            this._weekdaysShortRegex = this._weekdaysRegex;
            this._weekdaysMinRegex = this._weekdaysRegex;
            this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
            this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
            this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i");
        }
        // FORMATTING
                function hFormat() {
            return this.hours() % 12 || 12;
        }
        function kFormat() {
            return this.hours() || 24;
        }
        addFormatToken("H", [ "HH", 2 ], 0, "hour");
        addFormatToken("h", [ "hh", 2 ], 0, hFormat);
        addFormatToken("k", [ "kk", 2 ], 0, kFormat);
        addFormatToken("hmm", 0, 0, function() {
            return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
        });
        addFormatToken("hmmss", 0, 0, function() {
            return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        addFormatToken("Hmm", 0, 0, function() {
            return "" + this.hours() + zeroFill(this.minutes(), 2);
        });
        addFormatToken("Hmmss", 0, 0, function() {
            return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        function meridiem(token, lowercase) {
            addFormatToken(token, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
            });
        }
        meridiem("a", true);
        meridiem("A", false);
        // ALIASES
                addUnitAlias("hour", "h");
        // PRIORITY
                addUnitPriority("hour", 13);
        // PARSING
                function matchMeridiem(isStrict, locale) {
            return locale._meridiemParse;
        }
        addRegexToken("a", matchMeridiem);
        addRegexToken("A", matchMeridiem);
        addRegexToken("H", match1to2);
        addRegexToken("h", match1to2);
        addRegexToken("k", match1to2);
        addRegexToken("HH", match1to2, match2);
        addRegexToken("hh", match1to2, match2);
        addRegexToken("kk", match1to2, match2);
        addRegexToken("hmm", match3to4);
        addRegexToken("hmmss", match5to6);
        addRegexToken("Hmm", match3to4);
        addRegexToken("Hmmss", match5to6);
        addParseToken([ "H", "HH" ], HOUR);
        addParseToken([ "k", "kk" ], function(input, array, config) {
            var kInput = toInt(input);
            array[HOUR] = kInput === 24 ? 0 : kInput;
        });
        addParseToken([ "a", "A" ], function(input, array, config) {
            config._isPm = config._locale.isPM(input);
            config._meridiem = input;
        });
        addParseToken([ "h", "hh" ], function(input, array, config) {
            array[HOUR] = toInt(input);
            getParsingFlags(config).bigHour = true;
        });
        addParseToken("hmm", function(input, array, config) {
            var pos = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos));
            array[MINUTE] = toInt(input.substr(pos));
            getParsingFlags(config).bigHour = true;
        });
        addParseToken("hmmss", function(input, array, config) {
            var pos1 = input.length - 4, pos2 = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos1));
            array[MINUTE] = toInt(input.substr(pos1, 2));
            array[SECOND] = toInt(input.substr(pos2));
            getParsingFlags(config).bigHour = true;
        });
        addParseToken("Hmm", function(input, array, config) {
            var pos = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos));
            array[MINUTE] = toInt(input.substr(pos));
        });
        addParseToken("Hmmss", function(input, array, config) {
            var pos1 = input.length - 4, pos2 = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos1));
            array[MINUTE] = toInt(input.substr(pos1, 2));
            array[SECOND] = toInt(input.substr(pos2));
        });
        // LOCALES
                function localeIsPM(input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return (input + "").toLowerCase().charAt(0) === "p";
        }
        var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, 
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet("Hours", true);
        function localeMeridiem(hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? "pm" : "PM";
            } else {
                return isLower ? "am" : "AM";
            }
        }
        var baseConfig = {
            calendar: defaultCalendar,
            longDateFormat: defaultLongDateFormat,
            invalidDate: defaultInvalidDate,
            ordinal: defaultOrdinal,
            dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
            relativeTime: defaultRelativeTime,
            months: defaultLocaleMonths,
            monthsShort: defaultLocaleMonthsShort,
            week: defaultLocaleWeek,
            weekdays: defaultLocaleWeekdays,
            weekdaysMin: defaultLocaleWeekdaysMin,
            weekdaysShort: defaultLocaleWeekdaysShort,
            meridiemParse: defaultLocaleMeridiemParse
        };
        // internal storage for locale config files
                var locales = {}, localeFamilies = {}, globalLocale;
        function commonPrefix(arr1, arr2) {
            var i, minl = Math.min(arr1.length, arr2.length);
            for (i = 0; i < minl; i += 1) {
                if (arr1[i] !== arr2[i]) {
                    return i;
                }
            }
            return minl;
        }
        function normalizeLocale(key) {
            return key ? key.toLowerCase().replace("_", "-") : key;
        }
        // pick the locale from the array
        // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
        // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
                function chooseLocale(names) {
            var i = 0, j, next, locale, split;
            while (i < names.length) {
                split = normalizeLocale(names[i]).split("-");
                j = split.length;
                next = normalizeLocale(names[i + 1]);
                next = next ? next.split("-") : null;
                while (j > 0) {
                    locale = loadLocale(split.slice(0, j).join("-"));
                    if (locale) {
                        return locale;
                    }
                    if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
                        //the next array item is better than a shallower substring of this one
                        break;
                    }
                    j--;
                }
                i++;
            }
            return globalLocale;
        }
        function loadLocale(name) {
            var oldLocale = null, aliasedRequire;
            // TODO: Find a better way to register and load all the locales in Node
                        if (locales[name] === undefined && typeof module !== "undefined" && module && module.exports) {
                try {
                    oldLocale = globalLocale._abbr;
                    aliasedRequire = require;
                    aliasedRequire("./locale/" + name);
                    getSetGlobalLocale(oldLocale);
                } catch (e) {
                    // mark as not found to avoid repeating expensive file require call causing high CPU
                    // when trying to find en-US, en_US, en-us for every format call
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    locales[name] = null;
                    // null means not found
                                }
            }
            return locales[name];
        }
        // This function will load locale and then set the global locale.  If
        // no arguments are passed in, it will simply return the current global
        // locale key.
                function getSetGlobalLocale(key, values) {
            var data;
            if (key) {
                if (isUndefined(values)) {
                    data = getLocale(key);
                } else {
                    data = defineLocale(key, values);
                }
                if (data) {
                    // moment.duration._locale = moment._locale = data;
                    globalLocale = data;
                } else {
                    if (typeof console !== "undefined" && console.warn) {
                        //warn user if arguments are passed but the locale could not be set
                        console.warn("Locale " + key + " not found. Did you forget to load it?");
                    }
                }
            }
            return globalLocale._abbr;
        }
        function defineLocale(name, config) {
            if (config !== null) {
                var locale, parentConfig = baseConfig;
                config.abbr = name;
                if (locales[name] != null) {
                    deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change " + "an existing locale. moment.defineLocale(localeName, " + "config) should only be used for creating a new locale " + "See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                    parentConfig = locales[name]._config;
                } else if (config.parentLocale != null) {
                    if (locales[config.parentLocale] != null) {
                        parentConfig = locales[config.parentLocale]._config;
                    } else {
                        locale = loadLocale(config.parentLocale);
                        if (locale != null) {
                            parentConfig = locale._config;
                        } else {
                            if (!localeFamilies[config.parentLocale]) {
                                localeFamilies[config.parentLocale] = [];
                            }
                            localeFamilies[config.parentLocale].push({
                                name: name,
                                config: config
                            });
                            return null;
                        }
                    }
                }
                locales[name] = new Locale(mergeConfigs(parentConfig, config));
                if (localeFamilies[name]) {
                    localeFamilies[name].forEach(function(x) {
                        defineLocale(x.name, x.config);
                    });
                }
                // backwards compat for now: also set the locale
                // make sure we set the locale AFTER all child locales have been
                // created, so we won't end up with the child locale set.
                                getSetGlobalLocale(name);
                return locales[name];
            } else {
                // useful for testing
                delete locales[name];
                return null;
            }
        }
        function updateLocale(name, config) {
            if (config != null) {
                var locale, tmpLocale, parentConfig = baseConfig;
                if (locales[name] != null && locales[name].parentLocale != null) {
                    // Update existing child locale in-place to avoid memory-leaks
                    locales[name].set(mergeConfigs(locales[name]._config, config));
                } else {
                    // MERGE
                    tmpLocale = loadLocale(name);
                    if (tmpLocale != null) {
                        parentConfig = tmpLocale._config;
                    }
                    config = mergeConfigs(parentConfig, config);
                    if (tmpLocale == null) {
                        // updateLocale is called for creating a new locale
                        // Set abbr so it will have a name (getters return
                        // undefined otherwise).
                        config.abbr = name;
                    }
                    locale = new Locale(config);
                    locale.parentLocale = locales[name];
                    locales[name] = locale;
                }
                // backwards compat for now: also set the locale
                                getSetGlobalLocale(name);
            } else {
                // pass null for config to unupdate, useful for tests
                if (locales[name] != null) {
                    if (locales[name].parentLocale != null) {
                        locales[name] = locales[name].parentLocale;
                        if (name === getSetGlobalLocale()) {
                            getSetGlobalLocale(name);
                        }
                    } else if (locales[name] != null) {
                        delete locales[name];
                    }
                }
            }
            return locales[name];
        }
        // returns locale data
                function getLocale(key) {
            var locale;
            if (key && key._locale && key._locale._abbr) {
                key = key._locale._abbr;
            }
            if (!key) {
                return globalLocale;
            }
            if (!isArray(key)) {
                //short-circuit everything else
                locale = loadLocale(key);
                if (locale) {
                    return locale;
                }
                key = [ key ];
            }
            return chooseLocale(key);
        }
        function listLocales() {
            return keys(locales);
        }
        function checkOverflow(m) {
            var overflow, a = m._a;
            if (a && getParsingFlags(m).overflow === -2) {
                overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
                if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                    overflow = DATE;
                }
                if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                    overflow = WEEK;
                }
                if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                    overflow = WEEKDAY;
                }
                getParsingFlags(m).overflow = overflow;
            }
            return m;
        }
        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
                var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, false ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, false ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, false ], [ "YYYYDDD", /\d{7}/ ], [ "YYYYMM", /\d{6}/, false ], [ "YYYY", /\d{4}/, false ] ], 
        // iso time formats and regexes
        isoTimes = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, 
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60
        };
        // date from iso format
                function configFromISO(config) {
            var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
            if (match) {
                getParsingFlags(config).iso = true;
                for (i = 0, l = isoDates.length; i < l; i++) {
                    if (isoDates[i][1].exec(match[1])) {
                        dateFormat = isoDates[i][0];
                        allowTime = isoDates[i][2] !== false;
                        break;
                    }
                }
                if (dateFormat == null) {
                    config._isValid = false;
                    return;
                }
                if (match[3]) {
                    for (i = 0, l = isoTimes.length; i < l; i++) {
                        if (isoTimes[i][1].exec(match[3])) {
                            // match[2] should be 'T' or space
                            timeFormat = (match[2] || " ") + isoTimes[i][0];
                            break;
                        }
                    }
                    if (timeFormat == null) {
                        config._isValid = false;
                        return;
                    }
                }
                if (!allowTime && timeFormat != null) {
                    config._isValid = false;
                    return;
                }
                if (match[4]) {
                    if (tzRegex.exec(match[4])) {
                        tzFormat = "Z";
                    } else {
                        config._isValid = false;
                        return;
                    }
                }
                config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
                configFromStringAndFormat(config);
            } else {
                config._isValid = false;
            }
        }
        function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
            var result = [ untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10) ];
            if (secondStr) {
                result.push(parseInt(secondStr, 10));
            }
            return result;
        }
        function untruncateYear(yearStr) {
            var year = parseInt(yearStr, 10);
            if (year <= 49) {
                return 2e3 + year;
            } else if (year <= 999) {
                return 1900 + year;
            }
            return year;
        }
        function preprocessRFC2822(s) {
            // Remove comments and folding whitespace and replace multiple-spaces with a single space
            return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        }
        function checkWeekday(weekdayStr, parsedInput, config) {
            if (weekdayStr) {
                // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
                var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
                if (weekdayProvided !== weekdayActual) {
                    getParsingFlags(config).weekdayMismatch = true;
                    config._isValid = false;
                    return false;
                }
            }
            return true;
        }
        function calculateOffset(obsOffset, militaryOffset, numOffset) {
            if (obsOffset) {
                return obsOffsets[obsOffset];
            } else if (militaryOffset) {
                // the only allowed military tz is Z
                return 0;
            } else {
                var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
                return h * 60 + m;
            }
        }
        // date and time from ref 2822 format
                function configFromRFC2822(config) {
            var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
            if (match) {
                parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
                if (!checkWeekday(match[1], parsedArray, config)) {
                    return;
                }
                config._a = parsedArray;
                config._tzm = calculateOffset(match[8], match[9], match[10]);
                config._d = createUTCDate.apply(null, config._a);
                config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
                getParsingFlags(config).rfc2822 = true;
            } else {
                config._isValid = false;
            }
        }
        // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
                function configFromString(config) {
            var matched = aspNetJsonRegex.exec(config._i);
            if (matched !== null) {
                config._d = new Date(+matched[1]);
                return;
            }
            configFromISO(config);
            if (config._isValid === false) {
                delete config._isValid;
            } else {
                return;
            }
            configFromRFC2822(config);
            if (config._isValid === false) {
                delete config._isValid;
            } else {
                return;
            }
            if (config._strict) {
                config._isValid = false;
            } else {
                // Final attempt, use Input Fallback
                hooks.createFromInputFallback(config);
            }
        }
        hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), " + "which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are " + "discouraged and will be removed in an upcoming major release. Please refer to " + "http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
            config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
        });
        // Pick the first defined of two or three arguments.
                function defaults(a, b, c) {
            if (a != null) {
                return a;
            }
            if (b != null) {
                return b;
            }
            return c;
        }
        function currentDateArray(config) {
            // hooks is actually the exported moment object
            var nowValue = new Date(hooks.now());
            if (config._useUTC) {
                return [ nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate() ];
            }
            return [ nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate() ];
        }
        // convert an array to a date.
        // the array should mirror the parameters below
        // note: all values past the year are optional and will default to the lowest possible value.
        // [year, month, day , hour, minute, second, millisecond]
                function configFromArray(config) {
            var i, date, input = [], currentDate, expectedWeekday, yearToUse;
            if (config._d) {
                return;
            }
            currentDate = currentDateArray(config);
            //compute day of the year from weeks and weekdays
                        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
                dayOfYearFromWeekInfo(config);
            }
            //if the day of the year is set, figure out what it is
                        if (config._dayOfYear != null) {
                yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
                if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                    getParsingFlags(config)._overflowDayOfYear = true;
                }
                date = createUTCDate(yearToUse, 0, config._dayOfYear);
                config._a[MONTH] = date.getUTCMonth();
                config._a[DATE] = date.getUTCDate();
            }
            // Default to current date.
            // * if no year, month, day of month are given, default to today
            // * if day of month is given, default month and year
            // * if month is given, default only year
            // * if year is given, don't default anything
                        for (i = 0; i < 3 && config._a[i] == null; ++i) {
                config._a[i] = input[i] = currentDate[i];
            }
            // Zero out whatever was not defaulted, including time
                        for (;i < 7; i++) {
                config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
            }
            // Check for 24:00:00.000
                        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
                config._nextDay = true;
                config._a[HOUR] = 0;
            }
            config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
            expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
            // Apply timezone offset from input. The actual utcOffset can be changed
            // with parseZone.
                        if (config._tzm != null) {
                config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            }
            if (config._nextDay) {
                config._a[HOUR] = 24;
            }
            // check for mismatching day of week
                        if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
                getParsingFlags(config).weekdayMismatch = true;
            }
        }
        function dayOfYearFromWeekInfo(config) {
            var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
            w = config._w;
            if (w.GG != null || w.W != null || w.E != null) {
                dow = 1;
                doy = 4;
                // TODO: We need to take the current isoWeekYear, but that depends on
                // how we interpret now (local, utc, fixed offset). So create
                // a now version of current config (take local/utc/offset flags, and
                // create now).
                                weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
                week = defaults(w.W, 1);
                weekday = defaults(w.E, 1);
                if (weekday < 1 || weekday > 7) {
                    weekdayOverflow = true;
                }
            } else {
                dow = config._locale._week.dow;
                doy = config._locale._week.doy;
                curWeek = weekOfYear(createLocal(), dow, doy);
                weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
                // Default to current week.
                                week = defaults(w.w, curWeek.week);
                if (w.d != null) {
                    // weekday -- low day numbers are considered next week
                    weekday = w.d;
                    if (weekday < 0 || weekday > 6) {
                        weekdayOverflow = true;
                    }
                } else if (w.e != null) {
                    // local weekday -- counting starts from beginning of week
                    weekday = w.e + dow;
                    if (w.e < 0 || w.e > 6) {
                        weekdayOverflow = true;
                    }
                } else {
                    // default to beginning of week
                    weekday = dow;
                }
            }
            if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
                getParsingFlags(config)._overflowWeeks = true;
            } else if (weekdayOverflow != null) {
                getParsingFlags(config)._overflowWeekday = true;
            } else {
                temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
                config._a[YEAR] = temp.year;
                config._dayOfYear = temp.dayOfYear;
            }
        }
        // constant that refers to the ISO standard
                hooks.ISO_8601 = function() {};
        // constant that refers to the RFC 2822 form
                hooks.RFC_2822 = function() {};
        // date from string and format string
                function configFromStringAndFormat(config) {
            // TODO: Move this to another part of the creation flow to prevent circular deps
            if (config._f === hooks.ISO_8601) {
                configFromISO(config);
                return;
            }
            if (config._f === hooks.RFC_2822) {
                configFromRFC2822(config);
                return;
            }
            config._a = [];
            getParsingFlags(config).empty = true;
            // This array is used to make a Date, either with `new Date` or `Date.UTC`
                        var string = "" + config._i, i, parsedInput, tokens, token, skipped, stringLength = string.length, totalParsedInputLength = 0, era;
            tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
            for (i = 0; i < tokens.length; i++) {
                token = tokens[i];
                parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
                if (parsedInput) {
                    skipped = string.substr(0, string.indexOf(parsedInput));
                    if (skipped.length > 0) {
                        getParsingFlags(config).unusedInput.push(skipped);
                    }
                    string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                    totalParsedInputLength += parsedInput.length;
                }
                // don't parse if it's not a known token
                                if (formatTokenFunctions[token]) {
                    if (parsedInput) {
                        getParsingFlags(config).empty = false;
                    } else {
                        getParsingFlags(config).unusedTokens.push(token);
                    }
                    addTimeToArrayFromToken(token, parsedInput, config);
                } else if (config._strict && !parsedInput) {
                    getParsingFlags(config).unusedTokens.push(token);
                }
            }
            // add remaining unparsed input length to the string
                        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
            if (string.length > 0) {
                getParsingFlags(config).unusedInput.push(string);
            }
            // clear _12h flag if hour is <= 12
                        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
                getParsingFlags(config).bigHour = undefined;
            }
            getParsingFlags(config).parsedDateParts = config._a.slice(0);
            getParsingFlags(config).meridiem = config._meridiem;
            // handle meridiem
                        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
            // handle era
                        era = getParsingFlags(config).era;
            if (era !== null) {
                config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
            }
            configFromArray(config);
            checkOverflow(config);
        }
        function meridiemFixWrap(locale, hour, meridiem) {
            var isPm;
            if (meridiem == null) {
                // nothing to do
                return hour;
            }
            if (locale.meridiemHour != null) {
                return locale.meridiemHour(hour, meridiem);
            } else if (locale.isPM != null) {
                // Fallback
                isPm = locale.isPM(meridiem);
                if (isPm && hour < 12) {
                    hour += 12;
                }
                if (!isPm && hour === 12) {
                    hour = 0;
                }
                return hour;
            } else {
                // this is not supposed to happen
                return hour;
            }
        }
        // date from string and array of format strings
                function configFromStringAndArray(config) {
            var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false;
            if (config._f.length === 0) {
                getParsingFlags(config).invalidFormat = true;
                config._d = new Date(NaN);
                return;
            }
            for (i = 0; i < config._f.length; i++) {
                currentScore = 0;
                validFormatFound = false;
                tempConfig = copyConfig({}, config);
                if (config._useUTC != null) {
                    tempConfig._useUTC = config._useUTC;
                }
                tempConfig._f = config._f[i];
                configFromStringAndFormat(tempConfig);
                if (isValid(tempConfig)) {
                    validFormatFound = true;
                }
                // if there is any input that was not parsed add a penalty for that format
                                currentScore += getParsingFlags(tempConfig).charsLeftOver;
                //or tokens
                                currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
                getParsingFlags(tempConfig).score = currentScore;
                if (!bestFormatIsValid) {
                    if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
                        scoreToBeat = currentScore;
                        bestMoment = tempConfig;
                        if (validFormatFound) {
                            bestFormatIsValid = true;
                        }
                    }
                } else {
                    if (currentScore < scoreToBeat) {
                        scoreToBeat = currentScore;
                        bestMoment = tempConfig;
                    }
                }
            }
            extend(config, bestMoment || tempConfig);
        }
        function configFromObject(config) {
            if (config._d) {
                return;
            }
            var i = normalizeObjectUnits(config._i), dayOrDate = i.day === undefined ? i.date : i.day;
            config._a = map([ i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond ], function(obj) {
                return obj && parseInt(obj, 10);
            });
            configFromArray(config);
        }
        function createFromConfig(config) {
            var res = new Moment(checkOverflow(prepareConfig(config)));
            if (res._nextDay) {
                // Adding is smart enough around DST
                res.add(1, "d");
                res._nextDay = undefined;
            }
            return res;
        }
        function prepareConfig(config) {
            var input = config._i, format = config._f;
            config._locale = config._locale || getLocale(config._l);
            if (input === null || format === undefined && input === "") {
                return createInvalid({
                    nullInput: true
                });
            }
            if (typeof input === "string") {
                config._i = input = config._locale.preparse(input);
            }
            if (isMoment(input)) {
                return new Moment(checkOverflow(input));
            } else if (isDate(input)) {
                config._d = input;
            } else if (isArray(format)) {
                configFromStringAndArray(config);
            } else if (format) {
                configFromStringAndFormat(config);
            } else {
                configFromInput(config);
            }
            if (!isValid(config)) {
                config._d = null;
            }
            return config;
        }
        function configFromInput(config) {
            var input = config._i;
            if (isUndefined(input)) {
                config._d = new Date(hooks.now());
            } else if (isDate(input)) {
                config._d = new Date(input.valueOf());
            } else if (typeof input === "string") {
                configFromString(config);
            } else if (isArray(input)) {
                config._a = map(input.slice(0), function(obj) {
                    return parseInt(obj, 10);
                });
                configFromArray(config);
            } else if (isObject(input)) {
                configFromObject(config);
            } else if (isNumber(input)) {
                // from milliseconds
                config._d = new Date(input);
            } else {
                hooks.createFromInputFallback(config);
            }
        }
        function createLocalOrUTC(input, format, locale, strict, isUTC) {
            var c = {};
            if (format === true || format === false) {
                strict = format;
                format = undefined;
            }
            if (locale === true || locale === false) {
                strict = locale;
                locale = undefined;
            }
            if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
                input = undefined;
            }
            // object construction must be done this way.
            // https://github.com/moment/moment/issues/1423
                        c._isAMomentObject = true;
            c._useUTC = c._isUTC = isUTC;
            c._l = locale;
            c._i = input;
            c._f = format;
            c._strict = strict;
            return createFromConfig(c);
        }
        function createLocal(input, format, locale, strict) {
            return createLocalOrUTC(input, format, locale, strict, false);
        }
        var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }), prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        });
        // Pick a moment m from moments so that m[fn](other) is true for all
        // other. This relies on the function fn to be transitive.
        //
        // moments should either be an array of moment objects or an array, whose
        // first element is an array of moment objects.
                function pickBy(fn, moments) {
            var res, i;
            if (moments.length === 1 && isArray(moments[0])) {
                moments = moments[0];
            }
            if (!moments.length) {
                return createLocal();
            }
            res = moments[0];
            for (i = 1; i < moments.length; ++i) {
                if (!moments[i].isValid() || moments[i][fn](res)) {
                    res = moments[i];
                }
            }
            return res;
        }
        // TODO: Use [].sort instead?
                function min() {
            var args = [].slice.call(arguments, 0);
            return pickBy("isBefore", args);
        }
        function max() {
            var args = [].slice.call(arguments, 0);
            return pickBy("isAfter", args);
        }
        var now = function() {
            return Date.now ? Date.now() : +new Date();
        };
        var ordering = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
        function isDurationValid(m) {
            var key, unitHasDecimal = false, i;
            for (key in m) {
                if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                    return false;
                }
            }
            for (i = 0; i < ordering.length; ++i) {
                if (m[ordering[i]]) {
                    if (unitHasDecimal) {
                        return false;
                        // only allow non-integers for smallest unit
                                        }
                    if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                        unitHasDecimal = true;
                    }
                }
            }
            return true;
        }
        function isValid$1() {
            return this._isValid;
        }
        function createInvalid$1() {
            return createDuration(NaN);
        }
        function Duration(duration) {
            var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0, weeks = normalizedInput.week || normalizedInput.isoWeek || 0, days = normalizedInput.day || 0, hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0, seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;
            this._isValid = isDurationValid(normalizedInput);
            // representation for dateAddRemove
                        this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1e3 * 60 * 60;
            //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
            // Because of dateAddRemove treats 24 hours as different from a
            // day when working around DST, we need to store them separately
                        this._days = +days + weeks * 7;
            // It is impossible to translate months into days without knowing
            // which months you are are talking about, so we have to store
            // it separately.
                        this._months = +months + quarters * 3 + years * 12;
            this._data = {};
            this._locale = getLocale();
            this._bubble();
        }
        function isDuration(obj) {
            return obj instanceof Duration;
        }
        function absRound(number) {
            if (number < 0) {
                return Math.round(-1 * number) * -1;
            } else {
                return Math.round(number);
            }
        }
        // compare two arrays, return the number of differences
                function compareArrays(array1, array2, dontConvert) {
            var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
            for (i = 0; i < len; i++) {
                if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
                    diffs++;
                }
            }
            return diffs + lengthDiff;
        }
        // FORMATTING
                function offset(token, separator) {
            addFormatToken(token, 0, 0, function() {
                var offset = this.utcOffset(), sign = "+";
                if (offset < 0) {
                    offset = -offset;
                    sign = "-";
                }
                return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
            });
        }
        offset("Z", ":");
        offset("ZZ", "");
        // PARSING
                addRegexToken("Z", matchShortOffset);
        addRegexToken("ZZ", matchShortOffset);
        addParseToken([ "Z", "ZZ" ], function(input, array, config) {
            config._useUTC = true;
            config._tzm = offsetFromString(matchShortOffset, input);
        });
        // HELPERS
        // timezone chunker
        // '+10:00' > ['10',  '00']
        // '-1530'  > ['-15', '30']
                var chunkOffset = /([\+\-]|\d\d)/gi;
        function offsetFromString(matcher, string) {
            var matches = (string || "").match(matcher), chunk, parts, minutes;
            if (matches === null) {
                return null;
            }
            chunk = matches[matches.length - 1] || [];
            parts = (chunk + "").match(chunkOffset) || [ "-", 0, 0 ];
            minutes = +(parts[1] * 60) + toInt(parts[2]);
            return minutes === 0 ? 0 : parts[0] === "+" ? minutes : -minutes;
        }
        // Return a moment from input, that is local/utc/zone equivalent to model.
                function cloneWithOffset(input, model) {
            var res, diff;
            if (model._isUTC) {
                res = model.clone();
                diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
                // Use low-level api, because this fn is low-level api.
                                res._d.setTime(res._d.valueOf() + diff);
                hooks.updateOffset(res, false);
                return res;
            } else {
                return createLocal(input).local();
            }
        }
        function getDateOffset(m) {
            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
            // https://github.com/moment/moment/pull/1871
            return -Math.round(m._d.getTimezoneOffset());
        }
        // HOOKS
        // This function will be called whenever a moment is mutated.
        // It is intended to keep the offset in sync with the timezone.
                hooks.updateOffset = function() {};
        // MOMENTS
        // keepLocalTime = true means only change the timezone, without
        // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
        // +0200, so we adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
                function getSetOffset(input, keepLocalTime, keepMinutes) {
            var offset = this._offset || 0, localAdjust;
            if (!this.isValid()) {
                return input != null ? this : NaN;
            }
            if (input != null) {
                if (typeof input === "string") {
                    input = offsetFromString(matchShortOffset, input);
                    if (input === null) {
                        return this;
                    }
                } else if (Math.abs(input) < 16 && !keepMinutes) {
                    input = input * 60;
                }
                if (!this._isUTC && keepLocalTime) {
                    localAdjust = getDateOffset(this);
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                    this.add(localAdjust, "m");
                }
                if (offset !== input) {
                    if (!keepLocalTime || this._changeInProgress) {
                        addSubtract(this, createDuration(input - offset, "m"), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        hooks.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }
                return this;
            } else {
                return this._isUTC ? offset : getDateOffset(this);
            }
        }
        function getSetZone(input, keepLocalTime) {
            if (input != null) {
                if (typeof input !== "string") {
                    input = -input;
                }
                this.utcOffset(input, keepLocalTime);
                return this;
            } else {
                return -this.utcOffset();
            }
        }
        function setOffsetToUTC(keepLocalTime) {
            return this.utcOffset(0, keepLocalTime);
        }
        function setOffsetToLocal(keepLocalTime) {
            if (this._isUTC) {
                this.utcOffset(0, keepLocalTime);
                this._isUTC = false;
                if (keepLocalTime) {
                    this.subtract(getDateOffset(this), "m");
                }
            }
            return this;
        }
        function setOffsetToParsedOffset() {
            if (this._tzm != null) {
                this.utcOffset(this._tzm, false, true);
            } else if (typeof this._i === "string") {
                var tZone = offsetFromString(matchOffset, this._i);
                if (tZone != null) {
                    this.utcOffset(tZone);
                } else {
                    this.utcOffset(0, true);
                }
            }
            return this;
        }
        function hasAlignedHourOffset(input) {
            if (!this.isValid()) {
                return false;
            }
            input = input ? createLocal(input).utcOffset() : 0;
            return (this.utcOffset() - input) % 60 === 0;
        }
        function isDaylightSavingTime() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }
        function isDaylightSavingTimeShifted() {
            if (!isUndefined(this._isDSTShifted)) {
                return this._isDSTShifted;
            }
            var c = {}, other;
            copyConfig(c, this);
            c = prepareConfig(c);
            if (c._a) {
                other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
                this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
            } else {
                this._isDSTShifted = false;
            }
            return this._isDSTShifted;
        }
        function isLocal() {
            return this.isValid() ? !this._isUTC : false;
        }
        function isUtcOffset() {
            return this.isValid() ? this._isUTC : false;
        }
        function isUtc() {
            return this.isValid() ? this._isUTC && this._offset === 0 : false;
        }
        // ASP.NET json date format regex
                var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, 
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function createDuration(input, key) {
            var duration = input, 
            // matching against regexp is expensive, do it on demand
            match = null, sign, ret, diffRes;
            if (isDuration(input)) {
                duration = {
                    ms: input._milliseconds,
                    d: input._days,
                    M: input._months
                };
            } else if (isNumber(input) || !isNaN(+input)) {
                duration = {};
                if (key) {
                    duration[key] = +input;
                } else {
                    duration.milliseconds = +input;
                }
            } else if (match = aspNetRegex.exec(input)) {
                sign = match[1] === "-" ? -1 : 1;
                duration = {
                    y: 0,
                    d: toInt(match[DATE]) * sign,
                    h: toInt(match[HOUR]) * sign,
                    m: toInt(match[MINUTE]) * sign,
                    s: toInt(match[SECOND]) * sign,
                    ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign
                };
            } else if (match = isoRegex.exec(input)) {
                sign = match[1] === "-" ? -1 : 1;
                duration = {
                    y: parseIso(match[2], sign),
                    M: parseIso(match[3], sign),
                    w: parseIso(match[4], sign),
                    d: parseIso(match[5], sign),
                    h: parseIso(match[6], sign),
                    m: parseIso(match[7], sign),
                    s: parseIso(match[8], sign)
                };
            } else if (duration == null) {
                // checks for null or undefined
                duration = {};
            } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
                diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
                duration = {};
                duration.ms = diffRes.milliseconds;
                duration.M = diffRes.months;
            }
            ret = new Duration(duration);
            if (isDuration(input) && hasOwnProp(input, "_locale")) {
                ret._locale = input._locale;
            }
            if (isDuration(input) && hasOwnProp(input, "_isValid")) {
                ret._isValid = input._isValid;
            }
            return ret;
        }
        createDuration.fn = Duration.prototype;
        createDuration.invalid = createInvalid$1;
        function parseIso(inp, sign) {
            // We'd normally use ~~inp for this, but unfortunately it also
            // converts floats to ints.
            // inp may be undefined, so careful calling replace on it.
            var res = inp && parseFloat(inp.replace(",", "."));
            // apply sign while we're at it
                        return (isNaN(res) ? 0 : res) * sign;
        }
        function positiveMomentsDifference(base, other) {
            var res = {};
            res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
            if (base.clone().add(res.months, "M").isAfter(other)) {
                --res.months;
            }
            res.milliseconds = +other - +base.clone().add(res.months, "M");
            return res;
        }
        function momentsDifference(base, other) {
            var res;
            if (!(base.isValid() && other.isValid())) {
                return {
                    milliseconds: 0,
                    months: 0
                };
            }
            other = cloneWithOffset(other, base);
            if (base.isBefore(other)) {
                res = positiveMomentsDifference(base, other);
            } else {
                res = positiveMomentsDifference(other, base);
                res.milliseconds = -res.milliseconds;
                res.months = -res.months;
            }
            return res;
        }
        // TODO: remove 'name' arg after deprecation is removed
                function createAdder(direction, name) {
            return function(val, period) {
                var dur, tmp;
                //invert the arguments, but complain about it
                                if (period !== null && !isNaN(+period)) {
                    deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). " + "See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
                    tmp = val;
                    val = period;
                    period = tmp;
                }
                dur = createDuration(val, period);
                addSubtract(this, dur, direction);
                return this;
            };
        }
        function addSubtract(mom, duration, isAdding, updateOffset) {
            var milliseconds = duration._milliseconds, days = absRound(duration._days), months = absRound(duration._months);
            if (!mom.isValid()) {
                // No op
                return;
            }
            updateOffset = updateOffset == null ? true : updateOffset;
            if (months) {
                setMonth(mom, get(mom, "Month") + months * isAdding);
            }
            if (days) {
                set$1(mom, "Date", get(mom, "Date") + days * isAdding);
            }
            if (milliseconds) {
                mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
            }
            if (updateOffset) {
                hooks.updateOffset(mom, days || months);
            }
        }
        var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
        function isString(input) {
            return typeof input === "string" || input instanceof String;
        }
        // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
                function isMomentInput(input) {
            return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
        }
        function isMomentInputObject(input) {
            var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [ "years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms" ], i, property;
            for (i = 0; i < properties.length; i += 1) {
                property = properties[i];
                propertyTest = propertyTest || hasOwnProp(input, property);
            }
            return objectTest && propertyTest;
        }
        function isNumberOrStringArray(input) {
            var arrayTest = isArray(input), dataTypeTest = false;
            if (arrayTest) {
                dataTypeTest = input.filter(function(item) {
                    return !isNumber(item) && isString(input);
                }).length === 0;
            }
            return arrayTest && dataTypeTest;
        }
        function isCalendarSpec(input) {
            var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [ "sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse" ], i, property;
            for (i = 0; i < properties.length; i += 1) {
                property = properties[i];
                propertyTest = propertyTest || hasOwnProp(input, property);
            }
            return objectTest && propertyTest;
        }
        function getCalendarFormat(myMoment, now) {
            var diff = myMoment.diff(now, "days", true);
            return diff < -6 ? "sameElse" : diff < -1 ? "lastWeek" : diff < 0 ? "lastDay" : diff < 1 ? "sameDay" : diff < 2 ? "nextDay" : diff < 7 ? "nextWeek" : "sameElse";
        }
        function calendar$1(time, formats) {
            // Support for single parameter, formats only overload to the calendar function
            if (arguments.length === 1) {
                if (isMomentInput(arguments[0])) {
                    time = arguments[0];
                    formats = undefined;
                } else if (isCalendarSpec(arguments[0])) {
                    formats = arguments[0];
                    time = undefined;
                }
            }
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're local/utc/offset or not.
                        var now = time || createLocal(), sod = cloneWithOffset(now, this).startOf("day"), format = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
            return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
        }
        function clone() {
            return new Moment(this);
        }
        function isAfter(input, units) {
            var localInput = isMoment(input) ? input : createLocal(input);
            if (!(this.isValid() && localInput.isValid())) {
                return false;
            }
            units = normalizeUnits(units) || "millisecond";
            if (units === "millisecond") {
                return this.valueOf() > localInput.valueOf();
            } else {
                return localInput.valueOf() < this.clone().startOf(units).valueOf();
            }
        }
        function isBefore(input, units) {
            var localInput = isMoment(input) ? input : createLocal(input);
            if (!(this.isValid() && localInput.isValid())) {
                return false;
            }
            units = normalizeUnits(units) || "millisecond";
            if (units === "millisecond") {
                return this.valueOf() < localInput.valueOf();
            } else {
                return this.clone().endOf(units).valueOf() < localInput.valueOf();
            }
        }
        function isBetween(from, to, units, inclusivity) {
            var localFrom = isMoment(from) ? from : createLocal(from), localTo = isMoment(to) ? to : createLocal(to);
            if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
                return false;
            }
            inclusivity = inclusivity || "()";
            return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
        }
        function isSame(input, units) {
            var localInput = isMoment(input) ? input : createLocal(input), inputMs;
            if (!(this.isValid() && localInput.isValid())) {
                return false;
            }
            units = normalizeUnits(units) || "millisecond";
            if (units === "millisecond") {
                return this.valueOf() === localInput.valueOf();
            } else {
                inputMs = localInput.valueOf();
                return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
            }
        }
        function isSameOrAfter(input, units) {
            return this.isSame(input, units) || this.isAfter(input, units);
        }
        function isSameOrBefore(input, units) {
            return this.isSame(input, units) || this.isBefore(input, units);
        }
        function diff(input, units, asFloat) {
            var that, zoneDelta, output;
            if (!this.isValid()) {
                return NaN;
            }
            that = cloneWithOffset(input, this);
            if (!that.isValid()) {
                return NaN;
            }
            zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
            units = normalizeUnits(units);
            switch (units) {
              case "year":
                output = monthDiff(this, that) / 12;
                break;

              case "month":
                output = monthDiff(this, that);
                break;

              case "quarter":
                output = monthDiff(this, that) / 3;
                break;

              case "second":
                output = (this - that) / 1e3;
                break;

                // 1000
                              case "minute":
                output = (this - that) / 6e4;
                break;

                // 1000 * 60
                              case "hour":
                output = (this - that) / 36e5;
                break;

                // 1000 * 60 * 60
                              case "day":
                output = (this - that - zoneDelta) / 864e5;
                break;

                // 1000 * 60 * 60 * 24, negate dst
                              case "week":
                output = (this - that - zoneDelta) / 6048e5;
                break;

                // 1000 * 60 * 60 * 24 * 7, negate dst
                              default:
                output = this - that;
            }
            return asFloat ? output : absFloor(output);
        }
        function monthDiff(a, b) {
            if (a.date() < b.date()) {
                // end-of-month calculations work correct when the start month has more
                // days than the end month.
                return -monthDiff(b, a);
            }
            // difference in months
                        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), 
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
            if (b - anchor < 0) {
                anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
                // linear across the month
                                adjust = (b - anchor) / (anchor - anchor2);
            } else {
                anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
                // linear across the month
                                adjust = (b - anchor) / (anchor2 - anchor);
            }
            //check for negative zero, return zero if negative zero
                        return -(wholeMonthDiff + adjust) || 0;
        }
        hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        function toString() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function toISOString(keepOffset) {
            if (!this.isValid()) {
                return null;
            }
            var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
            if (m.year() < 0 || m.year() > 9999) {
                return formatMoment(m, utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
            }
            if (isFunction(Date.prototype.toISOString)) {
                // native implementation is ~50x faster, use it when we can
                if (utc) {
                    return this.toDate().toISOString();
                } else {
                    return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
                }
            }
            return formatMoment(m, utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
        }
        /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */        function inspect() {
            if (!this.isValid()) {
                return "moment.invalid(/* " + this._i + " */)";
            }
            var func = "moment", zone = "", prefix, year, datetime, suffix;
            if (!this.isLocal()) {
                func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
                zone = "Z";
            }
            prefix = "[" + func + '("]';
            year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
            datetime = "-MM-DD[T]HH:mm:ss.SSS";
            suffix = zone + '[")]';
            return this.format(prefix + year + datetime + suffix);
        }
        function format(inputString) {
            if (!inputString) {
                inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
            }
            var output = formatMoment(this, inputString);
            return this.localeData().postformat(output);
        }
        function from(time, withoutSuffix) {
            if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
                return createDuration({
                    to: this,
                    from: time
                }).locale(this.locale()).humanize(!withoutSuffix);
            } else {
                return this.localeData().invalidDate();
            }
        }
        function fromNow(withoutSuffix) {
            return this.from(createLocal(), withoutSuffix);
        }
        function to(time, withoutSuffix) {
            if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
                return createDuration({
                    from: this,
                    to: time
                }).locale(this.locale()).humanize(!withoutSuffix);
            } else {
                return this.localeData().invalidDate();
            }
        }
        function toNow(withoutSuffix) {
            return this.to(createLocal(), withoutSuffix);
        }
        // If passed a locale key, it will set the locale for this
        // instance.  Otherwise, it will return the locale configuration
        // variables for this instance.
                function locale(key) {
            var newLocaleData;
            if (key === undefined) {
                return this._locale._abbr;
            } else {
                newLocaleData = getLocale(key);
                if (newLocaleData != null) {
                    this._locale = newLocaleData;
                }
                return this;
            }
        }
        var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        });
        function localeData() {
            return this._locale;
        }
        var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
        // actual modulo - handles negative numbers (for dates before 1970):
                function mod$1(dividend, divisor) {
            return (dividend % divisor + divisor) % divisor;
        }
        function localStartOfDate(y, m, d) {
            // the date constructor remaps years 0-99 to 1900-1999
            if (y < 100 && y >= 0) {
                // preserve leap years using a full 400 year cycle, then reset
                return new Date(y + 400, m, d) - MS_PER_400_YEARS;
            } else {
                return new Date(y, m, d).valueOf();
            }
        }
        function utcStartOfDate(y, m, d) {
            // Date.UTC remaps years 0-99 to 1900-1999
            if (y < 100 && y >= 0) {
                // preserve leap years using a full 400 year cycle, then reset
                return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
            } else {
                return Date.UTC(y, m, d);
            }
        }
        function startOf(units) {
            var time, startOfDate;
            units = normalizeUnits(units);
            if (units === undefined || units === "millisecond" || !this.isValid()) {
                return this;
            }
            startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
            switch (units) {
              case "year":
                time = startOfDate(this.year(), 0, 1);
                break;

              case "quarter":
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;

              case "month":
                time = startOfDate(this.year(), this.month(), 1);
                break;

              case "week":
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;

              case "isoWeek":
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;

              case "day":
              case "date":
                time = startOfDate(this.year(), this.month(), this.date());
                break;

              case "hour":
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;

              case "minute":
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;

              case "second":
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
            }
            this._d.setTime(time);
            hooks.updateOffset(this, true);
            return this;
        }
        function endOf(units) {
            var time, startOfDate;
            units = normalizeUnits(units);
            if (units === undefined || units === "millisecond" || !this.isValid()) {
                return this;
            }
            startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
            switch (units) {
              case "year":
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;

              case "quarter":
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;

              case "month":
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;

              case "week":
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;

              case "isoWeek":
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;

              case "day":
              case "date":
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;

              case "hour":
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;

              case "minute":
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;

              case "second":
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
            }
            this._d.setTime(time);
            hooks.updateOffset(this, true);
            return this;
        }
        function valueOf() {
            return this._d.valueOf() - (this._offset || 0) * 6e4;
        }
        function unix() {
            return Math.floor(this.valueOf() / 1e3);
        }
        function toDate() {
            return new Date(this.valueOf());
        }
        function toArray() {
            var m = this;
            return [ m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond() ];
        }
        function toObject() {
            var m = this;
            return {
                years: m.year(),
                months: m.month(),
                date: m.date(),
                hours: m.hours(),
                minutes: m.minutes(),
                seconds: m.seconds(),
                milliseconds: m.milliseconds()
            };
        }
        function toJSON() {
            // new Date(NaN).toJSON() === null
            return this.isValid() ? this.toISOString() : null;
        }
        function isValid$2() {
            return isValid(this);
        }
        function parsingFlags() {
            return extend({}, getParsingFlags(this));
        }
        function invalidAt() {
            return getParsingFlags(this).overflow;
        }
        function creationData() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            };
        }
        addFormatToken("N", 0, 0, "eraAbbr");
        addFormatToken("NN", 0, 0, "eraAbbr");
        addFormatToken("NNN", 0, 0, "eraAbbr");
        addFormatToken("NNNN", 0, 0, "eraName");
        addFormatToken("NNNNN", 0, 0, "eraNarrow");
        addFormatToken("y", [ "y", 1 ], "yo", "eraYear");
        addFormatToken("y", [ "yy", 2 ], 0, "eraYear");
        addFormatToken("y", [ "yyy", 3 ], 0, "eraYear");
        addFormatToken("y", [ "yyyy", 4 ], 0, "eraYear");
        addRegexToken("N", matchEraAbbr);
        addRegexToken("NN", matchEraAbbr);
        addRegexToken("NNN", matchEraAbbr);
        addRegexToken("NNNN", matchEraName);
        addRegexToken("NNNNN", matchEraNarrow);
        addParseToken([ "N", "NN", "NNN", "NNNN", "NNNNN" ], function(input, array, config, token) {
            var era = config._locale.erasParse(input, token, config._strict);
            if (era) {
                getParsingFlags(config).era = era;
            } else {
                getParsingFlags(config).invalidEra = input;
            }
        });
        addRegexToken("y", matchUnsigned);
        addRegexToken("yy", matchUnsigned);
        addRegexToken("yyy", matchUnsigned);
        addRegexToken("yyyy", matchUnsigned);
        addRegexToken("yo", matchEraYearOrdinal);
        addParseToken([ "y", "yy", "yyy", "yyyy" ], YEAR);
        addParseToken([ "yo" ], function(input, array, config, token) {
            var match;
            if (config._locale._eraYearOrdinalRegex) {
                match = input.match(config._locale._eraYearOrdinalRegex);
            }
            if (config._locale.eraYearOrdinalParse) {
                array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
            } else {
                array[YEAR] = parseInt(input, 10);
            }
        });
        function localeEras(m, format) {
            var i, l, date, eras = this._eras || getLocale("en")._eras;
            for (i = 0, l = eras.length; i < l; ++i) {
                switch (typeof eras[i].since) {
                  case "string":
                    // truncate time
                    date = hooks(eras[i].since).startOf("day");
                    eras[i].since = date.valueOf();
                    break;
                }
                switch (typeof eras[i].until) {
                  case "undefined":
                    eras[i].until = +Infinity;
                    break;

                  case "string":
                    // truncate time
                    date = hooks(eras[i].until).startOf("day").valueOf();
                    eras[i].until = date.valueOf();
                    break;
                }
            }
            return eras;
        }
        function localeErasParse(eraName, format, strict) {
            var i, l, eras = this.eras(), name, abbr, narrow;
            eraName = eraName.toUpperCase();
            for (i = 0, l = eras.length; i < l; ++i) {
                name = eras[i].name.toUpperCase();
                abbr = eras[i].abbr.toUpperCase();
                narrow = eras[i].narrow.toUpperCase();
                if (strict) {
                    switch (format) {
                      case "N":
                      case "NN":
                      case "NNN":
                        if (abbr === eraName) {
                            return eras[i];
                        }
                        break;

                      case "NNNN":
                        if (name === eraName) {
                            return eras[i];
                        }
                        break;

                      case "NNNNN":
                        if (narrow === eraName) {
                            return eras[i];
                        }
                        break;
                    }
                } else if ([ name, abbr, narrow ].indexOf(eraName) >= 0) {
                    return eras[i];
                }
            }
        }
        function localeErasConvertYear(era, year) {
            var dir = era.since <= era.until ? +1 : -1;
            if (year === undefined) {
                return hooks(era.since).year();
            } else {
                return hooks(era.since).year() + (year - era.offset) * dir;
            }
        }
        function getEraName() {
            var i, l, val, eras = this.localeData().eras();
            for (i = 0, l = eras.length; i < l; ++i) {
                // truncate time
                val = this.startOf("day").valueOf();
                if (eras[i].since <= val && val <= eras[i].until) {
                    return eras[i].name;
                }
                if (eras[i].until <= val && val <= eras[i].since) {
                    return eras[i].name;
                }
            }
            return "";
        }
        function getEraNarrow() {
            var i, l, val, eras = this.localeData().eras();
            for (i = 0, l = eras.length; i < l; ++i) {
                // truncate time
                val = this.startOf("day").valueOf();
                if (eras[i].since <= val && val <= eras[i].until) {
                    return eras[i].narrow;
                }
                if (eras[i].until <= val && val <= eras[i].since) {
                    return eras[i].narrow;
                }
            }
            return "";
        }
        function getEraAbbr() {
            var i, l, val, eras = this.localeData().eras();
            for (i = 0, l = eras.length; i < l; ++i) {
                // truncate time
                val = this.startOf("day").valueOf();
                if (eras[i].since <= val && val <= eras[i].until) {
                    return eras[i].abbr;
                }
                if (eras[i].until <= val && val <= eras[i].since) {
                    return eras[i].abbr;
                }
            }
            return "";
        }
        function getEraYear() {
            var i, l, dir, val, eras = this.localeData().eras();
            for (i = 0, l = eras.length; i < l; ++i) {
                dir = eras[i].since <= eras[i].until ? +1 : -1;
                // truncate time
                                val = this.startOf("day").valueOf();
                if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
                    return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
                }
            }
            return this.year();
        }
        function erasNameRegex(isStrict) {
            if (!hasOwnProp(this, "_erasNameRegex")) {
                computeErasParse.call(this);
            }
            return isStrict ? this._erasNameRegex : this._erasRegex;
        }
        function erasAbbrRegex(isStrict) {
            if (!hasOwnProp(this, "_erasAbbrRegex")) {
                computeErasParse.call(this);
            }
            return isStrict ? this._erasAbbrRegex : this._erasRegex;
        }
        function erasNarrowRegex(isStrict) {
            if (!hasOwnProp(this, "_erasNarrowRegex")) {
                computeErasParse.call(this);
            }
            return isStrict ? this._erasNarrowRegex : this._erasRegex;
        }
        function matchEraAbbr(isStrict, locale) {
            return locale.erasAbbrRegex(isStrict);
        }
        function matchEraName(isStrict, locale) {
            return locale.erasNameRegex(isStrict);
        }
        function matchEraNarrow(isStrict, locale) {
            return locale.erasNarrowRegex(isStrict);
        }
        function matchEraYearOrdinal(isStrict, locale) {
            return locale._eraYearOrdinalRegex || matchUnsigned;
        }
        function computeErasParse() {
            var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
            for (i = 0, l = eras.length; i < l; ++i) {
                namePieces.push(regexEscape(eras[i].name));
                abbrPieces.push(regexEscape(eras[i].abbr));
                narrowPieces.push(regexEscape(eras[i].narrow));
                mixedPieces.push(regexEscape(eras[i].name));
                mixedPieces.push(regexEscape(eras[i].abbr));
                mixedPieces.push(regexEscape(eras[i].narrow));
            }
            this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
            this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
            this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
            this._erasNarrowRegex = new RegExp("^(" + narrowPieces.join("|") + ")", "i");
        }
        // FORMATTING
                addFormatToken(0, [ "gg", 2 ], 0, function() {
            return this.weekYear() % 100;
        });
        addFormatToken(0, [ "GG", 2 ], 0, function() {
            return this.isoWeekYear() % 100;
        });
        function addWeekYearFormatToken(token, getter) {
            addFormatToken(0, [ token, token.length ], 0, getter);
        }
        addWeekYearFormatToken("gggg", "weekYear");
        addWeekYearFormatToken("ggggg", "weekYear");
        addWeekYearFormatToken("GGGG", "isoWeekYear");
        addWeekYearFormatToken("GGGGG", "isoWeekYear");
        // ALIASES
                addUnitAlias("weekYear", "gg");
        addUnitAlias("isoWeekYear", "GG");
        // PRIORITY
                addUnitPriority("weekYear", 1);
        addUnitPriority("isoWeekYear", 1);
        // PARSING
                addRegexToken("G", matchSigned);
        addRegexToken("g", matchSigned);
        addRegexToken("GG", match1to2, match2);
        addRegexToken("gg", match1to2, match2);
        addRegexToken("GGGG", match1to4, match4);
        addRegexToken("gggg", match1to4, match4);
        addRegexToken("GGGGG", match1to6, match6);
        addRegexToken("ggggg", match1to6, match6);
        addWeekParseToken([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(input, week, config, token) {
            week[token.substr(0, 2)] = toInt(input);
        });
        addWeekParseToken([ "gg", "GG" ], function(input, week, config, token) {
            week[token] = hooks.parseTwoDigitYear(input);
        });
        // MOMENTS
                function getSetWeekYear(input) {
            return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
        }
        function getSetISOWeekYear(input) {
            return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
        }
        function getISOWeeksInYear() {
            return weeksInYear(this.year(), 1, 4);
        }
        function getISOWeeksInISOWeekYear() {
            return weeksInYear(this.isoWeekYear(), 1, 4);
        }
        function getWeeksInYear() {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        }
        function getWeeksInWeekYear() {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
        }
        function getSetWeekYearHelper(input, week, weekday, dow, doy) {
            var weeksTarget;
            if (input == null) {
                return weekOfYear(this, dow, doy).year;
            } else {
                weeksTarget = weeksInYear(input, dow, doy);
                if (week > weeksTarget) {
                    week = weeksTarget;
                }
                return setWeekAll.call(this, input, week, weekday, dow, doy);
            }
        }
        function setWeekAll(weekYear, week, weekday, dow, doy) {
            var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
            this.year(date.getUTCFullYear());
            this.month(date.getUTCMonth());
            this.date(date.getUTCDate());
            return this;
        }
        // FORMATTING
                addFormatToken("Q", 0, "Qo", "quarter");
        // ALIASES
                addUnitAlias("quarter", "Q");
        // PRIORITY
                addUnitPriority("quarter", 7);
        // PARSING
                addRegexToken("Q", match1);
        addParseToken("Q", function(input, array) {
            array[MONTH] = (toInt(input) - 1) * 3;
        });
        // MOMENTS
                function getSetQuarter(input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        }
        // FORMATTING
                addFormatToken("D", [ "DD", 2 ], "Do", "date");
        // ALIASES
                addUnitAlias("date", "D");
        // PRIORITY
                addUnitPriority("date", 9);
        // PARSING
                addRegexToken("D", match1to2);
        addRegexToken("DD", match1to2, match2);
        addRegexToken("Do", function(isStrict, locale) {
            // TODO: Remove "ordinalParse" fallback in next major release.
            return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
        });
        addParseToken([ "D", "DD" ], DATE);
        addParseToken("Do", function(input, array) {
            array[DATE] = toInt(input.match(match1to2)[0]);
        });
        // MOMENTS
                var getSetDayOfMonth = makeGetSet("Date", true);
        // FORMATTING
                addFormatToken("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear");
        // ALIASES
                addUnitAlias("dayOfYear", "DDD");
        // PRIORITY
                addUnitPriority("dayOfYear", 4);
        // PARSING
                addRegexToken("DDD", match1to3);
        addRegexToken("DDDD", match3);
        addParseToken([ "DDD", "DDDD" ], function(input, array, config) {
            config._dayOfYear = toInt(input);
        });
        // HELPERS
        // MOMENTS
                function getSetDayOfYear(input) {
            var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
        }
        // FORMATTING
                addFormatToken("m", [ "mm", 2 ], 0, "minute");
        // ALIASES
                addUnitAlias("minute", "m");
        // PRIORITY
                addUnitPriority("minute", 14);
        // PARSING
                addRegexToken("m", match1to2);
        addRegexToken("mm", match1to2, match2);
        addParseToken([ "m", "mm" ], MINUTE);
        // MOMENTS
                var getSetMinute = makeGetSet("Minutes", false);
        // FORMATTING
                addFormatToken("s", [ "ss", 2 ], 0, "second");
        // ALIASES
                addUnitAlias("second", "s");
        // PRIORITY
                addUnitPriority("second", 15);
        // PARSING
                addRegexToken("s", match1to2);
        addRegexToken("ss", match1to2, match2);
        addParseToken([ "s", "ss" ], SECOND);
        // MOMENTS
                var getSetSecond = makeGetSet("Seconds", false);
        // FORMATTING
                addFormatToken("S", 0, 0, function() {
            return ~~(this.millisecond() / 100);
        });
        addFormatToken(0, [ "SS", 2 ], 0, function() {
            return ~~(this.millisecond() / 10);
        });
        addFormatToken(0, [ "SSS", 3 ], 0, "millisecond");
        addFormatToken(0, [ "SSSS", 4 ], 0, function() {
            return this.millisecond() * 10;
        });
        addFormatToken(0, [ "SSSSS", 5 ], 0, function() {
            return this.millisecond() * 100;
        });
        addFormatToken(0, [ "SSSSSS", 6 ], 0, function() {
            return this.millisecond() * 1e3;
        });
        addFormatToken(0, [ "SSSSSSS", 7 ], 0, function() {
            return this.millisecond() * 1e4;
        });
        addFormatToken(0, [ "SSSSSSSS", 8 ], 0, function() {
            return this.millisecond() * 1e5;
        });
        addFormatToken(0, [ "SSSSSSSSS", 9 ], 0, function() {
            return this.millisecond() * 1e6;
        });
        // ALIASES
                addUnitAlias("millisecond", "ms");
        // PRIORITY
                addUnitPriority("millisecond", 16);
        // PARSING
                addRegexToken("S", match1to3, match1);
        addRegexToken("SS", match1to3, match2);
        addRegexToken("SSS", match1to3, match3);
        var token, getSetMillisecond;
        for (token = "SSSS"; token.length <= 9; token += "S") {
            addRegexToken(token, matchUnsigned);
        }
        function parseMs(input, array) {
            array[MILLISECOND] = toInt(("0." + input) * 1e3);
        }
        for (token = "S"; token.length <= 9; token += "S") {
            addParseToken(token, parseMs);
        }
        getSetMillisecond = makeGetSet("Milliseconds", false);
        // FORMATTING
                addFormatToken("z", 0, 0, "zoneAbbr");
        addFormatToken("zz", 0, 0, "zoneName");
        // MOMENTS
                function getZoneAbbr() {
            return this._isUTC ? "UTC" : "";
        }
        function getZoneName() {
            return this._isUTC ? "Coordinated Universal Time" : "";
        }
        var proto = Moment.prototype;
        proto.add = add;
        proto.calendar = calendar$1;
        proto.clone = clone;
        proto.diff = diff;
        proto.endOf = endOf;
        proto.format = format;
        proto.from = from;
        proto.fromNow = fromNow;
        proto.to = to;
        proto.toNow = toNow;
        proto.get = stringGet;
        proto.invalidAt = invalidAt;
        proto.isAfter = isAfter;
        proto.isBefore = isBefore;
        proto.isBetween = isBetween;
        proto.isSame = isSame;
        proto.isSameOrAfter = isSameOrAfter;
        proto.isSameOrBefore = isSameOrBefore;
        proto.isValid = isValid$2;
        proto.lang = lang;
        proto.locale = locale;
        proto.localeData = localeData;
        proto.max = prototypeMax;
        proto.min = prototypeMin;
        proto.parsingFlags = parsingFlags;
        proto.set = stringSet;
        proto.startOf = startOf;
        proto.subtract = subtract;
        proto.toArray = toArray;
        proto.toObject = toObject;
        proto.toDate = toDate;
        proto.toISOString = toISOString;
        proto.inspect = inspect;
        if (typeof Symbol !== "undefined" && Symbol.for != null) {
            proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
                return "Moment<" + this.format() + ">";
            };
        }
        proto.toJSON = toJSON;
        proto.toString = toString;
        proto.unix = unix;
        proto.valueOf = valueOf;
        proto.creationData = creationData;
        proto.eraName = getEraName;
        proto.eraNarrow = getEraNarrow;
        proto.eraAbbr = getEraAbbr;
        proto.eraYear = getEraYear;
        proto.year = getSetYear;
        proto.isLeapYear = getIsLeapYear;
        proto.weekYear = getSetWeekYear;
        proto.isoWeekYear = getSetISOWeekYear;
        proto.quarter = proto.quarters = getSetQuarter;
        proto.month = getSetMonth;
        proto.daysInMonth = getDaysInMonth;
        proto.week = proto.weeks = getSetWeek;
        proto.isoWeek = proto.isoWeeks = getSetISOWeek;
        proto.weeksInYear = getWeeksInYear;
        proto.weeksInWeekYear = getWeeksInWeekYear;
        proto.isoWeeksInYear = getISOWeeksInYear;
        proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
        proto.date = getSetDayOfMonth;
        proto.day = proto.days = getSetDayOfWeek;
        proto.weekday = getSetLocaleDayOfWeek;
        proto.isoWeekday = getSetISODayOfWeek;
        proto.dayOfYear = getSetDayOfYear;
        proto.hour = proto.hours = getSetHour;
        proto.minute = proto.minutes = getSetMinute;
        proto.second = proto.seconds = getSetSecond;
        proto.millisecond = proto.milliseconds = getSetMillisecond;
        proto.utcOffset = getSetOffset;
        proto.utc = setOffsetToUTC;
        proto.local = setOffsetToLocal;
        proto.parseZone = setOffsetToParsedOffset;
        proto.hasAlignedHourOffset = hasAlignedHourOffset;
        proto.isDST = isDaylightSavingTime;
        proto.isLocal = isLocal;
        proto.isUtcOffset = isUtcOffset;
        proto.isUtc = isUtc;
        proto.isUTC = isUtc;
        proto.zoneAbbr = getZoneAbbr;
        proto.zoneName = getZoneName;
        proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
        proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
        proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
        proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
        proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
        function createUnix(input) {
            return createLocal(input * 1e3);
        }
        function createInZone() {
            return createLocal.apply(null, arguments).parseZone();
        }
        function preParsePostFormat(string) {
            return string;
        }
        var proto$1 = Locale.prototype;
        proto$1.calendar = calendar;
        proto$1.longDateFormat = longDateFormat;
        proto$1.invalidDate = invalidDate;
        proto$1.ordinal = ordinal;
        proto$1.preparse = preParsePostFormat;
        proto$1.postformat = preParsePostFormat;
        proto$1.relativeTime = relativeTime;
        proto$1.pastFuture = pastFuture;
        proto$1.set = set;
        proto$1.eras = localeEras;
        proto$1.erasParse = localeErasParse;
        proto$1.erasConvertYear = localeErasConvertYear;
        proto$1.erasAbbrRegex = erasAbbrRegex;
        proto$1.erasNameRegex = erasNameRegex;
        proto$1.erasNarrowRegex = erasNarrowRegex;
        proto$1.months = localeMonths;
        proto$1.monthsShort = localeMonthsShort;
        proto$1.monthsParse = localeMonthsParse;
        proto$1.monthsRegex = monthsRegex;
        proto$1.monthsShortRegex = monthsShortRegex;
        proto$1.week = localeWeek;
        proto$1.firstDayOfYear = localeFirstDayOfYear;
        proto$1.firstDayOfWeek = localeFirstDayOfWeek;
        proto$1.weekdays = localeWeekdays;
        proto$1.weekdaysMin = localeWeekdaysMin;
        proto$1.weekdaysShort = localeWeekdaysShort;
        proto$1.weekdaysParse = localeWeekdaysParse;
        proto$1.weekdaysRegex = weekdaysRegex;
        proto$1.weekdaysShortRegex = weekdaysShortRegex;
        proto$1.weekdaysMinRegex = weekdaysMinRegex;
        proto$1.isPM = localeIsPM;
        proto$1.meridiem = localeMeridiem;
        function get$1(format, index, field, setter) {
            var locale = getLocale(), utc = createUTC().set(setter, index);
            return locale[field](utc, format);
        }
        function listMonthsImpl(format, index, field) {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }
            format = format || "";
            if (index != null) {
                return get$1(format, index, field, "month");
            }
            var i, out = [];
            for (i = 0; i < 12; i++) {
                out[i] = get$1(format, i, field, "month");
            }
            return out;
        }
        // ()
        // (5)
        // (fmt, 5)
        // (fmt)
        // (true)
        // (true, 5)
        // (true, fmt, 5)
        // (true, fmt)
                function listWeekdaysImpl(localeSorted, format, index, field) {
            if (typeof localeSorted === "boolean") {
                if (isNumber(format)) {
                    index = format;
                    format = undefined;
                }
                format = format || "";
            } else {
                format = localeSorted;
                index = format;
                localeSorted = false;
                if (isNumber(format)) {
                    index = format;
                    format = undefined;
                }
                format = format || "";
            }
            var locale = getLocale(), shift = localeSorted ? locale._week.dow : 0, i, out = [];
            if (index != null) {
                return get$1(format, (index + shift) % 7, field, "day");
            }
            for (i = 0; i < 7; i++) {
                out[i] = get$1(format, (i + shift) % 7, field, "day");
            }
            return out;
        }
        function listMonths(format, index) {
            return listMonthsImpl(format, index, "months");
        }
        function listMonthsShort(format, index) {
            return listMonthsImpl(format, index, "monthsShort");
        }
        function listWeekdays(localeSorted, format, index) {
            return listWeekdaysImpl(localeSorted, format, index, "weekdays");
        }
        function listWeekdaysShort(localeSorted, format, index) {
            return listWeekdaysImpl(localeSorted, format, index, "weekdaysShort");
        }
        function listWeekdaysMin(localeSorted, format, index) {
            return listWeekdaysImpl(localeSorted, format, index, "weekdaysMin");
        }
        getSetGlobalLocale("en", {
            eras: [ {
                since: "0001-01-01",
                until: +Infinity,
                offset: 1,
                name: "Anno Domini",
                narrow: "AD",
                abbr: "AD"
            }, {
                since: "0000-12-31",
                until: -Infinity,
                offset: 1,
                name: "Before Christ",
                narrow: "BC",
                abbr: "BC"
            } ],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(number) {
                var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
                return number + output;
            }
        });
        // Side effect imports
                hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
        hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
        var mathAbs = Math.abs;
        function abs() {
            var data = this._data;
            this._milliseconds = mathAbs(this._milliseconds);
            this._days = mathAbs(this._days);
            this._months = mathAbs(this._months);
            data.milliseconds = mathAbs(data.milliseconds);
            data.seconds = mathAbs(data.seconds);
            data.minutes = mathAbs(data.minutes);
            data.hours = mathAbs(data.hours);
            data.months = mathAbs(data.months);
            data.years = mathAbs(data.years);
            return this;
        }
        function addSubtract$1(duration, input, value, direction) {
            var other = createDuration(input, value);
            duration._milliseconds += direction * other._milliseconds;
            duration._days += direction * other._days;
            duration._months += direction * other._months;
            return duration._bubble();
        }
        // supports only 2.0-style add(1, 's') or add(duration)
                function add$1(input, value) {
            return addSubtract$1(this, input, value, 1);
        }
        // supports only 2.0-style subtract(1, 's') or subtract(duration)
                function subtract$1(input, value) {
            return addSubtract$1(this, input, value, -1);
        }
        function absCeil(number) {
            if (number < 0) {
                return Math.floor(number);
            } else {
                return Math.ceil(number);
            }
        }
        function bubble() {
            var milliseconds = this._milliseconds, days = this._days, months = this._months, data = this._data, seconds, minutes, hours, years, monthsFromDays;
            // if we have a mix of positive and negative values, bubble down first
            // check: https://github.com/moment/moment/issues/2166
                        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
                milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
                days = 0;
                months = 0;
            }
            // The following code bubbles up values, see the tests for
            // examples of what that means.
                        data.milliseconds = milliseconds % 1e3;
            seconds = absFloor(milliseconds / 1e3);
            data.seconds = seconds % 60;
            minutes = absFloor(seconds / 60);
            data.minutes = minutes % 60;
            hours = absFloor(minutes / 60);
            data.hours = hours % 24;
            days += absFloor(hours / 24);
            // convert days to months
                        monthsFromDays = absFloor(daysToMonths(days));
            months += monthsFromDays;
            days -= absCeil(monthsToDays(monthsFromDays));
            // 12 months -> 1 year
                        years = absFloor(months / 12);
            months %= 12;
            data.days = days;
            data.months = months;
            data.years = years;
            return this;
        }
        function daysToMonths(days) {
            // 400 years have 146097 days (taking into account leap year rules)
            // 400 years have 12 months === 4800
            return days * 4800 / 146097;
        }
        function monthsToDays(months) {
            // the reverse of daysToMonths
            return months * 146097 / 4800;
        }
        function as(units) {
            if (!this.isValid()) {
                return NaN;
            }
            var days, months, milliseconds = this._milliseconds;
            units = normalizeUnits(units);
            if (units === "month" || units === "quarter" || units === "year") {
                days = this._days + milliseconds / 864e5;
                months = this._months + daysToMonths(days);
                switch (units) {
                  case "month":
                    return months;

                  case "quarter":
                    return months / 3;

                  case "year":
                    return months / 12;
                }
            } else {
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(monthsToDays(this._months));
                switch (units) {
                  case "week":
                    return days / 7 + milliseconds / 6048e5;

                  case "day":
                    return days + milliseconds / 864e5;

                  case "hour":
                    return days * 24 + milliseconds / 36e5;

                  case "minute":
                    return days * 1440 + milliseconds / 6e4;

                  case "second":
                    return days * 86400 + milliseconds / 1e3;

                    // Math.floor prevents floating point math errors here
                                      case "millisecond":
                    return Math.floor(days * 864e5) + milliseconds;

                  default:
                    throw new Error("Unknown unit " + units);
                }
            }
        }
        // TODO: Use this.as('ms')?
                function valueOf$1() {
            if (!this.isValid()) {
                return NaN;
            }
            return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
        }
        function makeAs(alias) {
            return function() {
                return this.as(alias);
            };
        }
        var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
        function clone$1() {
            return createDuration(this);
        }
        function get$2(units) {
            units = normalizeUnits(units);
            return this.isValid() ? this[units + "s"]() : NaN;
        }
        function makeGetter(name) {
            return function() {
                return this.isValid() ? this._data[name] : NaN;
            };
        }
        var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
        function weeks() {
            return absFloor(this.days() / 7);
        }
        var round = Math.round, thresholds = {
            ss: 44,
            // a few seconds to seconds
            s: 45,
            // seconds to minute
            m: 45,
            // minutes to hour
            h: 22,
            // hours to day
            d: 26,
            // days to month/week
            w: null,
            // weeks to month
            M: 11
        };
        // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
                function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
            return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
        }
        function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
            var duration = createDuration(posNegDuration).abs(), seconds = round(duration.as("s")), minutes = round(duration.as("m")), hours = round(duration.as("h")), days = round(duration.as("d")), months = round(duration.as("M")), weeks = round(duration.as("w")), years = round(duration.as("y")), a = seconds <= thresholds.ss && [ "s", seconds ] || seconds < thresholds.s && [ "ss", seconds ] || minutes <= 1 && [ "m" ] || minutes < thresholds.m && [ "mm", minutes ] || hours <= 1 && [ "h" ] || hours < thresholds.h && [ "hh", hours ] || days <= 1 && [ "d" ] || days < thresholds.d && [ "dd", days ];
            if (thresholds.w != null) {
                a = a || weeks <= 1 && [ "w" ] || weeks < thresholds.w && [ "ww", weeks ];
            }
            a = a || months <= 1 && [ "M" ] || months < thresholds.M && [ "MM", months ] || years <= 1 && [ "y" ] || [ "yy", years ];
            a[2] = withoutSuffix;
            a[3] = +posNegDuration > 0;
            a[4] = locale;
            return substituteTimeAgo.apply(null, a);
        }
        // This function allows you to set the rounding function for relative time strings
                function getSetRelativeTimeRounding(roundingFunction) {
            if (roundingFunction === undefined) {
                return round;
            }
            if (typeof roundingFunction === "function") {
                round = roundingFunction;
                return true;
            }
            return false;
        }
        // This function allows you to set a threshold for relative time strings
                function getSetRelativeTimeThreshold(threshold, limit) {
            if (thresholds[threshold] === undefined) {
                return false;
            }
            if (limit === undefined) {
                return thresholds[threshold];
            }
            thresholds[threshold] = limit;
            if (threshold === "s") {
                thresholds.ss = limit - 1;
            }
            return true;
        }
        function humanize(argWithSuffix, argThresholds) {
            if (!this.isValid()) {
                return this.localeData().invalidDate();
            }
            var withSuffix = false, th = thresholds, locale, output;
            if (typeof argWithSuffix === "object") {
                argThresholds = argWithSuffix;
                argWithSuffix = false;
            }
            if (typeof argWithSuffix === "boolean") {
                withSuffix = argWithSuffix;
            }
            if (typeof argThresholds === "object") {
                th = Object.assign({}, thresholds, argThresholds);
                if (argThresholds.s != null && argThresholds.ss == null) {
                    th.ss = argThresholds.s - 1;
                }
            }
            locale = this.localeData();
            output = relativeTime$1(this, !withSuffix, th, locale);
            if (withSuffix) {
                output = locale.pastFuture(+this, output);
            }
            return locale.postformat(output);
        }
        var abs$1 = Math.abs;
        function sign(x) {
            return (x > 0) - (x < 0) || +x;
        }
        function toISOString$1() {
            // for ISO strings we do not use the normal bubbling rules:
            //  * milliseconds bubble up until they become hours
            //  * days do not bubble at all
            //  * months bubble up until they become years
            // This is because there is no context-free conversion between hours and days
            // (think of clock changes)
            // and also not between days and months (28-31 days per month)
            if (!this.isValid()) {
                return this.localeData().invalidDate();
            }
            var seconds = abs$1(this._milliseconds) / 1e3, days = abs$1(this._days), months = abs$1(this._months), minutes, hours, years, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
            if (!total) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return "P0D";
            }
            // 3600 seconds -> 60 minutes -> 1 hour
                        minutes = absFloor(seconds / 60);
            hours = absFloor(minutes / 60);
            seconds %= 60;
            minutes %= 60;
            // 12 months -> 1 year
                        years = absFloor(months / 12);
            months %= 12;
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
                        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, "") : "";
            totalSign = total < 0 ? "-" : "";
            ymSign = sign(this._months) !== sign(total) ? "-" : "";
            daysSign = sign(this._days) !== sign(total) ? "-" : "";
            hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
            return totalSign + "P" + (years ? ymSign + years + "Y" : "") + (months ? ymSign + months + "M" : "") + (days ? daysSign + days + "D" : "") + (hours || minutes || seconds ? "T" : "") + (hours ? hmsSign + hours + "H" : "") + (minutes ? hmsSign + minutes + "M" : "") + (seconds ? hmsSign + s + "S" : "");
        }
        var proto$2 = Duration.prototype;
        proto$2.isValid = isValid$1;
        proto$2.abs = abs;
        proto$2.add = add$1;
        proto$2.subtract = subtract$1;
        proto$2.as = as;
        proto$2.asMilliseconds = asMilliseconds;
        proto$2.asSeconds = asSeconds;
        proto$2.asMinutes = asMinutes;
        proto$2.asHours = asHours;
        proto$2.asDays = asDays;
        proto$2.asWeeks = asWeeks;
        proto$2.asMonths = asMonths;
        proto$2.asQuarters = asQuarters;
        proto$2.asYears = asYears;
        proto$2.valueOf = valueOf$1;
        proto$2._bubble = bubble;
        proto$2.clone = clone$1;
        proto$2.get = get$2;
        proto$2.milliseconds = milliseconds;
        proto$2.seconds = seconds;
        proto$2.minutes = minutes;
        proto$2.hours = hours;
        proto$2.days = days;
        proto$2.weeks = weeks;
        proto$2.months = months;
        proto$2.years = years;
        proto$2.humanize = humanize;
        proto$2.toISOString = toISOString$1;
        proto$2.toString = toISOString$1;
        proto$2.toJSON = toISOString$1;
        proto$2.locale = locale;
        proto$2.localeData = localeData;
        proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
        proto$2.lang = lang;
        // FORMATTING
                addFormatToken("X", 0, 0, "unix");
        addFormatToken("x", 0, 0, "valueOf");
        // PARSING
                addRegexToken("x", matchSigned);
        addRegexToken("X", matchTimestamp);
        addParseToken("X", function(input, array, config) {
            config._d = new Date(parseFloat(input) * 1e3);
        });
        addParseToken("x", function(input, array, config) {
            config._d = new Date(toInt(input));
        });
        //! moment.js
                hooks.version = "2.26.0";
        setHookCallback(createLocal);
        hooks.fn = proto;
        hooks.min = min;
        hooks.max = max;
        hooks.now = now;
        hooks.utc = createUTC;
        hooks.unix = createUnix;
        hooks.months = listMonths;
        hooks.isDate = isDate;
        hooks.locale = getSetGlobalLocale;
        hooks.invalid = createInvalid;
        hooks.duration = createDuration;
        hooks.isMoment = isMoment;
        hooks.weekdays = listWeekdays;
        hooks.parseZone = createInZone;
        hooks.localeData = getLocale;
        hooks.isDuration = isDuration;
        hooks.monthsShort = listMonthsShort;
        hooks.weekdaysMin = listWeekdaysMin;
        hooks.defineLocale = defineLocale;
        hooks.updateLocale = updateLocale;
        hooks.locales = listLocales;
        hooks.weekdaysShort = listWeekdaysShort;
        hooks.normalizeUnits = normalizeUnits;
        hooks.relativeTimeRounding = getSetRelativeTimeRounding;
        hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
        hooks.calendarFormat = getCalendarFormat;
        hooks.prototype = proto;
        // currently HTML5 input type only supports 24-hour formats
                hooks.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            // <input type="datetime-local" />
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            // <input type="datetime-local" step="1" />
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            // <input type="datetime-local" step="0.001" />
            DATE: "YYYY-MM-DD",
            // <input type="date" />
            TIME: "HH:mm",
            // <input type="time" />
            TIME_SECONDS: "HH:mm:ss",
            // <input type="time" step="1" />
            TIME_MS: "HH:mm:ss.SSS",
            // <input type="time" step="0.001" />
            WEEK: "GGGG-[W]WW",
            // <input type="week" />
            MONTH: "YYYY-MM"
        };
        return hooks;
    });
}, /***** module 4 end *****/
/***** module 5 start *****/
/***** D:\ym_xcx\node_modules\vuex\dist\vuex.common.js *****/
function(module, exports, __wepy_require) {
    /*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
    "use strict";
    function applyMixin(Vue) {
        var version = Number(Vue.version.split(".")[0]);
        if (version >= 2) {
            Vue.mixin({
                beforeCreate: vuexInit
            });
        } else {
            // override init and inject vuex init procedure
            // for 1.x backwards compatibility.
            var _init = Vue.prototype._init;
            Vue.prototype._init = function(options) {
                if (options === void 0) options = {};
                options.init = options.init ? [ vuexInit ].concat(options.init) : vuexInit;
                _init.call(this, options);
            };
        }
        /**
   * Vuex init hook, injected into each instances init hooks list.
   */        function vuexInit() {
            var options = this.$options;
            // store injection
                        if (options.store) {
                this.$store = typeof options.store === "function" ? options.store() : options.store;
            } else if (options.parent && options.parent.$store) {
                this.$store = options.parent.$store;
            }
        }
    }
    var target = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
    var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    function devtoolPlugin(store) {
        if (!devtoolHook) {
            return;
        }
        store._devtoolHook = devtoolHook;
        devtoolHook.emit("vuex:init", store);
        devtoolHook.on("vuex:travel-to-state", function(targetState) {
            store.replaceState(targetState);
        });
        store.subscribe(function(mutation, state) {
            devtoolHook.emit("vuex:mutation", mutation, state);
        }, {
            prepend: true
        });
        store.subscribeAction(function(action, state) {
            devtoolHook.emit("vuex:action", action, state);
        }, {
            prepend: true
        });
    }
    /**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
    /**
 * forEach for object
 */    function forEachValue(obj, fn) {
        Object.keys(obj).forEach(function(key) {
            return fn(obj[key], key);
        });
    }
    function isObject(obj) {
        return obj !== null && typeof obj === "object";
    }
    function isPromise(val) {
        return val && typeof val.then === "function";
    }
    function assert(condition, msg) {
        if (!condition) {
            throw new Error("[vuex] " + msg);
        }
    }
    function partial(fn, arg) {
        return function() {
            return fn(arg);
        };
    }
    // Base data struct for store's module, package with some attribute and method
        var Module = function Module(rawModule, runtime) {
        this.runtime = runtime;
        // Store some children item
                this._children = Object.create(null);
        // Store the origin module object which passed by programmer
                this._rawModule = rawModule;
        var rawState = rawModule.state;
        // Store the origin module's state
                this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
    };
    var prototypeAccessors = {
        namespaced: {
            configurable: true
        }
    };
    prototypeAccessors.namespaced.get = function() {
        return !!this._rawModule.namespaced;
    };
    Module.prototype.addChild = function addChild(key, module) {
        this._children[key] = module;
    };
    Module.prototype.removeChild = function removeChild(key) {
        delete this._children[key];
    };
    Module.prototype.getChild = function getChild(key) {
        return this._children[key];
    };
    Module.prototype.hasChild = function hasChild(key) {
        return key in this._children;
    };
    Module.prototype.update = function update(rawModule) {
        this._rawModule.namespaced = rawModule.namespaced;
        if (rawModule.actions) {
            this._rawModule.actions = rawModule.actions;
        }
        if (rawModule.mutations) {
            this._rawModule.mutations = rawModule.mutations;
        }
        if (rawModule.getters) {
            this._rawModule.getters = rawModule.getters;
        }
    };
    Module.prototype.forEachChild = function forEachChild(fn) {
        forEachValue(this._children, fn);
    };
    Module.prototype.forEachGetter = function forEachGetter(fn) {
        if (this._rawModule.getters) {
            forEachValue(this._rawModule.getters, fn);
        }
    };
    Module.prototype.forEachAction = function forEachAction(fn) {
        if (this._rawModule.actions) {
            forEachValue(this._rawModule.actions, fn);
        }
    };
    Module.prototype.forEachMutation = function forEachMutation(fn) {
        if (this._rawModule.mutations) {
            forEachValue(this._rawModule.mutations, fn);
        }
    };
    Object.defineProperties(Module.prototype, prototypeAccessors);
    var ModuleCollection = function ModuleCollection(rawRootModule) {
        // register root module (Vuex.Store options)
        this.register([], rawRootModule, false);
    };
    ModuleCollection.prototype.get = function get(path) {
        return path.reduce(function(module, key) {
            return module.getChild(key);
        }, this.root);
    };
    ModuleCollection.prototype.getNamespace = function getNamespace(path) {
        var module = this.root;
        return path.reduce(function(namespace, key) {
            module = module.getChild(key);
            return namespace + (module.namespaced ? key + "/" : "");
        }, "");
    };
    ModuleCollection.prototype.update = function update$1(rawRootModule) {
        update([], this.root, rawRootModule);
    };
    ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
        var this$1 = this;
        if (runtime === void 0) runtime = true;
        if (process.env.NODE_ENV !== "production") {
            assertRawModule(path, rawModule);
        }
        var newModule = new Module(rawModule, runtime);
        if (path.length === 0) {
            this.root = newModule;
        } else {
            var parent = this.get(path.slice(0, -1));
            parent.addChild(path[path.length - 1], newModule);
        }
        // register nested modules
                if (rawModule.modules) {
            forEachValue(rawModule.modules, function(rawChildModule, key) {
                this$1.register(path.concat(key), rawChildModule, runtime);
            });
        }
    };
    ModuleCollection.prototype.unregister = function unregister(path) {
        var parent = this.get(path.slice(0, -1));
        var key = path[path.length - 1];
        if (!parent.getChild(key).runtime) {
            return;
        }
        parent.removeChild(key);
    };
    ModuleCollection.prototype.isRegistered = function isRegistered(path) {
        var parent = this.get(path.slice(0, -1));
        var key = path[path.length - 1];
        return parent.hasChild(key);
    };
    function update(path, targetModule, newModule) {
        if (process.env.NODE_ENV !== "production") {
            assertRawModule(path, newModule);
        }
        // update target module
                targetModule.update(newModule);
        // update nested modules
                if (newModule.modules) {
            for (var key in newModule.modules) {
                if (!targetModule.getChild(key)) {
                    if (process.env.NODE_ENV !== "production") {
                        console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, " + "manual reload is needed");
                    }
                    return;
                }
                update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
            }
        }
    }
    var functionAssert = {
        assert: function(value) {
            return typeof value === "function";
        },
        expected: "function"
    };
    var objectAssert = {
        assert: function(value) {
            return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
        },
        expected: 'function or object with "handler" function'
    };
    var assertTypes = {
        getters: functionAssert,
        mutations: functionAssert,
        actions: objectAssert
    };
    function assertRawModule(path, rawModule) {
        Object.keys(assertTypes).forEach(function(key) {
            if (!rawModule[key]) {
                return;
            }
            var assertOptions = assertTypes[key];
            forEachValue(rawModule[key], function(value, type) {
                assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
            });
        });
    }
    function makeAssertionMessage(path, key, type, value, expected) {
        var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
        if (path.length > 0) {
            buf += ' in module "' + path.join(".") + '"';
        }
        buf += " is " + JSON.stringify(value) + ".";
        return buf;
    }
    var Vue;
    // bind on install
        var Store = function Store(options) {
        var this$1 = this;
        if (options === void 0) options = {};
        // Auto install if it is not done yet and `window` has `Vue`.
        // To allow users to avoid auto-installation in some cases,
        // this code should be placed here. See #731
                if (!Vue && typeof window !== "undefined" && window.Vue) {
            install(window.Vue);
        }
        if (process.env.NODE_ENV !== "production") {
            assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
            assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
            assert(this instanceof Store, "store must be called with the new operator.");
        }
        var plugins = options.plugins;
        if (plugins === void 0) plugins = [];
        var strict = options.strict;
        if (strict === void 0) strict = false;
        // store internal state
                this._committing = false;
        this._actions = Object.create(null);
        this._actionSubscribers = [];
        this._mutations = Object.create(null);
        this._wrappedGetters = Object.create(null);
        this._modules = new ModuleCollection(options);
        this._modulesNamespaceMap = Object.create(null);
        this._subscribers = [];
        this._watcherVM = new Vue();
        this._makeLocalGettersCache = Object.create(null);
        // bind commit and dispatch to self
                var store = this;
        var ref = this;
        var dispatch = ref.dispatch;
        var commit = ref.commit;
        this.dispatch = function boundDispatch(type, payload) {
            return dispatch.call(store, type, payload);
        };
        this.commit = function boundCommit(type, payload, options) {
            return commit.call(store, type, payload, options);
        };
        // strict mode
                this.strict = strict;
        var state = this._modules.root.state;
        // init root module.
        // this also recursively registers all sub-modules
        // and collects all module getters inside this._wrappedGetters
                installModule(this, state, [], this._modules.root);
        // initialize the store vm, which is responsible for the reactivity
        // (also registers _wrappedGetters as computed properties)
                resetStoreVM(this, state);
        // apply plugins
                plugins.forEach(function(plugin) {
            return plugin(this$1);
        });
        var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
        if (useDevtools) {
            devtoolPlugin(this);
        }
    };
    var prototypeAccessors$1 = {
        state: {
            configurable: true
        }
    };
    prototypeAccessors$1.state.get = function() {
        return this._vm._data.$$state;
    };
    prototypeAccessors$1.state.set = function(v) {
        if (process.env.NODE_ENV !== "production") {
            assert(false, "use store.replaceState() to explicit replace store state.");
        }
    };
    Store.prototype.commit = function commit(_type, _payload, _options) {
        var this$1 = this;
        // check object-style commit
                var ref = unifyObjectStyle(_type, _payload, _options);
        var type = ref.type;
        var payload = ref.payload;
        var options = ref.options;
        var mutation = {
            type: type,
            payload: payload
        };
        var entry = this._mutations[type];
        if (!entry) {
            if (process.env.NODE_ENV !== "production") {
                console.error("[vuex] unknown mutation type: " + type);
            }
            return;
        }
        this._withCommit(function() {
            entry.forEach(function commitIterator(handler) {
                handler(payload);
            });
        });
        this._subscribers.slice().forEach(function(sub) {
            return sub(mutation, this$1.state);
        });
        if (process.env.NODE_ENV !== "production" && options && options.silent) {
            console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. " + "Use the filter functionality in the vue-devtools");
        }
    };
    Store.prototype.dispatch = function dispatch(_type, _payload) {
        var this$1 = this;
        // check object-style dispatch
                var ref = unifyObjectStyle(_type, _payload);
        var type = ref.type;
        var payload = ref.payload;
        var action = {
            type: type,
            payload: payload
        };
        var entry = this._actions[type];
        if (!entry) {
            if (process.env.NODE_ENV !== "production") {
                console.error("[vuex] unknown action type: " + type);
            }
            return;
        }
        try {
            this._actionSubscribers.slice().filter(function(sub) {
                return sub.before;
            }).forEach(function(sub) {
                return sub.before(action, this$1.state);
            });
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            if (process.env.NODE_ENV !== "production") {
                console.warn("[vuex] error in before action subscribers: ");
                console.error(e);
            }
        }
        var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
            return handler(payload);
        })) : entry[0](payload);
        return new Promise(function(resolve, reject) {
            result.then(function(res) {
                try {
                    this$1._actionSubscribers.filter(function(sub) {
                        return sub.after;
                    }).forEach(function(sub) {
                        return sub.after(action, this$1.state);
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    if (process.env.NODE_ENV !== "production") {
                        console.warn("[vuex] error in after action subscribers: ");
                        console.error(e);
                    }
                }
                resolve(res);
            }, function(error) {
                try {
                    this$1._actionSubscribers.filter(function(sub) {
                        return sub.error;
                    }).forEach(function(sub) {
                        return sub.error(action, this$1.state, error);
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    if (process.env.NODE_ENV !== "production") {
                        console.warn("[vuex] error in error action subscribers: ");
                        console.error(e);
                    }
                }
                reject(error);
            });
        });
    };
    Store.prototype.subscribe = function subscribe(fn, options) {
        return genericSubscribe(fn, this._subscribers, options);
    };
    Store.prototype.subscribeAction = function subscribeAction(fn, options) {
        var subs = typeof fn === "function" ? {
            before: fn
        } : fn;
        return genericSubscribe(subs, this._actionSubscribers, options);
    };
    Store.prototype.watch = function watch(getter, cb, options) {
        var this$1 = this;
        if (process.env.NODE_ENV !== "production") {
            assert(typeof getter === "function", "store.watch only accepts a function.");
        }
        return this._watcherVM.$watch(function() {
            return getter(this$1.state, this$1.getters);
        }, cb, options);
    };
    Store.prototype.replaceState = function replaceState(state) {
        var this$1 = this;
        this._withCommit(function() {
            this$1._vm._data.$$state = state;
        });
    };
    Store.prototype.registerModule = function registerModule(path, rawModule, options) {
        if (options === void 0) options = {};
        if (typeof path === "string") {
            path = [ path ];
        }
        if (process.env.NODE_ENV !== "production") {
            assert(Array.isArray(path), "module path must be a string or an Array.");
            assert(path.length > 0, "cannot register the root module by using registerModule.");
        }
        this._modules.register(path, rawModule);
        installModule(this, this.state, path, this._modules.get(path), options.preserveState);
        // reset store to update getters...
                resetStoreVM(this, this.state);
    };
    Store.prototype.unregisterModule = function unregisterModule(path) {
        var this$1 = this;
        if (typeof path === "string") {
            path = [ path ];
        }
        if (process.env.NODE_ENV !== "production") {
            assert(Array.isArray(path), "module path must be a string or an Array.");
        }
        this._modules.unregister(path);
        this._withCommit(function() {
            var parentState = getNestedState(this$1.state, path.slice(0, -1));
            Vue.delete(parentState, path[path.length - 1]);
        });
        resetStore(this);
    };
    Store.prototype.hasModule = function hasModule(path) {
        if (typeof path === "string") {
            path = [ path ];
        }
        if (process.env.NODE_ENV !== "production") {
            assert(Array.isArray(path), "module path must be a string or an Array.");
        }
        return this._modules.isRegistered(path);
    };
    Store.prototype.hotUpdate = function hotUpdate(newOptions) {
        this._modules.update(newOptions);
        resetStore(this, true);
    };
    Store.prototype._withCommit = function _withCommit(fn) {
        var committing = this._committing;
        this._committing = true;
        fn();
        this._committing = committing;
    };
    Object.defineProperties(Store.prototype, prototypeAccessors$1);
    function genericSubscribe(fn, subs, options) {
        if (subs.indexOf(fn) < 0) {
            options && options.prepend ? subs.unshift(fn) : subs.push(fn);
        }
        return function() {
            var i = subs.indexOf(fn);
            if (i > -1) {
                subs.splice(i, 1);
            }
        };
    }
    function resetStore(store, hot) {
        store._actions = Object.create(null);
        store._mutations = Object.create(null);
        store._wrappedGetters = Object.create(null);
        store._modulesNamespaceMap = Object.create(null);
        var state = store.state;
        // init all modules
                installModule(store, state, [], store._modules.root, true);
        // reset vm
                resetStoreVM(store, state, hot);
    }
    function resetStoreVM(store, state, hot) {
        var oldVm = store._vm;
        // bind store public getters
                store.getters = {};
        // reset local getters cache
                store._makeLocalGettersCache = Object.create(null);
        var wrappedGetters = store._wrappedGetters;
        var computed = {};
        forEachValue(wrappedGetters, function(fn, key) {
            // use computed to leverage its lazy-caching mechanism
            // direct inline function use will lead to closure preserving oldVm.
            // using partial to return function with only arguments preserved in closure environment.
            computed[key] = partial(fn, store);
            Object.defineProperty(store.getters, key, {
                get: function() {
                    return store._vm[key];
                },
                enumerable: true
            });
        });
        // use a Vue instance to store the state tree
        // suppress warnings just in case the user has added
        // some funky global mixins
                var silent = Vue.config.silent;
        Vue.config.silent = true;
        store._vm = new Vue({
            data: {
                $$state: state
            },
            computed: computed
        });
        Vue.config.silent = silent;
        // enable strict mode for new vm
                if (store.strict) {
            enableStrictMode(store);
        }
        if (oldVm) {
            if (hot) {
                // dispatch changes in all subscribed watchers
                // to force getter re-evaluation for hot reloading.
                store._withCommit(function() {
                    oldVm._data.$$state = null;
                });
            }
            Vue.nextTick(function() {
                return oldVm.$destroy();
            });
        }
    }
    function installModule(store, rootState, path, module, hot) {
        var isRoot = !path.length;
        var namespace = store._modules.getNamespace(path);
        // register in namespace map
                if (module.namespaced) {
            if (store._modulesNamespaceMap[namespace] && process.env.NODE_ENV !== "production") {
                console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
            }
            store._modulesNamespaceMap[namespace] = module;
        }
        // set state
                if (!isRoot && !hot) {
            var parentState = getNestedState(rootState, path.slice(0, -1));
            var moduleName = path[path.length - 1];
            store._withCommit(function() {
                if (process.env.NODE_ENV !== "production") {
                    if (moduleName in parentState) {
                        console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
                    }
                }
                Vue.set(parentState, moduleName, module.state);
            });
        }
        var local = module.context = makeLocalContext(store, namespace, path);
        module.forEachMutation(function(mutation, key) {
            var namespacedType = namespace + key;
            registerMutation(store, namespacedType, mutation, local);
        });
        module.forEachAction(function(action, key) {
            var type = action.root ? key : namespace + key;
            var handler = action.handler || action;
            registerAction(store, type, handler, local);
        });
        module.forEachGetter(function(getter, key) {
            var namespacedType = namespace + key;
            registerGetter(store, namespacedType, getter, local);
        });
        module.forEachChild(function(child, key) {
            installModule(store, rootState, path.concat(key), child, hot);
        });
    }
    /**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */    function makeLocalContext(store, namespace, path) {
        var noNamespace = namespace === "";
        var local = {
            dispatch: noNamespace ? store.dispatch : function(_type, _payload, _options) {
                var args = unifyObjectStyle(_type, _payload, _options);
                var payload = args.payload;
                var options = args.options;
                var type = args.type;
                if (!options || !options.root) {
                    type = namespace + type;
                    if (process.env.NODE_ENV !== "production" && !store._actions[type]) {
                        console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
                        return;
                    }
                }
                return store.dispatch(type, payload);
            },
            commit: noNamespace ? store.commit : function(_type, _payload, _options) {
                var args = unifyObjectStyle(_type, _payload, _options);
                var payload = args.payload;
                var options = args.options;
                var type = args.type;
                if (!options || !options.root) {
                    type = namespace + type;
                    if (process.env.NODE_ENV !== "production" && !store._mutations[type]) {
                        console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
                        return;
                    }
                }
                store.commit(type, payload, options);
            }
        };
        // getters and state object must be gotten lazily
        // because they will be changed by vm update
                Object.defineProperties(local, {
            getters: {
                get: noNamespace ? function() {
                    return store.getters;
                } : function() {
                    return makeLocalGetters(store, namespace);
                }
            },
            state: {
                get: function() {
                    return getNestedState(store.state, path);
                }
            }
        });
        return local;
    }
    function makeLocalGetters(store, namespace) {
        if (!store._makeLocalGettersCache[namespace]) {
            var gettersProxy = {};
            var splitPos = namespace.length;
            Object.keys(store.getters).forEach(function(type) {
                // skip if the target getter is not match this namespace
                if (type.slice(0, splitPos) !== namespace) {
                    return;
                }
                // extract local getter type
                                var localType = type.slice(splitPos);
                // Add a port to the getters proxy.
                // Define as getter property because
                // we do not want to evaluate the getters in this time.
                                Object.defineProperty(gettersProxy, localType, {
                    get: function() {
                        return store.getters[type];
                    },
                    enumerable: true
                });
            });
            store._makeLocalGettersCache[namespace] = gettersProxy;
        }
        return store._makeLocalGettersCache[namespace];
    }
    function registerMutation(store, type, handler, local) {
        var entry = store._mutations[type] || (store._mutations[type] = []);
        entry.push(function wrappedMutationHandler(payload) {
            handler.call(store, local.state, payload);
        });
    }
    function registerAction(store, type, handler, local) {
        var entry = store._actions[type] || (store._actions[type] = []);
        entry.push(function wrappedActionHandler(payload) {
            var res = handler.call(store, {
                dispatch: local.dispatch,
                commit: local.commit,
                getters: local.getters,
                state: local.state,
                rootGetters: store.getters,
                rootState: store.state
            }, payload);
            if (!isPromise(res)) {
                res = Promise.resolve(res);
            }
            if (store._devtoolHook) {
                return res.catch(function(err) {
                    store._devtoolHook.emit("vuex:error", err);
                    throw err;
                });
            } else {
                return res;
            }
        });
    }
    function registerGetter(store, type, rawGetter, local) {
        if (store._wrappedGetters[type]) {
            if (process.env.NODE_ENV !== "production") {
                console.error("[vuex] duplicate getter key: " + type);
            }
            return;
        }
        store._wrappedGetters[type] = function wrappedGetter(store) {
            return rawGetter(local.state, // local state
            local.getters, // local getters
            store.state, // root state
            store.getters);
        };
    }
    function enableStrictMode(store) {
        store._vm.$watch(function() {
            return this._data.$$state;
        }, function() {
            if (process.env.NODE_ENV !== "production") {
                assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
            }
        }, {
            deep: true,
            sync: true
        });
    }
    function getNestedState(state, path) {
        return path.reduce(function(state, key) {
            return state[key];
        }, state);
    }
    function unifyObjectStyle(type, payload, options) {
        if (isObject(type) && type.type) {
            options = payload;
            payload = type;
            type = type.type;
        }
        if (process.env.NODE_ENV !== "production") {
            assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
        }
        return {
            type: type,
            payload: payload,
            options: options
        };
    }
    function install(_Vue) {
        if (Vue && _Vue === Vue) {
            if (process.env.NODE_ENV !== "production") {
                console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.");
            }
            return;
        }
        Vue = _Vue;
        applyMixin(Vue);
    }
    /**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */    var mapState = normalizeNamespace(function(namespace, states) {
        var res = {};
        if (process.env.NODE_ENV !== "production" && !isValidMap(states)) {
            console.error("[vuex] mapState: mapper parameter must be either an Array or an Object");
        }
        normalizeMap(states).forEach(function(ref) {
            var key = ref.key;
            var val = ref.val;
            res[key] = function mappedState() {
                var state = this.$store.state;
                var getters = this.$store.getters;
                if (namespace) {
                    var module = getModuleByNamespace(this.$store, "mapState", namespace);
                    if (!module) {
                        return;
                    }
                    state = module.context.state;
                    getters = module.context.getters;
                }
                return typeof val === "function" ? val.call(this, state, getters) : state[val];
            };
            // mark vuex getter for devtools
                        res[key].vuex = true;
        });
        return res;
    });
    /**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */    var mapMutations = normalizeNamespace(function(namespace, mutations) {
        var res = {};
        if (process.env.NODE_ENV !== "production" && !isValidMap(mutations)) {
            console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object");
        }
        normalizeMap(mutations).forEach(function(ref) {
            var key = ref.key;
            var val = ref.val;
            res[key] = function mappedMutation() {
                var args = [], len = arguments.length;
                while (len--) args[len] = arguments[len];
                // Get the commit method from store
                                var commit = this.$store.commit;
                if (namespace) {
                    var module = getModuleByNamespace(this.$store, "mapMutations", namespace);
                    if (!module) {
                        return;
                    }
                    commit = module.context.commit;
                }
                return typeof val === "function" ? val.apply(this, [ commit ].concat(args)) : commit.apply(this.$store, [ val ].concat(args));
            };
        });
        return res;
    });
    /**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */    var mapGetters = normalizeNamespace(function(namespace, getters) {
        var res = {};
        if (process.env.NODE_ENV !== "production" && !isValidMap(getters)) {
            console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object");
        }
        normalizeMap(getters).forEach(function(ref) {
            var key = ref.key;
            var val = ref.val;
            // The namespace has been mutated by normalizeNamespace
                        val = namespace + val;
            res[key] = function mappedGetter() {
                if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) {
                    return;
                }
                if (process.env.NODE_ENV !== "production" && !(val in this.$store.getters)) {
                    console.error("[vuex] unknown getter: " + val);
                    return;
                }
                return this.$store.getters[val];
            };
            // mark vuex getter for devtools
                        res[key].vuex = true;
        });
        return res;
    });
    /**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */    var mapActions = normalizeNamespace(function(namespace, actions) {
        var res = {};
        if (process.env.NODE_ENV !== "production" && !isValidMap(actions)) {
            console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object");
        }
        normalizeMap(actions).forEach(function(ref) {
            var key = ref.key;
            var val = ref.val;
            res[key] = function mappedAction() {
                var args = [], len = arguments.length;
                while (len--) args[len] = arguments[len];
                // get dispatch function from store
                                var dispatch = this.$store.dispatch;
                if (namespace) {
                    var module = getModuleByNamespace(this.$store, "mapActions", namespace);
                    if (!module) {
                        return;
                    }
                    dispatch = module.context.dispatch;
                }
                return typeof val === "function" ? val.apply(this, [ dispatch ].concat(args)) : dispatch.apply(this.$store, [ val ].concat(args));
            };
        });
        return res;
    });
    /**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */    var createNamespacedHelpers = function(namespace) {
        return {
            mapState: mapState.bind(null, namespace),
            mapGetters: mapGetters.bind(null, namespace),
            mapMutations: mapMutations.bind(null, namespace),
            mapActions: mapActions.bind(null, namespace)
        };
    };
    /**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */    function normalizeMap(map) {
        if (!isValidMap(map)) {
            return [];
        }
        return Array.isArray(map) ? map.map(function(key) {
            return {
                key: key,
                val: key
            };
        }) : Object.keys(map).map(function(key) {
            return {
                key: key,
                val: map[key]
            };
        });
    }
    /**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */    function isValidMap(map) {
        return Array.isArray(map) || isObject(map);
    }
    /**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */    function normalizeNamespace(fn) {
        return function(namespace, map) {
            if (typeof namespace !== "string") {
                map = namespace;
                namespace = "";
            } else if (namespace.charAt(namespace.length - 1) !== "/") {
                namespace += "/";
            }
            return fn(namespace, map);
        };
    }
    /**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */    function getModuleByNamespace(store, helper, namespace) {
        var module = store._modulesNamespaceMap[namespace];
        if (process.env.NODE_ENV !== "production" && !module) {
            console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
        }
        return module;
    }
    var index_cjs = {
        Store: Store,
        install: install,
        version: "3.4.0",
        mapState: mapState,
        mapMutations: mapMutations,
        mapGetters: mapGetters,
        mapActions: mapActions,
        createNamespacedHelpers: createNamespacedHelpers
    };
    module.exports = index_cjs;
}, /***** module 5 end *****/
/***** module 6 start *****/
/***** D:\ym_xcx\node_modules\@wepy\x\dist\index.js *****/
function(module, exports, __wepy_require) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var vuex = __wepy_require(5);
    var version = "2.0.3";
    function wepyInstall(wepy) {
        vuex.install(wepy);
        wepy.mixin({
            created: function() {
                var this$1 = this;
                var computed = this.$options.computed;
                var loop = function(k) {
                    if (computed[k].vuex) {
                        this$1.$watch(k, function() {
                            this._computedWatchers[k].evaluate();
                        }, {
                            deep: true
                        });
                    }
                };
                for (var k in computed) loop(k);
            }
        });
    }
    var index = {
        Store: vuex.Store,
        install: wepyInstall,
        version: version,
        mapState: vuex.mapState,
        mapMutations: vuex.mapMutations,
        mapGetters: vuex.mapGetters,
        mapActions: vuex.mapActions,
        createNamespacedHelpers: vuex.createNamespacedHelpers
    };
    exports.Store = vuex.Store;
    exports.mapState = vuex.mapState;
    exports.mapMutations = vuex.mapMutations;
    exports.mapGetters = vuex.mapGetters;
    exports.mapActions = vuex.mapActions;
    exports.createNamespacedHelpers = vuex.createNamespacedHelpers;
    exports.default = index;
    exports.install = wepyInstall;
    exports.version = version;
} /***** module 6 end *****/ ]);
Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = void 0;

var _tip = _interopRequireDefault(require("./../utils/tip.js"));

var _apis = require("./../request/apis.js");

var _constant = require("./../utils/constant.js");

var _util = require("./../utils/util.js");

var _moment = _interopRequireDefault(require("./../vendor.js")(4));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

var _default = {
    data: {
        stock: 1,
        //疫苗库存数,默认有苗
        st: 0,
        //当前服务器时间戳
        nowServerTime: 0
    },
    created: function created() {
        // 从缓存获取时间差
        var cache_time_diff = wx.getStorageSync("cache_time_diff") || 0;
        var cache_timezone_offset = wx.getStorageSync("cache_timezone_offset") || 0;
        if (cache_time_diff && typeof cache_time_diff == "number" && cache_time_diff > 0) {
            this.timeDiff = cache_time_diff;
        }
        if (cache_timezone_offset) {
            this.localOffset = cache_time_diff;
        }
    },
    methods: {
        /*获取疫苗详情信息*/
        getVaccineDetail: function getVaccineDetail(ms_id) {
            var self = this;
            // 从缓存获取秒杀详情数据
                        var vacDetailData = wx.getStorageSync("cache_vaccine_detail_data") ? JSON.parse(wx.getStorageSync("cache_vaccine_detail_data")) : {};
            var vacCachetime = vacDetailData && vacDetailData.cacheTime || 0;
            var cachetime = vacCachetime + 72e3 * 1e3;
            //设置缓存时间2h
                        var nowtime = Date.parse(new Date());
            // 当前时间大于缓存时间，则清空疫苗缓存数据
                        if (nowtime > cachetime) {
                wx.removeStorageSync("cache_vaccine_detail_data");
            }
            return new Promise(function(resolve, reject) {
                if (!ms_id) {
                    return _tip["default"].toast("该秒杀不存在或已结束");
                }
                // 需重新从缓存中获取数据
                                var vacDetailData = wx.getStorageSync("cache_vaccine_detail_data") ? JSON.parse(wx.getStorageSync("cache_vaccine_detail_data")) : {};
                var vacDetailArr = vacDetailData && vacDetailData.vaccineArr || [];
                if (vacDetailArr && vacDetailArr.length > 0) {
                    var inCache = false;
                    // 当前秒杀id是否在catch中
                                        var vacDetails = {};
                    // 从缓存获取详情数据
                                        for (var i = 0; i < vacDetailArr.length; i++) {
                        var item = vacDetailArr[i];
                        // 当前秒杀id详情数据是否在缓存中
                                                if (ms_id == item.id) {
                            inCache = true;
                            vacDetails = item;
                            break;
                        }
                    }
                    if (!inCache) {
                        // 从接口获取秒杀数据
                        self.getSkDetail(ms_id).then(function(res, err) {
                            resolve(res);
                        }, function(err) {
                            reject(err);
                        });
                    } else {
                        // 从缓存中获取详情数据
                        var birthdayStart = vacDetails.birthdayStart;
                        var birthdayEnd = vacDetails.birthdayEnd;
                        // 日期格式化处理
                                                if (birthdayStart) {
                            vacDetails.birthdayStartStr = (0, _moment["default"])(birthdayStart).format("YYYY年MM月DD日");
                        }
                        if (birthdayEnd) {
                            vacDetails.birthdayEndStr = (0, _moment["default"])(birthdayEnd).format("YYYY年MM月DD日");
                        }
                        self.detail = vacDetails;
                        self.loadStatus = -1;
                        //隐藏loading
                        // 停止下拉刷新
                                                wx.stopPullDownRefresh();
                        // 解析数据
                                                resolve(vacDetails);
                    }
                } else {
                    // 从接口获取秒杀数据
                    self.getSkDetail(ms_id).then(function(res, err) {
                        resolve(res);
                    }, function(err) {
                        reject(err);
                    });
                }
            })["catch"](function(error) {
                console.log(error);
                throw new Error(error);
            });
        },
        /* 从接口获取疫苗详情数据 */
        getSkDetail: function getSkDetail(id) {
            var self = this;
            return new Promise(function(resolve, reject) {
                if (!id) {
                    _tip["default"].toast("该秒杀不存在或已结束");
                    reject("该秒杀不存在或已结束");
                    return false;
                }
                // 从缓存获取秒杀详情数据
                                var vacDetailData = wx.getStorageSync("cache_vaccine_detail_data") ? JSON.parse(wx.getStorageSync("cache_vaccine_detail_data")) : {};
                var vacDetailArr = vacDetailData && vacDetailData.vaccineArr || [];
                var tempObj = {};
                var params = {
                    id: id
                };
                (0, _apis.apiSkDetail)(params).then(function(res) {
                    if (res.data.code == _constant.CODE_SUCCESS) {
                        var resData = res.data.data;
                        if (resData.vaccineDescribtion) {
                            resData.vaccineDescribtion = (0, _util.formatImgHtml)(resData.vaccineDescribtion);
                        }
                        // 日期格式化处理
                                                var birthdayStart = resData.birthdayStart;
                        var birthdayEnd = resData.birthdayEnd;
                        if (birthdayStart) {
                            resData.birthdayStartStr = (0, _moment["default"])(birthdayStart).format("YYYY年MM月DD日");
                        }
                        if (birthdayEnd) {
                            resData.birthdayEndStr = (0, _moment["default"])(birthdayEnd).format("YYYY年MM月DD日");
                        }
                        self.detail = resData;
                        vacDetailArr.push(resData);
                        // 更新当前缓存时间
                                                var time = Date.parse(new Date());
                        //当前时间
                                                tempObj.cacheTime = time;
                        tempObj.vaccineArr = vacDetailArr;
                        //缓存user_info
                                                wx.setStorage({
                            key: "cache_vaccine_detail_data",
                            data: JSON.stringify(tempObj)
                        });
                        self.loadStatus = -1;
                        //隐藏loading
                                        }
                    // 停止下拉刷新
                                        wx.stopPullDownRefresh();
                    resolve(res);
                }, function(err) {
                    // 停止下拉刷新
                    wx.stopPullDownRefresh();
                    reject(err);
                });
            });
        },
        /*检查疫苗库存*/
        skCheckstock: function skCheckstock(ms_id, callback) {
            var self = this;
            var d = new Date();
            //创建一个Date对象
                        var localTime = d.getTime();
            var nowTime = (localTime + this.localOffset) / 1e3;
            //当前本机时间（秒）转换为GMT时区
                        var nowServerTime = nowTime - this.timeDiff;
            // 当前服务器时间 = 本机时间 - 差值
                        self.nowServerTime = nowServerTime;
            // 当前服务器时间
                        return new Promise(function(resolve, reject) {
                if (!ms_id) {
                    return _tip["default"].toast("该秒杀不存在或已结束");
                }
                var params = {
                    id: ms_id
                };
                (0, _apis.apiSkCheckstock)(params).then(function(res) {
                    if (res.data.code == _constant.CODE_SUCCESS) {
                        var resData = res.data.data;
                        var st = resData.st;
                        self.st = st;
                        // 当前服务器时间戳
                                                self.stock = resData.stock;
                        // 更新库存数
                        // 处理时间格式
                                                if (st) {
                            self.nowServerTime = st / 1e3;
                            // 毫秒转为秒
                                                }
                    }
                    // 回调
                                        if (callback && typeof callback == "function") {
                        callback();
                    }
                    self.loadStatus = -1;
                    //隐藏loading
                    // 停止下拉刷新
                                        wx.stopPullDownRefresh();
                    resolve(res);
                }, function(err) {
                    reject(err);
                });
            })["catch"](function(error) {
                console.log(error);
                throw new Error(error);
            });
        }
    }
};

exports["default"] = _default;
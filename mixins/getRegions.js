Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = void 0;

var _tip = _interopRequireDefault(require("./../utils/tip.js"));

var _apis = require("./../request/apis.js");

var _constant = require("./../utils/constant.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

var _default = {
    data: {
        provinces: [],
        //所有省份数据列表
        citys: [],
        //pCode对应的城市列表
        areas: []
    },
    methods: {
        /**
     * 获取城市数据列表
     */
        getRegionsList: function getRegionsList(pCode, type) {
            var self = this;
            return new Promise(function(resolve, reject) {
                var params = {};
                var cache_provinces = wx.getStorageSync("cache_provinces") || null;
                var isReqProv = true;
                // 是否是请求省数据的接口，如果是则缓存数据
                // 是否有城市码参数
                                if (pCode && pCode != "") {
                    isReqProv = false;
                    params = {
                        parentCode: pCode
                    };
                }
                if (isReqProv && cache_provinces && cache_provinces !== null) {
                    self.provinces = cache_provinces;
                    // 从缓存中获取省份列表数据
                                        resolve(cache_provinces);
                } else {
                    // 获取省城市数据
                    (0, _apis.apiChildRegions)(params).then(function(res) {
                        if (res.data.code == _constant.CODE_SUCCESS) {
                            var resData = res.data.data;
                            // 省份数据 | 城市数据
                                                        if (isReqProv) {
                                self.provinces = resData;
                                // 省份列表数据
                                //缓存cache_provinces
                                                                wx.setStorage({
                                    key: "cache_provinces",
                                    data: resData
                                });
                            } else {
                                if (type === "region") {
                                    self.areas = resData;
                                } else {
                                    // 直辖市： 11：北京市、 12:天津市、 31:上海市、 50：重庆市 （省、市数据相同）
                                    if (pCode == "11" || pCode == "12" || pCode == "31" || pCode == "50") {
                                        var arr = [];
                                        var tempObj = {
                                            value: pCode
                                        };
                                        switch (pCode) {
                                          case "11":
                                            tempObj.name = "北京市";
                                            break;

                                          case "12":
                                            tempObj.name = "天津市";
                                            break;

                                          case "31":
                                            tempObj.name = "上海市";
                                            break;

                                          case "50":
                                            tempObj.name = "重庆市";
                                            break;
                                        }
                                        arr.push(tempObj);
                                        resData = arr;
                                        // 将省份数据复制给市
                                                                        }
                                    self.citys = resData;
                                }
                            }
                            resolve(resData);
                        }
                    }, function(err) {
                        reject(err);
                    })["catch"](function(err) {
                        console.log(err);
                        reject(err);
                    });
                }
            });
        }
    },
    created: function created() {}
};

exports["default"] = _default;
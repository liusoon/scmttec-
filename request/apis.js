Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.apiVaccineGuide = exports.apiOrderRemove = exports.apiOrderConfirm = exports.apiOrderCancel = exports.apiOrderDetails = exports.apiOrderList = exports.apiCheckDownloadUserInfoData = exports.apiFindLoginUserByKeyData = exports.apiLinkmanRelations = exports.apiLinkmanDel = exports.apiLinkmanSave = exports.apiFindByUserId = exports.apiLinkmanList = exports.apiSkSubscribe = exports.apiSkCheckstock = exports.apiSubmitDateTime = exports.apiSkDayTimes = exports.apiSkSubDays = exports.apiSkUnSub = exports.apiSkDetail = exports.apiSkList = exports.apiSkLog = exports.apiSkNow = exports.apiModifyUserMobile = exports.apiValidateCode = exports.apiWxappPhoneNumber = exports.apiWxappUserInfo = exports.wxappLogin = exports.apiChildRegions = exports.apiCities = exports.apiGeocoder = exports.apiRegions = void 0;

var _request = require("./request.js");

var _index = require("./../config/index.js");

var myqcloud = "https://adultvacc-1253522668.file.myqcloud.com";

//
var base = "/base";

//基础数据服务
var seckill = "/seckill";

//基础数据服务
var Url = {
    regions: myqcloud + "/data/regions.json",
    //三级省市区
    geocoder: base + "/region/geocoder.do",
    //根据经纬度查询城市接口
    cities: base + "/region/cities.do",
    //城市列表接口
    childRegions: base + "/region/childRegions.do",
    //城市子区域接口
    wxappLogin: "/passport/wxapp/login.do",
    wxappUserInfo: "/passport/wxapp/userInfo.do",
    wxappPhoneNumber: "/passport/wxapp/getPhoneNumber.do",
    validateCode: "/message/validate/sendValidateCode.do",
    modifyUserMobile: "/passport/user/changeUserMobile.do",
    skNow: seckill + "/seckill/now2.do",
    // now2
    skLog: seckill + "/seckill/log.do",
    // 统计点击立即秒杀按钮人数
    skList: seckill + "/seckill/list.do",
    skDetail: seckill + "/seckill/detail.do",
    skUnSub: seckill + "/seckill/uncompletedSub.do",
    skSubDays: seckill + "/seckill/subscribeDays.do",
    skDayTimes: seckill + "/seckill/dayTimes.do",
    skCheckstock: seckill + "/seckill/checkstock2.do",
    // checkstock2
    submitDateTime: seckill + "/seckill/submitDateTime.do",
    skSubscribe: seckill + "/seckill/subscribe.do",
    linkmanList: seckill + "/linkman/findByUserId.do",
    //用户联系人列表
    findByUserId: "/order/linkman/clientDetail.do",
    //用户联系人详情
    linkmanSave: seckill + "/linkman/saveOrUpdate.do",
    linkmanDel: seckill + "/linkman/delete.do",
    linkmanRelations: "/order/linkman/relations.do",
    findLoginUserByKey: "/passport/user/findLoginUserByKey.do",
    // 获取登录用户信息
    checkDownloadUserInfo: "/passport/user/checkDownloadUserInfo.do",
    //检查用户是否已导出数据
    orderList: seckill + "/seckillSubscribe/pageList.do",
    orderDetails: "/order/subscribe/clientDetail.do",
    //订单详情
    orderCancel: "/order/subscribe/cancel.do",
    orderConfirm: "/order/subscribe/confirmSubscribe.do",
    orderRemove: "/order/subscribe/remove.do",
    vaccineGuide: "/vaccine/vaccineArticle/findVaccGuidelines.do"
};

//三级省市区
var apiRegions = function apiRegions(params) {
    return (0, _request.request)(Url.regions, params);
};

/******* base *********/
// 根据经纬度查询城市接口
exports.apiRegions = apiRegions;

var apiGeocoder = function apiGeocoder(params) {
    return (0, _request.request)(_index.baseUrl + Url.geocoder, params);
};

// 根据经纬度查询城市接口
exports.apiGeocoder = apiGeocoder;

var apiCities = function apiCities(params) {
    return (0, _request.request)(_index.baseUrl + Url.cities, params);
};

// 根据经纬度查询城市接口
exports.apiCities = apiCities;

var apiChildRegions = function apiChildRegions(params) {
    return (0, _request.request)(_index.baseUrl + Url.childRegions, params);
};

/******* 登录接口 *********/
// 获取微信登录信息
exports.apiChildRegions = apiChildRegions;

var wxappLogin = function wxappLogin(params, header) {
    return (0, _request.request)(_index.baseUrl + Url.wxappLogin, params, "GET", header);
};

// 解密用户敏感数据
exports.wxappLogin = wxappLogin;

var apiWxappUserInfo = function apiWxappUserInfo(params) {
    return (0, _request.request)(_index.baseUrl + Url.wxappUserInfo, params);
};

// 解密用户手机号
exports.apiWxappUserInfo = apiWxappUserInfo;

var apiWxappPhoneNumber = function apiWxappPhoneNumber(params) {
    return (0, _request.request)(_index.baseUrl + Url.wxappPhoneNumber, params);
};

// 获取手机验证码
exports.apiWxappPhoneNumber = apiWxappPhoneNumber;

var apiValidateCode = function apiValidateCode(params) {
    return (0, _request.request)(_index.baseUrl + Url.validateCode, params);
};

// 修改手机号
exports.apiValidateCode = apiValidateCode;

var apiModifyUserMobile = function apiModifyUserMobile(params) {
    return (0, _request.request)(_index.baseUrl + Url.modifyUserMobile, params);
};

/******* 秒杀流程接口 *********/
// 秒杀秒杀当前服务器时间
exports.apiModifyUserMobile = apiModifyUserMobile;

var apiSkNow = function apiSkNow(params) {
    return (0, _request.request)(_index.baseUrl + Url.skNow, params);
};

// 统计立即秒杀人数
exports.apiSkNow = apiSkNow;

var apiSkLog = function apiSkLog(params) {
    return (0, _request.request)(_index.baseUrl + Url.skLog, params);
};

// 秒杀疫苗列表
exports.apiSkLog = apiSkLog;

var apiSkList = function apiSkList(params) {
    return (0, _request.request)(_index.baseUrl + Url.skList, params);
};

// 秒杀详情
exports.apiSkList = apiSkList;

var apiSkDetail = function apiSkDetail(params) {
    return (0, _request.request)(_index.baseUrl + Url.skDetail, params);
};

// 待处理订单
exports.apiSkDetail = apiSkDetail;

var apiSkUnSub = function apiSkUnSub(params) {
    return (0, _request.request)(_index.baseUrl + Url.skUnSub, params);
};

// 获取可预约日期
exports.apiSkUnSub = apiSkUnSub;

var apiSkSubDays = function apiSkSubDays(params) {
    return (0, _request.request)(_index.baseUrl + Url.skSubDays, params);
};

// 获取可预约时间段
exports.apiSkSubDays = apiSkSubDays;

var apiSkDayTimes = function apiSkDayTimes(params) {
    return (0, _request.request)(_index.baseUrl + Url.skDayTimes, params);
};

// 提交接种日期和时间段
exports.apiSkDayTimes = apiSkDayTimes;

var apiSubmitDateTime = function apiSubmitDateTime(params) {
    return (0, _request.request)(_index.baseUrl + Url.submitDateTime, params);
};

// 检查库存
exports.apiSubmitDateTime = apiSubmitDateTime;

var apiSkCheckstock = function apiSkCheckstock(params) {
    return (0, _request.request)(_index.baseUrl + Url.skCheckstock, params);
};

// 秒杀下单
exports.apiSkCheckstock = apiSkCheckstock;

var apiSkSubscribe = function apiSkSubscribe(params, header) {
    return (0, _request.request)(_index.baseUrl + Url.skSubscribe, params, "GET", header);
};

/******* 联系人接口 *********/
// 查询用户联系人列表
exports.apiSkSubscribe = apiSkSubscribe;

var apiLinkmanList = function apiLinkmanList(params) {
    return (0, _request.request)(_index.baseUrl + Url.linkmanList, params);
};

// 查询用户详细信息
exports.apiLinkmanList = apiLinkmanList;

var apiFindByUserId = function apiFindByUserId(params) {
    return (0, _request.request)(_index.baseUrl + Url.findByUserId, params);
};

// 保存用户联系人列表
exports.apiFindByUserId = apiFindByUserId;

var apiLinkmanSave = function apiLinkmanSave(params) {
    return (0, _request.request)(_index.baseUrl + Url.linkmanSave, params);
};

// 删除用户联系人列表
exports.apiLinkmanSave = apiLinkmanSave;

var apiLinkmanDel = function apiLinkmanDel(params) {
    return (0, _request.request)(_index.baseUrl + Url.linkmanDel, params);
};

// 与本人关系列表
exports.apiLinkmanDel = apiLinkmanDel;

var apiLinkmanRelations = function apiLinkmanRelations(params) {
    return (0, _request.request)(_index.baseUrl + Url.linkmanRelations, params);
};

// 获取个人用户信息
exports.apiLinkmanRelations = apiLinkmanRelations;

var apiFindLoginUserByKeyData = function apiFindLoginUserByKeyData(params) {
    return (0, _request.request)(_index.baseUrl + Url.findLoginUserByKey, params);
};

// 检查用户期限内是否已导过数据
exports.apiFindLoginUserByKeyData = apiFindLoginUserByKeyData;

var apiCheckDownloadUserInfoData = function apiCheckDownloadUserInfoData(params) {
    return (0, _request.request)(_index.baseUrl + Url.checkDownloadUserInfo, params);
};

/******* 订单接口 *********/
// 我的订单列表
exports.apiCheckDownloadUserInfoData = apiCheckDownloadUserInfoData;

var apiOrderList = function apiOrderList(params) {
    return (0, _request.request)(_index.baseUrl + Url.orderList, params);
};

// 订单详情
exports.apiOrderList = apiOrderList;

var apiOrderDetails = function apiOrderDetails(params) {
    return (0, _request.request)(_index.baseUrl + Url.orderDetails, params);
};

// 订单取消
exports.apiOrderDetails = apiOrderDetails;

var apiOrderCancel = function apiOrderCancel(params) {
    return (0, _request.request)(_index.baseUrl + Url.orderCancel, params);
};

// 订单确认
exports.apiOrderCancel = apiOrderCancel;

var apiOrderConfirm = function apiOrderConfirm(params) {
    return (0, _request.request)(_index.baseUrl + Url.orderConfirm, params);
};

// 订单删除
exports.apiOrderConfirm = apiOrderConfirm;

var apiOrderRemove = function apiOrderRemove(params) {
    return (0, _request.request)(_index.baseUrl + Url.orderRemove, params);
};

// 接种需知
exports.apiOrderRemove = apiOrderRemove;

var apiVaccineGuide = function apiVaccineGuide(params) {
    return (0, _request.request)(_index.baseUrl + Url.vaccineGuide, params);
};

exports.apiVaccineGuide = apiVaccineGuide;
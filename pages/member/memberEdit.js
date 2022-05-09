var _core = _interopRequireDefault(require("./../../vendor.js")(1));

var _tip = _interopRequireDefault(require("./../../utils/tip.js"));

var _constant = require("./../../utils/constant.js");

var _util = require("./../../utils/util.js");

var _apis = require("./../../request/apis.js");

var _getRegions = _interopRequireDefault(require("./../../mixins/getRegions.js"));

var _moment = _interopRequireDefault(require("./../../vendor.js")(4));

var _data;

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

_core["default"].page({
    config: {},
    hooks: {
        // Page 级别 hook, 只对当前 Page 的 setData 生效。
        "before-setData": function beforeSetData(dirty) {
            dirty.time = +new Date();
            return dirty;
        }
    },
    mixins: [ _getRegions["default"] ],
    data: (_data = {
        loadStatus: 3,
        isFirstFill: false,
        // 是否初次填写，初次填写默认为本人，不显示与本人关系输入框
        isEdit: false,
        //是否编辑
        mem_id: 0,
        isAgree: false,
        date: "2016-09-01",
        radioItems: [ {
            name: "男",
            sex: "1",
            checked: false
        }, {
            name: "女",
            sex: "2",
            checked: true
        } ],
        relations: [],
        relationIndex: "",
        certIndex: 0,
        certTypes: [ 1, 2, 3, 4, 5 ],
        // 证件类型1-身份证 2-港澳台居民居住证 3-外国人永久居住证 4-出生证明 5-护照
        customItem: "",
        tipsFlag: false,
        isAnalyseIdCard: false,
        // 是否解析身份证号码（包含港澳台身份证、内陆身份证）需要根据身份证解析生日、性别
        membersList: [],
        member: {
            id: null,
            userId: null,
            name: "",
            idCardType: 1,
            idCardNo: "",
            birthday: "",
            regionCode: [],
            address: "",
            sex: 2,
            //默认选中女
            isDefault: 0,
            // 默认不选中
            relationType: "",
            epsName: "",
            epsIdCardNo: "",
            epsAddress: ""
        },
        endDate: "",
        region: "",
        //所在地区
        value: [ 0, 0, 0 ],
        // 地址选择器省市区 暂存 currentIndex
        // regionValue: [0, 0, 0], // 地址选择器省市区 最终 currentIndex
        // regionCode: '', // 地址选择器省市区code
        // citys: [], // 当前地址对应的所有城市数据
        // areas: [], // 当前地址对应的所有区、县数据
        visible: false,
        isCanConfirm: true,
        //是否禁止在第一列滚动期间点击确定提交数据
        provinces: [],
        // 所有省份数据
        citys: [],
        // 当前地址对应的所有城市数据
        areas: [],
        // 当前地址对应的所有区、县数据
        showDialog: false
    }, _defineProperty(_data, "isAgree", false), _defineProperty(_data, "submitFlag", false), 
    _defineProperty(_data, "showEpsNameInput", false), _defineProperty(_data, "showEpsIdInput", false), 
    _defineProperty(_data, "showEpsAddressInput", false), _defineProperty(_data, "nameInputFocus", false), 
    _defineProperty(_data, "idInputFocus", false), _defineProperty(_data, "addressInputFocus", false), 
    _data),
    otherData: {
        regionValue: [ 0, 0, 0 ],
        // 地址选择器省市区 最终 currentIndex
        regionCode: ""
    },
    computed: {},
    onLoad: function onLoad(options) {
        var self = this;
        // 是否已填写默认用户信息
                var isFillDefaultUser = wx.getStorageSync("cache_fill_default_user") || null;
        // 是否初次添加联系人
                if (options.isFirst && options.isFirst === "true" || isFillDefaultUser && isFillDefaultUser == "false") {
            this.isFirstFill = true;
            this.member.isDefault = 1;
            // 初次填写的信息联系人，自动为默认联系人
                        wx.setNavigationBarTitle({
                title: "完善个人信息"
            });
        }
        // 获取今日日期
                this.endDate = (0, _moment["default"])(new Date()).format("YYYY-MM-DD");
        // 获取联系人关系
                this.getLinkmanRelations();
        // 获取成员列表
                this.getDefaultMember();
        // 成员id
                var id = options.id || null;
        if (id && id != null) {
            this.mem_id = id;
            this.isEdit = true;
            // 获取成员详情信息
                        this.getMemberInfo();
        } else {
            //获取默认（北京）省、市、区城市联动数据
            this.getLinkageData();
            setTimeout(function() {
                self.loadStatus = -1;
            }, 500);
        }
    },
    methods: {
        /*获取城市数据*/
        getLinkageData: function getLinkageData(pId, cId) {
            var self = this;
            return new Promise(function(resolve, reject) {
                var provId = pId && +pId > 0 ? pId : "11";
                //默认选择北京省数据
                                var cityId = cId && +cId > 0 ? cId : "1101";
                //默认选择北京市数据
                                self.citys = [];
                self.areas = [];
                // 获取省份数据
                                self.getRegionsList().then(function(res) {
                    // 获取city_id获取对应城市列表数据
                    self.getRegionsList(provId).then(function(res) {
                        self.lastCitys = res;
                        // 获取region_id获取对应区域列表数据
                                                self.getRegionsList(cityId, "region").then(function(res) {
                            self.lastAreas = res;
                            resolve(res);
                        });
                    });
                });
            });
        },
        /*获取当前成员信息*/
        getMemberInfo: function getMemberInfo() {
            var _this = this;
            var self = this;
            var params = {
                id: this.mem_id
            };
            // 通过id查询用户信息
                        (0, _apis.apiFindByUserId)(params).then(function(res) {
                var self = _this;
                if (res.data.code == _constant.CODE_SUCCESS) {
                    var resData = res.data.data;
                    var idCardType = resData.idCardType, relationType = resData.relationType, idCardNo = resData.idCardNo, birthday = resData.birthday, name = resData.name, address = resData.address;
                    // 关系值回显
                                        var idx = self.relations.indexOf(relationType);
                    if (idx !== -1) {
                        self.relationIndex = idx;
                    }
                    // 身份证类型回显
                                        var idx2 = self.certTypes.indexOf(idCardType);
                    if (idx2 !== -1) {
                        self.certIndex = idx2;
                    }
                    // 通过身份证获取生日日期
                                        if (idCardNo && (idCardType == 1 || idCardType == 2 || !idCardType)) {
                        // 证件类型为身份证或港澳台居住证, 需解析生日与性别
                        _this.isAnalyseIdCard = true;
                        var birthdayStr = (0, _util.IdCardAnalysis)(idCardNo, 1);
                        // 根据身份证解析出生日日期
                                                resData.birthday = (0, _moment["default"])(birthdayStr).format("YYYY/MM/DD");
                        resData.sex = (0, _util.IdCardAnalysis)(idCardNo, 2);
                        // 根据身份证解析出性别
                                        } else {
                        _this.isAnalyseIdCard = false;
                        // 生日日期格式化
                                                if (birthday) {
                            resData.birthday = (0, _moment["default"])(birthday).format("YYYY/MM/DD");
                        } else {
                            resData.birthday = "";
                        }
                    }
                    // 名字、身份证、地址等数据展示加密
                                        var epsName = "", epsIdCardNo = "", epsAddress = "";
                    if (name) {
                        var nameLen = name.length;
                        if (nameLen == 1) {
                            epsName = "*";
                        } else if (nameLen == 2) {
                            epsName = "*" + name.substring(nameLen, 1);
                        } else if (nameLen > 2) {
                            epsName = (0, _util.strMiddleEllipsis)(name);
                        }
                        self.showEpsNameInput = true;
                    }
                    if (idCardNo) {
                        epsIdCardNo = (0, _util.strMiddleEllipsis)(idCardNo);
                        self.showEpsIdInput = true;
                    }
                    if (address) {
                        epsAddress = "******";
                        self.showEpsAddressInput = true;
                    }
                    self.member = Object.assign({}, self.member, resData, {
                        epsName: epsName,
                        epsIdCardNo: epsIdCardNo,
                        epsAddress: epsAddress
                    });
                    // 城市地区code字符串格式化
                                        var regionCode = resData.regionCode;
                    if (regionCode && regionCode != "") {
                        self.regionCode = regionCode;
                        // 地区区域码
                        // 根据regionCode 回显地址
                                                self.codeToAddress(regionCode);
                    } else {
                        //如果联系人没有regionCode,预获取默认（北京）省、市、区城市联动数据
                        self.getLinkageData();
                        self.loadStatus = -1;
                        // 隐藏loading动图
                                        }
                }
            });
        },
        /*获取成员关系列表*/
        getLinkmanRelations: function getLinkmanRelations() {
            var self = this;
            var LinkmanRelations = wx.getStorageSync("LinkmanRelations") || null;
            if (LinkmanRelations && LinkmanRelations !== null) {
                this.relations = LinkmanRelations;
            } else {
                // 通过id查询用户信息
                (0, _apis.apiLinkmanRelations)().then(function(res) {
                    if (res.data.code == _constant.CODE_SUCCESS) {
                        var resData = res.data.data;
                        if (resData && resData.length > 0) {
                            var arr = [];
                            resData.forEach(function(item, index) {
                                arr.push(item.relationType);
                            });
                            self.relations = arr;
                            wx.setStorageSync("LinkmanRelations", arr);
                        }
                    }
                });
            }
        },
        /**
     * 获取家庭成员列表
     */
        getDefaultMember: function getDefaultMember() {
            var self = this;
            var memberList = wx.getStorageSync("memberList") || null;
            if (memberList && memberList != null) {
                self.membersList = memberList;
            } else {
                // axios 获取联系人
                (0, _apis.apiLinkmanList)().then(function(res) {
                    if (res.data.code == _constant.CODE_SUCCESS) {
                        var list = res.data.data;
                        var len = list.length;
                        if (list && len > 0) {
                            list.forEach(function(item, i) {
                                item.birthday = (0, _moment["default"])(item.birthday).format("YYYY/MM/DD");
                            });
                            self.membersList = list;
                            // 存储成员列表
                                                        wx.setStorageSync("memberList", list);
                        }
                    }
                })["catch"](function(err) {
                    console.log(err);
                });
            }
        },
        /*验证证件格式*/
        verifyId: function verifyId() {
            // let id_reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            var _this$member = this.member, idCardNo = _this$member.idCardNo, idCardType = _this$member.idCardType;
            // 证件类型-必填
                        if (!idCardType) {
                return _tip["default"].toast("请选择证件类型");
            }
            // 证件类型-必填
                        if (!idCardNo) {
                this.isAnalyseIdCard = false;
                return _tip["default"].toast("证件号码不能为空");
            }
            // 证件类型-证件号码联合正则
                        var cardTypeWithNo = "".concat(idCardType, "_").concat(idCardNo);
            // 证件号码正则
                        var regLists = [ /^[1]_((\d{18})|(\d{17}[1-10|X|x]))$/, /^[2]_((\d{18})|(\d{17}[1-10|X|x]))$/, /^[3]_([a-zA-Z]{3}\d{12})$/, /^[4]_([a-zA-Z]\d{9})$/, /^[5]_((?![a-zA-Z]+$)[0-9A-Za-z]{8,9})$/ ];
            var index = regLists.findIndex(function(item) {
                return item.test(cardTypeWithNo);
            });
            if (index > -1) {
                if (idCardType == 1 || idCardType == 2) {
                    this.isAnalyseIdCard = true;
                }
                return true;
            } else {
                this.isAnalyseIdCard = false;
                _tip["default"].toast("证件号码格式错误");
                return false;
            }
        },
        // 处理身份证input失焦事件
        handleBlur: function handleBlur() {
            var _this$member2 = this.member, idCardType = _this$member2.idCardType, idCardNo = _this$member2.idCardNo;
            // 证件类型为身份证或港澳台居住证, 需解析生日与性别
                        if (idCardType == 1 || idCardType == 2) {
                if (this.verifyId()) {
                    var birthdayStr = (0, _util.IdCardAnalysis)(idCardNo, 1);
                    // 根据身份证解析出生日日期
                                        this.member.birthday = (0, _moment["default"])(birthdayStr).format("YYYY/MM/DD");
                    this.member.sex = (0, _util.IdCardAnalysis)(idCardNo, 2);
                    // 根据身份证解析出性别
                                }
            }
        },
        /*绑定日期改变事件*/
        bindDateChange: function bindDateChange(e) {
            if (this.isAnalyseIdCard) return false;
            var birthday = e.$wx.detail.value;
            birthday = (0, _moment["default"])(birthday).format("YYYY/MM/DD");
            this.member.birthday = birthday;
        },
        /*绑定性别改变事件*/
        bindSexChange: function bindSexChange(m) {
            if (this.isAnalyseIdCard) return false;
            this.member.sex = m.sex;
        },
        /*绑定与本人关系事件*/
        bindRelationChange: function bindRelationChange(e) {
            var index = e.$wx.detail.value;
            this.relationIndex = index;
            this.member.relationType = this.relations[index];
        },
        /*绑定证件类型事件*/
        bindCertTypeChange: function bindCertTypeChange(e) {
            var index = e.$wx.detail.value;
            if (index == this.certIndex) return false;
            this.certIndex = index;
            this.member.idCardType = this.certTypes[index];
            this.member.idCardNo = "";
            // 证件类型非 身份证| 港澳台居住证，需清空已关联的性别、生日信息
                        if (this.idCardType != 1 && this.idCardType != 2) {
                this.member.birthday = "";
                this.member.sex = 2;
                // 默认选中女
                                this.isAnalyseIdCard = false;
            }
        },
        /*处理删除*/
        handleDel: function handleDel() {
            var self = this;
            var params = {
                id: this.mem_id
            };
            // 通过id删除用户联系人
                        (0, _apis.apiLinkmanDel)(params).then(function(res) {
                if (res.data.code == _constant.CODE_SUCCESS) {
                    self.member = [];
                    // 重置数据
                    //成员信息已变更，删除缓存成员列表信息
                                        try {
                        wx.removeStorageSync("memberList");
                        wx.removeStorageSync("defaultMember");
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.log(e);
                    }
                    _tip["default"].success("刪除成功");
                    // 否=> 返回上一页
                                        setTimeout(function() {
                        wx.navigateBack({
                            delta: 1,
                            success: function success() {
                                //Tip.success('刪除成功');
                                var page = getCurrentPages().pop();
                                if (page == undefined || page == null) return;
                                page.onLoad(page.options);
                            },
                            fail: function fail() {
                                // 没有上一页，则回首页
                                self.routeToHome();
                            }
                        });
                    }, 1500);
                }
            });
        },
        /*切换默认*/
        toggleDefault: function toggleDefault() {
            var isDefault = this.member.isDefault;
            if (isDefault && isDefault == 1) {
                this.member.isDefault = 0;
            } else {
                this.member.isDefault = 1;
            }
        },
        /*判断该联系人是否已存在 比较name, birthday, regionCode, sex值*/
        isUserExist: function isUserExist(member) {
            var self = this;
            var membersList = this.membersList;
            var len = membersList.length;
            var flag = true;
            var format = "YYYY/MM/DD";
            // 当前成员的用户信息
                        var userId1 = Number(member.id) || null;
            var birthday1 = (0, _moment["default"])(member.birthday).format(format).trim();
            var name1 = member.name.trim();
            var regionCode1 = Number(self.regionCode);
            var sex1 = Number(member.sex);
            if (member && membersList && len > 0) {
                for (var i = 0; i < len; i++) {
                    var item = membersList[i];
                    // 列表成员的用户信息
                                        var userId2 = Number(item.id);
                    var birthday2 = (0, _moment["default"])(item.birthday).format(format).trim();
                    var name2 = item.name.trim();
                    var regionCode2 = Number(item.regionCode);
                    var sex2 = Number(item.sex);
                    if (userId1 != userId2 && name1 === name2 && birthday1 === birthday2 && regionCode1 === regionCode2 && sex1 === sex2) {
                        _tip["default"].toast("该接种人已存在");
                        flag = false;
                        break;
                    }
                }
            }
            return flag;
        },
        /*处理提交*/
        handleSubmit: function handleSubmit() {
            var self = this;
            //let mem_id = this.mem_id;
                        var regionCode = this.regionCode;
            var _birthday = "";
            this.submitFlag = true;
            // 防止提交按钮重复点击
            // 参数
                        var _this$member3 = this.member, name = _this$member3.name, sex = _this$member3.sex, isDefault = _this$member3.isDefault, relationType = _this$member3.relationType, address = _this$member3.address, idCardType = _this$member3.idCardType, idCardNo = _this$member3.idCardNo, birthday = _this$member3.birthday;
            if (birthday && birthday != "") {
                _birthday = (0, _moment["default"])(birthday).format("YYYY-MM-DD");
                // 后台接收YYYY-MM-DD格式的日期数据
                        }
            var name_reg = /^[\u4E00-\u9FA5a-zA-Z0-9-_·.]{1,40}$/;
            //用户名称正则
                        if (!name_reg.test(name)) {
                this.submitFlag = false;
                return _tip["default"].toast("姓名格式填写错误");
            }
            // 证件格式正则验证
                        if (!self.verifyId()) {
                this.submitFlag = false;
                return false;
            }
            if ((0, _util.isEmpty)(_birthday)) {
                this.submitFlag = false;
                return _tip["default"].toast("请选择您的出生日期");
            }
            // 初次填写，本人关系非必填
                        if (!self.isFirstFill) {
                if (relationType == "") {
                    this.submitFlag = false;
                    return _tip["default"].toast("请选择与本人关系");
                }
            }
            if ((0, _util.isEmpty)(regionCode)) {
                this.submitFlag = false;
                return _tip["default"].toast("请选择您的居住地址");
            }
            // 年龄判断
                        if (birthday) {
                var userAge = (0, _util.dateToAges)(birthday);
                // 计算当前年龄
                                if (userAge < 14) {
                    self.showDialog = true;
                    return false;
                }
            }
            // 检查联系人是否存在
                        if (!self.isUserExist(this.member)) {
                this.submitFlag = false;
                return false;
            }
            // 保存联系人信息
                        this.saveLinkman();
        },
        // 保存联系人信息
        saveLinkman: function saveLinkman() {
            var _this2 = this;
            var self = this;
            var regionCode = this.regionCode;
            var mem_id = this.mem_id;
            var _birthday = "";
            _tip["default"].loading("提交中");
            // 参数
                        var _this$member4 = this.member, name = _this$member4.name, sex = _this$member4.sex, isDefault = _this$member4.isDefault, relationType = _this$member4.relationType, address = _this$member4.address, idCardType = _this$member4.idCardType, idCardNo = _this$member4.idCardNo, birthday = _this$member4.birthday;
            if (birthday && birthday != "") {
                _birthday = (0, _moment["default"])(birthday).format("YYYY-MM-DD");
                // 后台接收YYYY-MM-DD格式的日期数据
                        }
            var params = Object.assign({}, {
                name: name,
                sex: sex,
                birthday: _birthday,
                isDefault: isDefault,
                relationType: relationType,
                idCardNo: idCardNo,
                idCardType: idCardType,
                address: address
            }, {
                regionCode: regionCode
            });
            if (mem_id && mem_id > 0) {
                params.id = mem_id;
            }
            // 首次填写个人信息时，默认关系为本人
                        if (self.isFirstFill) {
                params.relationType = 1;
                // 1:本人
                        }
            // 保存or更新用户信息
                        (0, _apis.apiLinkmanSave)(params).then(function(res) {
                _tip["default"].loaded();
                //隐藏加载提示语
                                if (res.data.code == _constant.CODE_SUCCESS) {
                    //成员信息已变更，删除缓存成员列表信息
                    try {
                        wx.removeStorageSync("memberList");
                        wx.removeStorageSync("defaultMember");
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.log(e);
                    }
                    // 是否是登录流程进入
                    // if (self.isFirstFill) {
                    //    // 是=> 去首页
                    //    self.routeToHome();
                    //    return false;
                    // }
                                        _tip["default"].success("保存成功");
                    // 否=> 返回上一页
                                        setTimeout(function() {
                        wx.navigateBack({
                            delta: 1,
                            // 如果 delta 大于现有页面数，则返回到首页
                            success: function success() {//Tip.success('保存成功');
                            },
                            fail: function fail() {
                                // 没有上一页，则回首页
                                self.routeToHome();
                            }
                        });
                    }, 1500);
                }
                setTimeout(function() {
                    _this2.submitFlag = false;
                }, 1500);
            })["catch"](function(err) {
                _tip["default"].loaded();
                _this2.submitFlag = false;
                console.log(err);
            });
        },
        // 回首页
        routeToHome: function routeToHome() {
            wx.switchTab({
                url: "/pages/index",
                success: function success(e) {
                    _tip["default"].success("操作成功");
                    var page = getCurrentPages().pop();
                    if (page == undefined || page == null) return;
                    page.onLoad(page.options);
                }
            });
        },
        /**** 选择城市地区*****/
        // 关闭pop弹框
        closePopUp: function closePopUp() {
            this.visible = false;
        },
        // 显示pop弹框
        pickAddress: function pickAddress() {
            this.visible = true;
            this.value = this.regionValue;
        },
        // 处理省市县联动
        cityChange: function cityChange(e) {
            var self = this;
            var lastValue = self.value || [ 0, 0, 0 ];
            var value = e.$wx.detail.value || [ 0, 0, 0 ];
            var pIdx = value[0] || 0;
            var cIdx = value[1] || 0;
            var aIdx = value[2] || 0;
            if (lastValue[0] == pIdx) {
                // 省份未变更，只更新城市接口数据
                if (self.citys[cIdx]) {
                    // 当前选中的城市id (默认为城市第一个)
                    var city_id = self.citys[cIdx].value;
                    // 当前城市获取对应的区域列表数据
                                        self.getRegionsList(city_id, "region");
                }
            } else {
                // 省份已更新，省份、城市接口数据均需更新
                var prov_id = self.provinces[pIdx].value;
                // 当前省id
                                if (prov_id && prov_id > 0) {
                    // 当前id对应的城市列表数据
                    self.getRegionsList(prov_id).then(function(res) {
                        if (self.citys[cIdx]) {
                            // 当前选中的城市id (默认为城市第一个)
                            var city_id = self.citys[cIdx].value;
                            // 当前城市获取对应的区域列表数据
                                                        self.getRegionsList(city_id, "region");
                        }
                    });
                }
            }
            this.value = value;
        },
        // 点击地区选择取消按钮
        cityCancel: function cityCancel(e) {
            this.citys = this.lastCitys;
            this.areas = this.lastAreas;
            this.value = this.regionValue || [ 0, 0, 0 ];
            this.visible = false;
        },
        chooseStart: function chooseStart(e) {
            this.isCanConfirm = false;
        },
        chooseEnd: function chooseEnd(e) {
            this.isCanConfirm = true;
        },
        // 点击地区选择确定按钮
        citySure: function citySure(e) {
            if (this.isCanConfirm) {
                var value = this.value || [ 0, 0, 0 ];
                var pIdx = value[0] || 0;
                var cIdx = value[1] || 0;
                var aIdx = value[2] || 0;
                this.visible = false;
                // 将选择的城市信息显示到输入框
                                var region = (this.provinces[pIdx].name || "") + (this.citys[cIdx].name || "");
                if (this.areas.length > 0) {
                    var curArea = this.areas[aIdx];
                    this.regionCode = curArea.value;
                    region = region + curArea.name || "";
                } else {
                    this.regionCode = this.citys[cIdx].value + "01";
                    //无区域列表，则取当前选中城市的code+'01'
                                }
                this.region = region;
                // 城市区域地址
                                this.lastCitys = this.citys;
                this.lastAreas = this.areas;
                this.regionValue = this.value;
            }
        },
        // 根据地区码推算城市码、省份码
        codeToAddress: function codeToAddress(regionCode) {
            var self = this;
            var idxArr = [];
            var region = "";
            if (!regionCode || regionCode.length < 4) {
                //如果联系人regionCode无效,预获取默认（北京）省、市、区城市联动数据
                self.getLinkageData();
                self.loadStatus = -1;
                //Tip.toast('无效的regionCode');
                                return false;
            }
            var pId = regionCode.substring(0, 2);
            //解析省id
                        var cId = regionCode.substring(0, 4);
            //解析城市id
            //直辖市： 11： 北京市、 12: 天津市、 31: 上海市、 50： 重庆市（ 省、 市数据相同）
                        if (pId == "11" || pId == "12" || pId == "31" || pId == "50") {
                cId = pId;
            }
            // 当前城市获取对应的区域列表数据
                        self.getLinkageData(pId, cId).then(function(res) {
                var provinces = self.provinces;
                provinces.forEach(function(prov, index) {
                    if (prov.value == pId) {
                        idxArr.push(index);
                        region += prov.name || "";
                        var citys = self.citys;
                        //全国城市数据
                                                citys.forEach(function(city, idx) {
                            if (city.value == cId) {
                                idxArr.push(idx);
                                region += city.name || "";
                                var areas = self.areas;
                                //全国城市数据
                                                                if (areas.length > 0) {
                                    areas.forEach(function(area, i) {
                                        if (area.value == regionCode) {
                                            idxArr.push(i);
                                            region += area.name || "";
                                        }
                                    });
                                } else {
                                    idxArr.push(0);
                                }
                                self.regionValue = self.value = idxArr;
                                // 省、城市、区域地址index值数组
                                                                self.region = region;
                                // 省、城市、区域地址名
                                                                self.loadStatus = -1;
                            }
                        });
                    }
                });
            });
        },
        // 点击清空input内容
        onClick: function onClick(e, type) {
            var self = this;
            if (!e) return false;
            if (!type) return false;
            switch (type) {
              case "name":
                this.showEpsNameInput = false;
                this.member.name = "";
                this.member.epsName = "";
                setTimeout(function() {
                    self.nameInputFocus = true;
                }, 300);
                break;

              case "idCardNo":
                this.showEpsIdInput = false;
                this.member.idCardNo = "";
                this.member.epsIdCardNo = "";
                setTimeout(function() {
                    self.idInputFocus = true;
                }, 300);
                break;

              case "address":
                this.showEpsAddressInput = false;
                this.member.address = "";
                this.member.epsAddress = "";
                setTimeout(function() {
                    self.addressInputFocus = true;
                }, 300);
                break;
            }
        },
        // 处理确定
        handleConfirm: function handleConfirm(val) {
            if (!this.isAgree) {
                return _tip["default"].toast("请先同意协议内容");
            }
            this.showDialog = false;
            // 保存联系人信息
                        this.saveLinkman();
        },
        //处理取消
        handleCancel: function handleCancel() {
            this.showDialog = false;
            this.submitFlag = false;
        }
    }
}, {
    info: {
        components: {
            "pop-up": {
                path: "./../../components/popup/popup"
            },
            loadmore: {
                path: "./../../components/loadmore/loadmore"
            },
            dialog: {
                path: "./../../components/dialog/dialog"
            }
        },
        on: {
            "23-8": [ "close" ],
            "23-19": [ "onConfirm", "onCancel" ]
        }
    },
    handlers: {
        "23-0": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var _vm = this;
                return function() {
                    _vm.onClick($event, "name");
                }();
            }
        },
        "23-1": {
            change: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.bindCertTypeChange.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "23-2": {
            blur: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.handleBlur.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "23-3": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var _vm = this;
                return function() {
                    _vm.onClick($event, "idCardNo");
                }();
            }
        },
        "23-4": {
            tap: function proxy(m) {
                var _vm = this;
                return function() {
                    _vm.bindSexChange(m);
                }();
            }
        },
        "23-5": {
            change: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.bindDateChange.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "23-6": {
            change: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.bindRelationChange.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "23-7": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.pickAddress.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "23-8": {
            close: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.closePopUp.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "23-9": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.cityCancel.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "23-10": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.citySure.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "23-11": {
            change: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.cityChange.apply(_vm, $args || [ $event ]);
                }();
            },
            pickstart: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.chooseStart.apply(_vm, $args || [ $event ]);
                }();
            },
            pickend: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.chooseEnd.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "23-14": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var _vm = this;
                return function() {
                    _vm.onClick($event, "address");
                }();
            }
        },
        "23-15": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.toggleDefault.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "23-16": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.handleSubmit.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "23-17": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.handleDel.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "23-18": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.handleSubmit.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "23-19": {
            onConfirm: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.handleConfirm.apply(_vm, $args || [ $event ]);
                }();
            },
            onCancel: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.handleCancel.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "23-21": {
            tap: function proxy() {
                var _vm = this;
                return function() {
                    _vm.isAgree = !_vm.isAgree;
                }();
            }
        }
    },
    models: {
        3: {
            type: "input",
            expr: "member.name",
            handler: function set($v) {
                var _vm = this;
                _vm.$set(_vm.member, "name", $v);
            }
        },
        4: {
            type: "input",
            expr: "member.epsName",
            handler: function set($v) {
                var _vm = this;
                _vm.$set(_vm.member, "epsName", $v);
            }
        },
        5: {
            type: "input",
            expr: "member.idCardNo",
            handler: function set($v) {
                var _vm = this;
                _vm.$set(_vm.member, "idCardNo", $v);
            }
        },
        6: {
            type: "input",
            expr: "member.epsIdCardNo",
            handler: function set($v) {
                var _vm = this;
                _vm.$set(_vm.member, "epsIdCardNo", $v);
            }
        },
        7: {
            type: "input",
            expr: "member.address",
            handler: function set($v) {
                var _vm = this;
                _vm.$set(_vm.member, "address", $v);
            }
        },
        8: {
            type: "input",
            expr: "member.epsAddress",
            handler: function set($v) {
                var _vm = this;
                _vm.$set(_vm.member, "epsAddress", $v);
            }
        }
    },
    refs: undefined
});
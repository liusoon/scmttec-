Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = void 0;

var _tip = _interopRequireDefault(require("./../utils/tip.js"));

var _apis = require("./../request/apis.js");

var _constant = require("./../utils/constant.js");

var _moment = _interopRequireDefault(require("./../vendor.js")(4));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

var _default = {
    data: {
        isShowMemberList: false,
        sexOk: true,
        //性别是否符合
        regionOk: true,
        //区域是否符合
        ageOk: true,
        //年龄是否符合
        membersList: [],
        defaultMember: {},
        haveCardNo: true,
        idNumber: ""
    },
    methods: {
        /**
     * 获取家庭成员列表
     */
        getDefaultMember: function getDefaultMember() {
            var self = this;
            var hasDefaultMember = false;
            //初始没有默认接种人
                        var memberList = wx.getStorageSync("memberList") || null;
            var defaultMember = wx.getStorageSync("defaultMember") || null;
            // 已设置的默认成员
                        var tickedMember = wx.getStorageSync("tickedMember") || null;
            // 已选中的成员
                        this.haveCardNo = true;
            //重置数据
                        if (memberList && memberList != null && defaultMember && defaultMember != null) {
                // 从存储中取选中成员信息(选中成员优先、默认成员其次)
                if (tickedMember) {
                    defaultMember = tickedMember;
                }
                this.defaultMember = defaultMember;
                this.isMatchAge(defaultMember.birthday);
                this.isMatchSex(defaultMember.sex);
                this.isMatchRegion(defaultMember.regionCode);
                this.hasDefaultMember = true;
                // 格式化成员列表数据
                                this.setMembersList(memberList);
                // 接种人是否有身份证信息
                                if (!defaultMember.idCardNo || defaultMember.idCardNo == "") {
                    this.haveCardNo = false;
                }
            } else {
                // axios 获取联系人
                (0, _apis.apiLinkmanList)().then(function(res) {
                    if (res.data.code == _constant.CODE_SUCCESS) {
                        var list = res.data.data;
                        var len = list.length;
                        var isDefault = false;
                        var _defaultMember = null;
                        if (list && len > 0) {
                            list.forEach(function(item, i) {
                                item.birthday = (0, _moment["default"])(item.birthday).format("YYYY/MM/DD");
                                // 更新当前选中成员信息 (当前选中成员完善证件信息后同步缓存数据)
                                                                if (tickedMember && tickedMember.id == item.id) {
                                    tickedMember = item;
                                    _defaultMember = item;
                                    hasDefaultMember = true;
                                    wx.setStorage({
                                        key: "tickedMember",
                                        data: item
                                    });
                                }
                                // 没有选中成员，取默认联系人为选中人
                                                                if (!hasDefaultMember && item.isDefault == 1) {
                                    _defaultMember = item;
                                    isDefault = true;
                                    self.hasDefaultMember = true;
                                }
                            });
                            // 没有选中成员且没有默认联系人时，默认取列表第一个用户作为选中人
                                                        if (!hasDefaultMember && !isDefault && len > 0) {
                                var firstMember = list[0];
                                if (firstMember && firstMember != "") {
                                    _defaultMember = firstMember;
                                    self.hasDefaultMember = true;
                                }
                            }
                            // 选中用户性别和生日检验
                                                        self.isMatchAge(_defaultMember.birthday);
                            self.isMatchSex(_defaultMember.sex);
                            self.isMatchRegion(_defaultMember.regionCode);
                            // 格式化成员列表数据
                                                        self.setMembersList(list);
                            // 接种人是否有身份证信息
                                                        if (!_defaultMember.idCardNo || _defaultMember.idCardNo == "") {
                                self.haveCardNo = false;
                            }
                            // 存储成员列表数据
                                                        if (list && list != null) {
                                wx.setStorage({
                                    key: "memberList",
                                    data: list
                                });
                            }
                            // 存储默认用户数据
                                                        if (_defaultMember && _defaultMember != null) {
                                wx.setStorage({
                                    key: "defaultMember",
                                    data: _defaultMember
                                });
                            }
                            self.defaultMember = _defaultMember;
                        } else {
                            _tip["default"].toast("请先添加接种人");
                            self.hasDefaultMember = false;
                            self.isShowMemberList = true;
                        }
                    }
                })["catch"](function(err) {
                    console.log(err);
                });
            }
        },
        /**
     * 家庭成员列表类型解析
     */
        setMembersList: function setMembersList(list) {
            var _this = this;
            if (list && list.length) {
                list.forEach(function(e, i) {
                    e.checked = false;
                    if (e.sex == 1) e.sexText = "男"; else if (e.sex == 2) e.sexText = "女"; else e.sexText = "未知";
                    switch (e.relationType) {
                      case 1:
                        e.relationType = "本人";
                        break;

                      case 2:
                        e.relationType = "父母";
                        break;

                      case 3:
                        e.relationType = "子女";
                        break;

                      case 4:
                        e.relationType = "夫妻";
                        break;

                      case 5:
                        e.relationType = "亲属";
                        break;

                      case 6:
                        e.relationType = "朋友";
                        break;

                      case 7:
                        e.relationType = "其他";
                        break;
                    }
                    if (e.id == _this.defaultMember.id) {
                        e.checked = true;
                    } else {
                        e.checked = false;
                    }
                });
                this.membersList = list;
            } else {
                this.membersList = [];
            }
        },
        /**
     * 是否符合性别条件
     * 参数 sex：性别  
     * 性别限制：0：无限制 1：男性 2：女性
     */
        isMatchSex: function isMatchSex(sex) {
            if (!sex) return false;
            var self = this;
            var detail = this.detail;
            var sexRequired = detail.sexRequired;
            // 重置状态
                        self.isDisabled = false;
            self.sexOk = true;
            if (!sexRequired || sexRequired == 0) return false;
            //没有接种性别限制
                        var sexStr = sexRequired == 1 ? "男" : "女";
            if (sex != sexRequired) {
                self.sexOk = false;
                self.isDisabled = true;
                _tip["default"].toast("该疫苗仅限" + sexStr + "性用户预约");
            }
        },
        /*判断年龄是否超过限制年龄*/
        isMatchAge: function isMatchAge(date) {
            var self = this;
            if (!date) return false;
            var detail = this.detail;
            var birthdayStart = detail.birthdayStart;
            var birthdayEnd = detail.birthdayEnd || new Date();
            //没有截止日期取今日日期
                        var isBefore = false;
            //是否在开始日期前
                        var isAfter = true;
            // 是否在截止日期后
            // 重置状态
                        self.isDisabled = false;
            self.ageOk = true;
            if (!birthdayStart && !birthdayEnd) return false;
            //没有接种年龄限制
                        var birthday = (0, _moment["default"])(date).format("YYYY/MM/DD");
            // 接种人生日格式化
                        if (birthdayStart) {
                isBefore = (0, _moment["default"])(birthday).isBefore(birthdayStart);
            }
            if (birthdayEnd) {
                isAfter = (0, _moment["default"])(birthday).isAfter(birthdayEnd);
            }
            if (isBefore || isAfter) {
                self.ageOk = false;
                self.isDisabled = true;
                _tip["default"].toast("抱歉，您的年龄不符合秒杀要求");
            }
        },
        /**
     * 是否符合区域条件
     * 参数 rCode：区域码
     */
        isMatchRegion: function isMatchRegion(rCode) {
            var self = this;
            var detail = this.detail;
            var regionRequired = detail.regionRequired;
            // 疫苗限制的区域码
                        var regionRequiredName = detail.regionRequiredName;
            // 重置状态
                        self.isDisabled = false;
            self.regionOk = true;
            // 区域码前2位数字代表省，长度小于2的视为无效区域码
                        if (!regionRequired || regionRequired.length < 2) return false;
            //没有接种区域限制
                        if (!rCode || !rCode.startsWith(regionRequired)) {
                self.regionOk = false;
                self.isDisabled = true;
                _tip["default"].toast("该疫苗仅限" + regionRequiredName + "地区用户预约");
            }
        }
    },
    created: function created() {}
};

exports["default"] = _default;
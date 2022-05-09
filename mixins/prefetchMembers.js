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
        membersList: [],
        defaultMember: {},
        hasDefaultMember: false
    },
    methods: {
        /**
     * 获取家庭成员列表
     */
        getDefaultMember: function getDefaultMember() {
            var self = this;
            var hasDefaultMember = false;
            var memberList = wx.getStorageSync("memberList") || null;
            var defaultMember = wx.getStorageSync("defaultMember") || null;
            // 已设置的默认成员
                        var tickedMember = wx.getStorageSync("tickedMember") || null;
            // 已选中的成员
                        if (memberList && memberList != null && defaultMember && defaultMember != null) {
                // 从存储中取选中成员信息
                this.defaultMember = defaultMember;
                this.hasDefaultMember = true;
                // 格式化成员列表数据
                                this.setMembersList(memberList);
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
                            // 格式化成员列表数据
                                                        self.setMembersList(list);
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
                            self.hasDefaultMember = false;
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
        }
    },
    created: function created() {}
};

exports["default"] = _default;
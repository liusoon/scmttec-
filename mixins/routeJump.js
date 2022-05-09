Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = void 0;

var _tip = _interopRequireDefault(require("./../utils/tip.js"));

var _index = require("./../config/index.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

var _default = {
    data: {},
    methods: {
        /*跳转到门诊主页*/
        routeToDepaHome: function routeToDepaHome(depaCode) {
            if (!depaCode || depaCode == undefined || depaCode == "") {
                return _tip["default"].toast("无效的门诊码");
            }
            wx.navigateTo({
                url: "/package/pages/outurl/depaHome?depaCode=" + depaCode
            });
        }
    },
    created: function created() {}
};

exports["default"] = _default;
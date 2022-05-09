var _core = _interopRequireDefault(require("./../../vendor.js")(1));

var _moment = _interopRequireDefault(require("./../../vendor.js")(4));

var _tip = _interopRequireDefault(require("./../../utils/tip.js"));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//import { parse } from 'url';
_core["default"].component({
    /**
   * 启用插槽
   */
    options: {
        multipleSlots: true
    },
    props: {
        sexOk: true,
        //性别是否为女性
        hasMember: true,
        //是否有接种人
        workdays: []
    },
    data: {
        date: {
            // 当前日期对象
            month: "06"
        },
        weeks: [],
        // 当前显示月的所有日期数据
        subscribeDate: "",
        //选中的接种日期
        timeDiff: 0,
        localOffset: 0
    },
    created: function created() {
        var self = this;
        // 从缓存获取当前时间差值
                var cache_time_diff = wx.getStorageSync("cache_time_diff") || 0;
        var cache_timezone_offset = wx.getStorageSync("cache_timezone_offset") || 0;
        if (cache_time_diff && typeof cache_time_diff == "number" && cache_time_diff > 0) {
            this.timeDiff = cache_time_diff;
        }
        if (cache_timezone_offset) {
            this.localOffset = cache_timezone_offset;
        }
        // 获取本月数据渲染日历
                this.getCurrDate();
    },
    onLoad: function onLoad(options) {},
    methods: {
        /*获取本月数据渲染日历*/
        getCurrDate: function getCurrDate() {
            var d = new Date();
            //创建一个Date对象
                        var localTime = d.getTime();
            //let localOffset = d.getTimezoneOffset()*60000; //获得当地时间偏移的毫秒数（时区差）
                        var nowTime = (localTime + this.localOffset) / 1e3;
            //当前本机时间（秒）转换为GMT时区
                        var nowServerTime = nowTime - this.timeDiff;
            // 当前服务器时间 (秒)
                        this.weeks = this.getCalendar((0, _moment["default"])(new Date(nowServerTime * 1e3)).format("YYYY-MM"));
        },
        /**
     * 渲染日历
     * @param month
     * @returns {Array}
     */
        getCalendar: function getCalendar(date) {
            var weeks = [];
            var workdays = this.workdays;
            var firstDay = (0, _moment["default"])(date, "YYYY-MM");
            var week = firstDay.format("d");
            var start = firstDay.subtract(week, "days");
            var d = new Date();
            //创建一个Date对象
                        var localTime = d.getTime();
            //let localOffset = d.getTimezoneOffset()*60000; //获得当地时间偏移的毫秒数（时区差）
                        var nowTime = (localTime + this.localOffset) / 1e3;
            //当前本机时间（秒）转换为GMT时区
                        var nowServerTime = nowTime - this.timeDiff;
            // 当前服务器时间 = 本机时间 - 差值 (秒)
                        var serverTime = new Date(nowServerTime * 1e3);
            // 当前服务器时间
                        for (var i = 0; i < 6; i++) {
                var days = [];
                for (var j = 0; j < 7; j++) {
                    var day = {};
                    day.v = start.toObject().date;
                    day.ymd = start.format("YYYY-MM-DD");
                    day.month = start.format("MM");
                    //预约名额是否已满
                                        day.isFull = false;
                    // 是否工作日
                                        day.isWorkday = false;
                    // 默认为false
                                        if (workdays && workdays.length > 0) {
                        workdays.forEach(function(item, index) {
                            var startTime = new Date(Date.parse(item.day));
                            // 日期比较
                                                        var format = "YYYY/MM/D";
                            var start = (0, _moment["default"])(startTime, format);
                            var end = (0, _moment["default"])(serverTime, format);
                            var diff = (0, _moment["default"])(start).diff((0, _moment["default"])(end), "days");
                            // 预约日期大于等于今日
                            // 接种日期需大于当前日期 startTime >= serverTime
                                                        if (diff >= 0 && day.ymd == (0, _moment["default"])(item.day).format("YYYY-MM-DD")) {
                                day.isWorkday = true;
                                if (item.total <= 0) {
                                    day.isFull = true;
                                }
                            }
                        });
                    }
                    start.add(1, "days");
                    days.push(day);
                }
                weeks.push(days);
            }
            // 当前日期对象
                        var tempDateObj = {
                year: (0, _moment["default"])(date).year(),
                month: (0, _moment["default"])(date).month() + 1,
                preMonth: (0, _moment["default"])(date, "YYYY-MM").add(-1, "month").format("YYYY-MM"),
                nextMonth: (0, _moment["default"])(date, "YYYY-MM").add(1, "month").format("YYYY-MM")
            };
            this.date = tempDateObj;
            this.weeks = weeks;
            //return weeks;
                },
        /**
     * 上一个月
     */
        preMonth: function preMonth() {
            var month = this.date.preMonth;
            this.getCalendar((0, _moment["default"])(month).format("YYYY-MM"));
        },
        /**
     * 下一个月
     */
        nextMonth: function nextMonth() {
            var month = this.date.nextMonth;
            this.getCalendar((0, _moment["default"])(month).format("YYYY-MM"));
        },
        /**
     * 选中日期事件
     * @param day 选中日期
     */
        selectDay: function selectDay(day) {
            if (day.month == this.date.month) {
                if (!this.hasMember) {
                    _tip["default"].toast("请先选择接种人");
                    return;
                }
                if (day.isWorkday && !day.isFull) {
                    if (this.sexOk) {
                        this.subscribeDate = day.ymd;
                        this.$emit("onSelectDay", day.ymd);
                        // 年龄判断
                        // this.checkAge(this.selectedMember.birthday,1,this.subscribeDate)
                                        } else {
                        _tip["default"].toast("该疫苗只适用于女性，男性暂时无法预约接种。");
                    }
                }
            }
        }
    },
    watch: {
        workdays: function workdays(val, oldVal) {
            // 获取本月数据渲染日历
            this.getCurrDate();
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "54-0": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.preMonth.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "54-1": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.nextMonth.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "54-2": {
            tap: function proxy(day) {
                var _vm = this;
                return function() {
                    _vm.selectDay(day);
                }();
            }
        }
    },
    models: {},
    refs: undefined
});
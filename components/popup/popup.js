var _core = _interopRequireDefault(require("./../../vendor.js")(1));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

_core["default"].component({
    options: {
        multipleSlots: true
    },
    props: {
        visible: {
            type: Boolean,
            value: false
        }
    },
    data: {},
    methods: {
        popPreventTouchmove: function popPreventTouchmove() {},
        cityChange: function cityChange() {},
        handleClickMask: function handleClickMask(e) {
            if (e.target.dataset.type !== "unclose") {
                this.$emit("close", false);
            }
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "55-0": {
            touchmove: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.popPreventTouchmove.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "55-1": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.handleClickMask.apply(_vm, $args || [ $event ]);
                }();
            },
            touchmove: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.popPreventTouchmove.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "55-3": {
            touchmove: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.popPreventTouchmove.apply(_vm, $args || [ $event ]);
                }();
            }
        }
    },
    models: {},
    refs: undefined
});
var _core = _interopRequireDefault(require("./../../vendor.js")(1));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

_core["default"].component({
    // 启用插槽
    options: {
        multipleSlots: true
    },
    props: {
        isShow: {
            default: false
        },
        title: {
            default: "温馨提示"
        },
        content: {
            default: ""
        },
        showCancleBtn: {
            default: true
        },
        showConfirmBtn: {
            default: true
        },
        cancelTxt: {
            default: "取消"
        },
        confirmTxt: {
            default: "确定"
        },
        top: {
            default: "250px"
        }
    },
    mixins: [],
    data: {
        showModal: false
    },
    computed: {},
    created: function created() {},
    methods: {
        /**
     * 弹出框蒙层截断touchmove事件
     */
        preventTouchMove: function preventTouchMove() {},
        /**
     * 隐藏模态对话框
     */
        // hideModal: function () {
        //   this.showModal = false;
        // },
        /**
     * 对话框取消按钮点击事件
     */
        handleCancel: function handleCancel() {
            //this.hideModal();
            this.$emit("onCancel");
        },
        /**
     * 对话框确认按钮点击事件
     */
        handleConfirm: function handleConfirm() {
            //this.hideModal();
            this.$emit("onConfirm");
        }
    },
    watch: {
        isShow: function isShow(val, oldVal) {
            this.showModal = val;
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "56-0": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.handleCancel.apply(_vm, $args || [ $event ]);
                }();
            },
            touchmove: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.preventTouchMove.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "56-2": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.handleCancel.apply(_vm, $args || [ $event ]);
                }();
            }
        },
        "56-3": {
            tap: function proxy() {
                var $wx = arguments[arguments.length - 1].$wx;
                var $event = $wx.detail && $wx.detail.arguments ? $wx.detail.arguments[0] : arguments[arguments.length - 1];
                var $args = $wx.detail && $wx.detail.arguments;
                var _vm = this;
                return function() {
                    _vm.handleConfirm.apply(_vm, $args || [ $event ]);
                }();
            }
        }
    },
    models: {},
    refs: undefined
});
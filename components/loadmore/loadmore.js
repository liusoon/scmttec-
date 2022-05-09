var _core = _interopRequireDefault(require("./../../vendor.js")(1));

var _index = require("./../../config/index.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

_core["default"].component({
    props: {
        status: 1,
        emptyTxt: "",
        loadTxt: ""
    },
    data: {
        staticImg: {
            error: _index.imageRoot + "/bg-empty_bitmap.png",
            loading: _index.imageRoot + "/loading.gif"
        }
    },
    methods: {}
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {},
    models: {},
    refs: undefined
});
var log = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null;

module.exports = {
    info: function info() {
        if (!log) return;
        log.info.apply(log, arguments);
    },
    warn: function warn() {
        if (!log) return;
        log.warn.apply(log, arguments);
    },
    error: function error() {
        if (!log) return;
        log.error.apply(log, arguments);
    },
    setFilterMsg: function setFilterMsg(msg) {
        // 从基础库2.7.3开始支持
        if (!log || !log.setFilterMsg) return;
        if (typeof msg !== "string") return;
        log.setFilterMsg(msg);
    },
    addFilterMsg: function addFilterMsg(msg) {
        // 从基础库2.8.1开始支持
        if (!log || !log.addFilterMsg) return;
        if (typeof msg !== "string") return;
        log.addFilterMsg(msg);
    }
};
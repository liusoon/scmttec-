/**
 * [getCurrentTime 获取当前时间]
 * @return {[string]} [时间字符串]
 */
function getCurrentTime() {
    var keep = "";
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var f = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    keep = y + "-" + m + "-" + d + " " + h + ":" + f + ":" + s;
    return keep;
}

/**
 * [objLength 对象长度]
 * @return {[Number]} [对象长度数字]
 */ function objLength(input) {
    var type = toString(input);
    var length = 0;
    if (type == "[object Object]") {
        for (var key in input) {
            if (key !== "number") {
                length++;
            }
        }
    }
    return length;
}

/**
 * [vailPhone 手机号码验证]
 * @param  {[Number]} number [手机号输入]
 * @return {[Boolean]}       [true | false]
 */ function vailPhone(number) {
    var flag = true;
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (number.length !== 11 || !myreg.test(number)) {
        flag = false;
    }
    return flag;
}

/**
 * [sTrim 去除字符串所有空格]
 * @param  {[String]} text [文本字符串参数]
 * @return {[String]}      [去除空格后的文本字符串]
 */ function sTrim(text) {
    return text.replace(/\s/g, "");
}

/* 正则处理图片*/ function formatImgHtml(str) {
    if (str && str.indexOf("img") !== -1) {
        str = str.replace(/<img/g, '<img style="max-width:100%;height:auto;margin-top:5px;margin-bottom:5px;"');
    } else {
        str;
    }
    return str;
}

/*字符串非空*/ function isEmpty(str) {
    if (str != undefined && str != null && str.replace(/(^\s*)/g, "").length > 0) {
        return false;
    }
    return true;
}

/* 时间字符串时区转换 */ function getTimeByTimeZone(timeZone) {
    var d = new Date();
    localTime = d.getTime(), localOffset = d.getTimezoneOffset() * 6e4, //获得当地时间偏移的毫秒数,这里可能是负数
    utc = localTime + localOffset, //utc即GMT时间
    offset = timeZone, //时区，北京市+8  美国华盛顿为 -5
    localSecondTime = utc + 36e5 * offset;
    //本地对应的毫秒数
        var date = new Date(localSecondTime);
    return date;
}

/**
 * 传入身份证号码，获取出生日期、性别和年龄
 * @param IdCard 身份证号码
 * @param type 1 获取出生日期
 *             2 获取性别
 *             3 获取年龄，年龄小于1岁时默认为1岁
 */ function IdCardAnalysis(IdCard, type) {
    if (type === 1) {
        //获取出生日期
        var birthday = IdCard.substring(6, 10) + "-" + IdCard.substring(10, 12) + "-" + IdCard.substring(12, 14);
        return birthday;
    }
    if (type === 2) {
        var sex = 1;
        //获取性别
                if (parseInt(IdCard.substr(16, 1)) % 2 == 1) {
            return sex = 1;
        } else {
            return sex = 2;
        }
    }
    if (type === 3) {
        //获取年龄
        var ageDate = new Date();
        var month = ageDate.getMonth() + 1;
        var day = ageDate.getDate();
        var age = ageDate.getFullYear() - IdCard.substring(6, 10) - 1;
        if (IdCard.substring(10, 12) < month || IdCard.substring(10, 12) == month && IdCard.substring(12, 14) <= day) {
            age++;
        }
        if (age <= 0) {
            age = 1;
        }
        return age;
    }
}

/**
  * @description 更具出生日期判断当前年龄
  * @param str: 日期字符串，格式为yyyy-MM-dd
  * @return -1表示日期格式不正确
  * @Date 11:41 2019/8/26
  **/ function dateToAges(str) {
    var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) return false;
    // 当前年月日
        var date = new Date();
    var Y = Number(date.getFullYear());
    var M = Number(date.getMonth()) + 1;
    var D = Number(date.getDate());
    var d = new Date(r[1], r[3] - 1, r[4]);
    if (d.getFullYear() == r[1] && d.getMonth() + 1 == r[3] && d.getDate() == r[4]) {
        // 判断当前日期，是否已过生日
        if (M < Number(r[3]) || M == Number(r[3]) && D < Number(r[4])) {
            return Y - Number(r[1]) - 1;
        } else {
            return Y - Number(r[1]);
        }
    }
    return -1;
}

/* 字符串保留首尾字符，中间替换为*  */ function strMiddleEllipsis(str) {
    if (!str) return false;
    var len = String(str).length;
    var _str = "";
    for (var i = 0; i <= len - 1; i++) {
        if (i == 0 || i == len - 1) {
            _str += str.substr(i, 1);
        } else {
            _str += "*";
        }
    }
    return _str;
}

module.exports = {
    getCurrentTime: getCurrentTime,
    objLength: objLength,
    sTrim: sTrim,
    vailPhone: vailPhone,
    formatImgHtml: formatImgHtml,
    isEmpty: isEmpty,
    getTimeByTimeZone: getTimeByTimeZone,
    IdCardAnalysis: IdCardAnalysis,
    dateToAges: dateToAges,
    strMiddleEllipsis: strMiddleEllipsis
};
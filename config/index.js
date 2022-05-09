// 判定当前的环境是否为正式环境
var isProd = true ? true : false;

var baseUrl, healthyUrl, imageRoot, domainKey, ymH5Root;

if (isProd) {
    baseUrl = "https://miaomiao.scmttec.com";
    healthyUrl = "https://wx.scmttec.com/";
    imageRoot = "https://adultvacc-1253522668.file.myqcloud.com/images";
    domainKey = "miaomiao";
    ymH5Root = "https://ymh5.scmttec.com";
} else {
    baseUrl = "https://tmiaomiao.scmttec.com";
    healthyUrl = "https://wx1.scmttec.com/";
    imageRoot = "https://adultvacc-1253522668.file.myqcloud.com/images";
    domainKey = "tmiaomiao";
    ymH5Root = "https://ymh51.scmttec.com";
}

module.exports = {
    isProd: isProd,
    baseUrl: baseUrl,
    healthyUrl: healthyUrl,
    imageRoot: imageRoot,
    domainKey: domainKey,
    ymH5Root: ymH5Root
};
let appSetting = {
    debug: true,
    api: "",
    currentUserGuid: "",
    titlePerfix: " - ",
    title: "登录",
    nav: "",
    reloadOrg: "",
    reloadCategory: "",
    userInfo: {},
    checkPermission () { return false; },
    webInfo: {
        avatar: "",
        nmsOpen: false,
        subtitle: "",
        title: ""
    },
    dashboard: { name: "HospitalList" },
    ueditor: {
        serverUrl: "http://hh.ricebird.cn/ueditor/process",
        topOffset: 64,
        zIndex: 9,
        UEDITOR_HOME_URL: process.env.NODE_ENV === "production" ? "/web/third/" : "/static/"
    }
};
module.exports = appSetting;

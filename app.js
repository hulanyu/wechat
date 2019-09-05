//app.js
const Service = require('service/index')
const Util = require('utils/util.js')
const ViewUtil = require('utils/viewUtil.js')
App({
  onLaunch: function () {
    console.log('小程序初始化完成时（全局只触发一次）')
    //获取设备顶部窗口的高度（不同设备窗口高度不一样，根据这个来设置自定义导航栏的高度）
    //这个最初我是在组件中获取，但是出现了一个问题，当第一次进入小程序时导航栏会把
    //页面内容盖住一部分,当打开调试重新进入时就没有问题，这个问题弄得我是莫名其妙
    //虽然最后解决了，但是花费了不少时间
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.height = res.windowHeight
      }
    })
  },
  onShow: function () {
    console.log('小程序启动，或从后台进入前台显示时')
    // this.initUserInfo()
  },
  onHide: function () {
    console.log('小程序从前台进入后台时')
  },
  onError: function () {
    console.log('小程序发生脚本错误，或者 api 调用失败时触发，会带上错误信息')
  },
  onPageNotFound: function () {
    console.log('小程序要打开的页面不存在时触发，会带上页面信息回调该函数')
  },
  // Service注入
  ...Service,
  // 插件注入
  Util,
  // 视图插件注入
  ViewUtil,
  globalData:{
    okayapiHost:'https://hn216.api.yesapi.cn',
    okayapiAppKey:'61BD14C2837BB0C2C3B4DA654B08D8ED',
    okayapiAppSecrect:'Y27SBzunLIriLJ5er5QqeHrcQ8yCthOF6j1jCpjIMPunDuSJl2KJ9R4DO7Go42TxTMjamGQ',
    share: false,  // 分享默认为false
    height: 0,
    userInfo:{},
    statusBarHeight:wx.getSystemInfoSync()['statusBarHeight'],
    windowHeight:0,
  }

})
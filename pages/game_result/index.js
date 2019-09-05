// pages/game_result/index.js
const app = getApp();
Page({
   /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    windowHeight:'',
    top:'',
    userInfo:{},
    users: [],
    detail_data:{},
    question_list:[]

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var list = JSON.parse(options.users)
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo,
          detail_data:options,
          question_list:list
        })
      }
    })
    wx.getSystemInfo({
      success:function(res) {
        that.setData({
          windowHeight:res.windowHeight,
          top:88 + that.data.statusBarHeight*2
        })
      }
    })
  },
   /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
   /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //返回
  _navback: function() {
    wx.navigateBack()
  },
})

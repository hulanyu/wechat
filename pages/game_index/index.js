// pages/game-index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    windowHeight:'',
    top:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      top:88 + this.data.statusBarHeight*2
    })
    var that = this;
    wx.getSystemInfo({
      success:function(res) {
        that.setData({
          windowHeight:res.windowHeight,
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

    /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    this.setData({
      show_share: false,
      from: res.from,
      time_before: Date.parse(new Date())
    })
    console.log(this.data.time_before, res);
    return {
      title: '垃圾分类最强大脑',
      path: `/pages/game_index/index`,
      imageUrl: "/",
    }
  },
  handleSkip: function() {
    wx.navigateTo({
      url: `/pages/game_onging/index`
    })
  }
})
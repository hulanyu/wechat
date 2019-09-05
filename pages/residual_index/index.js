// pages/residual_index/index.js
const app = getApp()

Page({
  data: {
  // 组件所需的参数
    statusBarHeight: app.globalData.statusBarHeight,
    windowHeight:'',
    top:'',
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20 ,   
  },
  onLoad() {
    var that =this;
    wx.getSystemInfo({
      success:function(res) {
        that.setData({
          windowHeight:res.windowHeight,
          top:450 + that.data.statusBarHeight*2
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
  onShareAppMessage: function () {
    return {
      title: '竟然有如此烧脑的医药小游戏',
      path: `/pages/home-index/index`,
      imageUrl: 'https://bpy-store.oss-cn-hangzhou.aliyuncs.com//ppc%E5%B0%8F%E6%B8%B8%E6%88%8F%E9%BB%98%E8%AE%A4%E5%88%86%E4%BA%AB%E5%9B%BE.jpg'
    }
  },
  //返回
  _navback: function() {
    wx.navigateBack()
  },
})


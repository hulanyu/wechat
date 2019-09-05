// pages/search/index.js
const app = getApp()


Page({
  /**
   * 页面的初始数据
   */
  data: {
    is_to_resource_detail: false,
    is_login: false,
    user_label: {},
    search_bar_line: false,
    tab_line: false,
    show_clear_btn: false,
    search_key: '',
    hots_page_number: 1,
    hots_list: [],
    category_list: [],
    statusBarHeight: app.globalData.statusBarHeight,
    top:'',
    fenlei:[
      {id:1,img:'/images/logo/kitchen.png',name:'湿垃圾',desc:'Kitchen waste',type:'kitchen_index'},
      {id:2,img:'/images/logo/residual.png',name:'干垃圾',desc:'Residual waste',type:'residual_index'},
      {id:3,img:'/images/logo/recyclable.png',name:'可回收垃圾',desc:'Recyclable waste',type:'recyclable_index'},
      {id:4,img:'/images/logo/hazardous.png',name:'有害垃圾',desc:'Hazardous waste',type:'hazardous_index'},
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      top:450 + this.data.statusBarHeight*2
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
  // 输入变化
  inputChange: function (e) {
    let _value = e.detail.value.trim()
    this.setData({
      show_clear_btn: !!_value
    })
  },

  // 聚焦
  inputFocus: function (e) {
    let _value = e.detail.value.trim()
    this.setData({
      show_clear_btn: !!_value
    })
  },

  // 失焦
  inputBlur: function (e) {
    setTimeout(() => {
      let _value = e.detail.value.trim()
      this.setData({
        show_clear_btn: false
      })
    }, 100)
  },

  // 搜索
  search: function (e) {
    let _value = e.detail.value.trim()
    this.setData({
      search_key: _value
    })
    wx.navigateTo({
      url:`/pages/search_index/index?value=${_value}`
    })  
  },
  // 清除
  clearKey: function () {
    this.setData({
      search_key: '',
      show_clear_btn: false
    })
    console.log('11111')
  },
  //去对应的分类详情
  toDetail: function(e) {
    wx.navigateTo({
      url: `/pages/${e.currentTarget.dataset.type}/index`,
    })
  }
})
// pages/game-index/index.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    current_index: 0,
    question_list: [
        {id:1,image_url:'https://www.xiaomutong.com.cn/public/products/IMG_0774.jpg',is_right:1,name:'火柴'},
        {id:2,image_url:'https://www.xiaomutong.com.cn/public/products/IMG_0775.jpg',is_right:1,name:'塑料袋'},
        {id:3,image_url:'https://www.xiaomutong.com.cn/public/products/IMG_0776.jpg',is_right:1,name:'尿布'},
        {id:11,image_url:'http://r.photo.store.qq.com/psb?/e572cf0f-9980-47bf-b79f-83a6b833e944/3LAx8k.p89lwksCAw2*OzM41gWA.5IG*vnQvd04ZY6I!/r/dL8AAAAAAAAA',is_right:3,name:'玻璃瓶子'},
        {id:4,image_url:'https://www.xiaomutong.com.cn/public/products/IMG_0777.jpg',is_right:1,name:'烟头'},
        {id:5,image_url:'https://www.xiaomutong.com.cn/public/products/IMG_0778.jpg',is_right:2,name:'鱼尾'},
        {id:13,image_url:'http://r.photo.store.qq.com/psb?/e572cf0f-9980-47bf-b79f-83a6b833e944/9p*BxVKNlfuYEQH6a8eaVexj6xq5nuJntuwnGSN1NnI!/r/dFMBAAAAAAAA',is_right:4,name:'电池'},
        {id:6,image_url:'https://www.xiaomutong.com.cn/public/products/IMG_0779.jpg',is_right:2,name:'蟹陀陀'},
        {id:12,image_url:'http://r.photo.store.qq.com/psb?/e572cf0f-9980-47bf-b79f-83a6b833e944/kuYzImCk2TV7vgFdv74NSGV8LXO02g*aLiiSWizYack!/r/dIMAAAAAAAAA',is_right:3,name:'插座'},
        {id:7,image_url:'https://www.xiaomutong.com.cn/public/products/IMG_0780.jpg',is_right:2,name:'玉米'},
        {id:14,image_url:'http://r.photo.store.qq.com/psb?/e572cf0f-9980-47bf-b79f-83a6b833e944/o7O0szMFhLCKBLxvuIpcbqM1rrwsYWp2aVWCLR9X0CI!/r/dL4AAAAAAAAA',is_right:4,name:'弃置药品'},
        {id:9,image_url:'https://www.xiaomutong.com.cn/public/products/IMG_0782.jpg',is_right:2,name:'柚子'},
        {id:8,image_url:'https://www.xiaomutong.com.cn/public/products/IMG_0781.jpg',is_right:2,name:'大白菜'},
        {id:15,image_url:'http://r.photo.store.qq.com/psb?/e572cf0f-9980-47bf-b79f-83a6b833e944/fvcOfHzZ3AudtVKkd7vIHb2U2BsX2avueBtpPhPEifI!/r/dL4AAAAAAAAA',is_right:4,name:'水银温度计'},
        {id:16,image_url:'http://r.photo.store.qq.com/psb?/e572cf0f-9980-47bf-b79f-83a6b833e944/tYgoc*GG1iH3PnFUWXQFvTcmow9YybDH9QgPIuh3p78!/r/dDQBAAAAAAAA',is_right:4,name:'照片底片'},
        {id:17,image_url:'http://r.photo.store.qq.com/psb?/e572cf0f-9980-47bf-b79f-83a6b833e944/igglHrzJF7OXAyejG2Yk5Y434D83ne8wU.GaVJ1AfGU!/r/dFMBAAAAAAAA',is_right:4,name:'消毒剂'},
        {id:10,image_url:'https://www.xiaomutong.com.cn/public/products/IMG_0783.jpg',is_right:2,name:'饭粒'},
        {id:18,image_url:'http://r.photo.store.qq.com/psb?/e572cf0f-9980-47bf-b79f-83a6b833e944/s0dn2XfGjTb98uW0mTicNxvJ0XJ0gjqq4NEL8v0BShE!/r/dLYAAAAAAAAA',is_right:3,name:'易拉罐'},
        {id:11,image_url:'http://r.photo.store.qq.com/psb?/e572cf0f-9980-47bf-b79f-83a6b833e944/IAkQtq3EuMtHpT8rVcoX8Da*0BvGqwMD2yAkmHDMHXQ!/r/dAgBAAAAAAAA',is_right:3,name:'报纸'},
        {id:19,image_url:'http://r.photo.store.qq.com/psb?/e572cf0f-9980-47bf-b79f-83a6b833e944/tIXtMjrInCkTBl*8*Hs.DRJBErLGgYREvtjhrvDHG98!/r/dDcBAAAAAAAA',is_right:1,name:'陶瓷碎碗'},
        {id:20,image_url:'http://r.photo.store.qq.com/psb?/e572cf0f-9980-47bf-b79f-83a6b833e944/xecn7iiZnISC3ijhIpO6PitZw9sJAJhtrqMcLgaSuIs!/r/dMMAAAAAAAAA',is_right:1,name:'钢笔'},
        {id:21,image_url:'http://r.photo.store.qq.com/psb?/e572cf0f-9980-47bf-b79f-83a6b833e944/26G4lX*G4cjdt6GGF77IzSi*3jz3Np0vhI1Eeggx3IE!/r/dL8AAAAAAAAA',is_right:1,name:'餐巾纸'},
        {id:22,image_url:'http://r.photo.store.qq.com/psb?/e572cf0f-9980-47bf-b79f-83a6b833e944/8INigW6DkXcnPG4I03VtYMDBA8UT9Ivzzos*pYIQ5QY!/r/dL8AAAAAAAAA',is_right:1,name:'粽叶'},
      ],
    current_question: false,
    user_selected: [],
    answers_list:[{id:1,is_right:1,img:'/images/logo/residual.png',img_select:'/images/gan.png',name:'干垃圾',type:'residual'},{id:2,is_right:2,img:'/images/logo/kitchen.png',img_select:'/images/shilaji.png',name:'湿垃圾',type:'kitchen'},{id:3,is_right:3,img:'/images/logo/recyclable.png',img_select:'/images/rec.png',name:'可回收垃圾',type:'recyclable'},{id:4,is_right:4,img:'/images/logo/hazardous.png',img_select:'/images/youhailaji.png',name:'有害垃圾',type:'hazardous'}],
    answers: [],
    time:10,
    statusBarHeight: app.globalData.statusBarHeight,
    windowHeight:'',
    top:'',
    Loadingtime:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo
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
    this.countDown()
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
    this.initData()
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
    clearInterval(this.data.Loadingtime)
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

  },
  // 初始化数据
  initData: function () {
    var res = this.data.question_list.sort(function() {
      return .5 - Math.random()
    })
    var answers = []
    res.forEach((item) => {
      answers.push(item.is_right)
    })
    this.setData({
        question_list: res,
        current_index: 0,
        current_question: res[0],
        answers:answers
      })
  },
  selectAnswer: function (e) {
    if (this.data.current_question.is_confirm) {
      return
    }
    this.setData({
      'current_question.is_confirm': true,
      'current_question.user_selected': e.currentTarget.dataset.id,
      'current_question.right':e.currentTarget.dataset.right
    })
     // 显示正确答案
    let idx = this.data.current_question.user_selected
    let name = this.data.current_question.name
    let right = this.data.current_question.is_right
    let is_right = this.data.current_question.right
    this.data.user_selected.push({
      id:idx,
      name:name,
      right:right,
      is_right:is_right
    })
  },
  //倒计时
  countDown: function() {
    var time = this.data.time;
    var that = this;
    let _time = setInterval(() => {
      if(time > 0 ) {
        that.setData({
          time:time--
        })
        if(that.data.current_question.user_selected){
          clearInterval(_time) 
          that.nextParent()
        }
      }else{
        if(!that.data.current_question.user_selected){
          that.data.user_selected.push({
            id:'',
            name:that.data.current_question.name,
            right:that.data.current_question.is_right,
            is_right:''
          })  
        }
        that.nextParent()
        clearInterval(_time)
      }      
    },1000)
    that.setData({
      Loadingtime:_time
    })

  },
  //下一题
  nextParent: function() {
    setTimeout(() => {   
      if (this.data.current_index + 1 === 10) {
        this.storeAnswer()
      } else {
        let _next_index = this.data.current_index + 1
        this.setData({
          current_index: _next_index,
          current_question: this.data.question_list[_next_index],
          time:10
        })
        this.countDown()
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 300
        })
      }
    }, 800)
  },
  storeAnswer: function() {   
    let users = this.data.user_selected;
    let score = 0;
    let answers = this.data.answers;
    for (let index = 0; index < 10; index++) {
      let ele1 = answers[index];
      let ele2 = users[index].id;
      if(ele1 == ele2){
        score += 10;
      }
    }
    const params = {
      users:JSON.stringify(users),
      crroect:Number(score/10),
      wrong:10 - Number(score/10)
    }
    let url = '/pages/game_result/index?' + Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
    wx.redirectTo({url: url})
  },
  //返回
  _navback: function() {
      wx.navigateBack()
  },

})
/*
 * @desc 请求相关插件封装
 * @auther hulanyu
 * @created 19-01-03
 */

// const BaseConfig = require('./../config/base.js')
const viewUtil = require('./viewUtil.js')
const query = (url, param, successCb, failureCb) => {
  const _next = (token) => {
    let show_loading = false
    if (param.show_loading) {
      show_loading = true
      delete param.show_loading
    }
    if (show_loading) {
      wx.showLoading({title: '数据加载中'})
    }
    let params = {
      method: 'POST',
      url: `${url}`,
      data: param,
      success: function (res) {
        const result = res.data
        // console.log(res)
        if (result.code == 200) {
          successCb && successCb(result)
        } else if (failureCb){
          failureCb(result)
        } else {
          viewUtil.Toast(result.errMsg)
        }
      },
      fail: function (err) {
        viewUtil.Toast('网络错误', 6000)
        if (failureCb){
          failureCb(false)
        }
      },
      complete: function () {
        if (show_loading) {
          wx.hideLoading()
        }
      }
    }
    // 如果登录过后，将token写入header
    if (token) {
      params.header = {
        Authorization: token
      }
    }
    wx.request(params)
  }
  // 获取缓存中的token
  wx.getStorage({
    key: 'user_token',
    complete(res) {
      _next(res.data || false)
    }
  })
  
}

module.exports = {
  query: query
}
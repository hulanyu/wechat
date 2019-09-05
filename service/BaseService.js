const Http = require('./../utils/http.js')
const service = {
 /*
   * 搜索
   *
   */
  search: function (param, successCb, failureCb) {
    let url = `https://api.tianapi.com/txapi/lajifenlei/`
    let params = {
      key:'0907804b5d5ecb0b1a33463bf03aeb47',
      word:param.word,
      page:param.page
    }
    Http.query( url, params, successCb, failureCb );
  },

}

module.exports = service
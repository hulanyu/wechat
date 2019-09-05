/*
 * @desc 全局视图插件
 * @auther hulanyu
 * @created 19-01-08
 */

const Toast = (content, duration) => {
  wx.showToast({
    title: content || 'toast提示',
    icon: 'none',
    duration: duration || 2000
  })
  setTimeout(function () {
    wx.hideToast()
  }, duration || 2000)
}

const Dialog = (param, confirmCb, cancelCb) => {
  wx.showModal({
    title: param.title || '提示',
    content: param.content || '这是一个模态弹窗',
    cancelText: param.cancelText || '取消',
    confirmText: param.confirmText || '确定',
    showCancel: param.showCancel || false,
    success(res) {
      if (res.confirm) {
        confirmCb && confirmCb()
      } else if (res.cancel) {
        cancelCb && cancelCb()
      }
    }
  })
}


module.exports = {
  Toast: Toast,
  Dialog: Dialog
}
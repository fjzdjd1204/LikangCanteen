//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array: ['香菇鸡块13元', '芙蓉扇贝12元', '尖椒豆片10元', '杏鲍菇炒肉l0元',
      '青椒土豆10元', ' 鸡蛋糕6元', '清水丸子6元'],
    selectone: 0,
    selecttwo: 0,
    selectthree:0,
    lists: ['小米粥2元', '米饭2元1份', '花卷1元', '菜饽饽2元(不可拼)', '水饺20元1份(不可半份)']
  },

  bindPickerChangeOne(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      selectone: e.detail.value
    })
  },

  bindPickerChangeTwo(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      selecttwo: e.detail.value
    })
  },

  bindPickerChangeThree(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      selectthree: e.detail.value
    })
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

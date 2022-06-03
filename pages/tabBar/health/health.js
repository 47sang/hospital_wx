// pages/tabBar/health/health.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [{
      article_id: "",
      article_datetime: "",
      article_title: "",
      article_keywords: "",
      article_content: "",
      doctor_id: "",
      article_praise: "",
      article_views: "",
      doctor_name: "",
      doctor_avatar: "",
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
console.log("健康圈加载一次");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("健康圈页面渲染一次");
    this.getHealthApi(0);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
  getHealthApi(page) {
    let path = app.globalData.SERVICE + 'health/' + page;
    console.log(path);
    wx.request({
      url: path,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        if (result.data.code == 200) {
          console.log(result);
          // 将接口的数据保存到变量中
          let articleList = result.data.data.health;
          if (articleList != null) {
            this.setArticleList(articleList);
          }
        }
      },
      fail: () => { },
      complete: () => { }
    });
  },
  setArticleList(articleList) {
    this.setData({
      articleList: articleList
    });
  }
})
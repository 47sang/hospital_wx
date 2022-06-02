// pages/tabBar/home/home.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navs: [], //导航栏数据
    headlines: [], //最头条数据
    banners: [], //轮播图数据
    general: [], //综合服务数据
    departments: [], //科室导航数据
    healthPush: [] //健康推送数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getJsonApi();
    
  },
  /**
   * 获取首页接口数据
   */
  getJsonApi: function () {
    wx.request({
      url: 'https://jj.hnwsjy.com/home',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        this.setData({
          navs: result.data.data.navs,
          headlines: result.data.data.headlines,
          banners: result.data.data.banners,
          general: result.data.data.general,
          departments: result.data.data.departments,
          healthPush: result.data.data.healthPush
        })
        console.log(result.data.data.navs);
        console.log(navs);
      },
      fail: () => {},
      complete: () => {}
    });
  },
})
// pages/tabBar/home/home.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //导航栏数据
    navs: [],
    //最头条数据
    headlines: [],
    //轮播图数据
    banners: [],
    //综合服务数据
    general: [],
    //科室导航数据
    departments: [],
    //健康推送数据
    healthPush: [],
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
    this.getHomeApi();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
     * 获取首页接口数据
     */

  getHomeApi() {
    wx.request({
      url: app.globalData.SERVICE+'home',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {

        //将接口的数据保存到变量中
        let rsdata = result.data.data;

        let navs = rsdata.navs;
        let headlines = rsdata.headlines;
        let banners = rsdata.banners;
        let general = rsdata.general;
        let departments = rsdata.departments;
        let healthPush = rsdata.healthPush;
        //将数据发送到视图
        this.setData({
          navs: navs,
          headlines: headlines,
          banners: banners,
          general: general,
          departments: departments,
          healthPush: healthPush
        })
        console.log(rsdata);
      },
      fail: () => { },
      complete: () => { }
    });
  },


})
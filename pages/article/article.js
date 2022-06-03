// pages/article/article.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    //文章的数据内容
    article_datetime: "",
    article_title: "",
    article_keywords: "",
    article_content: "",
    doctor_id: "",
    article_id: "",
    article_praise: "",
    article_views: "",
    article_comments: "",
    article_type: "",

    //医生的数据内容
    clinic_id: "",
    department_id: "",
    doctor_avatar: "",
    doctor_id: "",
    doctor_name: "",
    doctor_resume: "",
    doctor_specialty: "",
    doctor_title: "",

    //评论的数据内容
    comment_flag: false,
    comments: [
      {
        comment_id: "",
        article_id: "",
        patient_id: "",
        comment_content: "",
        comment_datetime: "",
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let id = options.id;
    this.getArticleApi(id);
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

  },
  getArticleApi(id) {
    let path = app.globalData.SERVICE + 'article/' + id;
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
        console.log(result);
        // 将接口的数据保存到变量中
        let article = result.data.data.article;
        let comment = result.data.data.comment;
        let doctor = result.data.data.doctor;
        if (article != null) {
          this.setArticle(article);
        }
        if (comment != null) {
          this.setComment(comment);
        }
        if (doctor != null) {
          this.setDoctor(doctor);
        }
      },
      fail: () => { },
      complete: () => { }
    });
  },

  setArticle(article) {
    this.setData({
      article_datetime: article.article_datetime,
      article_title: article.article_title,
      article_keywords: article.article_keywords,
      article_content: article.article_content,
      doctor_id: article.doctor_id,
      article_id: article.article_id,
      article_praise: article.article_praise,
      article_views: article.article_views,
      article_comments: article.article_comments,
      article_type: article.article_type,
    })
  },
  setComment(comment) {
    this.setData({
      comments: comment,
      comment_flag: true,
    })
    // console.log(comment);
  },
  setDoctor(doctor) {
    this.setData({
      clinic_id: doctor.clinic_id,
      department_id: doctor.department_id,
      doctor_avatar: doctor.doctor_avatar,
      doctor_id: doctor.doctor_id,
      doctor_name: doctor.doctor_name,
      doctor_resume: doctor.doctor_resume,
      doctor_specialty: doctor.doctor_specialty,
      doctor_title: doctor.doctor_title,
    })
  }

})
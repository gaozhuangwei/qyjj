import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      Home_footer:[
        {
            "BigImgUrl":"http://www.quanyou.com.cn/static/mobile/img/index/bd.png",
            "Id":10001,
            "Name":"附近门店",
            "SmallImgUrl":"/fjmd"
        },
        {
            "BigImgUrl":"http://www.quanyou.com.cn/static/mobile/img/index/onlinrepair.png",
            "Id":10002,
            "Name":"在线报修",
            "SmallImgUrl":"http://www.baidu.com"
        },
        {
            "BigImgUrl":"http://www.quanyou.com.cn/static/mobile/img/index/anti-fake.png",
            "Id":10003,
            "Name":"防伪查询",
            "SmallImgUrl":"http://www.baidu.com"
        },
        {
            "BigImgUrl":"http://www.quanyou.com.cn/static/mobile/img/index/wx.png",
            "Id":10004,
            "Name":"公众微信",
            "SmallImgUrl":"http://www.baidu.com"
        },
        {
            "BigImgUrl":"http://www.quanyou.com.cn/static/mobile/img/index/xl.png",
            "Id":10005,
            "Name":"公众微博",
            "SmallImgUrl":"http://www.baidu.com"
        },
        {
            "BigImgUrl":"http://www.quanyou.com.cn/static/mobile/img/index/tm.png",
            "Id":10006,
            "Name":"天猫商城",
            "SmallImgUrl":"http://www.baidu.com"
        }
    ]
  },
  mutations: {

  },
  actions: {

  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
<<<<<<< HEAD
      product:[
        {
          BigImgUrl: "https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180605/QYJJWebSet20180605031117.jpg",
          id:1,
          Name:"卧室",
          SmallImgUrl:"https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180604/QYJJWebSet20180604205725.png",
          ChirldProductType:[
            {Id:73,Name: "床",},
            {Id: 75,Name: "衣柜"},
            {Id: 77,Name: "妆台"},
          ]
        },
        {
          BigImgUrl: "https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180605/QYJJWebSet20180605031117.jpg",
          id:53,
          Name:"绿色睡眠",
          SmallImgUrl:"https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180604/QYJJWebSet20180604205747.png",
          ChirldProductType:[
            {Id:65,Name: "皮床",},
            {Id: 63,Name: "床垫"},
            {Id: 61,Name: "布床"},
          ]
        },
        {
          BigImgUrl: "https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180605/QYJJWebSet20180605031117.jpg",
          id:57,
          Name:"馨动客餐厅",
          SmallImgUrl:"https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180604/QYJJWebSet20180604205849.png",
          ChirldProductType:[
            {Id:85,Name: "沙发",},
            {Id: 83,Name: "茶几电视柜"},
            {Id: 81,Name: "餐桌椅"},
            {Id: 79,Name: "备餐柜"},
          ]
        },
        {
          BigImgUrl: "https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180605/QYJJWebSet20180605031117.jpg",
          id:55,
          Name:"梦想世界青少年生活馆",
          SmallImgUrl:"https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180604/QYJJWebSet20180604205910.png",
          ChirldProductType:[
            {Id:67,Name: "床",},
            {Id: 71,Name: "衣柜"},
            {Id: 69,Name: "书桌架"},
          ]
        },
        {
          BigImgUrl: "",
          id:89,
          Name:"卫浴",
          SmallImgUrl:"https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180605/QYJJWebSet20180605015900.png",
          ChirldProductType:[]
        },
        {
          BigImgUrl: "https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180605/QYJJWebSet20180605031340.jpg",
          id:5,
          Name:"书房",
          SmallImgUrl:"https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180604/QYJJWebSet20180604205935.png",
          ChirldProductType:[]
        },
        {
          BigImgUrl: "https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180605/QYJJWebSet20180605031340.jpg",
          id:11,
          Name:"整体橱柜",
          SmallImgUrl:"https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180604/QYJJWebSet20180604205951.png",
          ChirldProductType:[]
        },
        {
          BigImgUrl: "https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180605/QYJJWebSet20180605031340.jpg",
          id:59,
          Name:"休闲家具",
          SmallImgUrl:"https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180604/QYJJWebSet20180604210018.png",
          ChirldProductType:[]
        },
        {
          BigImgUrl:"https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180605/QYJJWebSet20180605031340.jpg",
          id:89,
          Name:"工程家具",
          SmallImgUrl:"https://www.quanyou.com.cn:89//UserFiles/UploadFile/20180605/QYJJWebSet20180605020025.png",
          ChirldProductType:[]
        },
        {
          BigImgUrl: "",
          id:90,
          Name:"热销产品",
          SmallImgUrl:"http://www.quanyou.com.cn/static/mobile/img/cpzx/cp_9.png",
          ChirldProductType:[]
        }
      ],
 
      QATypeList:[
        {Id: 1,
        Name: "U问YO答",
        ChildrenType: [{Id: 3, Name: "关于全友"}, {Id: 5, Name: "产品销售"}, {Id: 7, Name: "产品售后"}, {Id: 9, Name: "人力资源"}]
        },
        {Id: 13,
          Name: "家装指南",
          ChildrenType:[]
        },
        {Id: 11,
          Name: "保养攻略",
          ChildrenType:[]
        },
      ]
 
    },
=======
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
>>>>>>> 49ea8d727cde923f4dc01cb43a362e39bb205221
  mutations: {

  },
  actions: {

  },
 
})

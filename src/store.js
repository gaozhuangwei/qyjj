import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
<<<<<<< HEAD
      brand:{
        headImg:"http://www.quanyou.com.cn/static/mobile/img/ppzx/ppzx1.jpg",
        qyzx:{
            0:{
              BigImgUrl: "http://www.quanyou.com.cn/static//UserFiles/UploadFile/20190711/QYJJWebSet20190711184554.jpg",
              Id: 221,
              PubDate: "2019-07-11",
              Title: "全友公司向宜宾地震灾区受灾员工及专卖店捐赠60万元援助金",
              VideoUrl: null,
            },
            1:{
              BigImgUrl: "http://www.quanyou.com.cn/static//UserFiles/UploadFile/20190708/QYJJWebSet20190708161821.jpg",
              Id: 220,
              PubDate: "2019-07-08",
              Title: "轻奢风尚，全友携定制新品亮相中国国际建筑装饰博览会",
              VideoUrl: null,
            }
        },
        shzr:{
            0:{
              BigImgUrl: "https://www.quanyou.com.cn:89//UserFiles/UploadFile/20190509/QYJJWebSet20190509095636.jpg",
              Id: 203,
              PubDate: "2019-05-07",
              Title: "青春芳华，精彩绽放〡全友家居2019年第五届绿色文化节开幕",
              VideoUrl: null,
            },
            1:{
              BigImgUrl: "https://www.quanyou.com.cn:89//UserFiles/UploadFile/20190410/QYJJWebSet20190410132307.jpg",
              Id: 192,
              PubDate: "2019-03-23",
              Title: "“春满绿色家园”——全友家居第五届赏花节迎春启幕",
              VideoUrl: null,
            }
        },
        greencyl:{
          bigImgUrl:"https://www.quanyou.com.cn:81/img/ppzx/chan_pin.jpg",
          msg:"绿色环保，既是一个企业经营定位战略，又是一个社会责任命题；既关涉万千家庭幸福生活，又是国家发展方向。正是基于上述思考全友家居积极整合内外部资源，构建从速生林到用户的绿色产业链从每一个环节入手，打造绿色标准，提升绿色指数。"
        },
        yoyo:{
          bigImgUrl:"https://www.quanyou.com.cn:81/img/ppzx/yoyo_pin.jpg",
          msg:`全友与大熊猫有着非常深的渊源。2005年，全友出资终身认养卧龙大熊猫繁育中心的一只雌性大熊猫。从此，“友友”成为了全友的品牌形象大使。据统计，2005年-2007年间，全友总共认养大熊猫5只，冠名1只。

          为呵护大熊猫健康成长，呼吁全社会关注大熊猫生存环境，全友开展了“爱心捐助大熊猫” “全友家居•RideForPanda熊猫骑行2017宝兴站”等全国性公益活动，以实际行动为熊猫构筑绿色家园。
          
          在全友公司，每一位到访的宾客都会切身感受到以熊猫为主题的文化氛围，这种文化正是全友所倡导的，以环保、绿色、和谐为核心的绿色文化理念。`,
        },
       
      },
      contact:{
          mjumsg:`全友家居致力于为用户提供综合家居产品和服务解决方案，产品涵盖套房家具、实木家具、床垫、沙发、软床和定制家具等，期待为您和您的家人带来美好的家居生活体验。`,
          tjymsg:`感谢您对全友家居的关注与支持，您对全友家居有任何意见或建议，随时欢迎和我们联系。`,
          jrqymsg:`用热血点燃激情，用青春书写新起点； 
          无论你是萝莉、御姐、文艺青年、技术控、颜值控； 
          你要的梦想与事业，只在你的选择 
          一一来全友 
          我们为激情、敬业的您提供家居行业最炫丽宽广的职业舞台。`,
          jmmdmsg:`全友创建于1986年，经过三十余载的励精图治，已发展成为集研、产、销一体的大型现代化家居。公司拥有由中、意、德、丹麦等国200多名顶尖设计师研发团队组成的成都、深圳、意大利米兰3个家居研发中心，5条德国IMA全自动生产线和德国HOMAG、意大利CEFLA、丹麦LIGNAR等先进设备群；建成了数千亩的工业园区，30多个专业分厂、20多个驻外销售服务机构、3000多家专卖店。致力于为全球用户提供温馨、时尚的家居生活。 

          如果您对全友家居门店加盟感兴趣，请直接留言，我们的招商经理会第一时间与您联系。`,
          gchzmsg:`我们为客户提供符合全友绿色产业链标准的优质工程家具系列，提供方案咨询、方案设计、产品设计开发、高效运营服务为一体的整体工程项目解决方案。如有需要，请直接与我们联系。 

          Email：kf@quanyou.com.cn 
          
          备注：请将合作需求及相关资料一并随邮件发送，相关工作人员会及时与您联系。`,
          mthzmsg:`欢迎访问全友家居媒体管理中心，有关合作或访问请直接邮件联系。 

          Email：QY1986@quanyou.com.cn 
          
          备注：请将合作需求、访问需求及相关资料一并随邮件发送,相关工作人员会及时与您联系。`,
      },
      contactSqzw:{
          data:{
            "选择职位类别":"",
            "IT类":["流程管理专员","ABAP开发工程师","信息安全工程师"],
            "设计研发类":["功能放样师","结构设计员","外观设计员","平面设计师","空间设计师","效果图设计师"],
            "综合管理类":["品质副总监","高级培训师","资深策划师","市场督察员","市场策划经理","设备主管"],
            "财务类":["财务经理","会计"],
          }
      }
=======
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
>>>>>>> c3181c418f025cdb47e49eabb04623d6c8d0523c
  },
>>>>>>> 49ea8d727cde923f4dc01cb43a362e39bb205221
  mutations: {

  },
  actions: {

  },
 
})

// 使用 Mock动态生成数据
import homeData from  '../datas/homeData'
var Mock = require('mockjs')
var data = Mock.mock('/home',{code:0,data:homeData})

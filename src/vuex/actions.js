// actions
import {GET_HOMEDATAS,SAVE_KING_KONG_LIST} from './mutation-types'
import {reqHomeData} from '../api/index'

export default {
  // 获取主界面数据的异步action
  async getHomedatas({commit}) {

    const result = await reqHomeData()
    if(result.code==0){

      let data=result.data
      commit(GET_HOMEDATAS,data)
    }else {
      alert("请求homoData出错")
    }

  },

}

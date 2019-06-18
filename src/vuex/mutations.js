// mutations
import {GET_HOMEDATAS,SAVE_KING_KONG_LIST} from './mutation-types'
export default {
  [GET_HOMEDATAS](state,data) {
    state.homeDatas=data
    state.kingKongList=data.kingKongModule.kingKongList
  },

}

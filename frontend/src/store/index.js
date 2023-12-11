import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

export default Vuex.createStore({
    state,
    mutations,
    getters,
    actions
})
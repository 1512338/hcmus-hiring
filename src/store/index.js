import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { stateHome } from './home'

export default new Vuex.Store({
    state: {
        ...stateHome
    },
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { stateHome } from './home'
import { actionsHome } from './home'
import { mutationsHome } from './home'

export default new Vuex.Store({
    state: {
        ...stateHome
    },
    actions: {
        ...actionsHome
    },
    mutations: {
        ...mutationsHome
    }
})
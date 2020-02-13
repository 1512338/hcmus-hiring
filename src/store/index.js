import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { stateHome } from './home'
import { actionsHome } from './home'
import { mutationsHome } from './home'

import { stateAuth } from './auth'
import { actionsAuth } from './auth'
import { mutationsAuth } from './auth'

export default new Vuex.Store({
    state: {
        ...stateHome,
        ...stateAuth
    },
    actions: {
        ...actionsHome,
        ...actionsAuth
    },
    mutations: {
        ...mutationsHome,
        ...mutationsAuth
    }
})
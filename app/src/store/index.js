import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cartProsucts: [
            {productId: 1, amount: 2},
        ]
    },
    mutations: {
        
    }
});
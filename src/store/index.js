import {createStore} from 'vuex'
import rootMutations from '@/store/mutations'
import rootGetters from '@/store/getters'
import rootActions from '@/store/actions'
import {expensesModule} from "@/store/expenses";

const store = createStore({
    modules: {expensesModule},
    state: {
        users: [
            {
                firstName: 'Nicolaj',
                lastName: 'Linde',
                id: 'p1',
            },
            {
                firstName: 'Lana',
                lastName: 'Lux',
                id: 'p2',
            },
            {
                firstName: 'Quin',
                lastName: '69',
                id: 'p3',
            },
        ]
    },
    getters: rootGetters,
    mutations: rootMutations,
    actions: rootActions,
})

export default store
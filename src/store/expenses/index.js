import expensesMutations from '@/store/expenses/mutations'
import expensesGetters from '@/store/expenses/getters'
import expensesActions from '@/store/expenses/actions'

export const expensesModule = {
    state: {
        expenses: [
            {
                user_id: 'p1',
                item: 'ASUS Strix 3080TI',
                price: 7500
            },
            {
                user_id: 'p1',
                item: 'Rug',
                price: 100
            },
            {
                user_id: 'p2',
                item: 'Vacation to Rome',
                price: 1000
            },
            {
                user_id: 'p3',
                item: 'Clown costume',
                price: 50
            },
            {
                user_id: 'p3',
                item: 'Path of Exile Beginner Kit',
                price: 5500
            },
        ]
    },
    getters: expensesGetters,
    mutations: expensesMutations,
    actions: expensesActions,
}

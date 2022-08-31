export default {
    fetchExpenses(state) {
        return state.expenses
    },
    sumOfExpenses(state) {
        const expenses = state.expenses
        let sum = 0;
        for (let i in expenses) {
            sum += expenses[i].price
        }
        return Number(sum)
    },
    sumOfIndividualExpenses: (state) => (id) => {
        const expenses = state.expenses
        return expenses.filter(data => data.user_id === id)
    }
}
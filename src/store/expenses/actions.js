export default {
    addExpenses(context, payload) {
        const data = {
            item: payload.item,
            price: payload.price,
            user_id: payload.user_id
        }
        context.commit('addExpenses', data)
    }
}
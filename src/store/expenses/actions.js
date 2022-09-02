export default {
    addExpenses(context, payload) {
        const data = {
            item: payload.item,
            price: payload.price,
            user_id: payload.user_id,
            id: Math.random().toString(16).slice(8),
        }
        context.commit('addExpenses', data)
    }
}
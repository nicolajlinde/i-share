export default {
    addUser(context, payload) {
        const userData = {
            id: Math.random().toString(16).slice(8),
            firstName: payload.firstName,
            lastName: payload.lastName
        }
        context.commit('addUser', userData)
    }
}
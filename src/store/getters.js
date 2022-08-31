export default {
    fetchUsers(state) {
        return state.users
    },
    userById: (state) => (id) => {
        return state.users.find(user => user.id === id)
    }
}
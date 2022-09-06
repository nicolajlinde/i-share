export default {
  addExpenses(state, payload) {
    state.expenses.push(payload);
  },
  removeExpense(state, payload) {
    const expenses = state.expenses;
    const expenseIndex = expenses.findIndex(
      (expenseItem) => expenseItem.id === payload.id
    );
    state.expenses.splice(expenseIndex, 1);
  },
};

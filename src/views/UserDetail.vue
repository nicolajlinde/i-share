<template>
  <div class="flex-wrapper">
    <section id="user-content">
      <h1 class="user-name-title">{{ fullName }}</h1>
      <h3>Add expenses</h3>
      <div class="control-form">
        <label for="item">Item</label>
        <input type="text" name="item" v-model="item" />
      </div>
      <div class="control-form">
        <label for="price">Price</label>
        <input
          type="number"
          name="price"
          v-model="price"
          @keydown.enter="submitData"
        />
      </div>
      <button @click="submitData">Add expense</button>
    </section>

    <section id="expense-content">
      <h1 class="expense-title">Expenses</h1>
      <hr />
      <div v-if="userExpenses.length > 0">
        <div
          class="expense-list"
          v-for="(expense, key) in userExpenses"
          :key="key"
        >
          <p>
            <span @click="removeExpense(expense.id, expense.item)">x</span>
            {{ expense.item }}
          </p>
          <p>{{ expense.price }} kr.</p>
        </div>
      </div>
      <div v-else class="expense-list">
        <p>No expenses added.</p>
      </div>
      <hr />
      <div class="expense-list">
        <p>Total</p>
        <p class="sum-underscore">{{ sumOfUserExpenses }} kr.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, defineProps, ref } from "vue";

// Props
const props = defineProps(["id"]);

// Store
const store = useStore();
const user = store.getters.userById(props.id);

// Variables
const item = ref("");
const price = ref("");
let formIsValid = true;

// Functions
const removeExpense = (id, name) => {
  const dialog = confirm(`Want to delete '${name}'?`);
  if (dialog) {
    store.dispatch("removeExpense", {
      id: id,
    });
  }
};

const submitData = () => {
  if (item.value === "" && price.value === "") {
    formIsValid = false;
    console.log(formIsValid);
  } else {
    store.dispatch("addExpenses", {
      item: item.value,
      price: price.value,
      user_id: props.id,
    });
    item.value = "";
    price.value = "";
  }
};

// Computed
const userExpenses = computed(() =>
  store.getters.sumOfIndividualExpenses(props.id)
);

const sumOfUserExpenses = computed(() => {
  const expenses = store.getters.sumOfIndividualExpenses(props.id);
  let sum = 0;
  for (let i in expenses) {
    sum += expenses[i].price;
  }
  return sum;
});

const fullName = computed(() => {
  return `${user.firstName} ${user.lastName}`;
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap");

.flex-wrapper {
  display: flex;
  flex-wrap: nowrap;
}

#expense-content,
#user-content {
  padding: 30px;
}

#user-content {
  flex: 70%;
}

#expense-content {
  flex: 30%;
}

.user-name-title {
  font-size: 4rem;
  font-weight: bolder;
}

.expense-title {
  text-align: center;
  font-size: 2.5rem;
}

.expense-list {
  display: flex;
  justify-content: space-between;
}

.expense-list p {
  font-family: "Allerta Stencil", sans-serif;
  text-transform: uppercase;
  margin: 0.2rem 0;
}

hr {
  border: 1.5px dashed black;
}

.sum-underscore {
  border-bottom: 2px dashed #000;
}
</style>

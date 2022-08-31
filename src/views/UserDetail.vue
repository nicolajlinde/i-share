<template>
  <section>
    <h1>User detail</h1>
    <h3>{{ user.firstName }} {{ user.lastName }}</h3>
    <p>(id: {{ user.id }})</p>
  </section>
  <section>
    <h3>Sum of all</h3>

  </section>
  <section>
    <h3>Add expenses</h3>
    <div class="control-form">
      <label for="item">Item</label>
      <input type="text" name="item" v-model="item">
    </div>
    <div class="control-form">
      <label for="price">Price</label>
      <input type="number" name="price" v-model="price">
    </div>
    <button @click="submitData">Add expense</button>
    <ul>
      <li v-for="(expense, key) in userExpenses" :key="key">{{ expense.item }}: {{ expense.price }} kr.</li>
    </ul>
  </section>

  <ul style="margin-top: 200px">
  </ul>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, defineProps, ref} from "vue";

const props = defineProps(['id'])
const store = useStore()

const item = ref('')
const price = ref('')

const submitData = () => {
  store.dispatch('addExpenses', {
    item: item.value,
    price: price.value,
    user_id: props.id
  })
  item.value = ''
  price.value = ''
}

const user = store.getters.userById(props.id)
const userExpenses = computed(() => store.getters.sumOfIndividualExpenses(props.id))
</script>

<style scoped>

</style>
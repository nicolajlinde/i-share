<template>
  <div class="thumbnail">
    <header>
      <img class="thumbnail-img"
           src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=6&m=1214428300&s=170667a&w=0&h=hMQs-822xLWFz66z3Xfd8vPog333rNFHU6Q_kc9Sues=">
      <h3>{{ props.data.firstName }} {{ props.data.lastName }}</h3>
    </header>
    <div>
      <router-link :to="'/users/' + props.data.id" :id="props.data.id" :first-name="props.data.firstName"
                   class="button">
        Add Expense
      </router-link>
    </div>
    <div class="expenses">
      <p>Paid: {{ calcSum(sumOfIndividual) }} kr.</p>
      <div v-html="calcWhatIsOwed"></div>
    </div>
  </div>
</template>

<script setup>
import {computed, defineProps} from "vue";
import {useStore} from "vuex";

const store = useStore()

const props = defineProps(['data'])
const sumOfAll = store.getters.sumOfExpenses
const sumOfIndividual = store.getters.sumOfIndividualExpenses(props.data.id)

const calcSum = (data) => {
  let sum = 0
  for (let i in data) {
    sum += data[i].price
  }
  return sum
}

const calcWhatIsOwed = computed(() => {
  const usersLength = store.getters.fetchUsers.length

  const owes = ((sumOfAll / usersLength) - calcSum(sumOfIndividual)).toFixed(2)
  const i = owes - (owes * 2)
  if (i > 0) {
    return `<span style="color: #55C97F;">+${i} kr.</span>`
  } else {
    return `<span style="color: #C94640;" id="owing">${i} kr.</span>`
  }
})

</script>

<style scoped>
.thumbnail-img {
  width: 200px;
  height: 200px;
}

.thumbnail {
  width: 200px;
  text-align: center;
  margin: 2%;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 15px 0;
  color: #fff;
  background-color: #7DC999;
  font-weight: normal;
  text-decoration: none;
}

.button:hover,
.button:active {
  background-color: #7D4441;
}

.expenses p {
  margin: 1rem 0 0.5rem 0;
}

</style>
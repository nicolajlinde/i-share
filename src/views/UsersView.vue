<template>
  <section class="thumbnail-container">
    <user-item v-for="(data, key) in users" :key="key" :data="data"></user-item>
  </section>
  <section id="sum" v-if="sum > 0">
    <h1>Total</h1>
    <h2>{{ sum }} kr.</h2>
  </section>
  <section id="add-more-users">
    <div class="wrapper">
      <h1>Add users</h1>
      <div class="control-form">
        <label for="name">First Name</label>
        <input type="text" name="firstName" v-model="firstName" />
      </div>
      <div class="control-form">
        <label for="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          @keydown.enter="submitData"
          v-model="lastName"
        />
      </div>
      <button @click="submitData">Add user</button>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
import UserItem from "@/components/users/UserItem";

// Store
const store = useStore();
const users = store.getters["fetchUsers"];
const sum = store.getters.sumOfExpenses;

// Variables
const firstName = ref("");
const lastName = ref("");

// Functions
const submitData = () => {
  store.dispatch("addUser", {
    firstName: firstName.value,
    lastName: lastName.value,
  });
  firstName.value = "";
  lastName.value = "";
};
</script>

<style lang="scss" scoped>
#sum {
  text-align: center;
}

#sum h1 {
  padding-top: 4rem;
  font-size: 4rem;
  font-weight: bolder;
}

#sum h2 {
  font-size: 2rem;
  font-weight: lighter;
  text-decoration: underline;
}

#sum h1,
#sum h2 {
  margin: 0.2rem;
}

.thumbnail-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#add-more-users {
  margin: 100px 0;
}

.wrapper {
  padding: 25px 20px;
  color: #e9e9e9;
  width: 50%;
  margin: 0 auto;
  background-color: #417d57;
  border-radius: 5px;
}

.wrapper h1 {
  font-size: 3rem;
  font-weight: bolder;
  text-align: center;
  margin: 0.5rem 0;
  color: #7dc999;
}
</style>

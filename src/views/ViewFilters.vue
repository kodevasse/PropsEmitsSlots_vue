<template>
  <div>temp</div>
  <p>Total age: {{ ageCalc }}</p>
  <p>Average points: {{ avgPointsCalc }}</p>
  <p>Min points: {{ minPoints }}</p>
  <p>Max points: {{ maxPoints }}</p>
  <button class="btn" @click="findPer2">FindPer</button>
  <button class="btn" @click="sortAll">All</button>
  <button class="btn btn-info" @click="sortPer">Per</button>
  <input class="input input-primary m-1" type="text" />
  <li v-for="(user, index) in getUsers" :key="index">
    {{ user.name
    }}<button
      class="btn btn-warning"
      @click="filterTodo(user)"
      :class="{ active: user.name === activeFilter.value }"
    >
      {{ user.name }} age{{ user.age }}
    </button>
  </li>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
const users = ref([
  { name: "Per", age: 33, points: 500 },
  { name: "Siri", age: 17, points: 200 },
  { name: "Espen", age: 40, points: 100 },
  { name: "Ole", age: 54, points: 120 },
]);
const activeFilter = ref("All");

function findPer2() {
  var n;
  users.find((n) => n === "kenneth");
  console.log(n);
}

function filterTodo(user) {
  if (getUsers.value.length > 1) {
    activeFilter.value = user.name;
  } else {
    activeFilter.value = "All";
  }
}
const getUsers = computed(() => {
  if (activeFilter.value === "All") {
    return users.value;
  }
  return users.value.filter((user) => user.name === activeFilter.value);
});

function sortAll() {
  activeFilter.value = "All";
}
function sortPer() {
  activeFilter.value = "Per";
}

const ageCalc = computed(() => {
  // Two ways doing it, 1 with arrow and 1 without
  // function age(item) {
  //   return item.age;
  // }

  // function sum(prev, next) {
  //   return prev + next;
  // }

  // return getUsers.value.map(age).reduce(sum);
  //WITHOUT ARROW
  return getUsers.value
    .map((item) => item.age)
    .reduce((prev, next) => prev + next);
});
const avgPointsCalc = computed(() => {
  return (
    getUsers.value
      .map((item) => item.points)
      .reduce((prev, next) => prev + next) / getUsers.value.length
  );
});
const maxPoints = computed(() => {
  var calc = getUsers.value.map((item) => item.age);
  return Math.max(...calc);
});
const minPoints = computed(() => {
  var calc = getUsers.value.map((item) => item.age);
  return Math.min(...calc);
});
</script>

<style scoped>
* {
  color: rgb(20, 113, 120);
}
.active {
  padding: 15px;
}
</style>

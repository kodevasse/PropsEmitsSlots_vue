<template>
  <div>temp</div>
  <p>Total age: {{ ageCalc }}</p>
  <p>Average points: {{ avgPointsCalc }}</p>
  <p>Min points: {{ minPoints }}</p>
  <p>Max points: {{ maxPoints }}</p>
  <button class="btn" @click="findPer2">FindPer</button>
  <button class="btn btn-xs" @click="sortAll">All</button>
  <button class="btn btn-xs btn-accent" @click="sortSiri">Siri</button>
  <button class="btn btn-xs btn-secondary" @click="sortPer">Per</button>
  <input class="input input-primary m-1" v-model="searchText" type="text" />
  {{ searchText }}
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
const searchText = ref("");

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
  if (!searchText.value) {
    if (activeFilter.value === "All") {
      return users.value;
    }
    return users.value.filter((user) => user.name === activeFilter.value);
  } else {
    console.log("searching");
    // return users.value;
    return users.value.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText.value.toLowerCase()) ||
        searchText.value.toLowerCase().includes(user.name.toLowerCase())
    );
  }
});

function sortAll() {
  searchText.value = "";
  activeFilter.value = "All";
}
function sortPer() {
  searchText.value = "";
  activeFilter.value = "Per";
}
function sortSiri() {
  searchText.value = "";
  activeFilter.value = "Siri";
}
// input search in array
// const filterText = computed(() => {
//   return users.value.filter((user) =>
//     user.name.toLowerCase().indexOf(user.value.toLowerCase()) != -1;
//   );
// });

const ageCalc = computed(() => {
  if (getUsers.value.length > 0) {
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
  }
  return 0;
});
const avgPointsCalc = computed(() => {
  if (getUsers.value.length > 0) {
    return (
      getUsers.value
        .map((item) => item.points)
        .reduce((prev, next) => prev + next) / getUsers.value.length
    );
  }
  return 0;
});
const maxPoints = computed(() => {
  if (getUsers.value.length > 0) {
    var calc = getUsers.value.map((item) => item.age);
    return Math.max(...calc);
  }
  return 0;
});
const minPoints = computed(() => {
  if (getUsers.value.length > 0) {
    var calc = getUsers.value.map((item) => item.age);
    return Math.min(...calc);
  }
  return 0;
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

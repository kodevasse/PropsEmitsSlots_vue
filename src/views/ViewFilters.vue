<template>
  <div class="h-24">
    {{ csvString }}
    <button class="btn btn-xs btn-error" @click="downloadUri">download</button>
    <button class="btn btn-xs btn-error" @click="testerOne">tester1</button>
  </div>
  <div
    class="bg-gray-800 rounded-md pl-4 py-2 mx-2 my-2 border border-lime-500 hover:text-black"
  >
    <p>Total age: {{ ageCalc }}</p>
    <p>Average points: {{ avgPointsCalc }}</p>
    <p>Min points: {{ minPoints }}</p>
    <p>Max points: {{ maxPoints }}</p>
  </div>
  <button class="btn" @click="findPer2">FindPer</button>
  <button class="btn btn-xs" @click="sortAll">All</button>
  <button class="btn btn-xs btn-accent" @click="sortSiri">Siri</button>
  <button class="btn btn-xs btn-secondary" @click="sortPer">Per</button>
  <button
    class="btn btn-xs bg-red-400 border-red-400 text-white"
    @click="sortDesc"
  >
    Desc
  </button>
  <button
    class="btn btn-xs bg-gray-900 border-gray-900 text-white"
    @click="sortAsc"
  >
    Asc
  </button>
  <input class="input input-primary m-1" v-model="searchText" type="text" />
  {{ searchText }}
  <div v-for="(user, index) in getUsers" :key="index">
    <button
      class="btn bg-gray-800 text-teal-200 border-3 mt-1 w-full sm:w-2/3 flex justify-between"
      @click="filterTodo(user)"
      :class="{ active: user.name === activeFilter.value }"
    >
      <div v-if="!user.avatar" class="avatar w-10">
        <div class="rounded-full">
          <img class="pb-1" :srcset="`https://robohash.org/${user.name}.png`" />
        </div>
      </div>
      <p class="text-lime-700">{{ user.name }}</p>
      <p class="text-purple-400">points {{ user.points }}</p>
      <p class="text-pink-300">age {{ user.age }}</p>
      <button class="z-14 text-2xl" @click="activate(user)">💡</button>
    </button>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
const users = ref([
  {
    name: "Per",
    age: 33,
    points: 500,
    avatartest: "https://robohash.org/YOUR-TEXT.png",
  },
  { name: "Siri", age: 17, points: 200 },
  { name: "Espen", age: 40, points: 120 },
  { name: "Ole", age: 54, points: 320 },
  { name: "Petter", age: 19, points: 520 },
  { name: "Pål", age: 11, points: 320 },
  { name: "Inger", age: 51, points: 320 },
  { name: "Casper", age: 41, points: 120 },
  { name: "Kriss", age: 11, points: 320 },
  { name: "Tobias", age: 7, points: 220 },
  { name: "Pile", age: 11, points: 510 },
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
function activate(user) {
  console.log(user.points);
}
const getUsers = computed(() => {
  if (activeFilter.value === "Desc") {
    console.log(users.value);
    var calcUsers = computed(() => {
      return users.value.filter(
        (user) =>
          user.name.toLowerCase().includes(searchText.value.toLowerCase()) ||
          searchText.value.toLowerCase().includes(user.name.toLowerCase())
      );
    });
    return calcUsers.value.sort((a, b) => b.age - a.age);
  } else if (activeFilter.value === "Asc") {
    console.log(users.value);
    var calcUsers = computed(() => {
      return users.value.filter(
        (user) =>
          user.name.toLowerCase().includes(searchText.value.toLowerCase()) ||
          searchText.value.toLowerCase().includes(user.name.toLowerCase())
      );
    });
    return calcUsers.value.sort((a, b) => a.age - b.age);
  } else if (!searchText.value) {
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
// filter functions
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
function sortAsc() {
  activeFilter.value = "Asc";
}
function sortDesc() {
  activeFilter.value = "Desc";
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
// Array of objects to csv

const csvString = computed(() => {
  return [
    ["data:text/csv;charset=utf-8,"],
    ["Name", "Age", "Points"],
    ...getUsers.value.map((item) => [item.name, item.age, item.points]),
  ]
    .map((e) => e.join(","))
    .join("\n");
});
console.log(getUsers.value);
const testerOne = () => {
  console.log(csvString);
  console.log(getUsers.value);
};
var encodedUri = computed(() => {
  return encodeURI(csvString.value);
});
const downloadUri = () => {
  window.open(encodedUri.value);
};
/*
   [
    ["Item ID", "Item Reference"],
    [1, "Item 001"],
    [2, "Item 002"],
    [3, "Item 003"]
   ]
*/
</script>

<style scoped>
* {
  color: rgb(20, 113, 120);
}
.active {
  padding: 30px;
}
</style>

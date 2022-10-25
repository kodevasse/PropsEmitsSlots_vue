<template>
  <MiniData :numberData="headerInput"></MiniData>
  <div class="bg-slate-900 w-1/2 mx-auto rounded-md">
    <div id="mongo" class="font-bold">dataview2</div>
    <button class="btn">Tester</button>
    <!-- The button to open modal -->
    <label for="myModal" class="modal-open btn modalOpen modal-button"
      >open modal</label
    >

    <!-- Put this part before </body> tag -->
  </div>
  <MainModal :title="headerInput" @clickEvent="callback(el)"
    >Hello <template v-slot:headerTwo>{{ header }}</template
    ><template v-slot:footerTwo>Its a footer</template></MainModal
  >

  <button class="btn btn-primary">Console log 1</button>
  <h2 class="text-xl mt-20 text-center">{{ headerInput }}</h2>
  <input v-model="headerInput" type="text" />
  <button class="btn" @click="callback2">Callback2</button>
  <button class="btn btn-success" @click="changeBackgroundColor">
    Click me
  </button>
  <h3 class="h3 bg-teal-300">TEST</h3>
</template>

<script setup>
import { ref, useAttrs, onMounted, reactive } from "vue";
import MainModal from "@/components/MainModal.vue";
import MiniData from "@/components/MiniData.vue";
const attrs = useAttrs();

const header = ref("ref header WOho");
const headerInput = ref("22222");
let colour = reactive({ color: "blue", width: "5" + "px" });

const callback = () => {
  console.log("came from child");
  var element = document.getElementById("notMyModal");
  element.classList.remove("modal-open");
  var element2 = document.getElementById("mongo");
  element.classList.add("text-red-600");
};

const callback2 = (el) => {
  console.log(el);
  var element = document.getElementById("notMyModal");
  element.classList.add("modal-open");
  var element2 = document.getElementById("mongo");
  element.classList.remove("text-red-600");
};

function changeBackgroundColor() {
  // colour.color = "red";

  // var i;
  // for (i = 0; i < 50; i++) {
  //   colour.width = i + "px";
  //   console.log(colour.width);
  // }
  // console.log(colour.color);
  person2(2);
  console.log(person2(2));
  console.log(person);
}

var x2 = 10;
var y = 20;
var person = { x2, y };
var users = ["per", "siri", "kenneth", "frode"];

var person2 = (x) => {
  return x * person.x2 + " Hello " + x * person.y;
};

var person3 = "Hi";
</script>

<style scoped>
.h3 {
  color: v-bind("colour.color");
  width: v-bind("colour.width");
}
</style>

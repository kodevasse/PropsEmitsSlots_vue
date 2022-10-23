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
</template>

<script setup>
import { ref, useAttrs } from "vue";
import MainModal from "@/components/MainModal.vue";
import MiniData from "@/components/MiniData.vue";
const attrs = useAttrs();

const header = ref("ref header WOho");
const headerInput = ref("22222");

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
</script>

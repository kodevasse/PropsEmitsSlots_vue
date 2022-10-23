<template>
  <div>
    <input type="checkbox" id="myModal" class="modal-toggle" />
    <div id="notMyModal" class="modal">
      <div class="modal-box">
        <header class="font-bold text-lg text-teal-300">
          <slot name="headerTwo"></slot>
        </header>
        <main class="py-2">
          <slot></slot>
        </main>
        <footer class="mt-5 text-2xs"><slot name="footerTwo"></slot></footer>
        <div class="modal-action">
          <label for="myModal" class="btn">Yay!</label>
          <button @click="$emit('clickEvent')">click me</button>
        </div>
        <h2 type="text">{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps(["title"]);
const notMyModal = ref();
</script>

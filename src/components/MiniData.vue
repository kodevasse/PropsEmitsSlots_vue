<template>
  <div class="rounded p-6 bg-slate-800 w-1/3 mx-auto my-4 text-pink-400">
    {{ numberData }}
  </div>
</template>

<script setup>
defineProps({
  numberData: String,
});
</script>

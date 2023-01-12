<script setup>
import { ref } from 'vue'
const x = ref(0)
</script>

<template>
  <main class="main">
    <svg>
      <use xlink:href="#logo"></use>
    </svg>
  </main>
</template>

<style>
  main > svg {
      width: 64px;
      height: 69px;
  }
</style>

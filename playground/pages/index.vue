<script setup lang="ts">
const test = ref(sum(1, 4))

const test2 = ref("foo")
</script>

<template>
  Test : {{ test }}
</template>

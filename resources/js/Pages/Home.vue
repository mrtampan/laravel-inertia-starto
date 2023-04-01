
<template>
  <Head title="Home"></Head>
  <h1>Home</h1>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";

// defineProps({
//   name: {
//     type: String,
//     required: true,
//   },
//   frameworks: {
//     type: Array,
//     required: true,
//   },
// });

defineProps({
  laravel: String,
  php: String,
});
</script>
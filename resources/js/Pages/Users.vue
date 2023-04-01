<template>
  <Head title="Users"></Head>
  <h1 class="text-4xl font-bold">Users</h1>
  <div>the current time is {{ time }}</div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
defineProps({
  time: {
    type: String,
  },
});
</script>


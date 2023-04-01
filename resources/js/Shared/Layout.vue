<template>
  <Head>
    <title>App</title>
    <meta type="description" content="app information" />
  </Head>
  <section class="p-6 bg-gray-200">
    <header class="flex justify-between">
      <h1 class="font-bold text-lg">My App</h1>
      <Nav />
    </header>
  </section>
  <section class="max-w-3xl mx-auto">
    <slot />
  </section>
</template>

<script setup>
import Nav from "./Nav.vue";
</script>
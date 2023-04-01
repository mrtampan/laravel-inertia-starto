<template>
  <nav class="ml-6">
    <ul class="flex space-x-4">
      <li>
        <NavLink :href="'/'" :active="$page.component === 'Home'">Home</NavLink>
      </li>
      <li>
        <NavLink :href="'/users'" :active="$page.component === 'Users'"
          >Users</NavLink
        >
      </li>
      <li>
        <NavLink :href="'/settings'" :active="$page.component === 'Settings'"
          >Settings</NavLink
        >
      </li>
      <li>
        <!-- <NavLink :href="'/logout'" :active="$page.component === 'Users'"
          >Logout</NavLink
        > -->
      </li>
    </ul>
  </nav>
</template>
<script setup>
import NavLink from "./NavLink.vue";
</script>
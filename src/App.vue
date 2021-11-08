<template>
    <Navbar />

    <router-view />
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import Navbar from "./components/Navbar.vue";

onMounted(() => {
    // document.documentElement.classList.add("dark");
});
</script>

<style lang="scss">
// @import "./styles/main.scss";
</style>

<template>
    <header class="navbar">
        <!-- Primary bar wrapper -->
        <div class="navbar__container">
            <!-- Primary nav wrapper -->
            <div class="navbar__primary">
                <!-- Logo -->
                <a href="#" class="navbar__logo">
                    <BaseIcon class="navbar__logo-icon" name="clipboard-list" />
                    <span class="navbar__logo-text">Guus van der Vegt</span>
                </a>

                <!-- Primary nav -->
                <nav class="navbar__links">
                    <a href="#" class="button button--link">About me</a>
                    <a href="#" class="button button--link">Projects</a>
                    <a href="#" class="button button--link">Contact me</a>
                </nav>
            </div>

            <!-- Secondary nav -->
            <nav class="navbar__links">
                <ThemeToggler />
            </nav>

            <!-- Mobile toggler -->
            <button class="navbar__menu-toggler" @click="toggleMobileMenu">
                <BaseIcon name="menu" class="navbar__menu-toggler-icon" />
            </button>

            <!-- </div> -->
        </div>

        <!-- Mobile menu -->
        <div ref="mobileMenu" class="navbar__mobile navbar__mobile-hidden">
            <a href="#" class="button button--link">About me</a>
            <a href="#" class="button button--link">Projects</a>
            <a href="#" class="button button--link">Contact me</a>

            <ThemeToggler class="button button--link" />
        </div>
    </header>

    <!-- <hr class="text-gray-100" /> -->
</template>

<script setup>
import { ref } from "@vue/reactivity";
import ThemeToggler from "./ThemeToggler.vue";

const mobileMenu = ref();

const toggleMobileMenu = () => {
    mobileMenu.value.classList.toggle("navbar__mobile-hidden");
};
</script>

<style></style>

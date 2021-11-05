<template>
    <header class="navbar">
        <!-- Primary bar wrapper -->
        <div class="navbar__container">
            <!-- <div class="flex justify-between"> -->

            <!-- Primary nav wrapper -->
            <div class="navbar__primary">
                <!-- Logo -->
                <a href="#" class="navbar__logo">
                    <Icon class="navbar__logo-icon" name="clipboard-list" />
                    <span class="navbar__logo-text">Guus van der Vegt</span>
                </a>

                <!-- Primary nav -->
                <nav class="navbar__links">
                    <a href="#" class="navbar__link">About me</a>
                    <a href="#" class="navbar__link">Projects</a>
                    <a href="#" class="navbar__link">Contact me</a>
                </nav>
            </div>

            <!-- Mobile toggler -->
            <button class="navbar__menu-toggler">
                <Icon name="menu" class="navbar__menu-toggler-icon" />
            </button>

            <!-- </div> -->
        </div>
    </header>
</template>

<script setup>
import Icon from "./Icon.vue";
</script>

<style></style>

<template>
    <button class="navbar__theme-toggler" @click="toggleTheme">
        <BaseIcon
            :name="isDark ? 'sun' : 'moon-solid'"
            class="navbar__theme-toggler-icon"
        />
    </button>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        let isDark = ref(document.documentElement.classList.contains("dark"));

        const toggleTheme = () => {
            document.documentElement.classList.toggle("dark");
            isDark.value = document.documentElement.classList.contains("dark");
        };

        return {
            isDark,
            toggleTheme,
        };
    },
};
</script>

<style lang="scss" scoped></style>

<template>
    <button class="navbar__theme-toggler" @click="toggleTheme">
        <transition name="fade" mode="out-in">
            <BaseIcon
                v-if="theme === 'dark'"
                name="sun"
                class="navbar__theme-toggler-icon"
            />
            <BaseIcon
                v-else
                name="moon-solid"
                class="navbar__theme-toggler-icon"
            />
        </transition>
    </button>
</template>

<script>
import { onMounted, ref } from "vue";
import {
    getItemFromLocalStorage,
    setItemInLocalStorage,
} from "../utils/storage";

export default {
    setup() {
        let theme = ref(getItemFromLocalStorage("theme") || "light");

        const toggleTheme = () => {
            document.documentElement.classList.toggle("dark");
            theme.value = theme.value === "dark" ? "light" : "dark";

            setItemInLocalStorage("theme", theme.value);
        };

        const setInitialTheme = () => {
            document.documentElement.classList.add(theme.value);
        };

        onMounted(() => {
            setInitialTheme();
        });

        return {
            theme,
            toggleTheme,
        };
    },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 300ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>

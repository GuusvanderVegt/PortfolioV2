<template>
    <svg class="icon" :width="props.width" :height="props.height">
        <use v-bind="{ 'xlink:href': '/svg/icons.svg#' + props.name }" />
    </svg>
</template>

<script setup>
import { defineProps } from "@vue/runtime-core";

const props = defineProps({
    name: {
        type: String,
        default: "clipboard-list",
    },

    height: {
        type: [String, Number],
        default: 32,
    },

    width: {
        type: [String, Number],
        default: 32,
    },
});
</script>

<style>
.icon {
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
}
</style>

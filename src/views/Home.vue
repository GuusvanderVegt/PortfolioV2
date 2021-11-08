<template>
    <section class="page home">
        <form class="form mb-24">
            <div class="form__row input-row">
                <label for="item1" class="input-row__label">Item 1</label>
                <input
                    id="item1"
                    v-model="itemValue"
                    type="text"
                    name="item 1"
                    class="input input__text input-row__element"
                />
            </div>
        </form>

        <p>{{ itemValue }}</p>
    </section>
</template>

<script setup>
import { ref } from "@vue/reactivity";

let itemValue = ref("value");
</script>

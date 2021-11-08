<template>
    <section class="page home">
        <form class="form mb-24">
            <BaseInput
                v-model="itemValue"
                label="Gebruikersnaam:"
                type="text"
                placeholder="Uw gebruikersnaam:"
            />

            <BaseInput
                v-model="itemValue2"
                label="Wachtwoord: "
                type="Password"
                placeholder="Uw wachtwoord"
            />
        </form>

        <p>{{ itemValue }}</p>
        <p>{{ itemValue2 }}</p>
    </section>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
    setup() {
        let itemValue = ref("");
        let itemValue2 = ref("");

        return {
            itemValue,
            itemValue2,
        };
    },
};
</script>

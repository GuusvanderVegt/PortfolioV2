<template>
    <div class="form__row input-row">
        <label v-if="label" class="input-row__label">
            {{ label }}
        </label>

        <input
            class="input input__text input-row__element"
            :value="modelValue"
            v-bind="$attrs"
            @input="updateValue"
        />
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            default: "",
        },

        modelValue: [String, Number],
    },

    emits: ["update:modelValue"],

    setup(props, context) {
        // const props = defineProps({
        //     label: {
        //         type: String,
        //         default: "",
        //     },
        // });

        const updateValue = (event) => {
            console.log(event.target.value);
            context.emit("update:modelValue", event.target.value);
        };

        return {
            updateValue,
        };
    },
};
</script>

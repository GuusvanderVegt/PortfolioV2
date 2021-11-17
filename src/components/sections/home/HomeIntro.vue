<template>
    <section class="home-intro">
        <div class="home-intro__content">
            <div class="home-intro__content-left">
                <h1 class="home-intro__title">Hello, my name is Guus</h1>
                <h4 class="home-intro__subtitle">
                    I am a full stack web developer
                </h4>
                <div class="home-intro__actions">
                    <a href="#" class="button">CASES</a>
                    <a href="#" class="button">CONTACT ME</a>
                </div>
            </div>

            <div class="home-intro__content-right">
                <img
                    src="../../../assets/images/developer.svg"
                    alt="developer"
                    class="home-intro__developer-img"
                />
            </div>
        </div>
    </section>
</template>

<script>
import ScrollReveal from "scrollreveal";
export default {
    setup() {
        ScrollReveal({ reset: true }).reveal(".home-intro__content-right", {
            delay: 500,
        });
        return {};
    },
};
</script>

<style lang="scss" scoped></style>

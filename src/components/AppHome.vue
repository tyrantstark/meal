<template>
    <div class ="bg-box">
    <div class="bg-image">
        <div class="bg-text mt-4 p-5">
            <h1 class=" text-white rounded">Travelling Hungry??</h1>
            <b-button variant="outline-danger"><RouterLink tag="li" to="/meals">Book a Meal</RouterLink></b-button>
</div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "FinalAppHome",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { RouterLink }
};
</script>

<style scoped>
.bg-box {
    box-sizing: border-box;
    padding: 10%;
}
.nav-style {
    color: floralwhite;
}

.bg-box {
    background: rgb(249, 160, 64);
    background: linear-gradient(90deg, rgba(249, 160, 64, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 99%);
}
.bg-box {
    background-image: url("../assets/food_bg.jpg");
    /* -webkit-filter: blur(2px); */
    /* background-color: #FFEEDB;
      background-image: linear-gradient(62deg, #FFD8CC 5%, #FFBD9B 100%); */
}

/* Position text in the middle of the page/image */
</style>
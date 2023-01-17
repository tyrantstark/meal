<template>
        <div>
            <b-navbar toggleable="sm" type="dark" variant="dark">

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto margin">
                        <h2 class="text-info">
                            <img src="../assets/food_coach.logo.png" alt="Logo" width="90" height="90" />
                            &nbsp;&nbsp;&nbsp;&nbsp; <b>In-Train Meal Delivery</b>
                        </h2>
                    </b-navbar-nav>
                    <b-navbar-nav class="ms-auto margin">
                        <b-nav-item>
                           <RouterLink tag="li" to="/">Home</RouterLink>
                        </b-nav-item>

                        <b-nav-item >
                        <RouterLink tag="li" to="/register">Sign Up</RouterLink>
                        </b-nav-item>
                        <b-nav-item>
                        <RouterLink tag="li" class-active="active" to="/about">Go to About</RouterLink></b-nav-item>
                    </b-navbar-nav>

                </b-collapse>

            </b-navbar>
        
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "MainMenu",
    components: { RouterLink }
};
</script>

<style scoped>
.nav-style {
    color: floralwhite;
}
.bg-dark{
    background-color:#0A1D37 !important; 
}
.navbar-dark {
    --bs-navbar-color:#FFD8CC;}
nav li:hover,
nav li:active {
    cursor: pointer;
}
b{
    color: #FFD8CC;
}

.margin{
    margin: 0 4rem;
}
</style>
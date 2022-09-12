<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import HeaderNav from '@/components/HeaderNav.vue'; 
// import '@/assets/styles/HomeView.css';
// import BodyNav from '@/components/BodyNav.vue';
import { useRouter, useRoute} from 'vue-router';
import { onBeforeMount } from 'vue';
import firebase from 'firebase/compat/app';


export default {
    name: "App",
    // components: {
    //   HeaderNav,
    //   BodyNav
    // },
    setup() {
        const router = useRouter();
        const route = useRoute();
        onBeforeMount(() => {
            firebase.auth().onAuthStateChanged((user) => {
                if (!user) {
                    router.replace("/login");
                }
                else if (route.path == "/login" || route.path == "/register") {
                    router.replace("/");
                }
            });
        });
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

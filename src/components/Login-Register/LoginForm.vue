<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="Login" class="form-login">
            <input type="text" placeholder="Email" class="item email" v-model="email" />
            <input type="password" placeholder="Password" class="item" v-model="password"/>
            <input type="submit" value="Login" class="submit"/>
            <p class="account">Need an account? <router-link to="/register" class="register">Register Here</router-link></p>
            <router-link to="/" class="link-google">
                <div class="image">
                    <img src="@/assets/images/icon/icon-google.png" alt="icon-google" />
                </div>
                <p class="text-gg">Sign In with Google</p>
            </router-link>
        </form>
    </div>
</template>

<script>
import {ref} from 'vue';
import firebase from 'firebase/compat/app';
import '@/assets/styles/Login-Register/LoginForm.css';
export default {
    name: 'LoginForm',
    setup() {
        const email = ref("");
        const password = ref("");
        
        const Login = () => {
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then(data => console.log(data))
                .catch(err => alert(err.message))
        }
        return{
            Login,
            email,
            password
        }
    }
}
</script>

<style>

</style>
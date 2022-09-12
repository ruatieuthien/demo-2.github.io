<template>
    <div class="register-main">
        <h1>Register</h1>
        <form @submit.prevent="Register" class="form-register">
            <input type="text" placeholder="Email" class="item email" v-model="email" />
            <input type="password" placeholder="Password" class="item" v-model="password"/>
            <input type="submit" value="Register" class="submit"/>
            <p class="account">Have an account? <router-link to="/login" class="register">Login Here</router-link></p>
        </form>
    </div>
</template>

<script>
import '@/assets/styles/Login-Register/RegisterForm.css';
import {ref} from 'vue';
import firebase from 'firebase/compat/app';
export default {
    name: 'RegisterForm',
    setup() {
        const email = ref("");
        const password = ref("");

        const Register = () => {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(user => {
                    alert(user);
                })
                .catch(err => alert(err.message));
        }
        return{
            Register,
            email,
            password
        }
    }
}
</script>

<style>

</style>
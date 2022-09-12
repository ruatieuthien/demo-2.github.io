<template>
    <el-row class="tac">
      <el-col :span="12">
        <h5 class="mb-2 logo"><router-link to="/" class="logo-text">PhoneLogo</router-link></h5>
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
                <router-link to="/" class="item-phone">
                  <el-icon><House /></el-icon>
                  <span>Dashboard</span>
                </router-link>
            </template>
          </el-sub-menu>
          <el-menu-item index="2">
              <router-link to="/" class="item-phone">
                <el-icon><Phone /></el-icon>
                <span>Dial Phone Number</span>
              </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/" class="item-phone">
              <el-icon><List /></el-icon>
              <span>Contacts</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/form-contact" class="item-phone">
              <el-icon><document /></el-icon>
              <span>Form</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <router-link to="/" class="item-phone">
              <el-icon><Location /></el-icon>
              <span>My Location</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="6">
            <router-link to="/" class="item-phone">
              <el-icon><setting /></el-icon>
              <span>Settings</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="7">
            <router-link to="/" class="item-phone " @click="Logout">
              <el-icon><Unlock /></el-icon>
              <span>Logout</span>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
</template>

<script>
import '@/assets/styles/HeaderNav.css';
import {
  Document,
  Phone,
  List,
  Setting,
  Location,
  House,
  Unlock
} from '@element-plus/icons-vue';
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase/compat/app';
export default {
    name: "HeaderNav",
    components: {
      document: Document,
      Phone,
      Location,
      Unlock,
      House,
    List,
  Setting },
  setup() {
      const user = firebase.auth().currentUser;

      const name = ref("")
      onBeforeMount(() => {
        if(user){
          name.value = user.email.split('@')[0];
        }
      });

      const Logout = () => {
        firebase
          .auth()
          .signOut()
          .then(() => console.log("Signed out"))
          .catch(err => alert(err.message));
      }
      return {
        name,
        Logout
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

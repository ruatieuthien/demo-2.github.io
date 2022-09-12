<template>
  <el-row>
    <el-col :span="8"><div class="grid-content ep-bg-purple" />
      <el-breadcrumb separator="/" class="bread-nav">
          <el-breadcrumb-item :to="{ path: '/' }" class="bread-item">Dashboard</el-breadcrumb-item>
          <el-breadcrumb-item class="bread-item"
          ><a href="/" class="link-bread">promotion management</a></el-breadcrumb-item
          >
      </el-breadcrumb>
    </el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple-light" /></el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple" />
      <el-row :gutter="20">
        <el-col :span="6" :offset="6">
          <div class="grid-content ep-bg-purple"/>
        </el-col>
        <el-col :span="6" :offset="6">
          <el-dropdown trigger="click" class="drop">
            <span class="el-dropdown-link">
              <el-icon><User /></el-icon> {{ name }}  <el-icon class="el-icon--right"><ArrowDown /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item><router-link to="/" class="item-drop-link"><el-icon><User /></el-icon> User</router-link></el-dropdown-item>
                <el-dropdown-item><button class="item-logout item-drop-link" @click="Logout"><el-icon><Unlock /></el-icon>Logout</button></el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import '@/assets/styles/HeaderBody/HeaderBody.css';
// import {
//     Expand 
// } from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';
import {
  ArrowDown, User, Unlock
} from '@element-plus/icons-vue';
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase/compat/app';
export default {
    name: "HeaderBody",
    components: {ArrowDown, User, Unlock },
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
    }
}
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
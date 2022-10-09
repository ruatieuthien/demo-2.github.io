<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><HeaderNav /></el-aside>
      <el-container>
        <el-header class="group-header"><BodyNav /></el-header>
        <el-main><BoxDialPhone /></el-main>
        <el-footer>@Tuấn Anh</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import '@/assets/styles/DialPhoneNumber.css';
import HeaderNav from '@/components/HeaderNav.vue'; 
import BodyNav from '@/components/BodyNav.vue';
import BoxDialPhone from '@/components/Box/BoxDialPhone/BoxDialPhone.vue';
export default {
    name: "DialPhoneNumber",
    components: {
    HeaderNav,
    BodyNav,
    BoxDialPhone
}
}
</script>

<style>

</style>
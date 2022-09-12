<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="190px"><HeaderNav /></el-aside>
      <el-container>
        <el-header class="group-header"><BodyNav /></el-header>
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'; 
import '@/assets/styles/HomeView.css';
import BodyNav from '@/components/BodyNav.vue';
export default {
  name: 'HomeView',
  components: {
    HeaderNav,
    BodyNav
}
}
</script>

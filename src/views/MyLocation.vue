<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><HeaderNav /></el-aside>
      <el-container>
        <el-header class="group-header"><BodyNav /></el-header>
        <el-main>Đây là My location </el-main>
        <el-footer>@Tuấn Anh</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'; 
import BodyNav from '@/components/BodyNav.vue';
export default {
    name: 'MyLocation',
    components: { HeaderNav, BodyNav, }
}
</script>

<style>

</style>
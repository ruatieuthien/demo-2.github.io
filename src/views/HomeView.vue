<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><HeaderNav /></el-aside>
      <el-container>
        <el-header class="group-header"><BodyNav /></el-header>
        <el-main>
          <div class="home-main">
            <BoxNavItem />
            <BoxTableList />
          </div>
        </el-main>
        <el-footer>@Tuấn Anh</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'; 
import '@/assets/styles/HomeView.css';
import BodyNav from '@/components/BodyNav.vue';
import BoxNavItem from '@/components/Box/BoxItem/BoxNavItem.vue';
import BoxTableList from '@/components/Box/BoxItem/BoxTableList.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderNav,
    BodyNav,
    BoxNavItem,
    BoxTableList
}
}
</script>

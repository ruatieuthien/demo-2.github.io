<template>
 <div class="common-layout">
    <el-container>
      <el-aside width="200px"><HeaderNav /></el-aside>
      <el-container>
        <el-header class="group-header"><BodyNav /></el-header>
        <el-main><FormSave /> </el-main>
        <el-footer>@Tuấn Anh</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import '@/assets/styles/FormContact/FormContact.css';
import HeaderNav from '@/components/HeaderNav.vue'; 
import BodyNav from '@/components/BodyNav.vue';
import FormSave from '@/components/Box/BoxForm/FormSave.vue';
export default {
    name: "FormContact",
    components: {
    HeaderNav,
    BodyNav,
    FormSave
}
}
</script>
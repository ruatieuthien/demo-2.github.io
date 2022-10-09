<template>
  <div class="form-main">
    <div class="form-save">
        <div class="header-form">
            <el-row :gutter="20">
                <el-col :span="8"><el-icon class="form-icon"><Document /></el-icon> <span class="text-form">Form</span></el-col>
                <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
                <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
                <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
            </el-row>
        </div>
        <div class="form-div">
            <form class="form-data" id="data" @submit.prevent="onSave">
                <div class="form-grid">
                    <span class="text">Form</span>
                    <div class="form-input">
                       <div class="form-item">
                        <input type="text" name="hoTen" class="input-item" id="name" v-model="hoTen" placeholder="Họ Tên">
                        <input type="text" name="diaChi" class="input-item" id="address" v-model="diachi" placeholder="Địa Chỉ">
                       </div>
                       <input type="text" name="soDienThoai" class="input-item item-number" id="numberPhone" v-model="soDienThoai" placeholder="Số Điện Thoại">
                       <input type="text" name="email" class="input-item item-number" id="email" v-model="Email" placeholder="Email">
                    </div>
                </div>
                <button id="save" class="btn-save">Save</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import { Document } from '@element-plus/icons-vue';
import '@/assets/styles/FormContact/FormSave.css';
export default {
    name: 'FormSave',
    components: {
        Document
    },
    data() {
        return {
            hoTen: '',
            diachi: '',
            soDienThoai: '',
            Email: '',
            nextBarId: 1

        }
    },
    methods: {
    onSave() {
      console.log(this.hoTen);
      console.log(this.soDienThoai);
      console.log(this.diachi);
      console.log(this.Email);
      var obj = {
        id: this.nextBarId++,
        hoten: this.hoTen,
        sodienthoai:  this.soDienThoai,
        diachinha:  this.diachi,
        email: this.Email
      }
      fetch('https://api-phonebook-default-rtdb.asia-southeast1.firebasedatabase.app/test1.json', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(obj)
      })
    }
  },
}
</script>

<style>

</style>
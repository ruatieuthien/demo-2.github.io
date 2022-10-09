<template>
  <el-row class="row-bg" justify="space-between">
    <el-col :span="6">
        <div class="item-box">
            <div class="item-items">
                <span class="text-box">Friends & Family</span>
                <count-up class="item-number-box" :star-val="0" :end-val="50" :duration="4" :autoplay="true"></count-up>
            </div>
            <fa icon="fa-solid fa-user-group" class="icons-item" />
        </div>
    </el-col>
    <el-col :span="6">
        <div class="item-box">
            <div class="item-items">
                <span class="text-box">Message</span>
                <count-up class="item-number-box" :star-val="0" :end-val="150" :duration="4" :autoplay="true"></count-up>
            </div>
            <fa icon="fa-solid fa-message" class="icons-item second" />
        </div>
    </el-col>
    <el-col :span="6">
        <div class="item-box">
            <div class="item-items">
                <span class="text-box">Phone</span>
                <count-up class="item-number-box" :star-val="0" :end-val="20" :duration="4" :autoplay="true"></count-up>
            </div>
            <fa icon="fa-solid fa-mobile"  class="icons-item"/>
        </div>
    </el-col>
  </el-row>
</template>

<script>
import CountUp from 'vue-countup-v3';
import '@/assets/styles/BoxNavItem/BoxNavItem.css';
export default {
    name: 'BoxNavItem',
    components: { CountUp },
    data() {
        return {
        number: 1,
        likes: 153,
        isLiked: false,
        intervalSpeed: 2000,
        interval: null
        };
    },
}
</script>

<style>

</style>
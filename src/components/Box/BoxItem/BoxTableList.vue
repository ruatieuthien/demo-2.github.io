<template>
  <div class="box-main">
    <h1 class="text-h1">Friends & Family</h1>
    <span class="plit"></span>
    <div class="table">
        <el-table :data="listData" style="width: 100%">
            <el-table-column  prop="avatar" label="Avatar" width="120">
                <template v-slot="scope"><MyAvatar  v-bind:initials="scope.row.hoten" /></template>
            </el-table-column>
            <el-table-column prop="name" label="Name" width="170">
                <template v-slot="scope"><el-input v-model="scope.row.hoten" :disabled="isEdit"></el-input></template>
            </el-table-column>
            <el-table-column prop="number" label="Number" width="150" >
                <template v-slot="scope"><el-input v-model="scope.row.sodienthoai" :disabled="isEdit"></el-input></template>
            </el-table-column>
            <el-table-column prop="email" label="Email" width="300">
                <template v-slot="scope"><el-input v-model="scope.row.gmail" :disabled="isEdit"></el-input></template>
            </el-table-column>
            <el-table-column prop="address" label="Address" width="300">
                <template v-slot="scope"><el-input v-model="scope.row.diachinha" :disabled="isEdit"></el-input></template>
            </el-table-column>
            <el-table-column fixed="right" label="Operations" width="170">
            <template v-slot="scope">
                <el-button link type="primary" size="small" @click="handleSaveRow()"
                >Save</el-button
                >
                <el-button link type="primary" size="small" @click="handleEditRow()">Edit</el-button>
                <el-button link type="primary" size="small"  @click="deleteContact(scope.$index, scope.row)">Delete</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/BoxNavItem/BoxTableList.css';
import '@/assets/styles/BoxContact/BoxContact.css';
import MyAvatar from '@/components/Box/MyAvatar/MyAvatar.vue';
export default {
    name: 'BoxSaveContact',
    components: { MyAvatar},
    data() {
        return {
            isLoading: false,
            search: '',
            listData : [],
            hoten: '',
            diachinha: '',
            gmail: '',
            sodienthoai: '',
            isEdit: true
        }
    },
    created() {
      console.log('create .....')
      this.getData();
    },
    computed: {
      filteredSearch: function(){
        return this.listData.filter((name) =>{
          return name.hoten.match(this.search)
        });
      }
    },
    methods: {
      getData(){
        this.isLoading = true
        fetch('https://api-phonebook-default-rtdb.asia-southeast1.firebasedatabase.app/test1.json').then((response) =>{
          if(response.ok){
            return response.json();
          }
        }).then((data) => {
          this.isLoading = false
          console.log(data);
          var result = [];
          for(var x in data) {
            result.push({
              id: x,
              diachinha: data[x].diachinha,
              hoten: data[x].hoten,
              sodienthoai: data[x].sodienthoai,
              gmail: data[x].email
            })
          }
          this.listData = result;
        })
      },
      deleteContact(index) {
        console.log(index)
        this.listData.splice(index, 1)
      },
      handleEditRow() {
        this.isEdit = false
      },
      handleSaveRow() {
        this.isEdit = true
      },
    },
}
</script>

<style>

</style>
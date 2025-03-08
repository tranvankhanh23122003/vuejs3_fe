<template>
  <div>
    <a-card title="Tài khoản" style="width: 100%">
      <div class="col-12">
        <div class="btn-create-primary">
          <router-link :to="{name :'admin-users-create'}" >
          <button class="btn-create">
              <i class="fa-solid fa-plus"></i>
        </button>
      </router-link>

        </div>
       
      </div>
      <div class="row">
        <div class="col-12">
          <a-table :dataSource="users" :columns="columns" :scroll="{ x: 576 }" >
            <template #bodyCell="{ column, index , record }">
      <template v-if="column.key === 'index'">
       <span>{{ index +1 }}</span>
      </template>

      <template v-if="column.key === 'status'">
       <span v-if="record.status ==1 " class="text-primary">{{ record.status }}</span>
       <span v-else-if="record.status ==2 " class="text-danger">{{  record.status }}</span>

      </template>
    </template>
            </a-table>

        </div>
      </div>
    </a-card>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import { useMenu } from '../../../store/use-menu';
import axios from 'axios';
const columns = [
  {
    title: '#',
    key: 'index',
  },
  {
    title: 'Avarta',
    dataIndex: 'avarta',
    key: 'avarta',
  },
  {
    title: 'Tài Khoản',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Họ Tên',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Phòng Ban',
            dataIndex: 'departments',
            key: 'departments',
  },
  {
    title: 'Vai trò',
    dataIndex: 'role',
            key: 'role',
  },
  {
    title: 'Tình trạng',
    dataIndex: 'status',

            key: 'status',
  },
  {
    title: 'Công Cụ',
            key: 'action',
  }
]

const users = ref([]);
const menuStore = useMenu();

onMounted(() => {
  menuStore.onSelectedKeys(["admin-users"]);
  getUsers();
});
const getUsers = () => {
  axios.get("http://127.0.0.1:8000/api/users")
    .then((response) => {
      users.value = response.data;
    })
    .catch(function (error) {
      console.log(error);
    })

}
</script>
<style>
.btn-create{
  border-radius:5px ;
  color: white;
  background: #007bff;
  padding: 6px 16px;
  cursor: pointer;
  border: none;
  margin-bottom: 10px;
}
.btn-create-primary{
  display: flex;
  justify-content: flex-end;

}
</style>
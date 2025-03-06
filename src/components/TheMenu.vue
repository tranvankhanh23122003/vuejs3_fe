<template>
    <a-menu
     v-model:openKeys="openKeys"
     v-model:selectedKeys="selectedKeys"
     mode="inline"
     theme="white"
   >
       <a-menu-item class="admin-users" key="admin-users">
           <router-link :to="{ name: 'admin-users' }">
               <span>Tài khoản</span>
           </router-link>
       </a-menu-item>

       <a-menu-item class="admin-role" key="admin-role">
           <router-link :to="{ name: 'admin-role' }">
               <span>Vai trò</span>
           </router-link>
       </a-menu-item>

       <a-menu-item 
           class="admin-setting" 
           key="admin-setting"
           :class="{ 'selected': selectedKeys.includes('admin-setting') }"
           @click="menuStore.onSelectedKeys(['admin-setting'])"
       >
           <router-link :to="{ name: 'admin-setting' }">
               <span>Cài đặt</span>
           </router-link>
       </a-menu-item>
   </a-menu>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useMenu } from '../store/use-menu';

const menuStore = useMenu();
const { selectedKeys, openKeys } = storeToRefs(menuStore);
</script>

<style>
.admin-users,
.admin-role,
.admin-setting {
   text-decoration: none;
}

.admin-users:hover,
.admin-role:hover,
.admin-setting:hover {
   background-color: aqua;
}

a {
   text-decoration: none;
}
</style>

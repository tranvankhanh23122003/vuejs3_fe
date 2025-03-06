<template>
  <div class="container-fluid">
    <div class="row align-items-center" style="background-color: aqua; padding: 1rem">

      <div class="col-auto d-flex d-sm-none align-items-center justify-content-center">
        <span>x</span>
      </div>

      <div class="col-9 d-flex align-items-center">
        <img @click="showDrawer" src="/src/assets/icondoreamon.png" height="34px" width="32px" alt="">
        <span class="d-none d-sm-flex ms-2">Quản trị</span>
      </div>
      <div class="col-3 d-sm-flex align-items-center justify-content-sm-end ">
        <span @click="showDrawerUsers">Admin</span>
      </div>


      <div class="col-auto d-flex d-sm-none align-items-center justify-content-center">
        <span>x</span>
      </div>
    </div>
  </div>
  <a-drawer v-model:open="open" :root-style="{ color: 'blue' }" style="color: red" title="Danh Mục" placement="left">
    <TheMenu />
  </a-drawer>
  <a-drawer v-model:open="open_users" :root-style="{ color: 'blue' }" style="color: red" title="Danh Mục Users"
    placement="right">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script setup>
import TheMenu from './TheMenu.vue';

import { ref } from 'vue';
const open = ref(false);
const open_users = ref(false);

const showDrawer = () => {
  open.value = true;
};
const showDrawerUsers = () => {
  open_users.value = true;
};
</script>

<template>
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="light"
      :items="items"
    >
      <template v-for="item in items" :key="item.key">
        <a-menu-item
          :class="{'selected-menu': state.selectedKeys.includes(item.key)}"
          @click="selectMenu(item.key)"
        >
          {{ item.label }}
        </a-menu-item>
      </template>
    </a-menu>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const state = reactive({
    selectedKeys: ['1'], 
    openKeys :[],
  });
  
  const items = reactive([
    { key: '1', label: 'Option 1', title: 'Option 1' },
    { key: '2', label: 'Option 2', title: 'Option 2' },
    { key: '3', label: 'Option 3', title: 'Option 3' },
  ]);
  
  const selectMenu = (key) => {
    state.selectedKeys = [key]; 
  };
  </script>
  
  <style scoped>
  .selected-menu {
    background-color: #007bff ;
    color: white ;
  }
  </style>
  
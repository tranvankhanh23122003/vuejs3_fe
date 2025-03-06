<template>
    <div>
        Đây là layout role
        <router-view></router-view>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMenu } from '../../../store/use-menu';

const menuStore = useMenu();

onMounted(() => {
  menuStore.onSelectedKeys(["admin-role"]);
});
</script>

<template>
    đây là layout user
    <router-view></router-view>
</template>
<script setup>
import { useMenu } from '../../../store/use-menu';
useMenu().onSelectedKeys(["admin-users"]);
</script>
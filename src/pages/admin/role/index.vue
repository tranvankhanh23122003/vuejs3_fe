<template>
    đây là layout role
    <router-view></router-view>
</template>
<script setup>
import { useMenu } from '../../../store/use-menu';
useMenu().onSelectedKeys(["admin-role"]);
</script>
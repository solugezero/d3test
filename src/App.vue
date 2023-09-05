<template>
  <div id="app">
    <TransactionList />
    <WalletConnection />
  </div>
</template>

<script setup lang="ts">
import TransactionList from './components/TransactionList.vue';
import WalletConnection from './components/WalletConnection.vue';
</script>

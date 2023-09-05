<template>
  <div id="app">
    <TransactionList />
    <WalletConnection />
  </div>
</template>

<script>
import TransactionList from './components/TransactionList.vue';
import WalletConnection from './components/WalletConnection.vue';

export default {
  components: {
    TransactionList,
    WalletConnection,
  },
};
</script>

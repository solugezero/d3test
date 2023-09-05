<template>
    <div>
        <button @click="handleConnetMetaMask()">Connect Wallet</button>
        <p v-if="connectedWallet">Connected Wallet Address: {{ connectedWallet }}</p>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { connectWallet } from "@/helpers/ConnetWallet"
const connectedWallet = ref<null | string>(null)

const handleConnetMetaMask = async () => {
    const result = await connectWallet()
    connectedWallet.value = result
}
</script>
  
<template>
    <div>
        <button @click="connectWallet">Connect Wallet</button>
        <p v-if="connectedWallet">Connected Wallet Address: {{ connectedWallet }}</p>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const connectedWallet = ref<null | string>(null)

const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
        connectedWallet.value = 'You have no MetaMask extension!'
        return
    }
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }).catch((err) => {
            if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log('Please connect to MetaMask.');
            } else {
                console.error(err);
            }
        });
        connectedWallet.value = accounts[0];
    } catch (error) {
        console.error('Error connecting wallet:', error);
    }
}
</script>
  
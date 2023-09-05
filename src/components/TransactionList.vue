<template>
    <div>
        <h2>Latest Transactions</h2>
        <p v-if="isLoading">Loading...</p>
        <div v-else>
            <ul v-for="(item, idx) in transactions?.data?.swaps">
                <li>------{{ idx + 1 }}------</li>
                <li>timestamp: {{ getValidDate(item?.timestamp) }}</li>
                <li>tokenAmountIn: {{ item?.tokenAmountIn }}</li>
                <li>tokenAmountOut: {{ item?.tokenAmountOut }}</li>
                <li>tokenIn: {{ item?.tokenIn }}</li>
                <li>tokenOut: {{ item?.tokenOut }}</li>
            </ul>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { getValidDate } from "@/helpers/DateValidator"
import { onBeforeMount, toRefs } from "vue";
import { useTransactions } from "@/stores/transactions";

const transactionStore = useTransactions()
const { transactions, isLoading } = toRefs(transactionStore)

onBeforeMount(async (): Promise<void> => {
    await transactionStore.getTransactions()
})
</script>
  
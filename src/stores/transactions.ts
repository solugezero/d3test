import { defineStore } from "pinia";
import apolloClient from "@/services/ApolloClient";
import { GET_LATEST_TRANSACTIONS } from "@/graphql/requests/transactions";
interface TransactionsState {
  transactions?: any;
  isLoading: boolean;
}

export const useTransactions = defineStore("transactions", {
  state: (): TransactionsState => ({
    isLoading: false,
    transactions: undefined,
  }),
  actions: {
    async getTransactions() {
      try {
        this.isLoading = true;
        const response = await apolloClient.query({
          query: GET_LATEST_TRANSACTIONS,
        });
        console.log(response)
        if (!response) return;
        this.transactions = response;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
  },
});

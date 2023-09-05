import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const connectWallet = async (): Promise<any> => {
  if (typeof window.ethereum === "undefined") {
    return "You have no MetaMask extension!";
  }
  try {
    const accounts: any | string[] = await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .catch((err: any) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log("Please connect to MetaMask.");
        } else {
          console.error(err);
        }
      });
    if (accounts?.length) return accounts[0];
  } catch (error) {
    return `Error connecting wallet: ${error}`;
  }
};

export { connectWallet };

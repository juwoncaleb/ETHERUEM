import React, { useEffect, useState } from "react";

import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constant";

export const TransactionContext = React.createContext();

const { ethereum } = window;

//Fetch Eth contract

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract();

  console.log(provider, signer, transactionContract);
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(" ");
  const [formData , setFormData] = use
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask !!!");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts);

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("no account found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum Object");
    }
  };

  //Connect Application to metamask
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask !!!");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum Object");
    }
  };
// Send Transaction 

const sendTransaction = async () =>{
    try {
        if (!ethereum) return alert("Please install MetaMask !!!");
            // get data from the form
    } catch (error) {
        
    }
}
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};

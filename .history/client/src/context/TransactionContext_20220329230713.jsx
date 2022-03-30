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

return transactionContract
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(" ");
  const [formData, setFormData] = useState({
    addressTo: " ",
    amount: " ",
    keyword: " ",
    message: " "
  });
  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
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

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask !!!");
      const { addressTo, amount, keyword, message } = formData;

     const transactionContract = getEthereumContract()
     await ethereum.request({
method : "eth_sendTransaction",
params : [{
    from : currentAccount,
    to : addressTo,
    gas : 0x5208
}]

     })
    } catch (error) {
        throw new Error("No Eth object")
    }
  };
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
         handleChange,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

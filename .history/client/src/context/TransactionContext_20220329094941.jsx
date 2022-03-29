import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constant";

export const TransactionContext = React.createContext();

const { etheruem } = window;
//Fetch etherum contract
const getEtheruemContract = () => {
  const provider = new ethers.providers.Web3Provider(etheruem);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  console.log(provider, signer, transactionContract);
};

export const TransactionProvider = ({ children}) => {
  const [connectedAccount , setConnectedAccount]
//ENSURE METAMASK IS CONNECTED 
const checkIfWalletConnected = async ()=>{
  if (!etheruem)  return alert('Please install metamask');
  
  const accounts = await etheruem.request({ method : 'eth_accounts'});

  console.log(accounts);
}
const connectWallet = async ()=>{
  try {
    if (!etheruem)  return alert('Please install metamask');
    const accounts = await etheruem.request({ method : 'eth_requestAccounts'});

    setCurrentAccount(accounts[0])
  } catch (error) {
    
  }
}
useEffect (()=>{
  checkIfWalletConnected();
}, []);
  return (
    <TransactionContext.Provider value={{value : 'test'}}>
      {children}
    </TransactionContext.Provider
    >
  );
}

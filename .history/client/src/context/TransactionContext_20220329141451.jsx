import React, { useEffect, useState} from 'react'

import { ethers } from 'ethers';
import { contractABI, contractAddress} from '../utils/constant'

export const TransactionContext = React.createContext();

const  { ethereum } = window;

//Fetch Eth contract

const getEthereumContract = ()=>{
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract

    console.log(
        provider,
        signer,
        transactionContract
    );
}
export const TransactionProvider = ({ children })=>{
    const checkIfWalletIsConnected = async () =>{
       if (!ethereum) return  alert( 'Please install MetaMask !!!') 
       const accounts = await ethereum.request ({method : 'eth_accounts'})
    console.log(accounts);
    }

    const connectWallet = async ()=>{
        try {
            if (!ethereum) return  alert( 'Please install MetaMask !!!') 
            const accounts = await ethereum.request ({method : 'eth_requestAccounts'})
            setCurrentAccount(accounts[0])
        } catch (error) {
            
        }
    }

    useEffect (()=>{
        checkIfWalletIsConnected();

    }, [])
    return (
        <TransactionContext.Provider value={{ value : "test"}}>
            {children}
        </TransactionContext.Provider>
    )
}
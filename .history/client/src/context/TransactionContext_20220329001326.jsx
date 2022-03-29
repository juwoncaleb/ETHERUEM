import React, {useEffect , useState} from 'react';
import { ethers } from 'ethers';
import { contractABI , contractAddress} from '../utils/constant'

export const TransactionContext = React.createContext();

const { etheruem} =  window
const getEtheruemContract = ()=>{
    const provider = new ethers.providers.Web3Provider(etheruem)
const signer = provider.getSigner();
const transactionContract = new ethers.
console.log();
}
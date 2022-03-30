import React, { useEffect, useState} from 'react'

import {ether, ethers } from 'ethers';
import { contractABI, contractAddress} from '../utils/constant'

export const TransactionContext = React.createContext();

const  { ethereum } = window;

//Fetch Eth contract

const getEthereumContract = ()=>{
    const provider = new ethers.
}
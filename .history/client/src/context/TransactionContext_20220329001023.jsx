import React, {useEffect , useState} from 'react';
import { ethers } from 'ethers';
import { contractABI , contractAddress} from '../utils/constant'

export const TransactionContext = React.createContext();

const { etheruem} =  window

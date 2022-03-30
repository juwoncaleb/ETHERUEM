import React, { useEffect, useState} from 'react'

import {ether } from 'ethers';
import { contractABI, contractAddress} from '../utils/constant'

export const TransactionContext = React.createContext();

const  { ethereum }
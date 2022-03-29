/// SPDX-License-Identifier: UNLICENSED 

pragma solidity ^0.8.0;

contract Transactions {
uint256 transactionCounter ;
// Function
event Transfer( address from, address reciever, uint amount, string message , uint timestamp, string keyword);
// Object
struct TransferStruct {
    address sender;
    address reciever;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword;
}
//Array

}
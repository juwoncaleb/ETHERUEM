/// SPDX-License-Identifier: UNLICENSED 

pragma solidity ^0.8.0;

contract Transactions {
uint256 transactionCount ;
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
TransferStruct[] transaction ;


function addToBlockChain( address payable reciever, uint amount , string memory message,  ) public {
    transactionCount +=1;

}
function getAllTransactions() public view returns (TransferStruct[] memory ) {
    
}
function getTransactionCount() public view returns (uint256)  {
    
}
}
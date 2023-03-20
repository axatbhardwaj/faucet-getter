pragma solidity ^0.8;
//SPDX-License-Identifier: MIT
contract FaucetGetter {
    address payable transferTo;

    constructor() {
        /// @dev address of faucet getter contract on Telos chain 
        transferTo = payable (0x425AE55b7dca6402f9C3e01F881B0d6a2DF294aB);
    }

    receive() external payable {
        transferTo.transfer(msg.value);
    }
}

contract FaucetGetterFactory {
    FaucetGetter FG;
    FaucetGetter[] public fgList;

    function createContract() external {
        FG = new FaucetGetter();
        fgList.push(FG);
    }
}

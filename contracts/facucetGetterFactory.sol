pragma solidity ^0.8;

contract FaucetGetter {
    address payable transferTo;

    constructor(address payable _tnsfr) {
        transferTo = _tnsfr;
    }

    receive() external payable {
        transferTo.transfer(msg.value);
    }
}

contract FaucetGetterFactory {
    FaucetGetter FG;
    FaucetGetter[] public fgList;

    function createContract(address payable to) external {
        FG = new FaucetGetter(to);
        fgList.push(FG);
    }
}

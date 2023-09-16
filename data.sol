// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataStorageContract {
    string public storedData;
    string public hashedData;

    function storeData(string memory newData) public {
        storedData = newData;
    }

    function retrieveData() public view returns (string memory) {
        return storedData;
    }

    function hashData() public {
        hashedData = calculateHash(storedData);
    }

    function calculateHash(string memory input) internal pure returns (string memory) {
        return string(abi.encodePacked(keccak256(abi.encodePacked(input))));
    }
}

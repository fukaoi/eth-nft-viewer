import React, {Component} from "react";
import getWeb3 from "./getWeb3";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {imageList: []};

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      const abi = [{"constant": true, "inputs": [{"name": "interfaceId", "type": "bytes4"}], "name": "supportsInterface", "outputs": [{"name": "", "type": "bool"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x01ffc9a7"}, {"constant": true, "inputs": [], "name": "name", "outputs": [{"name": "", "type": "string"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x06fdde03"}, {"constant": true, "inputs": [{"name": "tokenId", "type": "uint256"}], "name": "getApproved", "outputs": [{"name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x081812fc"}, {"constant": false, "inputs": [{"name": "to", "type": "address"}, {"name": "tokenId", "type": "uint256"}], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x095ea7b3"}, {"constant": true, "inputs": [], "name": "totalSupply", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x18160ddd"}, {"constant": false, "inputs": [{"name": "from", "type": "address"}, {"name": "to", "type": "address"}, {"name": "tokenId", "type": "uint256"}], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x23b872dd"}, {"constant": true, "inputs": [{"name": "owner", "type": "address"}, {"name": "index", "type": "uint256"}], "name": "tokenOfOwnerByIndex", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x2f745c59"}, {"constant": false, "inputs": [{"name": "from", "type": "address"}, {"name": "to", "type": "address"}, {"name": "tokenId", "type": "uint256"}], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x42842e0e"}, {"constant": true, "inputs": [{"name": "index", "type": "uint256"}], "name": "tokenByIndex", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x4f6ccce7"}, {"constant": true, "inputs": [{"name": "tokenId", "type": "uint256"}], "name": "ownerOf", "outputs": [{"name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x6352211e"}, {"constant": true, "inputs": [{"name": "owner", "type": "address"}], "name": "balanceOf", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x70a08231"}, {"constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x715018a6"}, {"constant": false, "inputs": [{"name": "_to", "type": "address"}], "name": "mintTo", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x755edd17"}, {"constant": true, "inputs": [], "name": "owner", "outputs": [{"name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x8da5cb5b"}, {"constant": true, "inputs": [], "name": "isOwner", "outputs": [{"name": "", "type": "bool"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x8f32d59b"}, {"constant": true, "inputs": [], "name": "symbol", "outputs": [{"name": "", "type": "string"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x95d89b41"}, {"constant": false, "inputs": [{"name": "to", "type": "address"}, {"name": "approved", "type": "bool"}], "name": "setApprovalForAll", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xa22cb465"}, {"constant": false, "inputs": [{"name": "from", "type": "address"}, {"name": "to", "type": "address"}, {"name": "tokenId", "type": "uint256"}, {"name": "_data", "type": "bytes"}], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xb88d4fde"}, {"constant": true, "inputs": [{"name": "_tokenId", "type": "uint256"}], "name": "tokenURI", "outputs": [{"name": "", "type": "string"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xc87b56dd"}, {"constant": true, "inputs": [{"name": "owner", "type": "address"}, {"name": "operator", "type": "address"}], "name": "isApprovedForAll", "outputs": [{"name": "", "type": "bool"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xe985e9c5"}, {"constant": false, "inputs": [{"name": "newOwner", "type": "address"}], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xf2fde38b"}, {"inputs": [{"name": "_proxyRegistryAddress", "type": "address"}], "payable": false, "stateMutability": "nonpayable", "type": "constructor", "signature": "constructor"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "previousOwner", "type": "address"}, {"indexed": true, "name": "newOwner", "type": "address"}], "name": "OwnershipTransferred", "type": "event", "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "from", "type": "address"}, {"indexed": true, "name": "to", "type": "address"}, {"indexed": true, "name": "tokenId", "type": "uint256"}], "name": "Transfer", "type": "event", "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "owner", "type": "address"}, {"indexed": true, "name": "approved", "type": "address"}, {"indexed": true, "name": "tokenId", "type": "uint256"}], "name": "Approval", "type": "event", "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "owner", "type": "address"}, {"indexed": true, "name": "operator", "type": "address"}, {"indexed": false, "name": "approved", "type": "bool"}], "name": "ApprovalForAll", "type": "event", "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"}, {"constant": true, "inputs": [], "name": "baseTokenURI", "outputs": [{"name": "", "type": "string"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xd547cfb7"}];


      const address = "0x273f7f8e6489682df756151f5525576e322d51a3";
      const ids = [
        'tokenId',
        'tokenId',
        'tokenId',
      ];

      let dict = [];
      let n = 1;
console.log(web3.contract);
      for (let i in ids) {
        const response = await web3.contract.methods.tokenURI(ids[i]).call();
        axios.get(response).then(
          res => {
            dict.push(
              <div
                className="item"
                style={{display: "inline-block"}}
                key={n++}
              >
                <img src={res['data']['image']}
                  width="150"
                  height="150"
                  border="0"
                />
              </div>
            );
            this.setState({imageList: dict});
          }
        );
      }
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  render() {
    return <div className="App">{this.state.imageList}</div>;
  }
}

export default App;
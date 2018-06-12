/* @dev Detect IE / EDGE */
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}
window.addEventListener("load", function() {
    var version = detectIE();
    
    if (web3 != true) {
        noMetaMask();
    }
    
    if (version === false) {
        console.log("Browser OK");
    } else if (version >= 12) {
        noMetaMask();
    } else {
        noMetaMask();
    }
}, false);

/* @dev No MetaMask popup */
function noMetaMask() {
    var content = document.getElementById("content");
    content.innerHTML = ("<div class='container'><div class='notification is-warning' style='text-align: center;'><h1 class='title' style='color: black;'>Error your browser does not currently support Web3!</h1><h1 class='subtitle' style='color: black'>This page requires Web3 to run</h1><div class='media'><div class='media-left'><image src='../media/images/metamask.png' height='auto' width='auto'></image></div><div class='media-content'><p class='title is-3' style='color: black'>To enable Web3 use a Web3 ready browser or download the MetaMask extension.</p><br><a class='button is-warning is-outlined is-inverted is-fullwidth is-large' href='https://metamask.io/' target='_blank' style='margin-top: auto; margin-bottom: auto'>Download The MetaMask Extension</a></div></div></div></div>");
}


/* @dev Contracts */
var tokenContract = web3.eth.contract([
    {
        "constant": true,
        "inputs": [],
        "name": "PlatformAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_extraData",
                "type": "bytes"
            }
        ],
        "name": "approveAndCall",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newAddress",
                "type": "address"
            }
        ],
        "name": "setPlatformAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "remaining",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_initialAmount",
                "type": "uint256"
            },
            {
                "name": "_tokenName",
                "type": "string"
            },
            {
                "name": "_decimalUnits",
                "type": "uint8"
            },
            {
                "name": "_tokenSymbol",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    }
]).at("0x484720593750ede48bd416de8155d7a9cd3f1297");
var DateTimeContract = web3.eth.contract([
    {
        "constant": true,
        "inputs": [
            {
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "getDay",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "month",
                "type": "uint8"
            },
            {
                "name": "year",
                "type": "uint16"
            }
        ],
        "name": "getDaysInMonth",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "getHour",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "getMinute",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "getMonth",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "getSecond",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "getWeekday",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "getYear",
        "outputs": [
            {
                "name": "",
                "type": "uint16"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "year",
                "type": "uint16"
            }
        ],
        "name": "isLeapYear",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "year",
                "type": "uint256"
            }
        ],
        "name": "leapYearsBefore",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "year",
                "type": "uint16"
            },
            {
                "name": "month",
                "type": "uint8"
            },
            {
                "name": "day",
                "type": "uint8"
            },
            {
                "name": "hour",
                "type": "uint8"
            }
        ],
        "name": "toTimestamp",
        "outputs": [
            {
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "year",
                "type": "uint16"
            },
            {
                "name": "month",
                "type": "uint8"
            },
            {
                "name": "day",
                "type": "uint8"
            }
        ],
        "name": "toTimestamp",
        "outputs": [
            {
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "year",
                "type": "uint16"
            },
            {
                "name": "month",
                "type": "uint8"
            },
            {
                "name": "day",
                "type": "uint8"
            },
            {
                "name": "hour",
                "type": "uint8"
            },
            {
                "name": "minute",
                "type": "uint8"
            }
        ],
        "name": "toTimestamp",
        "outputs": [
            {
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "year",
                "type": "uint16"
            },
            {
                "name": "month",
                "type": "uint8"
            },
            {
                "name": "day",
                "type": "uint8"
            },
            {
                "name": "hour",
                "type": "uint8"
            },
            {
                "name": "minute",
                "type": "uint8"
            },
            {
                "name": "second",
                "type": "uint8"
            }
        ],
        "name": "toTimestamp",
        "outputs": [
            {
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    }
]).at("0x20ac95a74a269c9f002118bb459394c2e65ea310");

/* @dev Setup variables */
var tokenDecimals = 2;

/* @dev Element variables */
var walletAddress = document.getElementById("walletAddress");
var walletEthBalance = document.getElementById("walletEthBalance");
var walletTokenBalance = document.getElementById("walletTokenBalance");
var transferTokenBalance = document.getElementById("transferTokenBalance");
var transferAddress = document.getElementById("tranaferAddress");
var transferAmount = document.getElementById("transferAmount");


/* @dev Load events */
window.addEventListener("load", function() {
    if(!web3.isConnected()) {
        noMetaMask();
    } else {
        console.log("DAPP Loaded");
        loadWallet();
        loadExchange();
    }
}, false);


/* @dev Load wallet data */
function loadWallet() {
    // User's Address
    var coinbase = web3.eth.coinbase;
    // Sets wallet address
    walletAddress.innerHTML = coinbase;
    // Wallet not unlocked?
    if (walletAddress.innerHTML == "") {
        walletAddress.innerHTML = "Please unlock MetaMask";
    }
    // sets ETH balance
    web3.eth.getBalance(coinbase, function(error, result) {
        if (!error)
            walletEthBalance.innerHTML = web3.fromWei(result, 'ether');
        else
            console.error(error);
    });
    // Sets token balance
    tokenContract.balanceOf(coinbase, function(error, result) {
        if (!error)
            var balance = (result / 10 ** tokenDecimals);
        walletTokenBalance.innerHTML = balance;
        transferTokenBalance.innerHTML = balance;
    });
};

/* @dev Transfer Tokens */
function transferTokens() {
    var _address = transferAddress.value;
    var _amount = transferAmount.value * 10 ** tokenDecimals;
    tokenContract.transfer(_address, _amount, function(error, result) {
        if (!error)
            console.log(result);
        else
            console.log(error);
    });
}


/* @dev Load exchange data */
function loadExchange() {

}

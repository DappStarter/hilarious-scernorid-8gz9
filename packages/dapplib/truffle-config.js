require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile purpose gloom clog oppose tent'; 
let testAccounts = [
"0xba95c42a16e192e6a53a8462e483bcb2038b3c053a69bfe59dc294ac3e645f32",
"0x4ed8c8debf7d611d6bc58cb838b43194868fbff31af3a11250a932c7c35703db",
"0x917bcf906544014cc11c76f2c12f82f8a522921ec6177acfac78a5a38da3819e",
"0x0de93c52b373abfb4410096bd993eb7272e7fedf73d9582044599905d144a007",
"0xdf36711806055ebd5a69e63130c669bcabcdb70fbbcf274a61ceb876ae6e6a2f",
"0x16e002b9f2877b2e0152a7515b3da7f4a2b41ce43c7369658e684353c01746b9",
"0x11f1f53d79d53be0573a5567498ea958ba6df93454b7f94e15b442460ba7d37e",
"0x9e3fbcb66a40af140f97665a81bfcdfeed0ac2f38a16372d247bcde13765a741",
"0xc4bcb5bf3f38810476b8f2c26d3e8443051a07ebedf7d566ddcf783e32bb6654",
"0x0935cbe7bd9024a3d990797fcafbbfefb8c58ab93ba8f01cb6f05d4909628529"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



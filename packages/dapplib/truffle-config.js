require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile punch grace inhale force slight'; 
let testAccounts = [
"0xd11ba517eafeba88234edd062953deb07164f67687a2ba8a1f9775db83bb135d",
"0xfbdbf6832d4d0ef0f0936ac37dfcf9e37aa9a8ec470ff7610bf159223800898d",
"0x82fc369f0fb7eeea5b45a4c9d302bfcc46df88bde827a7539bd3c0a47fd0a7ac",
"0x78336b597b0cdfc12ecef8663ca0d657456bdc65f2073661c90c705d9536496e",
"0x874505d659c75e14576d50314dcc1e7255859a1773c5e232b5f384aabe08dbb3",
"0x889232072c2c78ea2bffee0ec1cb37ea09c06b94c1e114eee19a971d9b7c1822",
"0xd97dc1086c76d7d5221415897dc529d90941638649deb26b2e4ee1d38c909004",
"0xeaa075f643339bb248c97c147ea2a4c81ffc7eee784b372398bb073743c7143e",
"0x69d0edb57961e92d5fe95113ad4edb7f361b03910150661d1fa016bc0c1e5b8d",
"0xff77d573bb3e2a59330681a942b2a9b26abc249c0a6c7d7dd9b02afa9904630e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

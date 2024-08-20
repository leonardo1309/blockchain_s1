const Block = require('./block');
const Blockchain = require('./blockchain');

let myBlockchain = new Blockchain();
myBlockchain.addBlock(new Block(1, "20/08/2024", {amount: 10}));
myBlockchain.addBlock(new Block(2, "20/08/2024", {amount: 13}));
myBlockchain.addBlock(new Block(3, "20/08/2024", {amount: 3}));
myBlockchain.addBlock(new Block(4, "20/08/2024", {amount: 100}));
myBlockchain.addBlock(new Block(5, "20/08/2024", {amount: 20}));

console.log(JSON.stringify(myBlockchain, null, 4));
console.log('Is Blockchain valid?' + myBlockchain.isChainValid());

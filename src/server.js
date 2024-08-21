const bodyParser = require('body-parser');
const express = require('express');
const Blockchain = require('./blockchain')
const block = require('./block');
const Block = require('./block');

const app = express();
const port = 3000;

const myBlockchain = new Blockchain();
app.use(bodyParser.json());

//Api para obtener la cadena completa

app.get('/chain', (req, resp) => {resp.json(myBlockchain.chain)});

//Api para agregar nuevos bloques a la cadena

app.post('/addBlock', (req, resp) => {
    const newBlock = new Block(
        myBlockchain.chain.length,
        new Date().toISOString(),
        req.body.data
    );
    myBlockchain.addBlock(newBlock);
    resp.json(newBlock);

})

//Api para obtener un bloque en especifico

app.get('/getBlock/:index', (req, resp) => {
    const index = parseInt(req.params.index, 10);
    const block = myBlockchain.getBlock(index);
    if(block) {
        resp.json(block);
    }else {
        resp.status(404).send('Block not found');
    }
})

//Api para validar la cadena

app.get('/isChainValid', (req,resp) => {
    const isValid = myBlockchain.isChainValid();
    resp.json({isValid});
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

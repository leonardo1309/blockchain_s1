const crypto = require('crypto');

class Block {
    constructor(
        index,
        timestamp,
        data,
        previousHash = ''
    )
    {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

calculateHash(){
    let hashh = crypto.createHash('sha256').update(this.index + this.previousHash + this.timestamp + (JSON.stringify(this.data).digest('hex')));
    return hashh.digest('hex');
}
}

module.exports = Block
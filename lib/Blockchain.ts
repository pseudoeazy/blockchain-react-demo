import Block from './Block';

class Blockchain {
    private readonly chain: Block[] = [];

    constructor() {
        let hash = '0';
        for (let i = 0; i < 64; i++) {
            hash += '0';
        }
        this.chain.push(new Block(1, hash, Date.now(), 'Genesis Block'));
    }

    get lastestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    async addBlock(data: string): Promise<void> {
        this.chain.push(new Block(
            this.lastestBlock.index + 1,
            this.lastestBlock.hash,
            Date.now(),
            data
        ));
    }
}
export { Block };
export default Blockchain;
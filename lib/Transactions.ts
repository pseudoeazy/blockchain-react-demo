import crypto from 'crypto';

export function generateHash(data: string): string {
    const hash = crypto
        .createHash("sha256")
        .update(data)
        .digest("hex");
    console.log({ hash });
    return hash;
}

export class Block {
    readonly hash: string;

    constructor(
        readonly index: number,
        readonly previousHash: string,
        readonly timestamp: number,
        readonly data: string) {
        this.hash = this.calculateHash();
    }

    private calculateHash(): string {
        const blockData = this.index + this.previousHash + this.timestamp + this.data;
        return crypto.createHash("sha256").update(blockData).digest("hex");
    }
}

export class Blockchain {
    private readonly chain: Block[] = [];

    constructor() {
        this.chain.push(new Block(0, generateHash(''), Date.now(), 'Genesis Block'));
    }

    private get lastestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    addBlock(data: string): void {
        this.chain.push(new Block(
            this.lastestBlock.index + 1,
            this.lastestBlock.hash,
            Date.now(),
            data
        ));

    }

}
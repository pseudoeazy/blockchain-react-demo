import crypto from 'crypto';

class Block {
    readonly nonce: number;
    readonly hash: string;

    constructor(
        readonly index: number,
        readonly previousHash: string,
        readonly timestamp: number,
        readonly data: string) {
        const { nonce, hash } = this.mine();
        this.nonce = nonce;
        this.hash = hash;
    }

    private generateHash(nonce: number): string {
        const blockData = this.index + this.previousHash + this.timestamp + this.data + nonce;
        return crypto.createHash("sha256").update(blockData).digest("hex");
    }

    private mine(): { nonce: number, hash: string } {
        let hash: string;
        let nonce = 0;
        do {
            hash = this.generateHash(++nonce);
        } while (hash.startsWith('0000') === false);
        return { nonce, hash }
    }

}
export default Block;
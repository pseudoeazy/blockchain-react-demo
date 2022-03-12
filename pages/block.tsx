import type { NextPage } from "next";
import Layout from "../components/Layout";
import BlockForm from "../components/forms/BlockForm";


const BlockPage: NextPage = () => {
  return (
    <Layout title="Block - Blockchain Demo">
      <main className="min-h-screen w-10/12 mx-auto mt-8">
        <h1 className="text-4xl mb-2">Block</h1>
        <BlockForm />

        <article className="mt-4">
          <h2 className="text-xl">What is block?</h2>
          <p className="mt-3 text-base">
            When you communicate with a blockchain(decentralized distributed
            database) and give the data you want to store on it, blockchain will
            group your data in a small unit called a block. The collection of
            blocks forms a blockchain. The data you added to the blockchain is
            called a transaction.
          </p>
          <p className="mt-3 text-base">
            When a computer that is connected to blockchain is given a data to
            add to the blockchain, it will have to be validated before it can be
            added.
          </p>
          <p className="mt-3 text-base">
            The process of validating a data and adding a block of data to the
            blockchain is called mining.
          </p>
        </article>
      </main>
    </Layout>
  );
};

export default BlockPage;

import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Blockchain Demo">
      <main className="min-h-screen w-10/12 mx-auto mt-8">
        <div className="w-1/2 m-auto">
          <h1 className="text-2xl font-semibold text-neutral-600">
            Blockchain Demo
          </h1>
          <p>by Chibuzor Israel.</p>
          <p className="mt-3 text-base">
            I jumped on the blockchain hype and decided to learn how it works. I
            stumbled across Anders Brownworth&apos;s{" "}
            <a
              href="https://andersbrownworth.com/blockchain/"
              className="underline"
            >
              blockchain demo
            </a>{" "}
            I am not familiar with PUG template engine and things seems foreign.
            I decided to imitate his project with Typescript.
          </p>
          <p>My project is not perfect, it is just for learning purpose.</p>
          <hr />
          <article className="mt-4">
            <h2 className="text-xl">What is blockchain?</h2>
            <p className="mt-3 text-base">
              In simple terms, blockchain is a type of software for storing
              data. Yes just like we have several means for storing data, i.e.
              Database, Memory Card, flash drives etc.
            </p>
            <p className="mt-3 text-base">
              What makes blockchain unique from other means for storing data is
              that its data is distributed across a network and it cannot
              change. Anyone can connect to a blockchain and access the data in
              the blockchain but cannot change the data.
            </p>

            <h3 className="text-xl">Is bitcoin a blockchain?</h3>
            <p>
              Bitcoin is a crypto currency. Bitcoin is powered by blockchain
              technology. Ethereum is another popular Blockchain(distributed
              database software), it has its own crypto currency called ether.
            </p>
            <Link href="/hash">
              <a className="inline-block mt-2 p-2 border hover:text-white hover:bg-black">
                Learn about Hashing
              </a>
            </Link>
          </article>
        </div>
      </main>
    </Layout>
  );
};

export default Home;

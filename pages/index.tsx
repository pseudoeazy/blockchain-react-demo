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

          <p className="mt-3 text-base">
            I stumbled across Anders Brownworth&apos;s{" "}
            <a
              href="https://github.com/anders94/blockchain-demo/"
              className="underline"
            >
              blockchain demo
            </a>{" "}
            in my learning journey to the hype around the technology. His
            project was built with PUG template engine. I am not familiar with
            PUG and the code behind the demo seems foreign.
          </p>
          <p className="mt-3 text-base">
            This project is part of my diary, for documenting my learning to
            journey
          </p>

          <article className="mt-6">
            <h3 className="text-xl">What is Blockchain?</h3>
            <p className="mt-3 text-base">
              In simple terms, blockchain is a type of software for storing
              data. There several means for storing data, i.e. Database, Memory
              Card, flash drives etc.
            </p>
            <p className="mt-3 text-base">
              The unique thing about blockchain is that its data is distributed
              across a network and it cannot change. Anyone can connect to a
              blockchain network and access the data in the blockchain but
              cannot change the data.
            </p>

            <h3 className="text-xl">Is bitcoin a blockchain?</h3>
            <p className="mt-3 text-base">
              Bitcoin is a crypto currency. The Bitcoin network is powered by
              blockchain technology. Ethereum is another popular Blockchain
              (distributed database software), it has its own crypto currency
              called ether.
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

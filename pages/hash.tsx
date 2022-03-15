import type { NextPage } from "next";
import Layout from "../components/Layout";
import HashSha256 from "../components/forms/HashSha256";

const Hash: NextPage = () => {
  return (
    <Layout title="Hash - Blockchain Demo">
      <main className="min-h-screen w-10/12 mx-auto mt-8">
        <h1 className="text-4xl mb-2">SHA256 Hash</h1>
        <HashSha256 />
        <article className="mt-4">
          <p className="mt-3 text-base">
            Cryptography is a study that is associated with secured
            communication. When a useful data is transformed to become
            meaningless to third parties, it is said to be encrypted. Reversing
            the encrypted data to a meaningful data is known as decryption.
            Encryption and decryption are essential part of cryptography.
          </p>
          <p className="mt-3 text-base">
            Blockchain makes extensive use of cryptography. That is the reason
            the word &quot;crypto&quot; is often associated with it.
          </p>
          <p className="mt-3 text-base">
            Hashing is a process of encrypting data in one way function. You
            cannot reverse a data to its original content after hashing it.
            There are various type of hashing. Hash256 is a one way encryption
            function. A hash256 data cannot be decrypted.
          </p>
        </article>
      </main>
    </Layout>
  );
};

export default Hash;

import React, { useState, useEffect, ChangeEvent } from "react";
import { generateHash } from "./../../lib/Transactions";

const HashSha256: React.FC = () => {
  const [data, setData] = useState<string>("");
  const [hash, setHash] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };

  useEffect(() => {
    setHash(generateHash(data));
  }, [data]);

  return (
    <>
      <form className="w-full p-4 bg-gray-100 rounded-md">
        <div className="flex">
          <label
            htmlFor="data"
            className="block w-48 pr-8 flex-initial text-right font-semibold "
          >
            Data:
          </label>
          <textarea
            value={data}
            onChange={handleChange}
            className="flex-1 h-56 p-4 rounded-md resize-none focus:shadow-md focus:shadow-blue-400 focus:border-0 focus:outline-none"
          />
        </div>
        <div className="flex items-center mt-4 mb-2">
          <label
            htmlFor="hash"
            className="block w-48 pr-8 flex-initial text-right font-semibold"
          >
            Hash:
          </label>
          <input
            value={hash}
            type="text"
            disabled={true}
            className="flex-1 px-2 py-1 rounded border shadow cursor-not-allowed"
          />
        </div>
      </form>
    </>
  );
};

export default HashSha256;

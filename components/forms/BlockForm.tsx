import React, { useState, useReducer, useEffect, ChangeEvent } from "react";
import { generateHash } from "./../../lib/Transactions";

const formReducer = (state: any, action: { name: string; value: string }) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};
const BlockForm: React.FC = () => {
  const [data, setData] = useState("");
  const [hash, setHash] = useState("");
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
        name:e.target.name,
        value:e.target.value
    });
  };


  useEffect(() => {
    setHash(generateHash(data));
  }, [data]);

  return (
    <>
      <form className="w-full p-4 bg-gray-100 rounded-md">
        <div className="flex items-center mt-4 mb-2">
          <label
            htmlFor="block"
            className="block w-48 pr-8 flex-initial text-right font-semibold"
          >
            Block:
          </label>
          <input
            name="index"
            type="number"
            className="flex-1 px-2 py-1 rounded border shadow"
          />
        </div>
        <div className="flex items-center mt-4 mb-2">
          <label
            htmlFor="block"
            className="block w-48 pr-8 flex-initial text-right font-semibold"
          >
            Nonce:
          </label>
          <input
            name="nonce"
            type="text"
            className="flex-1 px-2 py-1 rounded border shadow"
          />
        </div>
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
        <div className="flex items-center mt-4 mb-2">
          <label
            htmlFor="hash"
            className="block w-48 pr-8 flex-initial text-right font-semibold"
          ></label>
          <button
            type="submit"
            className="w-36 p-2 text-white bg-blue-600 hover:bg-blue-800"
          >
            Mine
          </button>
        </div>
      </form>
    </>
  );
};

export default BlockForm;

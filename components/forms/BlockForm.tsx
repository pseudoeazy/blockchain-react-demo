import React, {
  useState,
  useReducer,
  useEffect,
  useRef,
  ChangeEvent,
  FormEvent,
} from "react";

import Blockchain, { Block } from "./../../lib/Blockchain";

type Mixed = string | number;

interface FormAction {
  name: string;
  value: Mixed | Block;
}

const formReducer = (state: any, action: FormAction) => {
  if (action.name === "reset") {
    return action.value;
  }

  return {
    ...state,
    [action.name]: action.value,
  };
};

const isMutatedReducer = (state: boolean, isMutated: boolean): boolean => {
  if (isMutated) {
    return true;
  }
  return false;
};

const chain = new Blockchain();

const BlockForm: React.FC = () => {
  const [isMutated, setIsMutated] = useReducer(isMutatedReducer, false);
  const blockRef = useRef(chain.lastestBlock);
  const [formData, setFormData] = useReducer(formReducer, {
    ...blockRef.current,
  });
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const name = event.target.name;
    const value =
      name === "index" || name === "nonce"
        ? Number(event.target.value)
        : event.target.value;

    setFormData({
      name,
      value,
    });
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    setIsSubmit(true);
  };

  useEffect(() => {
    async function addToBlockchain(): Promise<void> {
      await chain.addBlock(formData.data);
      //reset form state
      blockRef.current = chain.lastestBlock;
      setFormData({ name: "reset", value: blockRef.current });
      setIsMutated(false);
      setIsSubmit(false);
    }

    if (isSubmit) {
      addToBlockchain();
    }
  }, [formData.data, isSubmit]);

  useEffect(() => {
    const block: Block = blockRef.current;
    const data: [string, Mixed][] = Object.entries(formData);
    let isDifferent = false;

    for (let v of data) {
      const [key, value]: [string, Mixed] = v;

      if (block[key as keyof Block] !== value) {
        isDifferent = true;
        break;
      }
    }
    setIsMutated(isDifferent);
  }, [formData, isMutated]);

  return (
    <>
      <form
        className={`w-full p-4  rounded-md ${
          isMutated ? "bg-red-100" : "bg-green-100"
        }`}
        onSubmit={handleSubmit}
      >
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
            step="1"
            className="flex-1 px-2 py-1 rounded border shadow"
            value={formData.index}
            onChange={handleChange}
            disabled={isSubmit}
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
            type="number"
            className="flex-1 px-2 py-1 rounded border shadow"
            value={formData.nonce}
            onChange={handleChange}
            disabled={isSubmit}
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
            value={formData.data}
            name="data"
            onChange={handleChange}
            disabled={isSubmit}
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
            onChange={handleChange}
            name="hash"
            value={formData.hash}
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
            disabled={isSubmit}
            className="flex items-center   p-2 cursor-pointer rounded text-white bg-blue-700 hover:bg-blue-900"
          >
            Mine
            {isSubmit && (
              <svg
                role="status"
                className="mx-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default BlockForm;

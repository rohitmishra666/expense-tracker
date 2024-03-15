import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTransaction, removeTransaction } from "../store/TransSlice";

function TransList({ item }) {
  const { register, handleSubmit } = useForm({
    defaultValues: { title: item.title, amount: item.amount, type: item.type },
  });

  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const submit = (data) => {
    console.log(data);
    dispatch(removeTransaction(item));
    setEdit(!edit);
    dispatch(addTransaction(data));
    reset();
  };

  console.log(edit);
  return (
    <li
      key={item.id}
      className="mt-4 flex w-[600px] bg-[#8CB9BD] justify-between px-4 py-2 rounded grid-cols-4 text-left"
    >
      {edit ? (
        <>
          <form onSubmit={handleSubmit(submit)}>
            <div className="w-full flex mx-1 top-0">
              <div className="w-full mr-1">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="name"
                >
                  Description
                </label>
                <input
                  className="flex h-10 w-full rounded-md border bg-white border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Description"
                  id="name"
                  {...register("title", { required: true })}
                ></input>
              </div>
              <div className="w-2/16 mr-1 ">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="amounts"
                >
                  Amount
                </label>
                <input
                  className="flex h-10 w-full rounded-md border bg-white border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="number"
                  min={0}
                  placeholder="Amount"
                  id="amounts"
                  {...register("amount", { required: true })}
                ></input>
              </div>
              <div className="w-3/5 ">
                <fieldset className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label
                      htmlFor="credit"
                      className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                    >
                      <p className="text-gray-700 text-center">Credit</p>
                      <input
                        type="radio"
                        id="credit"
                        name="type"
                        value="false"
                        {...register("type", { required: true })}
                        className="size-5 border-gray-300 text-blue-500 "
                        checked
                      />
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="debit"
                      className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                    >
                      <p className="text-gray-700 text-center">Debit</p>
                      <input
                        type="radio"
                        id="debit"
                        name="type"
                        value="true"
                        {...register("type", { required: true })}
                        className="size-5 border-gray-300 text-blue-500 "
                      />
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="w-1/4 ml-3 items-center justify-center">
                <button
                  type="submit"
                  className=" px-2 py-3 mt-5 rounded-xl bg-black text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className=" text-xl text-[#5a21b6] ">{item.title}</div>
          <div
            className={`${
              item.type === "false" ? "text-[#0D9276]" : "text-[#944E63]"
            } text-xl`}
          >
            {item.amount}
          </div>
          <div className="flex ">
            <button
              onClick={handleEdit}
              className="flex items-center w-[95px] h-[50px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded flex-wrap ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.172 9.172a.5.5 0 01.707 0l5 5a.5.5 0 01-.707.707l-5-5a.5.5 0 010-.707zm.707-1.707a.5.5 0 010 .707L5.707 14.88a.5.5 0 11-.707-.707l3.172-3.171a.5.5 0 01.707 0zm7.121-4.464l-.001.001a1.5 1.5 0 00-2.121 0L12.88 5.707a.5.5 0 11-.707-.707l3.172-3.172a1.5 1.5 0 012.121 0l.001.001a1.5 1.5 0 010 2.12zM5.88 14.88l-.001.001a1.5 1.5 0 000-2.121L14.12 3.12a1.5 1.5 0 10-2.121-2.121L3.758 10.758a1.5 1.5 0 102.122 2.122z"
                  clipRule="evenodd"
                />
              </svg>
              Edit
            </button>
            <button
              onClick={() => dispatch(removeTransaction(item))}
              className="flex items-center w-[95px] h-[50px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm2-4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zM4 12a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm5 4a1 1 0 100-2h2a1 1 0 100-2H6a2 2 0 100 4zm9-3a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TransList;

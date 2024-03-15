import { useForm } from "react-hook-form";
import React from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../store/TransSlice";

export default function AddTrans() {
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();
  const submit = (data) => {
    dispatch(addTransaction(data));
    reset();
  };

  return (
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
  );
}

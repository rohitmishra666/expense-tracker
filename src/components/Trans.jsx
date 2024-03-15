import React from "react";
import { useSelector } from "react-redux";
import TransList from "./TransList";

function Trans() {
  const trans = useSelector((state) => state);

  return (
    <>
      <div className="flex flex-wrap">
        <br />
        <ul className="w-full list-none ml-1">
          {trans.map((item) => (
            <TransList item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Trans;

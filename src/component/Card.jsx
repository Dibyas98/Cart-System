import React, { useState } from "react";

export default function Card(props) {
  const [count, setcount] = useState(1);
  const onIncreaseCount = () => {
    setcount(count + 1);
    props.update("INCREASED", props.product.price);
  };
  const onDecreaseCount = () => {
    if (count > 0) setcount(count - 1);
    props.update("DECREASED", props.product.price);
  };

  const onRemove = () =>{
    const totalpic = count* props.product.price
    setcount(0);
    props.update("DECREASED", totalpic);
  }
  return count > 0 ? (
    <div className="flex items-center w-6/12 justify-between p-1 pb-0">
      <div className=" h-20">
        <img className="h-full" src={props.product.img} alt="fdfg" />
      </div>
      <div className=" w-9/12">
        <h1>{props.product.title}</h1>
        <p>$ {props.product.price}</p>
        <button className="border-2 rounded mt-1 bg-blue-500 text-zinc-300 target:m-0" onClick={onRemove}>
          Remove
        </button>
      </div>
      <div className="flex flex-col items-center">
        <button onClick={onIncreaseCount} className="rotate-[-90deg] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
        <h1 className="font-semibold text-2xl">{count}</h1>
        <button onClick={onDecreaseCount} className="rotate-[90deg]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  ) : null;
}

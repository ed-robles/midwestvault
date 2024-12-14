"use client";

import { Product } from "@/sanity.types";
import useBasketStore from "@/store/store";
import { useEffect, useState } from "react";

interface AddToBasketButtonProps {
  product: Product;
  disabled?: boolean;
}

function AddToBasketButton({ product, disabled }: AddToBasketButtonProps) {
  const { addItem, removeItem, getItemCount } = useBasketStore();
  const itemCount = getItemCount(product._id);

  const [isClient, setIsClient] = useState(false);

  // use useEffect to set isClient to true after component mounts
  // this ensures that the component is only rendered on the client-side,
  // preventing hydration errors due to server/client mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={() => addItem(product)}
          className={`w-full flex items-center p-1 justify-center transition-colors duration-200 ${
            disabled || itemCount >= 1
              ? "text-black cursor-not-allowed"
              : "bg-black hover:border border-white"
          }`}
          disabled={disabled || itemCount >= 1}
        >
          <span
            className={`text-md font-bold ${itemCount === 0 ? "text-white" : "text-white opacity-50"}`}
          >
            <p className="inline-block">ADD TO CART</p>
          </span>
        </button>
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={() => removeItem(product._id)}
          className={`flex items-center mt-2 justify-center transition-colors duration-200 ${
            itemCount === 0
              ? "  cursor-not-allowed"
              : " text-black hover:text-gray-900"
          }`}
          disabled={itemCount === 0 || disabled}
        >
          <span
            className={`text-xs font-bold ${itemCount === 0 ? "text-black" : "underline text-white"}`}
          >
            <p className="text-center text-xs">REMOVE</p>
          </span>
        </button>
      </div>
    </>
  );
}

export default AddToBasketButton;

import { useState, type FC } from "react";

import cart from "@images/icon-cart-black.svg";

const ProductInfo: FC = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex flex-col basis-1/2 gap-5 text-left p-5">
      <p className="text-darkGrayishBlue text-sm tracking-widest font-bold">
        SNEAKER COMPANY
      </p>
      <h1 className="text-4xl font-bold">Fall Limited Edition Sneakers</h1>
      <p className="text-darkGrayishBlue leading-6">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, ther'll withstand everything the
        weather can offer.
      </p>

      <div className="flex items-center justify-start">
        <span className="text-3xl font-bold mr-4">$125.00</span>
        <span className="bg-veryDarkBlue text-white font-bold py-1 px-2 rounded-lg">
          50%
        </span>
        <p
          className="md:hidden line-through text-grayishBlue font-bold 
        translate-x-[100px] mb-2"
        >
          $250.00
        </p>
      </div>
      <p className="hidden md:block line-through text-grayishBlue font-bold ">
        $250.00
      </p>

      <div className="flex flex-col md:flex-row mt-8">
        <div
          className="w-[100%] flex justify-around md:justify-center items-center gap-10
         bg-lightGrayishBlue rounded-lg p-3 md:p-2 md:mr-4 md:w-[150px]"
        >
          <button
            onClick={() => quantity > 0 && setQuantity((prev) => prev - 1)}
            className="text-[24px] md:text-[20px] font-bold text-orange 
          transition-all hover:opacity-50"
          >
            -
          </button>
          <p className="md:text-[14px] font-bold">{quantity}</p>
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="text-[24px] md:text-[20px] font-bold text-orange
           transition-all hover:opacity-50"
          >
            +
          </button>
        </div>

        <button
          className="border-none bg-orange rounded-lg text-black font-bold
         px-[70px] py-[18px] mt-4 md:mt-0 md:py-0 md:text-[14px] transition-all 
         btn-shadow hover:opacity-50 whitespace-nowrap"
        >
          <img
            className="inline-block -translate-x-2 -translate-y-[2px] h-[15px] "
            src={cart}
            alt="cart-icon"
          />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;

import type { FC } from "react";
import ImageSlider from "./ImageSlider/ImageSlider";
import ProductInfo from "./ProductInfo/ProductInfo";

const Main: FC = () => {
  return (
    <main className="flex flex-col md:flex-row md:px-[200px] md:py-[100px] justify-center">
      <ImageSlider />
      <ProductInfo />
    </main>
  );
};

export default Main;

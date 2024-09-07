import { useState, type FC } from "react";

import product1 from "@images/image-product-1.jpg";
import product2 from "@images/image-product-2.jpg";
import product3 from "@images/image-product-3.jpg";
import product4 from "@images/image-product-4.jpg";

import thumbnailProduct1 from "@images/image-product-1-thumbnail.jpg";
import thumbnailProduct2 from "@images/image-product-2-thumbnail.jpg";
import thumbnailProduct3 from "@images/image-product-3-thumbnail.jpg";
import thumbnailProduct4 from "@images/image-product-4-thumbnail.jpg";

const thumbnailImages = [
  { id: 1, image: thumbnailProduct1 },
  { id: 2, image: thumbnailProduct2 },
  { id: 3, image: thumbnailProduct3 },
  { id: 4, image: thumbnailProduct4 },
];

const productImages = [product1, product2, product3, product4];

const ImageSlider: FC = () => {
  const [imageNumber, setImageNumber] = useState(0);

  return (
    <div className="md:basis-1/2">
      <div className="mb-4">
        <img
          className="object-cover cursor-pointer md:rounded-xl md:w-[400px] md:h-[400px] w-[100%] h-[350px]"
          src={productImages[imageNumber]}
          alt="product-image"
        />
      </div>

      <div className="hidden md:flex gap-7 w-[400px]">
        {thumbnailImages.map((item, idx) => (
          <img
            onClick={() => setImageNumber(idx)}
            className={`w-[80px] cursor-pointer rounded-xl transition-all 
            hover:opacity-55 
            ${idx === imageNumber && `border-[3px] border-orange opacity-25`}`}
            src={item.image}
            key={item.id}
            alt={`thubnail-image-product-${item.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  console.log(images);
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            onClick={() => setCurrent(index)}
            className={cn(
              "mr-2 cursor-pointer hover:border-orange-600 border",
              index === current && "border-orange-500"
            )}
            key={image}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;

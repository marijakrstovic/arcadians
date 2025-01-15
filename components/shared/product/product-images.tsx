"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
    images: string[];
}

const ProductImages = ({images}: ProductImagesProps) => {
    const [currentImage, setCurrentImage] = useState(0);
    return (
        <>
            <div>
                <Image src={images[currentImage]} alt="product image" width={1000} height={1000} className="min-h-[300px] object-cover object-center"/>
            </div>
            <div className="flex gap-2">
                {images.map((image, index) => (
                    <div key={image} onClick={() => setCurrentImage(index)}  className={cn("border mr-2 border-gray-200 cursor-pointer hover:border-orange-500", currentImage === index && "border-orange-500")}>
                      <Image  src={image} alt="product image" width={100} height={100}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductImages;
'use client';
import { urlFor } from "@/sanity/lib/image";
import { Any } from "next-sanity";
import Image from "next/image";
import { useState } from "react";

interface imageGalleryProps {
    image: Any[];
}


export default function ImageGallery({image}:imageGalleryProps) {
    const [BigImage,setBigImage]=useState(image[0])  // Set the first image as the default big image
    const handleImageClick=(img:Any)=>{  // Function to handle image click
        // Update the big image when a thumbnail is clicked
        setBigImage(img);
    }
     return (
        <div className="grid gap-4 grid-cols-5" >
            <div className="gap-4 flex flex-col lg-order-none ">
               { image.map((img:any, idx) => (
                <div key={idx} className="order-last overflow-hidden rounded-lg bg-gray-100" >
                    <Image 
                    src={urlFor(img).url()}
                    width={200} 
                    height={200} 
                    alt="photo" 
                    className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75" 
                    onClick={() => handleImageClick(img)} />
                    
                </div>
               ))}
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
               <Image
                src={urlFor(BigImage).url()}
                alt="photo"
                width={500}
                height={500}
                className="h-full w-full object-cover object-center"
               />
               <span className="absolute left-0 top-0 rounded-br-lg bg-red-600 px-3 py-1.5 text-sm uppercase tracking-wider  text-white">Sale</span>
            </div>
        </div>
     )
}
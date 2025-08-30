import { simplifiedProduct } from "../interface";
import { client } from "@/sanity/lib/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
    const query=`*[_type=="product"][0...4] | order(_createdAt desc)
{
  _id,
    price,
    name,
    "Slug": slug.current,
    "CategoryName":category->name,
    "ImageUrl":image[0].asset->url
    
}`
 const data= await client.fetch(query);
 return data;
}

export default async function Newest() {
const data: simplifiedProduct[] = await getData();

    return (
        <div className="bg-white">
            <div className="max-w-2xl lg:max-w-7xl mx-auto px-4 sm:px-6 sm:py-24 lg:px-8 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">
                        Our Newest Products
                    </h2>
                </div>
                <Link href="/all" className="text-primary flex items-center gap-x-2">
                <span className="text-xl">See All</span>
                <span> <ArrowRight/></span>
                </Link>
            </div>
            {/* products card  */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
           
                {data.map((product) => (
                    <div key={product._id} className="group relative">
                        <div className="w-full overflow-hidden rounded-md aspect-square bg-gray-200 group-hover:opacity-75 lg:h-80">
                            <Image
                            src={product.ImageUrl}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="w-full h-full object-center object-cover lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                            <div>
                            <h3>
                                <Link href={`/product/${product.Slug}`} className="mt-4 block text-sm font-medium text-gray-700"    >
                                    {product.name}
                                </Link>
                            </h3>
                            <p className="mt-1 text-sm font-medium text-gray-500">
                                {product.CategoryName}
                            </p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-700 text-xl">₹{product.price}</p>
                        </div>
                        </div>
                    </div>
                ))}
            
            </div>
            </div>

        </div>
    )


}
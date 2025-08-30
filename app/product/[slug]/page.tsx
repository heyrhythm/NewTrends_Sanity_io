import { fullProduct } from "@/app/interface";
import { client } from "@/sanity/lib/client";
import ImageGallery from "@/app/Components/ImageGallery";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Truck } from "lucide-react";
import AddToCart from "@/app/Components/AddToCart";

async function getData(slug: string) {
  const query = `*[_type=="product" && slug.current=="${slug}"][0]{
  _id,
  image,
    price,
    name,
    description,
    "CategoryName":category->name,
    "Slug": slug.current,
    price_id
}`;
  const data = await client.fetch(query);
  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);
  return (
    <div className="bg-white">
      <div className="mt-6 mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery image={data.image} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.CategoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-6 flex font-bold items-center gap-x-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm ">4.2</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ₹{data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ₹{data.price + 30}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToCart
                currency="INR"
                description={data.description}
                image={data.image[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <Button className=" rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-100">
                Checkout Now
              </Button>
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

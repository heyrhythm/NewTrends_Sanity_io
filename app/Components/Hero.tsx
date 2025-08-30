import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link  from "next/link";

async function getData() {
  const query = "*[_type == 'heroImages'][0]";
  return await client.fetch(query);
}

export default async function Hero() {
  const data = await getData();
  return (
    <section className="max-w-2xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:pb-6">
      <div className="flex flex-wrap justify-between mb-8 md:mb-16 ">
        <div className=" mb-6 flex flex-col justify-center w-full lg:w-1/3 sm:mb-12 lg:mb-0 lg:pb-24 lg:pt-48">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold  mb-4 md:mb-8   text-black">
            Top Fashion for a top Lifestyle
          </h1>
          <p className="max-w-md xl:text-lg leading-relaxed text-gray-500 mb-8">
            Discover the latest fashion trends and shop your favorite styles
            from our exclusive collection. From casual wear to formal attire, we
            have something for everyone. Explore our range of clothing,
            accessories, and more to elevate your wardrobe.
          </p>
        </div>
        {/* heroImages */}
        <div className="pt-10 mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-8">
            <Image
              src={urlFor(data.heroImage1).url()}
              alt="Hero Image 1"
              width={400}
              height={400}
              className="object-cover scale-105"
            //   unoptimized
            />
          </div>
          <div className=" overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.heroImage2).url()}
              alt="Hero Image 2"
              width={400}
              height={400}
              className="object-cover scale-130"
              style={{
                transformOrigin: "60% 20%", // Focus on specific area (x%, y%)
              }}
            //   unoptimized
            />
          </div>
        </div>
      </div>
      <div className=" flex h-12 w-64 divide-x overflow-hidden rounded-lg border ">
        <Link href="/men" className="flex w-1/3 items-center justify-center text-gray-500 bg-gray-100 hover:bg-gray-100   
        active:bg-gray-200 transition duration-100 hover:text-primary">
            Men
        </Link>
        <Link href="/women" className="flex w-1/3 items-center justify-center text-gray-500 bg-gray-100 hover:bg-gray-100   
        active:bg-gray-200 transition duration-100 hover:text-primary">
            Women
        </Link>
        <Link href="/teens" className="flex w-1/3 items-center justify-center text-gray-500 bg-gray-100 hover:bg-gray-100   
        active:bg-gray-200 transition duration-100 hover:text-primary">
            Teens
        </Link>

      </div>
    </section>
  );
}

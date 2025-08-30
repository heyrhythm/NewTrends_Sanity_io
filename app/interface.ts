import { Any } from "next-sanity";

export interface simplifiedProduct {
    _id: string;
    price: number;
    name: string;
    Slug: string;
    CategoryName: string;
    ImageUrl: string;
}

export interface fullProduct {
    _id: string;
    price: number;
    name: string;
    description: string;
    Slug: string;
    CategoryName: string;
    image: Any[]; // Assuming image is an array of Any type
    price_id: string;
}
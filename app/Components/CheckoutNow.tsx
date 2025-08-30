"use client"
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { useShoppingCart } from "use-shopping-cart";
import { Productcart } from "./AddToCart";

export default function CheckoutNow({currency,description,image,price, name,price_id}:Productcart){
    const {checkoutSingleItem}= useShoppingCart();
    function buyNow(priceId: string){
       
        checkoutSingleItem(priceId)
    }
    const product={
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id,
    }
    return (
    <Button variant={"outline"} onClick={()=>{
      
        buyNow(product.price_id);
    }}>
        Check Out
    </Button>
    );
    
}

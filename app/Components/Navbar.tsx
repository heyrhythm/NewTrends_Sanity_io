'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Span } from "next/dist/trace";
import { useShoppingCart } from "use-shopping-cart";

const links = [
    { href: "/", label: "Home" },
    { href: "/men", label: "Men" },
    { href: "/women", label: "Woman" },
    { href: "/teens", label: "Teens" }

];

export default function Navbar() {
        const pathname= usePathname();
        const {handleCartClick}=useShoppingCart();

    return (
        <div className="bg-white shadow-md">
            <header className="flex justify-between items-center max-w-2xl lg:max-w-7xl mx-auto px-4 sm:px-6">
            {/* Logo */}
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                <Link href="/" className="text-black">
                New<span className="text-primary">Trends</span>
                </Link>
            </div>
            {/* Navigantion Links */}
            <nav className=" hidden lg:flex gap-10">
                {links.map((link,idx) => (
                    <div key={idx}>
                        {pathname === link.href ? (
                            <Link className="text-lg font-semibold text-primary" href={link.href}>
                                {link.label}
                            </Link>
                        ):(
                            <Link className="text-lg font-semibold text-gray-500 hover:text-primary transition duration-300" href={link.href}>
                                {link.label}
                            </Link>
                        )}
                    </div>
                ))}
            </nav>
            {/* cart button */}
            
                <Button 
                onClick={()=>handleCartClick()}
                variant={"outline"} className="text-gray-500 transition duration-300 cursor-pointer  hover:text-primary   rounded-none flex flex-col gap-y-1.5 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20  justify-center items-center">
                
                <ShoppingBag className="md:!w-6 md:!h-6 !w-5 !h-5 "  />
                <span className="hidden sm:block">
                    Cart
                </span>
            </Button>
            
        </header>
        </div>
        
    )
}
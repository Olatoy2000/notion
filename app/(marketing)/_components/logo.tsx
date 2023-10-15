import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image 
            src="/logo.svg"
            alt="Logo"
            height="40"
            width="40"
            />
            <p className={cn("font-semibold", font.className /* font.className is a dynamically generated CSS class name that represents the Poppins font with the specified subsets and weights. */)}>
                Jotion
            </p>
        </div>
    )
}
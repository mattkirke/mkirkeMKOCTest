import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import Logo from "./mkocLogo.png"
import Person from "./personLogo.png"
import "../globals.css"
export default function Navbar(){
    return (
        <div> 
            <nav className="NavBar">
                <Image 
                    src={Logo}
                    alt="mkoc logo"
                    width={100}
                    height={30}
                    quality={100}
                    placeholder="blur" // Placeholder option
                    blurDataURL="/path/to/placeholder.jpg" // 
                />
                <Link href="/pages/index">Home</Link>
                <Link href="/pages/about">About us</Link>
                <Link
                    rel="icon"
                    href="./PersonLogo.png"
                    type="image/<generated>"
                    sizes="<generated>"
                />
            </nav>
        </div>
    )
}
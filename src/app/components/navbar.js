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
                <div className="navStyle">
                <Image 
                    src={Logo}
                    alt="mkoc logo"
                    width={100}
                    height={25}
                    quality={100}
                    placeholder="blur" // Placeholder option
                    blurDataURL="/path/to/placeholder.jpg" // 
                />
                <Link className="bar-item" href="/">Home</Link>
                <Link className="bar-item" href="/page">About us</Link>
                <Link
                    rel="icon"
                    href="./PersonLogo.png"
                    type="image/<generated>"
                    sizes="<generated>"
                />
                </div>
            </nav>
        </div>
    )
}
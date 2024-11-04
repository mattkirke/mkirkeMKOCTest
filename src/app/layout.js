//components
import Navbar from "./components/navbar";


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
            
        </html>
    )
}
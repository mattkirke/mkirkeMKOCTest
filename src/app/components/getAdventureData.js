"use client"; // Mark the component as a client component
import '../globals.css'; // Import the global CSS file
import { useRef, useEffect, useState } from 'react'; // Import necessary hooks

export default function GetAdventureData() {
    const [adventures, setAdventures] = useState([]); // State for adventures
    const scrollRef = useRef(null); // Create a ref to the scrollable div

    useEffect(() => {
        const fetchAdventureData = async () => {
            const res = await fetch('https://jjzl6.wiremockapi.cloud/adventures');
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await res.json();
            setAdventures(data); // Update state with fetched data
        };

        fetchAdventureData();
    }, []); // Empty dependency array means this effect runs once on mount

    // Function to scroll to the right
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
    };

    // Function to scroll to the left
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -220, behavior: 'smooth' });
        }
    };

    return (
        <div className="main">
            <h5 className="title">My Adventures</h5>
            <div className="list" ref={scrollRef}>
              {/* Map through data to show each item  */}
                {adventures.map((adventure, index) => (
                    <div key={index} className="item">
                        {adventure.image && adventure.image !== "https:undefined" ? (
                            <img
                                src={adventure.image}
                                alt={adventure.name }
                                className="image"
                            />
                        ) : (
                            <div className="empty-placeholder">
                            </div>
                        )}
                        <h6 className="title">
                            {adventure.name ? adventure.name : ""}
                        </h6>
                    </div>
                ))}
            </div>
            <div>
                <button className="scroll" onClick={scrollLeft}>Left</button>
                <button className="scroll" onClick={scrollRight}>Right</button>
            </div>
        </div>
    );
}

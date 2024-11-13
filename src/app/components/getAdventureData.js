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

    return (
        <div className="mainRow">
            <p className="header">My Adventures</p>
            <div className="itemRowAdventure" ref={scrollRef}>
              {/* Map through data to show each item  */}
              {adventures.slice(0,6).map((adventure, index) => (
                    <div key={index} className="cardItemAdventure">
                        {adventure.image && adventure.image !== "https:undefined" ? (
                            <img
                                src={adventure.image}
                                alt={adventure.name }
                                className="imageAdventures"
                            />
                        ) : (
                            <div className="empty-placeholder">
                            </div>
                        )}
                        <h6 className="adventureCardTitle">
                            {adventure.name ? adventure.name : ""}
                        </h6>
                    </div>
                ))}
            </div>
        </div>
    );
}

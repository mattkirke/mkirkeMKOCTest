// app/components/GetCruiseData.js
"use client"; // Mark the component as a client component
import '../globals.css'; // Import the global CSS file
// import dayjs from 'dayjs';
import { useRef, useEffect, useState } from 'react'; // Import necessary hooks

export default function GetCruiseData() {
    const [cruise, setCruise] = useState([]); // State for adventures
    const scrollRef = useRef(null); // Create a ref to the scrollable div

    useEffect(() => {
        const fetchCruiseData = async () => {
            const res = await fetch('https://jjzl6.wiremockapi.cloud/cruises');
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await res.json();
            setCruise(data); // Update state with fetched data
        };

        fetchCruiseData();
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
    // const formattedDate = dayjs(cruise.sailDate).format('dddd D MMMM');
    const sailDate = cruise?.sailDate; 
    const formattedDate = sailDate ? sailDate.slice(0, 10) : "Date not available"; // Fallback
    return (
        <div className="main">
            <h5 className="title">My Cruise</h5>
            <div className="list" ref={scrollRef}>
              {/* Map through data to show each item  */}
                {cruise.map((cruise, index) => (
                    <div key={index} className="item">
                        {cruise.shipImage && cruise.shipImage !== "https:undefined" ? (
                            <img
                                src={cruise.shipImage}
                                alt={cruise.shipImage }
                                className="image"
                            />
                        ) : (
                            <div className="empty-placeholder">
                                
                            </div>
                        )}
                        <h6 className="title">
                            {cruise.nights} Night {cruise.name ? cruise.name : ""}
                        </h6>
                            <p>Travelling on: {cruise.shipName}</p>
                            <p>From {cruise.startPort}</p>
                            <p>{formattedDate}</p> 
                            {/* <img src={cruise.iconOverlay}
                                alt={cruise.iconOverlay }
                                className="image"
                            /><div>{cruise.iconOverlay && (
                                        <img
                                            src={cruise.iconOverlay}
                                            alt="Icon Overlay"
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                width: '50px',
                                                height: '50px',
                                                zIndex: 1,
                                            }} />)}
                                            </div> */}
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

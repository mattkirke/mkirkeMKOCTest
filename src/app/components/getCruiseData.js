// app/components/GetCruiseData.js
"use client"; // Mark the component as a client component
import '../globals.css'; // Import the global CSS file
// import dayjs from 'dayjs';
import { useRef, useEffect, useState } from 'react'; // Import necessary hooks
import {useFormatter} from 'next-intl';
 
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
    }, []); //runs once
    
    function getDaySuffix(day) {
        if (day === 1 || day === 21 || day === 31) {
            return 'st';
        } else if (day === 2 || day === 22) {
            return 'nd';
        } else if (day === 3 || day === 23) {
            return 'rd';
        } else {
            return 'th';
        }
    }

    return (
        <div className="mainRow">
            <p className="header">My Cruise</p>
            <div className="itemRowCruise" ref={scrollRef}>
              {/* Map through data to show each item  */}
                {cruise.slice(0,5).map((cruise, index) => (
                    <div key={index} className="cardItemCruise">
                        {cruise.shipImage && cruise.shipImage !== "https:undefined" ? (
                            <img
                                src={cruise.shipImage}
                                alt={cruise.shipImage }
                                className="imageCruise"
                            />
                        ) : (
                            <div className="empty-placeholder">
                                
                            </div>
                        )}
                        <div className="cruiseInfo">
                            <p><strong>{cruise.nights} Night {cruise.name ? cruise.name : ""}</strong></p>
                            <p>{cruise.shipName}</p>
                            <p>
                                {new Date(cruise.sailDate).toLocaleString('default', { weekday: 'long' })} {} 
                                {new Date(cruise.sailDate).getDate()}
                                {getDaySuffix(new Date(cruise.sailDate).getDate())} {}
                                {new Date(cruise.sailDate).toLocaleString('default', { month: 'long' })}  
                                {new Date(cruise.sailDate).getFullYear()}
                            </p>
                            <p>From {cruise.startPort}</p>
                            </div>
                        <div className="cruiseIcon">
                            <p>From £{cruise.price}</p>
                            {cruise.iconOverlay && cruise.iconOverlay !== "https:undefined" ? (
                            <div
                                style={{
                                    //dynamic background
                                    backgroundColor: cruise.iconBackgroundColor, 
                                    padding: '5px', 
                                    borderRadius: '5px',
                                    width: '30px',
                                    height: '30px',
                                }}
                                >
                                    <img
                                        src={cruise.iconOverlay}
                                        alt={cruise.iconOverlay}
                                        className="iconImage"
                                    />
                                </div>
                            ) : (
                            <div className="empty-placeholder"></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

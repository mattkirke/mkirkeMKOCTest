import Link from "next/link";
import Navbar from "./components/navbar";

import GetCruiseData from "./components/getCruiseData";
import GetAdventureData from "./components/getAdventureData";
// root - base layout
export default function HomePage() {
  return (
		<div>
      <Navbar />
      <div className="ListGrid">
        <div className="adventureRow">
          <GetAdventureData />
        </div>
        <div className="cruiseRow">
          <GetCruiseData />
        </div>
      </div> 
		</div>
	);
}

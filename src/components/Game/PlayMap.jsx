import { useState } from "react"
import AdventureMap from "./AdventureMap/AdventureMap"
import GameMap from "./GameMap/GameMap"
import DMTalk from "./DMTalk/DMTalk"


const PlayMap = (props) => {
  const [mapView, setMapView]=useState(true)
  const [dMView, setDMView]=useState(true)
  const [dMNumCode,setDMNumCode] = useState()

  const checkPos = (num) => {
    console.log(num);
    if(isNaN(num)){
      toggleDM(!dMView)
    } else {
      setDMNumCode(num)
    }
    
  }
  console.log(dMNumCode);
  const toggleMap=()=>setMapView(!mapView)
  const toggleDM=()=>setDMView(!dMView)
    
  return ( 
    <>
      <div className="main">
        <button onClick={()=>toggleMap()}>Toggle Map</button>
        <h1>
          <GameMap mapView={mapView} />
          <AdventureMap checkPos={checkPos} mapView={mapView} />
          <DMTalk dMNumCode={dMNumCode} dMView={dMView} />
         
        </h1>
      </div>
    </>
   );
}
 
export default PlayMap;
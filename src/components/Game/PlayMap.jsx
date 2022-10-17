import { useState } from "react"
import AdventureMap from "./AdventureMap/AdventureMap"
import GameMap from "./GameMap/GameMap"
import DMTalk from "./DMTalk/DMTalk"

const PlayMap = (props) => {
  const [mapView, setMapView]=useState(true)
  const [dMView, setDMView]=useState(true)
  // const [mapView, setMapView]=useState(true)
  // const [mapView, setMapView]=useState(true)
  // const [mapView, setMapView]=useState(true)


  
  const toggleMap=()=>setMapView(!mapView)
  const toggleDM=()=>setDMView(!dMView)
  // const toggleMap=()=>setMapView(!mapView)
  // const toggleMap=()=>setMapView(!mapView)
  
  
  return ( 
    <>
      <div className="main">
        <button onClick={()=>toggleMap()}>Toggle Map</button>
        <button onClick={()=>toggleDM()}>something triggers a page where the DM SPEAKS</button>
        <h1>
          <GameMap mapView={mapView} />
          <AdventureMap mapView={mapView} />
          <DMTalk dMView={dMView}/>
        </h1>
      </div>
    </>
   );
}
 
export default PlayMap;
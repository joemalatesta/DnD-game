import { useState } from "react"
import AdventureMap from "./AdventureMap/AdventureMap"
import GameMap from "./GameMap/GameMap"
import DMTalk from "./DMTalk/DMTalk"

const PlayMap = (props) => {
  const [mapView, setMapView]=useState(true)
  const [dMView, setDMView]=useState(true)
  const [dMNumCode,setDMNumCode] = useState()
  // const [mapView, setMapView]=useState(true)
  // const [mapView, setMapView]=useState(true)
  // const [mapView, setMapView]=useState(true)

  const checkPos = (num) => {
    if(num === undefined){
      toggleDM(!dMView)
      setDMNumCode(num)
    }
  }
  
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
          <AdventureMap checkPos={checkPos} mapView={mapView} />
          <DMTalk dMNumCode={dMNumCode} dMView={dMView}/>
        </h1>
      </div>
    </>
   );
}
 
export default PlayMap;
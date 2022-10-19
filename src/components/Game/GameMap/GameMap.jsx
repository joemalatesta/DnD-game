import './GameMap.css'
import { useState } from 'react'
import { mapDivs } from '../Map'


const GameMap = (props) => {
  console.log( mapDivs[1].div)
  let map = []
  for(let i = 0; i <2100; i++){
    map.push(mapDivs[i].div)
  } 

  console.log(map);

  return (
      <div hidden={props.mapView ? true : false}>
        <div className='map'>
          {map.map((sqr,idx) => 
            sqr )}
        </div>  
      </div>
    )
}
 
export default GameMap 
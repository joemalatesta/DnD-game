import './GameMap.css'
import { mapDivs } from '../Map'


const GameMap = (props) => {

  let map = []
  for(let i = 0; i <3000; i++){
    map.push(mapDivs[i].div)
  } 
  
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
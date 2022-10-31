import './GameMap.css'
import { mapDivs } from '../Map'


const GameMap = (props) => {
  // console.log(mapDivs);
  let map = []
 
  for(let i = 0; i <10000; i++){
    map.push(mapDivs[i].div)
  } 
  //maybe add the hidden attribute when pushing to the map. then add as state so when I go over it on the adventure page i can remove the hidden aspect. 
  // console.log(map);
  return (
      <div hidden={props.mapView ? true : false}>
        <div className='app'>
          <div className='map'>
            {map.map((sqr,idx) => (
              <div key={idx}>
                {sqr}
              </div>
            )
            )}
          </div>  
        </div>
      </div>
    )
}
 
export default GameMap 
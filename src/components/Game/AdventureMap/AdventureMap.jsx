import { useEffect, useState, useRef } from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { mapDivs } from '../Map';
import './AdventureMap.css'

const AdventureMap = (props) => {
  const [a,setA] = useState(mapDivs[7680].div)
  const [b,setB] = useState(mapDivs[7681].div)
  const [c,setC] = useState(mapDivs[7682].div)
  const [d,setD] = useState(mapDivs[7683].div)
  const [e,setE] = useState(mapDivs[7684].div)
  const [f,setF] = useState(mapDivs[7780].div)
  const [g,setG] = useState(mapDivs[7781].div)
  const [h,setH] = useState(mapDivs[7782].div)
  const [i,setI] = useState(mapDivs[7783].div)
  const [j,setJ] = useState(mapDivs[7784].div)
  const [k,setK] = useState(mapDivs[7880].div)
  const [l,setL] = useState(mapDivs[7881].div)
  const [charSpot, setCharSpot] = useState(mapDivs[7882].div)
  const [n,setN] = useState(mapDivs[7883].div)
  const [o,setO] = useState(mapDivs[7884].div)
  const [p,setP] = useState(mapDivs[7980].div)
  const [q,setQ] = useState(mapDivs[7981].div)
  const [r,setR] = useState(mapDivs[7982].div)
  const [s,setS] = useState(mapDivs[7983].div)
  const [t,setT] = useState(mapDivs[7984].div)
  const [u,setU] = useState(mapDivs[8080].div)
  const [v,setV] = useState(mapDivs[8081].div)
  const [w,setW] = useState(mapDivs[8082].div)
  const [x,setX] = useState(mapDivs[8083].div)
  const [y,setY] = useState(mapDivs[8084].div)
  const [posColor, setPosColor] = useState()
  let pos13 

  useEffect(() => {
    pos13 = 7882
  }, []);

  let char =<img src="/images/char.png" alt="logo" className="App-logo" style={{ width: "60px",height: "60px", display:'flex'}}/>
  
  useEffect(() => {
      document?.addEventListener('keydown', onKeyDown)
      return ()=> {
        document.removeEventListener('keydown', onKeyDown)
      }
  }, [charSpot])

  const handleChangeColor = () => {
    setPosColor(charSpot.props?.style?.backgroundColor)
    console.log("inside handleChangeColor", charSpot.props?.style?.backgroundColor);
  }

  const onKeyDown = (e) => {
    console.log(charSpot.props?.style?.backgroundColor,'inside onKeyDown');
    if(charSpot.props?.style?.backgroundColor !== 'brown'){
      switch (e.keyCode){ 
        case 38:
          pos13 = pos13-100
          setA(mapDivs[pos13 - 202].div)
          setB(mapDivs[pos13 - 201].div)
          setC(mapDivs[pos13 - 200].div)
          setD(mapDivs[pos13 - 199].div)
          setE(mapDivs[pos13 - 198].div)
          setF(mapDivs[pos13 - 102].div)
          setG(mapDivs[pos13 - 101].div)
          setH(mapDivs[pos13 - 100].div)
          setI(mapDivs[pos13 - 99].div)
          setJ(mapDivs[pos13 - 98].div)
          setK(mapDivs[pos13 - 2].div)
          setL(mapDivs[pos13 - 1].div)
          setCharSpot(mapDivs[pos13].div)
          setN(mapDivs[pos13 + 1].div)
          setO(mapDivs[pos13 + 2].div)
          setP(mapDivs[pos13 + 98].div)
          setQ(mapDivs[pos13 + 99].div)
          setR(mapDivs[pos13 + 100].div)
          setS(mapDivs[pos13 + 101].div)
          setT(mapDivs[pos13 + 102].div)
          setU(mapDivs[pos13 + 198].div)
          setV(mapDivs[pos13 + 199].div)
          setW(mapDivs[pos13 + 200].div)
          setX(mapDivs[pos13 + 201].div)
          setY(mapDivs[pos13 + 202].div)
          break

        case 40:    
          pos13 = pos13+100
          setA(mapDivs[pos13 - 202].div)
          setB(mapDivs[pos13 - 201].div)
          setC(mapDivs[pos13 - 200].div)
          setD(mapDivs[pos13 - 199].div)
          setE(mapDivs[pos13 - 198].div)
          setF(mapDivs[pos13 - 102].div)
          setG(mapDivs[pos13 - 101].div)
          setH(mapDivs[pos13 - 100].div)
          setI(mapDivs[pos13 - 99].div)
          setJ(mapDivs[pos13 - 98].div)
          setK(mapDivs[pos13 - 2].div)
          setL(mapDivs[pos13 - 1].div)
          setCharSpot(mapDivs[pos13].div)
          setN(mapDivs[pos13 + 1].div)
          setO(mapDivs[pos13 + 2].div)
          setP(mapDivs[pos13 + 98].div)
          setQ(mapDivs[pos13 + 99].div)
          setR(mapDivs[pos13 + 100].div)
          setS(mapDivs[pos13 + 101].div)
          setT(mapDivs[pos13 + 102].div)
          setU(mapDivs[pos13 + 198].div)
          setV(mapDivs[pos13 + 199].div)
          setW(mapDivs[pos13 + 200].div)
          setX(mapDivs[pos13 + 201].div)
          setY(mapDivs[pos13 + 202].div)
          break

        case 37:
          pos13 = pos13-1
          setA(mapDivs[pos13 - 202].div)
          setB(mapDivs[pos13 - 201].div)
          setC(mapDivs[pos13 - 200].div)
          setD(mapDivs[pos13 - 199].div)
          setE(mapDivs[pos13 - 198].div)
          setF(mapDivs[pos13 - 102].div)
          setG(mapDivs[pos13 - 101].div)
          setH(mapDivs[pos13 - 100].div)
          setI(mapDivs[pos13 - 99].div)
          setJ(mapDivs[pos13 - 98].div)
          setK(mapDivs[pos13 - 2].div)
          setL(mapDivs[pos13 - 1].div)
          setCharSpot(mapDivs[pos13].div)
          setN(mapDivs[pos13 + 1].div)
          setO(mapDivs[pos13 + 2].div)
          setP(mapDivs[pos13 + 98].div)
          setQ(mapDivs[pos13 + 99].div)
          setR(mapDivs[pos13 + 100].div)
          setS(mapDivs[pos13 + 101].div)
          setT(mapDivs[pos13 + 102].div)
          setU(mapDivs[pos13 + 198].div)
          setV(mapDivs[pos13 + 199].div)
          setW(mapDivs[pos13 + 200].div)
          setX(mapDivs[pos13 + 201].div)
          setY(mapDivs[pos13 + 202].div)
          break

        case 39: 
          pos13 = pos13+1
          setA(mapDivs[pos13 - 202].div)
          setB(mapDivs[pos13 - 201].div)
          setC(mapDivs[pos13 - 200].div)
          setD(mapDivs[pos13 - 199].div)
          setE(mapDivs[pos13 - 198].div)
          setF(mapDivs[pos13 - 102].div)
          setG(mapDivs[pos13 - 101].div)
          setH(mapDivs[pos13 - 100].div)
          setI(mapDivs[pos13 - 99].div)
          setJ(mapDivs[pos13 - 98].div)
          setK(mapDivs[pos13 - 2].div)
          setL(mapDivs[pos13 - 1].div)
          setCharSpot(mapDivs[pos13].div)
          setN(mapDivs[pos13 + 1].div)
          setO(mapDivs[pos13 + 2].div)
          setP(mapDivs[pos13 + 98].div)
          setQ(mapDivs[pos13 + 99].div)
          setR(mapDivs[pos13 + 100].div)
          setS(mapDivs[pos13 + 101].div)
          setT(mapDivs[pos13 + 102].div)
          setU(mapDivs[pos13 + 198].div)
          setV(mapDivs[pos13 + 199].div)
          setW(mapDivs[pos13 + 200].div)
          setX(mapDivs[pos13 + 201].div)
          setY(mapDivs[pos13 + 202].div)
          break

        default:
          console.log('do nothing', e.keyCode)
        break         
      }
      handleChangeColor()
    }
  }

  console.log(posColor)
  console.log(charSpot.props?.style?.backgroundColor)
  
  useEffect(() => {
    // console.log(charSpot.props?.style?.backgroundColor)
    console.log(posColor)
    setPosColor(charSpot.props?.style?.backgroundColor)
    console.log(posColor)
    handleMap()
  }, [onKeyDown, charSpot, posColor])
  
  const handleMap = () => {
      return  (
        <>
          {a}{b}{c}{d}{e}
          {f}{g}{h}{i}{j}
          {k}{l}{char}{n}{o}
          {p}{q}{r}{s}{t}
          {u}{v}{w}{x}{y}
        </>
      )
    } 


  return ( 
    <>
      <div hidden={props.mapView ? false : true}>
        <div className='app'>
          <div  className="container">
            {handleMap()}
          </div>
        </div>
      </div>
    </>
  )
}
 
export default AdventureMap



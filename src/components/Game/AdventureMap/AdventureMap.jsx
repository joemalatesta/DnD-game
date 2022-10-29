import { useEffect, useState } from 'react';
import { mapDivs } from '../Map';
import './AdventureMap.css'

const AdventureMap = (props) => {
  const [a,setA] = useState(<div></div>)
  const [b,setB] = useState(<div></div>)
  const [c,setC] = useState(<div></div>)
  const [d,setD] = useState(<div></div>)
  const [e,setE] = useState(<div></div>)
  const [f,setF] = useState(<div></div>)
  const [g,setG] = useState(<div></div>)
  const [h,setH] = useState(<div></div>)
  const [i,setI] = useState(<div></div>)
  const [j,setJ] = useState(<div></div>)
  const [k,setK] = useState(<div></div>)
  const [l,setL] = useState(<div></div>)
  const [charSpot, setCharSpot] = useState()
  const [n,setN] = useState(<div></div>)
  const [o,setO] = useState(<div></div>)
  const [p,setP] = useState(<div></div>)
  const [q,setQ] = useState(<div></div>)
  const [r,setR] = useState(<div></div>)
  const [s,setS] = useState(<div></div>)
  const [t,setT] = useState(<div></div>)
  const [u,setU] = useState(<div></div>)
  const [v,setV] = useState(<div></div>)
  const [w,setW] = useState(<div></div>)
  const [x,setX] = useState(<div></div>)
  const [y,setY] = useState(<div></div>)
  const [prevSpot, setPrevSpot] = useState()
  const [posColor, setPosColor] = useState()
  const [currentSpot, setCurrentSpot] = useState()
  
  let pos13 
  let char =<img src="/images/char.png" alt="logo" className="App-logo" style={{ width: "60px",height: "60px", display:'flex'}}/>

  console.log(currentSpot, 'CURRENT LOCATION');
  console.log(prevSpot);

  useEffect(() => {
    pos13 = 6009 //7882
  }, []);

  useEffect(() => {
    setPosColor(charSpot?.props?.style.backgroundColor)
    console.log(prevSpot);
    handleCheckValidSpot()    
  }, [posColor, charSpot])

  useEffect(() => {
    document?.addEventListener('keydown', onKeyDown)
    return ()=> {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const onKeyDown = (e) => {
    
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
        setCurrentSpot(pos13)
        setPrevSpot(pos13+100)
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
        setCurrentSpot(pos13)
        setPrevSpot(pos13-100)
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
        setCurrentSpot(pos13)
        setPrevSpot(pos13+1)
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
        setCurrentSpot(pos13)
        setPrevSpot(pos13-1)
        break

      default:
        console.log('do nothing', e.keyCode)
        break         
    }
  }

  const handleMap = () => {
    return  (
      <>
        {a} {b}   {c}   {d} {e}
        {f} {g}   {h}   {i} {j}
        {k} {l} {char}  {n} {o}
        {p} {q}   {r}   {s} {t}
        {u} {v}   {w}   {x} {y}
      </>
    )
  } 

  const handleCheckValidSpot = () => {
    console.log(posColor, 'HANDLEVALID');
    if(posColor === 'blue' || posColor === 'brown'){
      console.log('inside equal to blue or brown' );
      setCurrentSpot(prevSpot)
      setA(mapDivs[prevSpot - 202].div)
      setB(mapDivs[prevSpot - 201].div)
      setC(mapDivs[prevSpot - 200].div)
      setD(mapDivs[prevSpot - 199].div)
      setE(mapDivs[prevSpot - 198].div)
      setF(mapDivs[prevSpot - 102].div)
      setG(mapDivs[prevSpot - 101].div)
      setH(mapDivs[prevSpot - 100].div)
      setI(mapDivs[prevSpot - 99].div)
      setJ(mapDivs[prevSpot - 98].div)
      setK(mapDivs[prevSpot - 2].div)
      setL(mapDivs[prevSpot - 1].div)
      setCharSpot(mapDivs[prevSpot].div)
      setN(mapDivs[prevSpot + 1].div)
      setO(mapDivs[prevSpot + 2].div)
      setP(mapDivs[prevSpot + 98].div)
      setQ(mapDivs[prevSpot + 99].div)
      setR(mapDivs[prevSpot + 100].div)
      setS(mapDivs[prevSpot + 101].div)
      setT(mapDivs[prevSpot + 102].div)
      setU(mapDivs[prevSpot + 198].div)
      setV(mapDivs[prevSpot + 199].div)
      setW(mapDivs[prevSpot + 200].div)
      setX(mapDivs[prevSpot + 201].div)
      setY(mapDivs[prevSpot + 202].div)
    }else{
      // console.log('not blue/brown');
    }
    props.checkPos(currentSpot)
    return
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
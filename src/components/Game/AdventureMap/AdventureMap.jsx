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

  useEffect(() => {
    pos13 = 3252 //6009 //7881
  }, []);

  useEffect(() => {
    setPosColor(charSpot?.props?.style.backgroundColor)
    handleCheckValidSpot()    
  }, [posColor, charSpot])

  useEffect(() => {
    document?.addEventListener('keydown', onKeyDown)
    return ()=> {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const handleSetDivs = (num) => {
    setA(mapDivs[num - 202].div)
    setB(mapDivs[num - 201].div)
    setC(mapDivs[num - 200].div)
    setD(mapDivs[num - 199].div)
    setE(mapDivs[num - 198].div)
    setF(mapDivs[num - 102].div)
    setG(mapDivs[num - 101].div)
    setH(mapDivs[num - 100].div)
    setI(mapDivs[num - 99].div)
    setJ(mapDivs[num - 98].div)
    setK(mapDivs[num - 2].div)
    setL(mapDivs[num - 1].div)
    setCharSpot(mapDivs[num].div)
    setN(mapDivs[num + 1].div)
    setO(mapDivs[num + 2].div)
    setP(mapDivs[num + 98].div)
    setQ(mapDivs[num + 99].div)
    setR(mapDivs[num + 100].div)
    setS(mapDivs[num + 101].div)
    setT(mapDivs[num + 102].div)
    setU(mapDivs[num + 198].div)
    setV(mapDivs[num + 199].div)
    setW(mapDivs[num + 200].div)
    setX(mapDivs[num + 201].div)
    setY(mapDivs[num + 202].div)
  }

  const onKeyDown = (e) => {
    
    switch (e.keyCode){ 
      case 38:
        pos13 = pos13-100
        handleSetDivs(pos13)
        setCurrentSpot(pos13)
        setPrevSpot(pos13+100)
        break
        
        case 40:    
        pos13 = pos13+100
        handleSetDivs(pos13)
        setCurrentSpot(pos13)
        setPrevSpot(pos13-100)
        break
        
      case 37:
        pos13 = pos13-1
        handleSetDivs(pos13)
        setCurrentSpot(pos13)
        setPrevSpot(pos13+1)
        break
        
      case 39: 
        pos13 = pos13+1
        handleSetDivs(pos13)
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
    if(posColor === 'blue' || posColor === 'brown'){
      setCurrentSpot(prevSpot)
      handleSetDivs(prevSpot)
    }
    props.checkPos(parseInt(currentSpot))
    return
  }
  
  console.log('*************',currentSpot,'*************');

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
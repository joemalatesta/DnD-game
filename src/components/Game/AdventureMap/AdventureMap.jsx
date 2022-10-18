import { useEffect, useState } from 'react';
import { mapDivs } from '../Map';
import './AdventureMap.css'

const AdventureMap = (props) => {
  const [charSpot, setCharSpot] = useState(mapDivs[66])
  const [a,setA] = useState(mapDivs[44].div)
  const [b,setB] = useState(mapDivs[45].div)
  const [c,setC] = useState(mapDivs[46].div)
  const [d,setD] = useState(mapDivs[47].div)
  const [e,setE] = useState(mapDivs[48].div)
  const [f,setF] = useState(mapDivs[54].div)
  const [g,setG] = useState(mapDivs[55].div)
  const [h,setH] = useState(mapDivs[56].div)
  const [i,setI] = useState(mapDivs[57].div)
  const [j,setJ] = useState(mapDivs[58].div)
  const [k,setK] = useState(mapDivs[64].div)
  const [l,setL] = useState(mapDivs[65].div)
  const [m,setM] = useState(mapDivs[66].div)
  const [n,setN] = useState(mapDivs[67].div)
  const [o,setO] = useState(mapDivs[68].div)
  const [p,setP] = useState(mapDivs[74].div)
  const [q,setQ] = useState(mapDivs[75].div)
  const [r,setR] = useState(mapDivs[76].div)
  const [s,setS] = useState(mapDivs[77].div)
  const [t,setT] = useState(mapDivs[78].div)
  const [u,setU] = useState(mapDivs[84].div)
  const [v,setV] = useState(mapDivs[85].div)
  const [w,setW] = useState(mapDivs[86].div)
  const [x,setX] = useState(mapDivs[87].div)
  const [y,setY] = useState(mapDivs[88].div)
  let pos1 = 44
  let pos2 = 45
  let pos3 = 46
  let pos4 = 47
  let pos5 = 48
 
  let pos6 = 54
  let pos7 = 55
  let pos8 = 56
  let pos9 = 57
  let pos10 = 58
  
  let pos11 = 64
  let pos12 = 65
  let pos13 = 66
  let pos14 = 67
  let pos15 = 68

  let pos16 = 74
  let pos17 = 75
  let pos18 = 76
  let pos19 = 77
  let pos20 = 78

  let pos21 = 84
  let pos22 = 85
  let pos23 = 86
  let pos24 = 87
  let pos25 = 88

  let char =<img src="/images/char.png" alt="logo" className="App-logo" style={{ width: "60px",height: "60px", display:'flex'}}/>

  useEffect(() => {
    document?.addEventListener('keydown', onKeyDown)
    return ()=> {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    handleMap()
  }, [charSpot]);
  
  const onKeyDown = (e) => {

    switch (e.keyCode){ 
      case 38:
        pos1 = pos1-10
        pos2 = pos2-10
        pos3 = pos3-10
        pos4 = pos4-10
        pos5 = pos5-10
        pos6 = pos6-10
        pos7 = pos7-10
        pos8 = pos8-10
        pos9 = pos9-10
        pos10 = pos10-10
        pos11 = pos11-10
        pos12 = pos12-10
        pos13 = pos13-10
        pos14 = pos14-10
        pos15 = pos15-10
        pos16 = pos16-10
        pos17 = pos17-10
        pos18 = pos18-10
        pos19 = pos19-10
        pos20 = pos20-10
        pos21 = pos21-10
        pos22 = pos22-10
        pos23 = pos23-10
        pos24 = pos24-10
        pos25 = pos25-10
        setA(mapDivs[pos1].div)
        setB(mapDivs[pos2].div)
        setC(mapDivs[pos3].div)
        setD(mapDivs[pos4].div)
        setE(mapDivs[pos5].div)
        setF(mapDivs[pos6].div)
        setG(mapDivs[pos7].div)
        setH(mapDivs[pos8].div)
        setI(mapDivs[pos9].div)
        setJ(mapDivs[pos10].div)
        setK(mapDivs[pos11].div)
        setL(mapDivs[pos12].div)
        setCharSpot(mapDivs[pos13].div)
        setN(mapDivs[pos14].div)
        setO(mapDivs[pos15].div)
        setP(mapDivs[pos16].div)
        setQ(mapDivs[pos17].div)
        setR(mapDivs[pos18].div)
        setS(mapDivs[pos19].div)
        setT(mapDivs[pos20].div)
        setU(mapDivs[pos21].div)
        setV(mapDivs[pos22].div)
        setW(mapDivs[pos23].div)
        setX(mapDivs[pos24].div)
        setY(mapDivs[pos25].div)
        break
      case 40:
        pos1 = pos1+10
        pos2 = pos2+10
        pos3 = pos3+10
        pos4 = pos4+10
        pos5 = pos5+10
        pos6 = pos6+10
        pos7 = pos7+10
        pos8 = pos8+10
        pos9 = pos9+10
        pos10 = pos10+10
        pos11 = pos11+10
        pos12 = pos12+10
        pos13 = pos13+10
        pos14 = pos14+10
        pos15 = pos15+10
        pos16 = pos16+10
        pos17 = pos17+10
        pos18 = pos18+10
        pos19 = pos19+10
        pos20 = pos20+10
        pos21 = pos21+10
        pos22 = pos22+10
        pos23 = pos23+10
        pos24 = pos24+10
        pos25 = pos25+10
        setA(mapDivs[pos1].div)
        setB(mapDivs[pos2].div)
        setC(mapDivs[pos3].div)
        setD(mapDivs[pos4].div)
        setE(mapDivs[pos5].div)
        setF(mapDivs[pos6].div)
        setG(mapDivs[pos7].div)
        setH(mapDivs[pos8].div)
        setI(mapDivs[pos9].div)
        setJ(mapDivs[pos10].div)
        setK(mapDivs[pos11].div)
        setL(mapDivs[pos12].div)
        setCharSpot(mapDivs[pos13].div)
        setN(mapDivs[pos14].div)
        setO(mapDivs[pos15].div)
        setP(mapDivs[pos16].div)
        setQ(mapDivs[pos17].div)
        setR(mapDivs[pos18].div)
        setS(mapDivs[pos19].div)
        setT(mapDivs[pos20].div)
        setU(mapDivs[pos21].div)
        setV(mapDivs[pos22].div)
        setW(mapDivs[pos23].div)
        setX(mapDivs[pos24].div)
        setY(mapDivs[pos25].div)
        break
      case 37:
        pos1 = pos1-1
        pos2 = pos2-1
        pos3 = pos3-1
        pos4 = pos4-1
        pos5 = pos5-1
        pos6 = pos6-1
        pos7 = pos7-1
        pos8 = pos8-1
        pos9 = pos9-1
        pos10 = pos10-1
        pos11 = pos11-1
        pos12 = pos12-1
        pos13 = pos13-1
        pos14 = pos14-1
        pos15 = pos15-1
        pos16 = pos16-1
        pos17 = pos17-1
        pos18 = pos18-1
        pos19 = pos19-1
        pos20 = pos20-1
        pos21 = pos21-1
        pos22 = pos22-1
        pos23 = pos23-1
        pos24 = pos24-1
        pos25 = pos25-1
        setA(mapDivs[pos1].div)
        setB(mapDivs[pos2].div)
        setC(mapDivs[pos3].div)
        setD(mapDivs[pos4].div)
        setE(mapDivs[pos5].div)
        setF(mapDivs[pos6].div)
        setG(mapDivs[pos7].div)
        setH(mapDivs[pos8].div)
        setI(mapDivs[pos9].div)
        setJ(mapDivs[pos10].div)
        setK(mapDivs[pos11].div)
        setL(mapDivs[pos12].div)
        setCharSpot(mapDivs[pos13].div)
        setN(mapDivs[pos14].div)
        setO(mapDivs[pos15].div)
        setP(mapDivs[pos16].div)
        setQ(mapDivs[pos17].div)
        setR(mapDivs[pos18].div)
        setS(mapDivs[pos19].div)
        setT(mapDivs[pos20].div)
        setU(mapDivs[pos21].div)
        setV(mapDivs[pos22].div)
        setW(mapDivs[pos23].div)
        setX(mapDivs[pos24].div)
        setY(mapDivs[pos25].div)
        break
      case 39: 
        pos1 = pos1+1
        pos2 = pos2+1
        pos3 = pos3+1
        pos4 = pos4+1
        pos5 = pos5+1
        pos6 = pos6+1
        pos7 = pos7+1
        pos8 = pos8+1
        pos9 = pos9+1
        pos10 = pos10+1
        pos11 = pos11+1
        pos12 = pos12+1
        pos13 = pos13+1
        pos14 = pos14+1
        pos15 = pos15+1
        pos16 = pos16+1
        pos17 = pos17+1
        pos18 = pos18+1
        pos19 = pos19+1
        pos20 = pos20+1
        pos21 = pos21+1
        pos22 = pos22+1
        pos23 = pos23+1
        pos24 = pos24+1
        pos25 = pos25+1
        setA(mapDivs[pos1].div)
        setB(mapDivs[pos2].div)
        setC(mapDivs[pos3].div)
        setD(mapDivs[pos4].div)
        setE(mapDivs[pos5].div)
        setF(mapDivs[pos6].div)
        setG(mapDivs[pos7].div)
        setH(mapDivs[pos8].div)
        setI(mapDivs[pos9].div)
        setJ(mapDivs[pos10].div)
        setK(mapDivs[pos11].div)
        setL(mapDivs[pos12].div)
        setCharSpot(mapDivs[pos13].div)
        setN(mapDivs[pos14].div)
        setO(mapDivs[pos15].div)
        setP(mapDivs[pos16].div)
        setQ(mapDivs[pos17].div)
        setR(mapDivs[pos18].div)
        setS(mapDivs[pos19].div)
        setT(mapDivs[pos20].div)
        setU(mapDivs[pos21].div)
        setV(mapDivs[pos22].div)
        setW(mapDivs[pos23].div)
        setX(mapDivs[pos24].div)
        setY(mapDivs[pos25].div)
        break
      default:
        console.log('do nothing', e.keyCode)         
    }
  }

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
          <div onKeyDown={(e)=>console.log(e.key)} className="container">
            {handleMap()}
          </div>
        </div>
      </div>
          <div className='smallContainer'>
         
          </div>
    </>
  )
}
 
export default AdventureMap

// {mapDivs.map((sqr,idx) => 
              
//   )}
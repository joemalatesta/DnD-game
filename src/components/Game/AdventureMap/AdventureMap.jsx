import { useEffect, useState } from 'react';
import { mapDivs } from '../Map';
import './AdventureMap.css'

const AdventureMap = (props) => {
  const [charSpot, setCharSpot] = useState(mapDivs[66])
  const [a,setA] = useState(mapDivs[1].div)
  const [b,setB] = useState(mapDivs[2].div)
  const [c,setC] = useState(mapDivs[3].div)
  const [d,setD] = useState(mapDivs[4].div)
  const [e,setE] = useState(mapDivs[5].div)
  const [f,setF] = useState(mapDivs[101].div)
  const [g,setG] = useState(mapDivs[102].div)
  const [h,setH] = useState(mapDivs[103].div)
  const [i,setI] = useState(mapDivs[104].div)
  const [j,setJ] = useState(mapDivs[105].div)
  const [k,setK] = useState(mapDivs[201].div)
  const [l,setL] = useState(mapDivs[202].div)
  const [m,setM] = useState(mapDivs[203].div)
  const [n,setN] = useState(mapDivs[204].div)
  const [o,setO] = useState(mapDivs[205].div)
  const [p,setP] = useState(mapDivs[301].div)
  const [q,setQ] = useState(mapDivs[302].div)
  const [r,setR] = useState(mapDivs[303].div)
  const [s,setS] = useState(mapDivs[304].div)
  const [t,setT] = useState(mapDivs[305].div)
  const [u,setU] = useState(mapDivs[401].div)
  const [v,setV] = useState(mapDivs[402].div)
  const [w,setW] = useState(mapDivs[403].div)
  const [x,setX] = useState(mapDivs[404].div)
  const [y,setY] = useState(mapDivs[405].div)
  let pos1 = 1
  let pos2 = 2
  let pos3 = 3
  let pos4 = 4
  let pos5 = 5
 
  let pos6 = 101  
  let pos7 = 102
  let pos8 = 103
  let pos9 = 104
  let pos10 = 105
  
  let pos11 = 201
  let pos12 = 202
  let pos13 = 203
  let pos14 = 204
  let pos15 = 205

  let pos16 = 301
  let pos17 = 302
  let pos18 = 303
  let pos19 = 304
  let pos20 = 305

  let pos21 = 401
  let pos22 = 402
  let pos23 = 403
  let pos24 = 404
  let pos25 = 405

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
        pos1 = pos1-100
        pos2 = pos2-100
        pos3 = pos3-100
        pos4 = pos4-100
        pos5 = pos5-100
        pos6 = pos6-100
        pos7 = pos7-100
        pos8 = pos8-100
        pos9 = pos9-100
        pos10 = pos10-100
        pos11 = pos11-100
        pos12 = pos12-100
        pos13 = pos13-100
        pos14 = pos14-100
        pos15 = pos15-100
        pos16 = pos16-100
        pos17 = pos17-100
        pos18 = pos18-100
        pos19 = pos19-100
        pos20 = pos20-100
        pos21 = pos21-100
        pos22 = pos22-100
        pos23 = pos23-100
        pos24 = pos24-100
        pos25 = pos25-100
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
        pos1 = pos1+100
        pos2 = pos2+100
        pos3 = pos3+100
        pos4 = pos4+100
        pos5 = pos5+100
        pos6 = pos6+100
        pos7 = pos7+100
        pos8 = pos8+100
        pos9 = pos9+100
        pos10 = pos10+100
        pos11 = pos11+100
        pos12 = pos12+100
        pos13 = pos13+100
        pos14 = pos14+100
        pos15 = pos15+100
        pos16 = pos16+100
        pos17 = pos17+100
        pos18 = pos18+100
        pos19 = pos19+100
        pos20 = pos20+100
        pos21 = pos21+100
        pos22 = pos22+100
        pos23 = pos23+100
        pos24 = pos24+100
        pos25 = pos25+100
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
    </>
  )
}
 
export default AdventureMap

// {mapDivs.map((sqr,idx) => 
              
//   )}
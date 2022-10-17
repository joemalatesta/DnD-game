import { useEffect } from 'react';
import { mapDivs } from '../Map';
import './AdventureMap.css'

const AdventureMap = (props) => {

  let char =<img src="/images/char.png" alt="logo" className="App-logo" style={{ width: "60px",height: "60px", display:'flex'}}/>

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return ()=> {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])
  
  const onKeyDown = (e) => {

    switch (e.keyCode){ 
      case 38:
        console.log('Up pressed')
        break
      case 40:
        console.log('Down pressed') 
        break
      case 37:
        console.log('left')
        break
      case 39: 
        console.log('right')
        break
      default:
        console.log('do nothing', e.keyCode)         
    }
  }

 

  // let xCoordinates = [-2,-1,0,1,2]

  // let yCoordinates = [-2,-1,0,1,2]

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

  let a = mapDivs[pos1].d45
  let b = mapDivs[pos2].d46
  let c = mapDivs[pos3].d47
  let d = mapDivs[pos4].d48
  let e = mapDivs[pos5].d49

  let f = mapDivs[pos6].d55
  let g = mapDivs[pos7].d56
  let h = mapDivs[pos8].d57
  let i = mapDivs[pos9].d58
  let j = mapDivs[pos10].d59

  let k = mapDivs[pos11].d65
  let l = mapDivs[pos12].d66
  let m = mapDivs[pos13].d67
  let n = mapDivs[pos14].d68
  let o = mapDivs[pos15].d69

  let p = mapDivs[74].d75
  let q = mapDivs[75].d76
  let r = mapDivs[76].d77
  let s = mapDivs[77].d78
  let t = mapDivs[78].d79

  let u = mapDivs[84].d85
  let v = mapDivs[85].d86
  let w = mapDivs[86].d87
  let x = mapDivs[87].d88
  let y = mapDivs[88].d89

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
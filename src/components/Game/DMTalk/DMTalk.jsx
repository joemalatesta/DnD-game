import './DMTalks.css'
import texts from '../../../data/DmSpeaks/DmSpeaks'
import { useState } from 'react';
import D20 from '../../D20/D20'


const DMTalk = (props) => {
  console.log(props.dMNumCode);
  const [dieView, setDieView] = useState()

  const toggleDieView = () => setDieView(!dieView)



  const spoken = () => {
    if(isNaN(props.dMNumCode)) {
      return <p hidden={props.dMView? true : false}  > {texts[0].text}  </p>
    }
    if(props.dMNumCode === 3254){
      return(
      <div  hidden={false}>
     
        <p> {texts[1].text} </p>
        <D20 />
      </div>)
    }  
  }





  return ( 
      <>
        {spoken()}
      </>
  )
}
 
export default DMTalk
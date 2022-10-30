import './DMTalks.css'
import texts from '../../../data/DmSpeaks/DmSpeaks'
import { useState } from 'react';
import D20 from '../../D20/D20'


const DMTalk = (props) => {
  console.log(props.dMNumCode);


  const getRandomNumber = () =>{
    let num = Math.floor(Math.random() * 100)
    console.log(num);
    return num
  }

  const spoken = () => {
    if(isNaN(props.dMNumCode)) {
      return  texts[0].text
    }
    if(props.dMNumCode === 3254 || getRandomNumber() > 90){
      return(
      <div  hidden={false}>
        {texts[1].text}        
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
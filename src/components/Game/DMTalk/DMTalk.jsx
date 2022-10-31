import './DMTalks.css'
import texts from '../../../data/DmSpeaks/DmSpeaks'
import D20 from '../../D20/D20'


const DMTalk = (props) => {
  // console.log(props.dMNumCode);


  const getRandomNumber = () =>{
    let num = Math.floor(Math.random() * 100)
    console.log(num);
    return num
  }

  const spoken = () => {
    if(isNaN(props.dMNumCode)) {
      return  texts[0].text
    }
    if(props.dMNumCode === 3254 || getRandomNumber() > 5){
      return(
      <div id='dm'  hidden={props.dMView? false : true }>
        {texts[1].text}        
        <D20 grabRoll={props.grabRoll}/>
        <button onClick={()=>props.toggleDM()}>close</button>
      </div>)
    }  
  }
  
  return ( 
    <div className='app'>
      <div id='dm'>
        {spoken()}
      </div>
    </div>
      
  )
}
 
export default DMTalk
import './DMTalks.css'
import texts from '../../../data/DmSpeaks/DmSpeaks'


const DMTalk = (props) => {

  console.log(props);
  console.log(texts);

  const spoken = () => {
    if(props.dMNumCode === undefined){
      return texts[0].text
    }
  }








  return ( 
    <div  className='app' >
      <h1 hidden={props.dMView? true : false}>
        {spoken}
      </h1>
    </div>

  )
}
 
export default DMTalk
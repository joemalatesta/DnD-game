import './DMTalks.css'
import texts from '../../../data/DmSpeaks/DmSpeaks'


const DMTalk = (props) => {

  const spoken = () => {
    if(props.dMNumCode === undefined) {
      return <p hidden={props.dMView? true : false} > {texts[0].text}  </p>
    }
  }  






  return ( 
    <div hidden={props.dMView? true : false} className='app' >      
      {spoken()}
    </div>

  )
}
 
export default DMTalk
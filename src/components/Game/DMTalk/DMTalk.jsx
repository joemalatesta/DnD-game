import './DMTalks.css'
import texts from '../../../data/DmSpeaks/DmSpeaks'


const DMTalk = (props) => {
  console.log(props.dMNumCode);
  const spoken = () => {
    if(props.dMNumCode === undefined) {
      return <p hidden={props.dMView? true : false} > {texts[0].text}  </p>
    }
    if(props.dMNumCode === 3254)return <p hidden={props.dMView? true : false} > {texts[1].text}  </p>
  }  






  return ( 
    <div hidden={props.dMView? true : false} className='app' >      
      {spoken()}
    </div>

  )
}
 
export default DMTalk
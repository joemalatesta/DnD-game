import './DMTalks.css'
const DMTalk = (props) => {
  return ( 
    <div  className='app' >
      <h1 hidden={props.dMView? true : false}>
        The DM SPEAKS here 
      </h1>
    </div>

  )
}
 
export default DMTalk
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

function FloorPlan() {
  return (
    <div className='floorplan'>
      <Kitchen />
      <LivingRoom />
      <Bath size={'Half'}/>
      <Bedroom bedNum={1}/>
      <Bedroom bedNum={2}/>
      <Bath size={'Full'}/>
      <Bedroom bedNum={3}/>
    </div>
  )
}

export default FloorPlan
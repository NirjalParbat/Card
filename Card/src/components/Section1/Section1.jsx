import Navbar from "./Navbar"
import Page1Content from "./Page1Content"
import RightCard from "./RightCard"
const Section1 = (props) => {
  return (

    <div>
   <Navbar/>
            <Page1Content users={props.users} />
        
    </div>
 
  )
}

export default Section1
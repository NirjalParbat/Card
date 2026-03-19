import LeftContent from "./LeftContent"
import RightContent from  "./RightContent"

const Page1Content = (props) => {
  return (
    
        <div className='h-[90vh] w-full pb-16 pt-6 px-16 flex justify-between items-center gap-10'>
          <LeftContent/>
          <RightContent users={props.users}/>
        </div>
  )
}

export default Page1Content
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
     <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between ">

            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center '>{props.id+1}</h2>
     
        <div>
            <p className='text-shadow-black text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laboriosam eum rem aliquid consectetur ipsum!</p>
       
        <div className='flex justify-between  gap-3 items-center'>
            <button style={{ backgroundColor: props.color }} className='text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
            <button style={{ backgroundColor: props.color }} className='text-white font-medium px-4 py-2 rounded-full '><ArrowRight /></button>
         </div>
    </div>
       </div>
  )
}

export default RightCardContent
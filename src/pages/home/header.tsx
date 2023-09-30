import bgv from '../../assets/ssss.mp4'
import { TypeAnimation} from 'react-type-animation'

export default function Header() {
  return ( <div className="h-[700px] bg-slate-600 relative " >
        <div className='absolute top-0 left-0 w-full h-full object-cover z-10 flex items-center justify-center ' style={{background:" linear-gradient(180deg, rgba(25,25,25,0.577468487394958) 0%, rgba(2,10,15,1) 100%)"}}>

       <div className='text-white text-center w-[900px]' >
        <h1 className=' font-poppins text-6xl font-light opacity-70  leading-[1.4]'>Engaging you with Creative </h1>
        <TypeAnimation
  sequence={['Knowledge', 500, 'solutions', 500, 'Design', 500]}
  style={{ fontSize: '4em', fontFamily:"var(--headerFont) ", fontWeight:"bold", color:"goldenrod" }}
  // speed={200}
  repeat={Infinity}
/>
       </div>
          
        </div>

<video autoPlay loop muted className=" top-0 left-0 w-full h-full object-cover ">
        <source src={bgv} type="video/mp4"/>
        Your browser does not support the video tag.
    </video>

    </div>
  )
}

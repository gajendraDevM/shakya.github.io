import {FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from 'react-icons/fa'
export default function Footer() {

  const socialmedia = [{
    icon:FaFacebookSquare,
    link:""
  },
  {
    icon:FaInstagramSquare,
    link:""
  },
  {
    icon:FaYoutubeSquare,
    link:""
  }]

  return (
    <footer  className="p-5 bg-[#0c0c0c] relative  ">

<ul className='flex justify-center items-center gap-x-4'>
  {
    socialmedia.map((item, i)=>{

      const {icon:SocialIcon} = item

      return <li key={i} className=' '>
        <SocialIcon className="text-white text-xl"/>
      </li>
    })
  }
</ul>

    </footer>
  )
}

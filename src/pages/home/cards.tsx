
import { useRef } from "react";
import Slider from "react-slick";

export default function Cards() {

  const sliderRef = useRef(null) as any;


  const cardsData = [
    {
      icon:"http://onlookersmedia.in/wp-content/uploads/2019/02/96-kannada-remake-first-look-poster.jpg",
      title:"3D Modeling      ",
      desc:' Lorem ipsum dolor sit amet consectetur.'
    },
    {
      icon:"https://www.filmibeat.com/img/2016/07/nannaninnepremakatheimage3-14-1468492013.jpg",
      title:"3D Modeling      ",
      desc:' Lorem ipsum dolor sit amet consectetur.'
    },
    {
      icon:"http://data1.ibtimes.co.in/cache-img-680-0-photo/en/full/34977/1449210360_rathaavara-upcoming-kannada-action-thriller-film-written-directed-by-chandrashekar-bandiyappa.jpg",
      title:"3D Modeling      ",
      desc:' Lorem ipsum dolor sit amet consectetur.'
    },
    {
      icon:"https://i.pinimg.com/736x/5d/b2/63/5db263cabe70af721b2547fbd62666c2.jpg",
      title:"3D Modeling      ",
      desc:' Lorem ipsum dolor sit amet consectetur.'
    },{
      icon:"http://data1.ibtimes.co.in/cache-img-680-0-photo/en/full/34977/1449210360_rathaavara-upcoming-kannada-action-thriller-film-written-directed-by-chandrashekar-bandiyappa.jpg",
      title:"3D Modeling      ",
      desc:' Lorem ipsum dolor sit amet consectetur.'
    },
    {
      icon:"https://i.pinimg.com/736x/5d/b2/63/5db263cabe70af721b2547fbd62666c2.jpg",
      title:"3D Modeling      ",
      desc:' Lorem ipsum dolor sit amet consectetur.'
    },
 
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 12000,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode:false,
    arrows:false,
    autoplay:true,
    autoplaySpeed: 0,
    cssEase: 'linear', // This makes it a constant scroll instead of easing in and out
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    // This helps in looping without delay

  };


  return (
    <div className=' w-full   mx-auto' ref={sliderRef}>
 
    <div className=" w-full ">
      <Slider {...settings}> 
{cardsData.map((item, i)=>{

return      <div key={i} className='h-[340px] bg-second  bg-cover  rounded overflow-hidden'>
  {/* <h2 className='font-poppins text-white text-xl text-center '>{item.title}</h2>
   */}
   <img src={item.icon} alt="" className="h-full w-full  rounded" />
</div> 


})}
</Slider>
  </div></div>


   

  )
}

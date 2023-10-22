
export default function InfinitScrollImg() {

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
    
    
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
    <div className="relative w-64 h-32 overflow-hidden">
      <div className="flex absolute w-full">
        {/* Render the cardsData twice to ensure continuous flow */}
        {cardsData.concat(cardsData).map((src, index) => (
          <img
            key={index}
            src={src.icon}
            alt={`Looping ${index}`}
            className="w-64 h-32"
          />
        ))}
      </div>
      <div className="flex absolute w-full animate-scroll-left">
        {/* Render the cardsData twice to ensure continuous flow */}
        {cardsData.concat(cardsData).map((src, index) => (
          <img
            key={index}
            src={src.icon}
            alt={`Looping ${index}`}
            className="w-64 h-32"
          />
        ))}
      </div>
    </div>
  </div>
  )
}

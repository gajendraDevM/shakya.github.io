import Heading from '../../shared/heading'

export default function CoursesCard() {

  const imageData = [
    { id: 1, src: "https://via.placeholder.com/400x600?text=Kannada+Movie+1",
     alt: "Kannada Movie 1 Poster", },
    { id: 2, src: "https://via.placeholder.com/400x600?text=Kannada+Movie+2",
     alt: "Kannada Movie 2 Poster" },
    { id: 3, src: "https://via.placeholder.com/400x600?text=Kannada+Movie+3",
     alt: "Kannada Movie 3 Poster" },
    { id: 4, src: "https://via.placeholder.com/400x600?text=Kannada+Movie+4",
     alt: "Kannada Movie 4 Poster" }
];


const Card = ()=>{

  return  imageData.map((image:any) => (
    <div className=" grid-base-cols ">
    <img key={image.id} src={image.src} alt={image.alt} className=" w-full  object-cover h-[340px] rounded"/>
  </div>   ))
}





  return (
    <div className="container-base">
    <Heading title="Our Courses"/>
    <br/>
      <div className='grid-base'>
            <Card/>
        </div>
</div>
  )
}

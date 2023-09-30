import aboutImg from '../../assets/about.png'
import Heading from "../../shared/heading";

function AboutSection() {
  return (
    <section className="container-base">
              <Heading position="mx-auto" title="About Shakya"/>
<br/>
            <div  className=" grid grid-cols-6 gap-4" >
<div className="col-span-6 md:col-span-3  lg:col-span-2 flex items-center ">
          <img src={aboutImg} alt="About Us" className="image  rounded-md  shadow-lg opacity-80" />
        </div>
<div className="col-span-6 md:col-span-3 lg:col-span-4 flex items-start">
  <div className="px-5">
        {/* <h2 className="text-white text-3xl my-4">About Shakya</h2> */}
        <h3 className="text-gray-400 text-sm mt-5 text-inter text-center md:text-left md:text-sm lg:text-lg xl:text-xl">
          We are a team of passionate individuals who believe in delivering quality products. Our mission is to bring innovation and excellence in every project we undertake. We aim to revolutionize the industry and set benchmarks for others to follow.
          We are a team of passionate individuals who believe in delivering quality products. Our mission is to bring innovation and excellence in every project we undertake. We aim to revolutionize the industry and set benchmarks for others to follow.

        </h3>
      </div>  
      </div>
</div>
      
    </section>
  );
}

export default AboutSection;
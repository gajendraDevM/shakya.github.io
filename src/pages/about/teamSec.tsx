import Slider from 'react-slick';
import Heading from '../../shared/heading';

function TeamSection() {
  const teamMembers = [
    { name: 'John Doe', position: 'CEO', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1695567643~exp=1695568243~hmac=09e5e5b976c651c5e03b4c0f76ac8d2f18bb6f8b56024468ac88d00245ee81d5' },
    { name: 'Jane Smith', position: 'CTO', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1695567643~exp=1695568243~hmac=09e5e5b976c651c5e03b4c0f76ac8d2f18bb6f8b56024468ac88d00245ee81d5' },
    { name: 'Jane Smith', position: 'CTO', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1695567643~exp=1695568243~hmac=09e5e5b976c651c5e03b4c0f76ac8d2f18bb6f8b56024468ac88d00245ee81d5' },
    { name: 'Jane Smith', position: 'CTO', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1695567643~exp=1695568243~hmac=09e5e5b976c651c5e03b4c0f76ac8d2f18bb6f8b56024468ac88d00245ee81d5' },
    { name: 'Jane Smith', position: 'CTO', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1695567643~exp=1695568243~hmac=09e5e5b976c651c5e03b4c0f76ac8d2f18bb6f8b56024468ac88d00245ee81d5' },
    { name: 'Jane Smith', position: 'CTO', image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1695567643~exp=1695568243~hmac=09e5e5b976c651c5e03b4c0f76ac8d2f18bb6f8b56024468ac88d00245ee81d5' },

    // Add more team members as needed
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true,
    autoplay:true,
    focusOnSelect: true,
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
  };

  return (
    <section className="p-8 team container mx-auto ">
     <Heading title="Our Team"/>
      <Slider {...sliderSettings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="px-4 py-[4rem] ">
            <img src={member.image} alt={member.name} className="mx-auto rounded-full h-32 w-32 object-cover" />
            <h3 className="mt-4 text-xl text-center">{member.name}</h3>
            <p className="text-center text-gray-600">{member.position}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default TeamSection;
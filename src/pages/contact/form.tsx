
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function ContactPage() {



  const [state, handleSubmit] = useForm("mbjvwdky") ;
  const [disable, setDisabled] = useState(false)

  useEffect(()=>{

    if(state.succeeded || state.errors) {
      setDisabled(true)
    }
    

  }, [state])

  
  if (state.succeeded) {

   
       setTimeout(()=>{

        window.location.reload()

       }, 5000)

  }


  const socialmedia = [
    
    {
      icon:FaWhatsapp,
      link:"",
      color:"text-[#009113]",
      title:"Whatsapp"
    },
    {
    icon:FaFacebook,
    link:"",
    color:"text-[#1877F2]",
    title:"Facebook"
  },
  {
    icon:FaInstagram,
    link:"",
    color:"text-[#fc179c]",
    title:"Instagram"

  },
  {
    icon:FaYoutube,
    link:"",
    color:"text-[#C4302b]",
    title:"Youtube"

  }]


  return (
      <div className="container md:w-[60%] pb-6 mx-auto md:px-6 ">
  <section className="mb-8 ">
{ state.errors &&  <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      /> }
    { state.succeeded && <div className="alert alert-success mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Thank you for reaching out! We've received your message and will get back to you shortly</span>
    </div>}
    <div className="grid grid-cols-7 gap-x-5">
      <div className=" col-span-5">
        <form onSubmit={handleSubmit}>

          <div className='flex items-center justify-between gap-x-4'>
        <div className="mb-2 w-full">
            <label className="block text-gray-700 mb-2" htmlFor="first_name">First Name*</label>
            <input className="input required input-bordered w-full" type="text" name="name" id="name" placeholder="First Name" />
          </div>

          <div className="mb-2 w-full">
            <label className="block text-gray-700 mb-2" htmlFor="last_name">Last Name</label>
            <input className="input input-bordered w-full" type="text" name="name" id="name" placeholder="Last Name" />
          </div>
</div>


<div className='flex items-center justify-between gap-x-4'>

          <div className="mb-2 w-full ">
            <label className="block text-gray-700 mb-2" htmlFor="name">Contact Number*</label>
            <input className="input required input-bordered w-full" type="tel" name="ph_number" id="ph_number" placeholder="Contact Number" pattern="^\d{10}$" required />
          </div>

          <div className="mb-2 w-full">
            <label className="block text-gray-700 mb-2" htmlFor="subject">Email*</label>
            <input name="email" required  className="input input-bordered w-full" type="email" id="email" placeholder="Email"
             pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
             title="Please enter a valid email address in the format: name@domain.tld."
             />
          </div>


          </div>

          
          <div className="mb-2">
<label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
<textarea name="message"  className="textarea textarea-bordered w-full" id="message" placeholder="Your Message" rows={5}></textarea>
</div>

<br/>
          <button    type="submit" disabled={disable} data-te-ripple-init data-te-ripple-color="light"
            className="mb-6 font-bold inline-block w-full rounded bg-[#d6af2d] px-6 pt-2.5 pb-2 text-xs  uppercase leading-normal text-[#000] shadow-[0_4px_9px_-4px_#303030] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Send Message
          </button>
        </form>
      </div>
    
<div className='flex justify-center items-center col-span-2 p-2 bg-[#0e0e0e] rounded ' >
<div>
  
<div className=" p-5 rounded-lg text-gray-400  text-center  ">
    Stay connected and updated with our latest news by following us on our social media links.
</div>

<br/>
<ul className='flex justify-center flex-col items-center gap-y-4'>
  {
    socialmedia.map((item, i)=>{

      const {icon:SocialIcon} = item

      return <li key={i} className=' flex gap-x-4 items-center justify-start '>
        <SocialIcon className={` text-3xl text-[#000]  cursor-pointer rounded-full bg-brand p-[5px]`}/>
      <h2 className='text-left'>{item.title}</h2>
      
      </li>
    })
  }
</ul></div>

</div>

    </div>
  </section>
</div>


    
  );
}

export default ContactPage;





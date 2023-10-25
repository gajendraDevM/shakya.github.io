import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom';


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export default function Form() {

    const query = useQuery();
   
    const paramValue = query.get("job_title");
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<any>()

      const onSubmit = async (data: any) =>{


        const url = "https://formspree.io/f/mbjvwdky"; // replace with your endpoint
     
    
        try {
            const response = await fetch(url, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) 
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const responseData = await response.json();
            console.log(responseData);
    
        } catch (error:any) {
            console.error('There was a problem with the fetch operation:', error.message);
        }


      }

   


  return (
    <div className='container-base' >
<br/>


      <h2>Job Title: <b className='text-brand ml-2'>{paramValue}</b></h2>
      <form onSubmit={handleSubmit(onSubmit)}>

            <div className='flex items-center justify-between gap-x-4 my-4'>
        <div className="mb-2 w-full">
            <input className="input required input-bordered w-full" type="text" {...register("first_name")} id="first_name" placeholder="First Name" />
          </div>

          <div className="mb-2 w-full">
            <input
            
            
            className="input input-bordered w-full" type="text" {...register("last_name")} id="last_name" placeholder="Last Name" />
          </div>
</div>

<div className='flex items-center justify-between gap-x-4'>
        <div className="mb-2 w-full">
            <input className="input required input-bordered w-full" type="text" {...register("email")} id="email" placeholder="email" />
          </div>

          <div className="mb-2 w-full">
            <input
            
            
            className="input input-bordered w-full" type="text" {...register("ph_no")} id="ph_no" placeholder="Phone Number" />
          </div>
</div>

<div className='flex items-center justify-between gap-x-4 my-4'>
<label className="block text-gray-300 mb-2" htmlFor="subject">Gender: </label>

        <div className="mb-2 w-full flex items-center gap-x-5">

        <input 
    type="radio" 
    value='male' 
    {...register("gender")}  
    className="radio radio-warning" 
    checked 
/>
<label htmlFor="male">Male</label>

<input 
    type="radio" 
    value='female' 
    {...register("gender")} 
    className="radio radio-warning" 
/>
<label htmlFor="female">Female</label>
          </div>





          <div className="mb-2 w-full flex items-center gap-x-5">

          <label className="block text-gray-300 " htmlFor="subject">Work Experience: </label>

          <input 
    type="radio" 
    value='fresher' 
    {...register("isExperinced")}  
    className="radio radio-warning" 
    checked 
/>
<label htmlFor="fresher">Fresher</label>

<input 
    type="radio" 
    value='experienced' 
    {...register("isExperinced")} 
    className="radio radio-warning" 
/>
<label htmlFor="experienced">Experienced</label>

<div className=" w-[30%]">
            <input className="input required input-bordered w-full" type="text" {...register("total_year_experince")} id="total_year_experince" placeholder="Total Experince" />
          </div>


          </div>
</div>



<div className='flex items-center justify-between my-4 gap-x-4'>
        <div className="mb-2 w-full">
            <input className="input required input-bordered w-full" type="text" {...register("add_video_url_first")} id="add video url_one" placeholder="Add video url 1" />
          </div>

          <div className="mb-2 w-full">
            <input
            
            
            className="input input-bordered w-full" type="text" {...register("add_video_url_second")} id="add_video_url_second" placeholder="Add video url 2" />
          </div>
</div>




<div className='flex items-center  justify-between gap-4 mb-4'>
        <div className="mb-2 w-[50%]">
        <textarea name="address"  className="textarea textarea-bordered w-full" id="address" placeholder="Your Address" rows={4}></textarea>
          </div>
<div className='w-[50%]'>
          <div className=" w-full flex items-center justify-between gap-4 mb-2">
            <input  className="input input-bordered w-full mb-2" type="text" {...register("qualification")} id="qualification" placeholder="Qualification" />
          
            <input  className="input input-bordered w-full mb-2" type="text" {...register("course")} id="course" placeholder="Course" />
            </div>
            <div >
            <input  className="input input-bordered w-full" type="text" {...register("year_graduate")} id="year_graduate" placeholder="Year Graduate" />
</div>
         </div> 
</div>

            <input className="bg-[#5f5f5f] cursor-pointer text-gray-100 hover:text-gray-800 px-8 py-2 rounded-full hover:bg-yellow-600" type="submit" />

</form>
    </div>
  )
}

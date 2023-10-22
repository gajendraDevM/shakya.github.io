import Heading from '../../shared/heading'

export default function Vacancies() {

    const Vacancies = [
        { title: "ROTO" },
        { title: "PAINT" },
        { title: "EDITING" },
        { title: "RIGGING" },
        { title: "LIGHTING" },
        { title: "VISUAL FX" },
        { title: "MODELING" }, 
        { title: "TEXTURING" },
        { title: "ANIMATION" },
        { title: "RENDERING" },
        { title: "COMPOSITING" }
    ];
    


  return (
    <div >
        <br/>
<div className='py-7'>
<Heading title="Job Vacancies"/>
</div>

<div>

<div className="min-h-screen  flex flex-col items-center justify-center pb-5">
            <div className="w-full max-w-4xl bg-[#313131] rounded-lg p-5">
         <h1 className="text-xl pl-4 mb-5">Job Vacancies Titles</h1>

                {Vacancies.map((item:any, index:any) => {
                return    <div key={index} className="flex rounded justify-between items-center mb-1 py-4 px-5 bg-[#202020]">
                    <h2 className="text-xl font-medium">{item.title}</h2>
                    <button className="bg-[#5f5f5f] text-gray-100 hover:text-gray-800 px-8 py-2 rounded-full hover:bg-yellow-600">
                        Apply
                    </button>
                </div>
})}
            </div>
        </div>

</div>

    </div>
  )
}

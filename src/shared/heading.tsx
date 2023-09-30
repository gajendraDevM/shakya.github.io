
const Heading = ({ title, position="mx-auto" }:any) => {

    return (
        <div className={`flex items-center w-[90%] sm:[75%] md:w-[65%] lg:w-[50%] xl:w-[40%] 2xl:[30%] ${position} my-2`}>
            <div className="flex-1 border-t-[1px] border-brand"></div>
            <h1 className="mx-8 font-medium text-responsive uppercase tracking-wider text-white">{title}</h1>
            <div className="flex-1 border-t-[1px] border-brand"></div>
        </div>
    );
}

export default Heading;




const YouTubePlayer = ({ videoId }:any) => {



    return (<div className="grid-base-cols rounded-xl overflow-hidden shadow-lg bg-white  ">
        <iframe 
            width="100%" 
            height="300px" 
            src={`https://www.youtube.com/embed/${videoId}`} 
            // title={title} 
            className="" 
            allowFullScreen
        ></iframe>
    
   
</div>
       
    
    );
};

export default YouTubePlayer;
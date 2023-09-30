
import Heading from '../../shared/heading'
import YouTubePlayer from '../../shared/youtubaePlayer';

export default function FilmsVideos() {

    const videos = [
        { id: 'wQ5WXuI1fKc', title: 'Video Title 1', description: 'Description 1' },
        { id: 'VlnP_sBmmRg', title: 'Video Title 2', description: 'Description 2' },
        { id: 'G87wGpw6l88', title: 'Video Title 2', description: 'Description 2' },
        { id: 'BzMHYVQKO6g', title: 'Video Title 2', description: 'Description 2' },

        // ... add more videos as needed
    ];


  return (
    <div className="container-base">
       <br/>
    <Heading title="Color Grading Videos"/>
    <br/>
    <div className=' grid-base'>
      {videos.map(video => (
                      <YouTubePlayer videoId={video.id} />
                ))}
        </div>
</div>
  )
}
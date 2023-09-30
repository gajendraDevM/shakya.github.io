import AboutSection from './aboutSec'
import Cards from './cards'
import LatestVideos from './latestVideos'
import UpcomingFilms from './upcomingFilms'

export default function Home() {
  return (
    <div>
        {/* <Header/> */}
        
        <Cards/>
        <br/>
       <AboutSection/>
       <br/>
      <UpcomingFilms/>
      <LatestVideos/>
<br/>
<br/>
<br/>
    </div>
  )
}

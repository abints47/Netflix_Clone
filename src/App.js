import NavBar from './Components/NavBar/NavBar';
import './App.css'
import {original, action, Horror, comedy, romance, documentaries, topRated, trending} from './urls'
import './Components/Banner/Banner.css'
import Banner from './Components/Banner/Banner';
import RawPost from './Components/RawPost/RawPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      
      <div className="content">
        <RawPost url={original} title='Netflix Originals' />
        <RawPost url={trending} title='Trending Now' isSmall/>
        <RawPost url={topRated} title='Top Rated' isSmall/>
        <RawPost url={action} title='Action Movies' isSmall/>
        <RawPost url={comedy} title='Comedy Movies' isSmall/>
        <RawPost url={Horror} title='Horror Movies' isSmall/>
        <RawPost url={romance} title='Romance Movies' isSmall/>
        <RawPost url={documentaries} title='Documentaries' isSmall/>
      </div>
    </div>
  );
}

export default App;

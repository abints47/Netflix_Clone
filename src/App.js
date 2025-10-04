import NavBar from './Components/NavBar/NavBar';
import './App.css'
import {original,action,Horror} from './urls'
import './Components/Banner/Banner.css'
import Banner from './Components/Banner/Banner';
import RawPost from './Components/RawPost/RawPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RawPost url={original} title='Netflix Originals' />
      <RawPost url={action} title='Action Movies' isSmall/>
      <RawPost url={Horror} title='Horror Movies' isSmall/>
    </div>
  );
}

export default App;

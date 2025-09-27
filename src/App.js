import NavBar from './Components/NavBar/NavBar';
import './App.css'
import './Components/Banner/Banner.css'
import Banner from './Components/Banner/Banner';
import RawPost from './Components/RawPost/RawPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RawPost/>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero.js';
import Trendingblogs from './components/Trendingblogs.js';
import Slideshow from './components/Slideshow.js';

function App() {
  return (
    <>
    <Navbar />
    <Slideshow />
    <Trendingblogs />
    </>
  );
}

export default App;

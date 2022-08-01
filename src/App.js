import './App.css';
import edL from './Images/EdLogo.webp'
import edT from './Images/eldenringtitle.png'
import Buy from './Components/Buy';
import Reviews from './Components/Reviews';
import Platforms from './Components/Platforms';
import Video from './Components/Video';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className='background'>
        <div className='App-container'>
          <header className="App-header">
            <img className='title' src={edT}/>
            <img className='logo' src={edL}/>
          </header>         
          <div className='reviews-container'>
              <h4>Reviews</h4>
              <div className='items-container'>
                <Reviews/>
              </div>
          </div>
          <div className='videos-container'>
              <Video/>
          </div>
          <div className='platforms-container'>
            <h4>Avaliable on</h4>
            <div className='items-container'>
              <Platforms/>
            </div>
          </div>
          <div className='buy-container'>
            <h4>Buy a digital copy now</h4>
            <div className='items-container'>
              <Buy/>
            </div>
          </div>          
        </div>
        <div className='footer-container'>
            <Footer/>
          </div>        
      </div> 
    </div>
  );
}

export default App;

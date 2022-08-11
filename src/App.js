import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-section">
          <div className="nav-container">
          <div className="logo">
            <h1>IPS</h1>
            <i className="fa-solid fa-truck-fast"></i>
          </div>

          <div className="lists">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Branches</a>
              </li>

              <button>Login</button>
              <button>Sign UP</button>
            </ul>
          </div>
          </div>
        </div>
      </nav>

      <section>
        <div className="hero-section">
          <div className="hero-container">
          <div className="text-section">
            <h1>A reliable logistic company for all scales of business </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quas dolor reprehenderit quod architecto eveniet molestias, praesentium et quam nam.</p>
            <div className="track-id">
              <input type="text" placeholder='Tracking ID'/>
              <button>Track</button>
            </div>
            <button>Get Started</button> 
            <button>Learn More</button> 
          </div>
          <div className="img-section">
            <img src="/assets/hero-img.jpg" alt="logistic" />
            <img src="/assets/map.png" alt="map" />
          </div>
          </div>
        </div>
      </section>

      <section></section>
    </div>
  );
}

export default App;

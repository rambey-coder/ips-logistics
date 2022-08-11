import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-section">
          <div className="nav-container">
          <div className="logo">
            <img src="./assets/logo-png.png" alt="logo" />
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

      <section>
        <div className="delievry-section">
        <div className="delievry-container">
          <h3>Seamless delivery services</h3>
          <div className="card-container">
          <div className="card">
          <i class='bx bxs-ship bx-tada' ></i>
          <h4>Overseas Shipping</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.</p>
          <button>Learn More</button>
          </div>

          <div className="card">
          <i class='bx bx-repost bx-tada' ></i>
          <h4>Interstate Delievry</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.</p>
          <button>Learn More</button>
          </div>

          <div className="card">
          <i class='bx bxs-notepad bx-tada' ></i>
          <h4>Get Quick Quote</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.</p>
          <button>Learn More</button>
          </div>

          <div className="card">
          <i class='bx bx-current-location bx-tada'></i>
          <h4>Service Location</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.</p>
          <button>Learn More</button>
          </div>
          </div>
        </div>
        <div className="value-container">
          <div className="val-content">
            <div className="val">
            <i class='bx bxs-user-plus bx-burst-hover' ></i>
            <p>0000+</p>
            <p>Clients</p>
            </div>

            <div className="val">
            <i class='bx bx-current-location bx-burst-hover'></i>
            <p>0000+</p>
            <p>Locations</p>
            </div>

            <div className="val">
            <i class='bx bxs-truck bx-burst-hover'></i>
            <p>0000+</p>
            <p>Vehicle</p>
            </div>

            <div className="val">
            <i class='bx bx-package bx-burst-hover'></i>
            <p>0000+</p>
            <p>Packages</p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default App;

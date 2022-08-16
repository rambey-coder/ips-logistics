import './App.css';
import React from 'react';

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
              <button>Login</button>
              <button>Sign UP</button>
            </ul>
          </div>
          <div className="icon-container">
            <i className="fa-solid fa-bars"></i>
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
            {/* <button>Get Started</button> 
            <button>Learn More</button>  */}
          </div>
          <div className="img-section">
            <img src="/assets/logistics.gif" alt="logistic" />
            {/* <img src="/assets/map.png" alt="map" /> */}
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

      <section>
        <div className="download-section">
          <div className="download-container">
          <div className="word-content">
          <h3>Deliver Cargos Easily With Our New Mobile App</h3>
          <h6>App for local and international shipping</h6>
          <p>Enjoy the best experience for your logistics needs from the comfort of your mobile phone. Click the links below to download now</p>
          <div className="download">
            <div className="apple">
            <i class='bx bxl-apple bx-flashing' ></i>
            <span>
              <p>Download on the</p>
              <p>Apple Store</p>
            </span>
            </div>
            <div className="playstore">
            <i class='bx bxl-play-store bx-flashing' ></i>
            <span>
              <p>Download on the</p>
              <p>Playstore</p>
              </span>
            </div>
          </div>
          </div>
          <div className="download-img">
            <img src="/assets/mobile-jpg.webp" alt="mobile" />
          </div>
          </div>
        </div>
      </section>

      <section>
        <div className="activity-section">
          <div className="activity-container">
            <h2>
            We take the <br />
            <span>
            burden of logistics <br /> off you.
            </span>
            </h2>

            <div className="card-container">
            <div className="card">
            <i class="fa-solid fa-microchip"></i>
            <h4>Latest Technology</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad, vitae unde veritatis saepe asperiores dolores minima maiores eius. Voluptas!</p>
            </div>

            <div className="card">
            <i class="fa-solid fa-layer-group"></i>
            <h4>Social Commerce</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad, vitae unde veritatis saepe asperiores dolores minima maiores eius. Voluptas!</p>
            </div>

            <div className="card">
            <i class="fa-solid fa-calendar-check"></i>
            <h4>Guaranteed Delivery</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad, vitae unde veritatis saepe asperiores dolores minima maiores eius. Voluptas!</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-section">
          <div className="footer-container">
            <div className="sec-1">
            <div className="logo">
            <img src="./assets/logo-png.png" alt="logo" />
          </div>
          <p>&copy; 2022 IPS Logistics</p>
            </div>

            <div className="sec-2">
              <div>
                <h6>Customer Service</h6>
                <span>
                  <li>Customer Support</li>
                  <li>Help Center</li>
                </span>
              </div>

              <div>
                <h6>Enquiry</h6>
                <span>
                  <li>Ship</li>
                  <li>Get a Quote</li>
                  <li>Track</li>
                </span>
              </div>

              <div>
                <h6>Service Portfolio</h6>
                <span>
                  <li>Domestic Logistics</li>
                  <li>Corporate Logistics</li>
                  <li>E-comerce Logistics</li>
                  <li>Overseas Shiping</li>
                </span>
              </div>

              <div>
                <h6>Others</h6>
                <span>
                  <li>About</li>
                  <li>Branch</li>
                  <li>Schedle a Pick-up</li>
                  <li>Report Isuess</li>
                  <li>Terms & Conditions</li>
                </span>
              </div>
            </div>

            <div className="sec-3">
              <h6>Connect with us</h6>
              <div>
                <a href="#">
                <i class='bx bxl-twitter bx-tada-hover'></i>
                </a>

                <a href="#">
                <i class='bx bxl-instagram-alt bx-tada-hover'></i>
                </a>

                <a href="#">
                <i class='bx bxl-facebook-circle bx-tada-hover'></i>
                </a>

                <a href="#">
                <i class='bx bxl-linkedin-square bx-tada-hover'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

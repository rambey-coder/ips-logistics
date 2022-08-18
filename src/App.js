import './App.css';
import React, { useState } from 'react';

function App() {
  const [click, setClick] = useState(false)

  const [nav, setNav] = useState(false)

  const handleClick = () => setClick(!click)

  window.addEventListener('scroll', () => {
    if(window.scrollY > 60) {
      setNav(true)
    }else {
      setNav(false)
    }
  })
  return (
    <div className="App">
      <nav>
        <div className={nav ? "nav-section active" : "nav-section"}>
          <div className='nav-container'>
          <div className="logo">
            <img src="./assets/logo-png.png" alt="logo" />
          </div>

          <div className={click ? "lists active" : "lists"}>
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
          <div className="icon-container" onClick={handleClick}>
            <i className={click ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
          </div>
          </div>
        </div>
      </nav>

      <section>
        <div className="hero-section">
          <div className="hero-container">
          <div className="text-section">
            <h1>A reliable logistic company for all scales of business </h1>
            <p>Serving all your logistics needs. 
            <br />
            Our service commitment to you is hassle-free delivery. We are large enough to efficiently handle deliveries for large corporations yet small enough to deploy innovative delivery solutions that help small businesses.
            </p>
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
          <p>Ship from UK/US to Nigeria & Export to anywhere in the world</p>
          <button>Learn More</button>
          </div>

          <div className="card">
          <i class='bx bx-repost bx-tada' ></i>
          <h4>Interstate Delievry</h4>
          <p>Send & recieve packages within states.</p>
          <button>Learn More</button>
          </div>

          <div className="card">
          <i class='bx bxs-notepad bx-tada' ></i>
          <h4>Get Quick Quote</h4>
          <p>calculate cost estimate for your local & international shipment </p>
          <button>Learn More</button>
          </div>

          <div className="card">
          <i class='bx bx-current-location bx-tada'></i>
          <h4>Service Location</h4>
          <p>Locate IPS logistic service near you.</p>
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
            <p>Technology and its application are fundamental and crucial at IPS Logistics. We understand the role of technology in providing an exceptional customer experience. For this reason, our processes, products and services are built around modern technology to help us deliver your shipments cheaper, safely and at the speed of light.</p>
            </div>

            <div className="card">
            <i class="fa-solid fa-layer-group"></i>
            <h4>Social Commerce</h4>
            <p>Pivotal to successful social commerce transactions is the ability for the end-user to receive items where and when needed. With an unmatched route network spanning urban and rural communalities, IPS Logistics is the solution to efficient last-mile delivery. As a merchant, you only have to think about selling your products while IPS Logistics delivers to your customers worldwide.</p>
            </div>

            <div className="card">
            <i class="fa-solid fa-calendar-check"></i>
            <h4>Guaranteed Delivery</h4>
            <p>We are conscious of the relationship between time and money and utilize our resources optimally to meet your delivery needs. Our service commitment to you is hassle-free delivery. We are large enough to efficiently handle deliveries for large corporations yet small enough to deploy innovative delivery solutions that help small businesses.</p>
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

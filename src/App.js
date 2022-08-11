import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-container">
          <div className="logo">
            <h1>IPS Logistics</h1>
            <i class="fa-solid fa-truck-fast"></i>
          </div>

          <div className="liists">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Track</a>
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
            </ul>
          </div>

          <div className="acc">
            <button>Login</button>
            <button>Sign UP</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;

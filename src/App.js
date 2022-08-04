/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

function App() {
    return (
        <div className="App">
            <nav className="navbar">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Home/Dashboard{' '}
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Random character
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Favourites
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">
                                Test 3
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <header>Rick and Morty</header>

            <div>
                <img
                    src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                    alt="Morty Smith"
                />
                <p>Morty Smith</p>
            </div>
        </div>
    );
}

export default App;

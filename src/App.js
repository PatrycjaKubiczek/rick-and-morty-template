import './App.css';

import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Card />
        </div>
    );
}

export default App;

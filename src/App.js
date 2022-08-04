import './App.css';

import React, { useEffect, useState } from 'react';

import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
    const [characters, setCharacters] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                const data = actualData.results;
                console.log(data);
                setCharacters(data);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setCharacters(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="App">
            <Navbar />
            <Header />
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {characters && (
                <div className="card-container">
                    {characters.map((item) => (
                        <Card
                            key={item.id}
                            name={item.name}
                            image={item.image}
                        />
                    ))}
                </div>
            )}{' '}
        </div>
    );
}

export default App;

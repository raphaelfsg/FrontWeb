import React, {useState} from 'react';
import './Home.css'

function Home() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [tarefa, setTarefa] = useState('');

    return (
        <div>
            {loggedIn ? (
            <h1>Bem-vindo de volta!</h1>
            ) : (
            <button onClick={() => setLoggedIn(true)}>Entrar</button>
            )}
        </div>
    );
}


export default Home
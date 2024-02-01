import React, { useState } from 'react';
import { request, setAuthHeader } from '../helpers/axios_helper';
import Exitoso from './Exitoso';
import DownloadButton from './DownloadButton';
import DownloadButton2 from './DownloadButton2';
function AppContent2() {
    const pdfUrl = 'http://localhost:8080/pdf/generate'; // Reemplaza con la URL correcta
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    const handleLogin = () => {
        request(
            "POST",
            "/login",
            {
                login: username,
                password: password
            }).then(
                (response) => {
                    console.log(response.data);
                    setAuthHeader(response.data.token);
                    setLoginSuccessful(true);
                }).catch(
                    (error) => {
                        alert('Credenciales incorrectas');
                        setAuthHeader(null);
                    }
                );
    };

    return (
        <div>
            {loginSuccessful ? (
                <><DownloadButton pdfUrl={pdfUrl} />
                    <DownloadButton2 /></>

            ) : (
                <>
                    <h2>Login</h2>
                    <form>
                        <label>
                            Username:
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <br />
                        <button type="button" onClick={handleLogin}>
                            Login
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default AppContent2
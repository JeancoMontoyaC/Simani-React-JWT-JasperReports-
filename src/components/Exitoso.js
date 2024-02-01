import React, { useState } from 'react';
import { request, setAuthHeader } from '../helpers/axios_helper';

function Exitoso() {
    const [displayText, setDisplayText] = useState('');
    const handleButtonClick = () => {
        request(
            "GET",
            "/demo",
            {}).then(
                (response) => {
                    setDisplayText(response.data);
                }).catch(
                    (error) => {
                        if (error.response.status === 401) {
                            setAuthHeader(null);
                        }

                    }
                );
    }
    return (
        <div>
            <p>Exitoso</p>
            <button type="button" onClick={handleButtonClick}>
                Realizar Función
            </button>
            <p>{displayText}</p>
        </div>
    );
}

export default Exitoso
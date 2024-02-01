import React, { useState } from 'react';
import { request, setAuthHeader } from '../helpers/axios_helper';
const DownloadButton = ({ pdfUrl }) => {
    const [pdfData, setPdfData] = useState(null);
    const handleDownload = () => {
        request(
            "GET",
            "/generatePdf",
            {}).then(response => {
                const data = response.data;
                setPdfData(data);
                console.log(data);
                const decodedData = atob(data);

                // Convertir a un array de bytes
                const byteNumbers = new Array(decodedData.length);
                for (let i = 0; i < decodedData.length; i++) {
                    byteNumbers[i] = decodedData.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);

                // Crear un objeto Blob a partir del array de bytes
                const blob = new Blob([byteArray], { type: 'application/pdf' });

                // Crear un enlace para descargar el PDF
                const downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(blob);
                downloadLink.download = 'documento.pdf';

                // Simular clic en el enlace para iniciar la descarga
                downloadLink.click();

            })
            .catch(error => console.error('Error:', error));

    };

    return (
        <div>
            <button onClick={handleDownload}>
                Descargar PDF
            </button>
        </div>
    );
};

export default DownloadButton;

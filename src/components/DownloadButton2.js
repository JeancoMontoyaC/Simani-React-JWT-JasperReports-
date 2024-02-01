
import { request } from '../helpers/axios_helper';
import React, { useState } from 'react';
const DownloadButton2 = () => {
    const [excelData, setExcelData] = useState(null);
    const handleDownload = () => {
        request(
            "GET",
            "/generateExcel",
            {}).then(response => {
                const data = response.data;
                setExcelData(data);

                // Decodificar la cadena base64
                const decodedData = atob(data);

                // Convertir a un array de bytes
                const byteNumbers = new Array(decodedData.length);
                for (let i = 0; i < decodedData.length; i++) {
                    byteNumbers[i] = decodedData.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);

                // Crear un objeto Blob a partir del array de bytes
                const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

                // Crear un enlace para descargar el Excel
                const downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(blob);
                downloadLink.download = 'documento.xlsx';

                // Simular clic en el enlace para iniciar la descarga
                downloadLink.click();
            }).catch(error => console.error('Error:', error));
    };
    return (
        <button onClick={handleDownload}>
            Descargar Excel
        </button>
    );
};
export default DownloadButton2
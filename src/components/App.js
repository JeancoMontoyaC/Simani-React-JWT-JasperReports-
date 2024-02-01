
import './App.css';

import AppContent2 from './AppContent2';
import DownloadButton from './DownloadButton';

function App() {
  const pdfUrl = 'http://localhost:8080/pdf/generate'; // Reemplaza con la URL correcta
  return (
    <div>
      <h1>Aplicación React</h1>
      {/* Otros componentes o contenido aquí */}
      <AppContent2 />
    </div>

  );
}

export default App;

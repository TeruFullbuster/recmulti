import express from 'express';

import Generico from './routes/generico.routes.js';

import cors from 'cors';
import chicle from 'crypto';

const app = express();
const PORT = 3001;

app.use(cors());

// Configuración para aumentar el límite de tamaño de carga
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(Generico);


// Configuración del servidor para escuchar en el puerto
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

export default app;

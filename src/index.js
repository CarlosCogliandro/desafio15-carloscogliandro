import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;


// app.use(express.static('src/public'));







app.get('/', (req, res) => {
    res.send(`Peticion atendida por ${process.pid} en el puerto ${PORT}`)
});

app.listen(PORT, () => console.log(`Listening on ------> http://localhost:${PORT}`));

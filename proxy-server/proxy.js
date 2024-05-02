const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.get('/api/equipments', async (req, res) => {
  const {search} = req.query;
  try {
      let apiURL = `https://mandalorian-store.netlify.app/api/equipments`;
      if(search) apiURL += `?search=${search}`
    
    const response = await axios.get(apiURL);

    res.json(response.data);
  } catch (error) {

    res.status(500).json({ error: 'Erro ao acessar a API externa' });
  }
});

app.listen(port, () => {
  console.log(`Servidor proxy rodando em http://localhost:${port}`);
});
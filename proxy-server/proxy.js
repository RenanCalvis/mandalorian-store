const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware para permitir requisições de qualquer origem (CORS)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Rota para redirecionar requisições para a API desejada
app.get('/api/equipments', async (req, res) => {
  const {search} = req.query;
  try {
      let apiURL = `https://mandalorian-store.netlify.app/api/equipments`;
      if(search) apiURL += `?search=${search}`
    
    // Faz a requisição para a API original
    const response = await axios.get(apiURL);

    // Retorna os dados da API original como resposta do proxy
    res.json(response.data);
  } catch (error) {
    // Se houver algum erro ao acessar a API original, retorna o erro
    res.status(500).json({ error: 'Erro ao acessar a API externa' });
  }
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor proxy rodando em http://localhost:${port}`);
});
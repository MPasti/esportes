//é preciso baixar uma lib adicional para o express com TS, pois o ts não é nativo nele
import express from "express";

const app = express();

//metodo get, o primeiro parametro é o endereço que o usuário vai estar acessando
//o url que vem depois da barra, o PATH
//como segundo parametro passamos o que será executado, normalmente uma função
//nessa função tem 2 parametros
app.get("/ads", (req, res) => {
  return res.json([
    { id: 1, name: "Anuncio1" },
    { id: 2, name: "Anuncio2" },
    { id: 3, name: "Anuncio3" },
  ]);
});

//o listen faz com que o server continue 'ouvindo' e deixando o server aberto
app.listen(3333);

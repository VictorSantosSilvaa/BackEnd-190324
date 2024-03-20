//Importando a biblioteca express
const express = require('express')
//definindo variaveis
const porta = 3001
const app = express()
//definindo uma variavel para a rota
const routes = require('./SalaDeAula/src/routers/router')

/* O trecho de código significa que todos os arquivos estáticos contidos no diretório "public" 
serão disponibilizados para os clientes quando acessarem a aplicação. Por exemplo, se houver um arquivo 
"index.html" dentro de "public", ele estará acessível através da rota principal da aplicação 
(por exemplo, "http://seusite.com/"). */
app.use(express.static("public"))

app.use('/', routes)
app.listen(porta, () => {
    console.log("Servidor executando.")
    console.log(`http://localhost:${porta}`)
})

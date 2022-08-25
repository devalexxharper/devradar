const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const routes = require('./routes')
const { setWebsocket } = require('./webSocket')

const app = express()
const server = http.Server(app)
setWebsocket(server)

mongoose.connect('mongodb+srv://alexxharper:alexxharper@cluster0-dslsw.azure.mongodb.net/omnistack10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)
server.listen(3333)







//query params: req.query (Filtros, ordenação, paginação.)
//route params: req.params (Indentificar um recurso na alteração ou remoção)
//body: req.body (Dados da criação ou alteração do registro)
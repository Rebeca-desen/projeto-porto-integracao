const clientes = require('../models/clientes')


const getAll = (req, res) => {
  clientes.find(function (err, clientes) {
    if (err) {
      res.status(500).send({ message: err.message })
    } else {
      res.status(200).send(clientes)
    }
  })
}

const getCompradores = (req, res) => {

  clientes.find({ comprou: true }, 'nome email', function (err, clientes) {

    if (err) {
      res.status(500).send({ message: err.message })
    } else {
          res.status(200).send(clientes)
    
    }
  }
  )
}
const getComprador = (req, res) => {
  let nome = req.params.nome

  clientes.find({nome, comprou: true},function (err, clientes) {
    if (err) {
      res.status(500).send({ message: err.message })
    } else {
      res.status(200).send(clientes);
    }
  } )
}

const getByCpf = (req, res) => {
  const cpf = req.params.cpf

  clientes.find({ cpf }, function (err, clientes) {
    if (err) {
      res.status(500).send({ message: err.message })
    } else {
      res.status(200).send(clientes);
    }
  })
}

const postCliente = (req, res) => {
console.log(req.body)
  let cliente = new clientes(req.body)

  cliente.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message })
    }
  
    res.status(201).send({
      "status": true,
      "mensagem": "Cliente incluido com sucesso"
  })
  })
}

module.exports = {
  getAll,
  getCompradores,
  getComprador,
  getByCpf,
  postCliente
}

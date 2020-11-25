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
     // const clientesFiltados = clientes.map(cliente => {
        //return {
          res.status(200).send(clientes)
         // nome: cliente.nome,
         // email: cliente.email
      //  }
     // })

      res.status(200).send(clientesFiltados);
    }
  })

 
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

  let cliente = new clientes(req.body)

  cliente.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message })
    }
      
      res.status(201).send(cliente.toJSON())
  })
}

module.exports = {
  getAll,
  getCompradores,
  getByCpf,
  postCliente
}

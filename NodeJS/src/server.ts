import express from 'express'

const app = express()

/**
 * Methods
 * 
 * GET -> Buscas
 * POST -> Criar
 * PUT -> Atualizar
 * DELETE -> Deletar
 * PATCH -> Alterar uma informação
 */

app.get('/', (req, res) => res.json({ msg: 'Hello World' }))

app.post('/users', (req, res) => {
  return res.json({ message: 'Usuário cadastrado' })
})

app.listen(3333, () => console.log('Server is running at localhost:3333'))
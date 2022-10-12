const { app } = require('./config/app')
require('dotenv').config()

const port = process.env.PORT || 3001
const { ProductRouter, UserRouter } = require('./api/routes/index')

app.use('/api', UserRouter, ProductRouter)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

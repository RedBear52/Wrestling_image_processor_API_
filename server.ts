import routes from './src/routes/index'
import express from 'express'

const app = express()
const port = 8080

app.use('/api', routes)

app.listen(port, () => {
    console.log(`server awake and listening at: ${port}`)
})

export default app

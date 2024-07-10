import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import notFound from './app/middlewares/notFound'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import config from './app/config'

const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1', router)

const root = async (req: Request, res: Response) => {
  res.json({
    message: `Server is running on port: ${config.port}`,
  })
}

app.get('/', root)

app.use(globalErrorHandler)

//Not Found
app.use(notFound)

export default app

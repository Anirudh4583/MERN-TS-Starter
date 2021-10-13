import express, { Request, Response } from 'express'
import compression from 'compression'
import cors from 'cors'

const app = express()

app.set('port', process.env.PORT || 3001)
app.use(cors())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/hello', (req: Request, res: Response): void => {
  res.status(200).send('hello world! this is working sheeeeesh')
})

export default app

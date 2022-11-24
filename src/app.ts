import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { PORT } from './config'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.set('port', PORT)

export default app

import express, { Application } from 'express'
import personaRoute from  './routes/persona.route'
import cors from 'cors'
import morgan from 'morgan'

const app : Application = express();

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())

app.use('/persona' , personaRoute)

app.listen(4000,()=>{
    console.log("Run server on port 4000")
})
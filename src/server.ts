import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'

const app = express()

app.use(cors())

const customLogger = (message) => (req,res,next) => {
    console.log(`Hello from ${message}`)
}


app.use(morgan('dev'))

// Allows a client to sent json
app.use(express.json())

// allows a client to add things like query strings and parameter
// and it decodes and encodes properly
app.use(express.urlencoded({extended:true}))
app.use(customLogger('custom logger'))


// costom middleware
app.use((req,res,next)=>{
    req.sssh_secret = 'doggy'
    next()
})
app.get('/',(req,res)=>{
    console.log('hello from express')
    res.status(200)
    res.json({message:'hello'})
})

app.use('/api', protect, router)

export default app
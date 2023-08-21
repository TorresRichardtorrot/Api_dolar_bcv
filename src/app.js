import express from "express"
import dollarRouter from './routes/dolar.router.js'
import './app/webscraping.js'

const app = express()
app.use(express.json())


app.use('/api',dollarRouter)
app.use('/',(req,res)=>{
    res.send('hola')
})

app.use((req,res,next)=>{
    res.status(404).json({
        message:'endpoint not found'
    })
})

export default app;
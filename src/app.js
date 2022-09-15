import express from "express"
import cors from  "cors";
import { cliente } from "./components"
import { producto } from "./components"

export const app = express();
app.get('/', (req,res)=>{
    res.send('Hola mundo, app con Express. De: Nicole Jane Cáceres Serna')
})
//nuestro servidor estara autorizado 
app.use(cors())

//
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/cliente", cliente)
app.use("/producto", producto)
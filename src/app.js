import express from "express"
import cors from  "cors";
import { cliente } from "./components"
import { producto } from "./components"

export const app = express();

//nuestro servidor estara autorizado 
app.use(cors())

//
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/cliente", cliente)
app.use("/producto", producto)
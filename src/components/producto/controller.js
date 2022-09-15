import * as DB from "../../db/dbProducto"

//DB.data =[]

export const findAll = (req,res)=> {
    return res.json({
        ok:true,
        data:DB.findAll(),
    })
}
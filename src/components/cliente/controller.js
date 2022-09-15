import * as DB from "../../db/dbCliente"

export const findAll = (req,res)=> {
    return res.json({
        ok:true,
        data:DB.findAll(),
    })
}
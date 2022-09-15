import { Router} from "express";
import * as Controller from "./controller";

const clienteRouter = Router();

clienteRouter.route("/").get(Controller.findAll)

export default clienteRouter
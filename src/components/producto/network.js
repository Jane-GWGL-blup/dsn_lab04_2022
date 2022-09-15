import { Router} from "express";
import * as Controller from "./controller";

const productoRouter = Router();

productoRouter.route("/").get(Controller.findAll)

export default productoRouter
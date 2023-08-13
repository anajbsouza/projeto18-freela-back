import { Router } from "express";
import { addProduct, getProducts } from "../controllers/product.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import { productSchema } from "../schemas/product.schema.js";
import { authValidation } from "../middlewares/authValidation.js";

const productRouter = Router();

productRouter.post("/add", schemaValidation(productSchema), authValidation, addProduct);
productRouter.get("/add", getProducts);

export default productRouter;
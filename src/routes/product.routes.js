import { Router } from "express";
import { addProduct, getProducts, addPhoto } from "../controllers/product.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import { productSchema } from "../schemas/product.schema.js";
import { photoSchema } from "../schemas/photo.schema.js";
import { authValidation } from "../middlewares/authValidation.js";

const productRouter = Router();

productRouter.post("/product", schemaValidation(productSchema), authValidation, addProduct);
productRouter.get("/product", getProducts);
productRouter.post("/photos", schemaValidation(photoSchema), addPhoto);


export default productRouter;
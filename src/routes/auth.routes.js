import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import { authSchema } from "../schemas/auth.schema.js";
import { userSchema } from "../schemas/user.schema.js";

const authRouter = Router();

authRouter.post("/signup", schemaValidation(userSchema), signUp);
authRouter.post("/signin", schemaValidation(authSchema), signIn);

export default authRouter;
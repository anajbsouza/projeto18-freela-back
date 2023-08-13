import joi from "joi";

export const userSchema = joi.object({
    name: joi.string().required(),
    cpf: joi.string().trim().length(11).pattern(/^\d+$/).required(),
    phone: joi.string().trim().length(11).pattern(/^\d+$/).required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).required()
});

// confirmPassword: joi.string().min(3).required().valid(joi.ref("password")),
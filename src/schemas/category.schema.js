import joi from "joi";

export const categorySchema = joi.object({
    name: joi.string().max(100).required()
});

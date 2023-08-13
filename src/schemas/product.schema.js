import joi from "joi";

export const productSchema = joi.object({
    category_id: joi.number().integer().required(),
    name: joi.string().max(100).required(),
    description: joi.string().required(),
    sold: joi.boolean(),
    user_id: joi.number().integer().required()
});

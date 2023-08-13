import joi from "joi";

export const photoSchema = joi.object({
    product_id: joi.number().integer().required(),
    url: joi.string().uri().required()
});

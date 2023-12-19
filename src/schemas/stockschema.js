// const { object, string, number, date, InferType } = require("yup");
import { object, string, number, date } from "yup";

export const stockSchema = object({
  securityId: string().required(),
  securityName: string().required(),
  symbol: string().required(),
  //   totalTradedQuantity: number().default(() => 0),
  //   lastTradedPrice: number().required().positive(),
});
// module.exports = { stockSchema };
// export { stockSchema };
// export default stockSchema;

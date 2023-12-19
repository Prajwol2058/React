// const { object, string, number, date, InferType } = require("yup");
import { object, string, number, date } from "yup";

export const stockSchema = object({
  securityId: string().required("securityId compulsory"),
  securityName: string().required("securityname compulsory"),
  symbol: string().required("symbol required"),
  //   totalTradedQuantity: number().default(() => 0),
  //   lastTradedPrice: number().required().positive(),
});
// module.exports = { stockSchema };
// export { stockSchema };
// export default stockSchema;

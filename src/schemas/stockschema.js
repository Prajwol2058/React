// const { object, string, number, date, InferType } = require("yup");
import { object, string, number, date } from "yup";

export const stockSchema = object({
  securityId: string().required("securityId compulsory"),
  securityId: number()
    .required("Securtiy Id chaahinxa!")
    .positive("negative hunu bhayena hajur")
    .integer("no decimals allowed"),
  securityName: string().required("securityname compulsory"),
  symbol: string().required("symbol required"),
  symbol: string
    .required("Symbol chaahinxa!")
    .min(3, "3 letters hunai paryo ni!"),
  //   totalTradedQuantity: number().default(() => 0),
  //   lastTradedPrice: number().required().positive(),
});
// module.exports = { stockSchema };
// export { stockSchema };
// export default stockSchema;

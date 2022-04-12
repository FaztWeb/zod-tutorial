import { z } from "zod";
const stringsAndNumbersSchema = z.array(z.union([z.string(), z.number()]));
type stringsAndNumbersSchema = z.infer<typeof stringsAndNumbersSchema>;
const value = stringsAndNumbersSchema.parse(["hello", "1", 1]);
console.log(value);

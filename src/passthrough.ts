import { z } from "zod";

const PersonSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const input = {
  name: "Fazt",
  age: 70,
  address: "123 Main St",
};

const result = PersonSchema.passthrough().parse(input);
console.log(result);
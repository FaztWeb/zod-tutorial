import { z } from "zod";

const User = z.object({
  email: z.string().email(),
  fullname: z.string(),
  phone: z.number(),
});

const result = User.parse({
  email: "fazttech@gmail",
  fullname: "Fazttech",
});
console.log(result);

import { z } from "zod";

const User = z.object({
  email: z.string().email(),
  fullname: z.string(),
  phone: z.number(),
});

type UserType = z.infer<typeof User>;

const input: UserType = {
  email: "fazt@faztweb.com",
  fullname: "Fazt",
  phone: 123456789,
};

const result = User.parse(input);
console.log(result);

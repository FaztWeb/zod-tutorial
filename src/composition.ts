import { z } from "zod";

const User = z.object({
  email: z.string(),
  name: z.string(),
})

const address = z.object({
  street: z.string(),
  city: z.string(),
})

const citizen = User.merge(address);
// type CitizenType = z.infer<typeof citizen>;

const value = citizen.parse({
  email: "fazttecth@gmail.com",
  name: "Ryan Ray",
  street: "123 Main St",
  city: "New York",
})

console.log(value)
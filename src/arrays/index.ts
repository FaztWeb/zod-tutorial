import { z } from "zod";

const PersonSchema = z.object({
  name: z.string(),
  age: z.number(),
})

const PersonsSchema = z.array(PersonSchema).nonempty()

// PersonsSchema.parse([]);
PersonsSchema.parse([{ name: "Fazt", age: 20 }]);
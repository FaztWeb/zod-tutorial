import {z} from 'zod'

const stringSchema = z.string().nonempty();

const value = stringSchema.safeParse("");
console.log(value)
import {z} from 'zod'

const stringSchema = z.string().nonempty().min(8).max(30);

// stringSchema.parse("") // thows error
// stringSchema.parse('hello'); // too small
const value = stringSchema.parse('hello world');
console.log(value)
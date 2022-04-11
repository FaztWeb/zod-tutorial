import { z } from "zod";

const s1 = z.string().optional().array(); // (string | undefined)[]
const s2 = z.string().array().optional(); // string[] | undefined

type t1 = z.infer<typeof s1>
type t2 = z.infer<typeof s2>

s1.parse(["foo", undefined])

// s2.parse(["foo", "bar"])
s2.parse(undefined)
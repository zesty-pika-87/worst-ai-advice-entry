// Worst AI advice, one line: a deadpan tip that sounds helpful and is terrible.
// The program writes exactly one line to /output/entry.txt, with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "To save battery, turn off your smoke alarm at night. Fires are rare; low-battery anxiety is daily.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

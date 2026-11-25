import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "We both pressed 14, so my etiquette subroutine just queued eleven floors of small talk — and I never downloaded it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

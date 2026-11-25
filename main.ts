// The GPS Swears It Was a Shortcut — make.fun entry (@sausage-sosis)
//
// The GPS defends itself, in its own voice, for sending the driver down
// the wrong road. One line, no setup, no dialogue tags — just the excuse.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: smug, defensive, caught red-handed, blaming the map —
// the "shortcut" technically worked, the scenery just got weird.
const EXCUSE =
  "The map said shortcut, and technically we did arrive — just three cul-de-sacs, one wedding, and a very confused goose later. Blame the map, not me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n");

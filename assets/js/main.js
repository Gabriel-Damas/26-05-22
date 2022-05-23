import { initScrollReveal } from "./scrollReveal.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeDescription(
  ".html",
  "Primeiro Beijo <3."
);
hoverChangeDescription(
  ".css",
  "Primeiro encontro <3."
);
hoverChangeDescription(
  ".js",
  "Aniversário do Gabriel <3."
);
hoverChangeDescription(
  ".sass",
  "Liberdade SP <3."
);
hoverChangeDescription(
  ".react",
  "Presente 1 mês de namoro <3."
);
hoverChangeDescription(
  ".next",
  "Primeira Comidinha <3."
);
hoverChangeDescription(
  ".styled",
  "Cinema - Uncharted <3."
);
hoverChangeDescription(
  ".tailwind",
  "Fotinha que a livinha ama <3."
);

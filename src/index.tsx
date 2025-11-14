import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Welcome } from "./screens/Welcome";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Welcome />
  </StrictMode>,
);

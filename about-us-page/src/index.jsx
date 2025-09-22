import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementAboutUs } from "./screens/ElementAboutUs/ElementAboutUs";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <ElementAboutUs />
  </StrictMode>,
);
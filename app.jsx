import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./src/main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

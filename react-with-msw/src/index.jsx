import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";

async function enableWorking() {
  const { worker } = await import("./mocks/browser");
  worker.start();
}

enableWorking().then(() => {
  createRoot(document.getElementById("root")).render(<App />);
});

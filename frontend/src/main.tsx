import "@/system/index.css";
import App from "@/system/App";
import { store } from "@/controller/store";

import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

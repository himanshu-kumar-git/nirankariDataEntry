import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { FirebaseProvider } from "./Context/Firebase";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);

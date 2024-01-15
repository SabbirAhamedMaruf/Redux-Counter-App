import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//! redux imports
import { Provider } from "react-redux";
import store from "./redux/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrapping With provider for accessing redux store */}

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

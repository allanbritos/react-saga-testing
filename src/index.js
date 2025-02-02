import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./layouts/App/index";

import { initialState } from "./store/reducers";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore(initialState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

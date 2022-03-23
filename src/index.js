import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./components/App";
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/:color:color2" element={<App />} /> */}
                <Route path="/:color1" element={<App />}>
                    <Route path=":color2" element={<App />}>
                        <Route path=":color3" element={<App />}></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

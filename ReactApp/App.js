import React from "react";
import ReactDOM from "react-dom/client";


const demo = React.createElement("H1",{},"Hello");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(demo);
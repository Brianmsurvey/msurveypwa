import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes/AppRouter";

import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.scss?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

ReactDOM.render(<AppRouter />, document.getElementById("app"));

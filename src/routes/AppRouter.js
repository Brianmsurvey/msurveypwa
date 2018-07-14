import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import indexRoutes from "./index";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route to={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </BrowserRouter>
);

export default AppRouter;

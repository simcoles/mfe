import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Header from "../components/Header";
import Progress from "../components/Progress";

const MarketingLazy = lazy(() => import("../components/MarketingApp"));
const AuthLazy = lazy(() => import("../components/AuthApp"));

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route exact path="/">
              <MarketingLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};

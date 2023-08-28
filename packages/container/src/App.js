import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Stylesprovider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import MarketingApp from "../components/MarketingApp";
import Header from "../components/Header";

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  return (
    <BrowserRouter>
      <Stylesprovider generateClassName={generateClassName}>
        <Header />
        <MarketingApp />
      </Stylesprovider>
    </BrowserRouter>
  );
};

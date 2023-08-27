import React, { useEffect, useRef } from "react";
import { mount } from "marketing/MarketingApp";

const MarketingApp = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;

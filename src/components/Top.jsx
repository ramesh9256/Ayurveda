import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Top = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Page ko top pe le jane ka function
  }, [pathname]);

  return null;
};

export default Top;

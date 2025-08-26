import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "../PageLoader";

export default function RouteChangeHandler({ children }) {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false)); // fake delay
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <PageLoader />}
      {children}
    </>
  );
}




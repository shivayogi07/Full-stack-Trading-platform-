import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL ||
  "https://full-stack-trading-platform-npnm4m86h-shivayogi-ds-projects.vercel.app";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && !user) {
      window.location.replace(`${FRONTEND_URL}/login`);
    }
  }, [loading, user]);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Loading...
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return children;
};

export default PrivateRoute;
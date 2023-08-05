import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppRoutes, defaultRoute } from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {AppRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route
          exact
          path="/"
          element={<Navigate to={defaultRoute} replace />}
        />
        <Route
          exact
          path="*"
          element={<Navigate to={defaultRoute} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

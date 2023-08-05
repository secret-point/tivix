import { lazy } from "react";
const defaultRoute = "/home";

const AppRoutes = [
  { path: "/home", component: lazy(() => import("../../pages/Home")) },
  {
    path: "/choose-minfig",
    component: lazy(() => import("../../pages/MinFig")),
  },
  {
    path: "/shipping-details",
    component: lazy(() => import("../../pages/ShippingDetails")),
  },
];

export { AppRoutes, defaultRoute };

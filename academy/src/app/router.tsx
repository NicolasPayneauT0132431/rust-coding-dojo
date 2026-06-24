import { createBrowserRouter, RouterProvider } from "react-router";
import { LandingPage } from "../features/landing/LandingPage";
import { ParcoursPage } from "../features/skill-tree/ParcoursPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/parcours",
    element: <ParcoursPage />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}

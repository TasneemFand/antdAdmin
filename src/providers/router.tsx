import React from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import ErrorPage from "../components/error-page";
import { getDefaultLayout } from "../components/layout";
import SignIn from "../pages/auth/components/signIn";
import ProductsPage from "../pages/dashboard/products";
import DashboardLayout from "../pages/dashboard/layout";
import { fetchProducts } from "../utils/loaderFunctions";
import { useAuth } from "../hooks/useAuth";

type TRoute = RouteObject & {
  getLayout?: (
    page: React.ReactElement
  ) => React.ReactElement<
    unknown,
    string | React.JSXElementConstructor<unknown>
  >;
};
export const routerObjects: TRoute[] = [
  {
    path: "/products",
    errorElement: <ErrorPage />,
    Component: ProductsPage,
    getLayout: DashboardLayout,
    loader: fetchProducts,
  },
];

export const createRouter = (): ReturnType<typeof createBrowserRouter> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const authenticated = useAuth();
  const routeWrappers = routerObjects.map((router) => {
    const getLayout = router?.getLayout || getDefaultLayout;
    const Component = router.Component!;
    const page = getLayout(<Component />);
    return {
      ...router,
      element: authenticated ? (
        page
      ) : (
        <Navigate to="/auth/signin" replace={true} />
      ),
      Component: null,
      errorElement: <ErrorPage />,
    };
  });
  routeWrappers.push({
    path: "/auth/signin",
    element: <SignIn />,
    Component: null,
    errorElement: <ErrorPage />,
  });
  return createBrowserRouter(routeWrappers);
};

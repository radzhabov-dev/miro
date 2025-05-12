import { AppHeader } from "@/features/header";
import { Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes.ts";

export function App() {
  const location = useLocation();

  const isAuthorized =
    location.pathname === ROUTES.REGISTER || location.pathname === ROUTES.LOGIN;
  return (
    <div>
      {!isAuthorized && <AppHeader />}
      <Outlet />
    </div>
  );
}

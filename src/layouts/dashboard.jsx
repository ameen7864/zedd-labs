import { useMaterialTailwindController } from "@/context";
import routes from "@/routes";
import { DashboardNavbar, Sidenav } from "@/widgets/layout";
import { Route, Routes } from "react-router-dom";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50 ">
      <Sidenav
        routes={routes}
        brandImg={sidenavType === "dark" ? "/img/logo.png" : "/img/logo.png"}
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />

        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;

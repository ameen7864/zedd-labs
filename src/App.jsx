import { Dashboard } from "@/layouts";
import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    </>
  );
}

export default App;

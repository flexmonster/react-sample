import { Routes, Route, Navigate } from "react-router";

import PivotTableDemo from "../FlexmonsterDemos/PivotTableDemo";

function DemoContainer() {
  return (
    <div className="demo-container">
      <Routes>
        <Route path="/pivot-table-demo" element={<PivotTableDemo />} />
        <Route path="/" element={<Navigate to="/pivot-table-demo" />} />
      </Routes>
    </div>
  );
}

export default DemoContainer;

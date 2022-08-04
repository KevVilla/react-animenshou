import "./LayoutPrincipal.css";

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const LayoutPrincipal = ({ children }) => {
  return (
    <div className="layout-principal">
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};

export default LayoutPrincipal;

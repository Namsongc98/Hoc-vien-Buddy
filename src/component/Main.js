import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import "../App.css";
import { NavLink, Route, Routes } from "react-router-dom";

function Main() {
  const navLinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#0dcaf0;" : "white",
  });
  return (
    <div>
      <div className="wapName">
        <ul className="wapName-li">
          <li className="nameNav-li">
            <NavLink
              to={"/WapMain/MainLeft"}
              style={ navLinkStyle }
              className="nameNav"
            >
              {" "}
              Báo cáo giảng viên
            </NavLink>
          </li>
          <li className="nameNav-li">
            <NavLink
              to={"/WapMain/MainRight"}
              style={ navLinkStyle }
              className="nameNav"
            >
              báo cáo đánh giá giảng viên
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/WapMain/MainLeft" Component={MainLeft} />
        <Route path="/WapMain/MainRight" Component={MainRight} />
      </Routes>
    </div>
  );
}

export default Main;

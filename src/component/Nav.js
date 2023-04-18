import React from "react";
import "../App.css"
function Nav() {
  return (
    
      <nav className="nav">
        <div className="nav-linkBack">
          <a href = '' className="linkBack">
            <img src="./image/Vector.svg" alt="" className="linkBack-img" />
            &nbsp; Quaylại menu chính
          </a>
        </div>
        <div className="nav__manage">
          <ul className="nav__manage">
            <h5 className="nav-title">QUẢN LÝ TÀI KHOẢN TẠM</h5>
            <li className="nav-title">
              <a className="nav-title nav-title__link" href = ''>
                Giảng viên nội bộ
              </a>
            </li>
            <li className="nav-title">
              <a className="nav-title nav-title__link" href = ''>
                Báo cáo
              </a>
            </li>
          </ul>
        </div>
      </nav>
 
  );
}

export default Nav;

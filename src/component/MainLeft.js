import React from "react";
import "../App.css";
function MainLeft() {
  
  return (
    <div className="report-conten">
      <div className="report-wp">
        <div className="report-wp__left report">
          <h3 className="report__left-title">Báo cáo giảng viên theo tháng</h3>
          <div className="report__left-staff">
            <label htmlFor = '' className="teach-left">
              Giảng viên
            </label>
            <div className="report__left-staff-Wpinput">
              <input
                type="text"
                className="report__left-staff-input"
                placeholder="mã nhân viên"
              />
              <img src ="" alt="" />
            </div>
          </div>
          <div className="report__left-staff">
            <label htmlFor = '' className="teach-left">
              Thời gian
            </label>
            <div className="report__left-staff-Wpinput">
              <input
                type="text"
                className="report__left-staff-input"
                placeholder="mã nhân viên"
              />
              <img src="" alt="" />
            </div>
            <div className="report__left-staff-Wpinput">
              <input
                type="text"
                className="report__left-staff-input"
                placeholder={2023}
              />
              <img src ="" alt="" />
            </div>
            <button className="down-report">Tải báo cáo</button>
          </div>
        </div>
        <div className="report-wp__right report">
          <h2 className="report__left-title">Báo cáo giảng viên theo năm</h2>
          <div className="report__left-staff">
            <label htmlFor = "">Giảng viên</label>
            <div className="report__left-staff-Wpinput">
              <input
                type="text"
                className="report__left-staff-input"
                placeholder="mã nhân viên"
              />
              <img src = "" alt="" />
            </div>
          </div>
          <div className="report__left-staff">
            <label htmlFor = "">Giảng viên</label>
            <div className="report__left-staff-Wpinput">
              <input
                type="text"
                className="report__left-staff-input"
                placeholder="mã nhân viên"
              />
              <img src ="" alt="" />
            </div>
          </div>
          <button className="down-report">Tải báo cáo</button>
        </div>
      </div>
    </div>
  );
}

export default MainLeft;

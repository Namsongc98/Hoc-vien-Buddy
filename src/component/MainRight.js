import { useState, useEffect } from "react";
import "../App.css";
function MainRight() {
  const [info, setInfor] = useState([]);
  // const [data, setData] = useState([]);
  // call api với hook useEffect
  // hoock useEffect sử lý side effect tác động phụ vào web ( thay đổi về data do api tra về)
  // useEffect(callback, [dep] )

  useEffect(() => {
    fetch(
      "https://test-apihocvien-v2.f88.vn/teacher-rating/get-data-export-teacher-rating",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization:
          // "eyJraWQiOiJmMHNBa1RoWStHcjdMSzNMWUNnN3IxXC9UMEZOSFZmelQ4SFprRTJMYXhhMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4NzNkOWQyNy05ZmQ1LTRhOTctOGZkMS02ZjMwOTAwYmQ2ZmQiLCJldmVudF9pZCI6IjQwN2VmMDU5LWRhNmQtNGYyYi1hNjE2LTNkNTc0NDdhYTU1OCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODE5MTI2MDgsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV9sblFSVFp4WkQiLCJleHAiOjE2ODE5MjcwMDgsImlhdCI6MTY4MTkxMjYwOCwianRpIjoiZTQ5ZmNlNjYtM2E5NS00ZDVjLWJiNmEtYzNmYjA1ZTY3YzY0IiwiY2xpZW50X2lkIjoiNG02Y2oyMWN0Zm5jdGFqMm84aGE0anY2dDciLCJ1c2VybmFtZSI6Im11bmd2diJ9.PtyCesQOHg1kc1ySbjaNV8dPAP104iA-Qu_pLKWzG2uCrz0UwcK5dfB6XXK0WtLiVt0q-jcouPUcNLo6VmmsWwYG2u2VVeZO3rRzeRoJLdwryMyneLOzHtu7VytqxQdgBrQ0QwaVCXLjzxqAUWMUZcM8IBWTZchd4SJOiqsjj9xyKtnTdHQtFPCx9JN46tVOxATieQLrIdKH-UK27JVcMcXidcIx2R_CnTnBYhQ8pKoPEn0NAnV9DuECuUarfXztqFTbRdP6Ip6vMb_jCKND6rguHB5hLHTXsjHG718NpUeY5uBBTiIMZjLaBchHhi_3yUEpePUXuiWZwmBsykvdZA",
          "X-API-KEY": "74013f4c-df2b-46a9-8dd9-885d9e693a91",
        },
        body: JSON.stringify({
          code: null,
          employeeCodeTeacher: "",
          startDate: "2023-01-01",
          endtDate: "2023-04-17",
          post_per_page: 20,
          page: 1,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => setInfor(result.data));
  }, []);
  console.log(info);
  // gui request nhận response

  return (
    <div className="report-conten">
      <div>
        <div className="report-wp__right">
          <h3 className="title__right">Báo cáo đánh giá giảng viên</h3>
          <div className="wp-form">
            <div className="teach__right">
              <label htmlFor="">Giảng viên</label>
              <div className="teach__right-wpInput">
                <input
                  type="text "
                  placeholder="Mã nhân viên"
                  className="teach__right-Input"
                />
              </div>
            </div>
            <div className="teach__right">
              <label htmlFor="">Mã khóa học</label>
              <div className="teach__right-wpInput">
                <input
                  type="text "
                  placeholder="Tên khóa học, tên khóa học"
                  className="teach__right-Input"
                />
              </div>
            </div>
            <div className="teach__right">
              <label htmlFor="">Thời gian bắt đầu (từ ngày đến ngày)</label>
              <div className="teach__right-wpInput">
                <input type="text " className="teach__right-Input" />
              </div>
            </div>
          </div>
          <div className="button-end">
            <button className="down-report">Tải báo cáo</button>
            <button className="down-report">Tải báo cáo</button>
          </div>
          <div className="wp-table">
            <table className="table">
              <thead>
                <tr className="table-head">
                  <td className="data-header">Mã nhân viên đánh giá</td>
                  <td className="data-header">Họ và tên người đánh giá</td>
                  <td className="data-header">Mã GVNB</td>
                  <td className="data-header">Họ tên GVNB</td>
                  <td className="data-header">Tên khóa học</td>
                  <td className="data-header">Ngày khai giảng</td>
                  <td className="data-header">Tổng điểm</td>
                  <td className="data-header">Xếp loại</td>
                  <td className="data-header">Đề xuất của học viện</td>
                </tr>
              </thead>
              <tbody>
                {info.map((item, index) => (
                  <tr key={index} className="data-tr">
                    <td className="data-tr">{item.employeCodeEvaluate}</td>
                    <td className="data-tr">{item.fullnameEvaluate}</td>
                    <td className="data-tr">{item.employeeCodeTeacher}</td>
                    <td className="data-tr">{item.fullnameTeacher}</td>
                    <td className="data-tr">{item.courseName}</td>
                    <td className="data-tr">{item.startDateCourse}</td>
                    <td className="data-tr">{item.totalGrade}</td>
                    <td className="data-tr">{item.level}</td>
                    <td className="data-tr">{item.studentSuggestions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRight;

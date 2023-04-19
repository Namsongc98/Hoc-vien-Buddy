import React, { useEffect, useState } from "react";
import "./buddy.css";

export default function MainBuddy() {
  const [CheckList, stateChecklist] = useState([]);
  useEffect(() => {
    fetch("https://test-apihocvien-v2.f88.vn/template-checklist/filter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJraWQiOiJmMHNBa1RoWStHcjdMSzNMWUNnN3IxXC9UMEZOSFZmelQ4SFprRTJMYXhhMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4NzNkOWQyNy05ZmQ1LTRhOTctOGZkMS02ZjMwOTAwYmQ2ZmQiLCJldmVudF9pZCI6IjQwN2VmMDU5LWRhNmQtNGYyYi1hNjE2LTNkNTc0NDdhYTU1OCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODE5MTI2MDgsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV9sblFSVFp4WkQiLCJleHAiOjE2ODE5MjcwMDgsImlhdCI6MTY4MTkxMjYwOCwianRpIjoiZTQ5ZmNlNjYtM2E5NS00ZDVjLWJiNmEtYzNmYjA1ZTY3YzY0IiwiY2xpZW50X2lkIjoiNG02Y2oyMWN0Zm5jdGFqMm84aGE0anY2dDciLCJ1c2VybmFtZSI6Im11bmd2diJ9.PtyCesQOHg1kc1ySbjaNV8dPAP104iA-Qu_pLKWzG2uCrz0UwcK5dfB6XXK0WtLiVt0q-jcouPUcNLo6VmmsWwYG2u2VVeZO3rRzeRoJLdwryMyneLOzHtu7VytqxQdgBrQ0QwaVCXLjzxqAUWMUZcM8IBWTZchd4SJOiqsjj9xyKtnTdHQtFPCx9JN46tVOxATieQLrIdKH-UK27JVcMcXidcIx2R_CnTnBYhQ8pKoPEn0NAnV9DuECuUarfXztqFTbRdP6Ip6vMb_jCKND6rguHB5hLHTXsjHG718NpUeY5uBBTiIMZjLaBchHhi_3yUEpePUXuiWZwmBsykvdZA",
      },
      body: JSON.stringify({
        keyword: "",
        status: null,
        post_per_page: 10,
        page: 1,
      }),
    })
    .then((response)=>response.json())
    .then((CheckList)=>stateChecklist(CheckList.data))
  }, []);
  
  return (
    <div className="wapper__MainBuddy">
      <div>
        <h2>CheckList template newbie buddy</h2>
      </div>
      <div className="wapper__Input">
        <div className="wapper__Input-item">
          <label>Trạng thái</label>
          <br />
          <input className="Input-item" />
        </div>
        <div className="wapper__Input-item">
          <label>Từ Khóa</label>
          <br />
          <input className="Input-item" />
        </div>
      </div>
      <div className="qualiti">
        <div></div>
        <h5>Trạng thái Chọn Từ khóa Tìm kiếm Hiển thị 1-10 trong tổng số 20</h5>
      </div>
      <div className="wp-table">
        <table>
          <thead className="wp-table">
            <tr className="wp-table">
              <th>STT</th>
              <th>ID</th>
              <th>Tên template</th>
              <th>Số tuần</th>
              <th>Ngày hiệu lực </th>
              <th>Trạng thái </th>
            </tr>
          </thead>
          <tbody>
            {CheckList.map((item,index)=>(
              <tr key={index}>
                <td className="data-tr">{index+1}</td>
                <td className="data-tr">{item.id}</td>
                <td className="data-tr">{item.name}</td>
                <td className="data-tr">{item.isActive}</td>
                <td className="data-tr">{item.effectiveDate}</td>
                <td className="data-tr">Đang hoạt động</td>
                
              </tr>
            )) }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

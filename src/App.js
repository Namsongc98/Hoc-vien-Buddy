
import "./App.css";
import WapMain from "./component/WapMain";
import NewBuddy from "./component/Buddy/NewBuddy";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
     
     <header className="head">
        <div className="head-left">
          <div className="head__WpLogo">
            <img src="./image/images.jpg" alt="" className="header__logo" />
            <h3 className="head__title">Học Việc</h3>
          </div>
          <nav className="head-nav">
            <ul className="head-nav__list">
              <li className="head__item">
                <Link to="/" className="head__item-link">
                  Trang chủ
                </Link>
              </li>
              <li className="head__item">
                <Link to="/" className="head__item-link">
                  Kho tri thức{" "}
                </Link>
              </li>
              <li className="head__item">
                <Link to="/" className="head__item-link">
                  Lịch đào tạo
                </Link>
              </li>
              <li className="head__item">
                <Link to={"/WapMain"} className="head__item-link">
                  Thư viện
                </Link>
              </li>
              <li className="head__item">
                <Link to={"/NewBuddy"} className="head__item-link">
                  New Buddy
                </Link>
              </li>
              <li className="head__item">
                <Link to="/" className="head__item-link" />
              </li>
              <li className="head__item">
                <Link to="/" className="head__item-link">
                  Diễn đàn
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="head__studen">
          <div className="head__Wpstuden">
            <h5 className="head__nameStuden">Vũ Văn Sơn</h5>
            <img src="./image/down.svg" alt="" className="head__nameImg" />
          </div>
          <a href="/" className="head__linkStuden">
            Học viện
          </a>
        </div>
      </header>
        
      <Routes>
        <Route path="/WapMain" element={<WapMain />} />
        <Route path="/NewBuddy" element={<NewBuddy />} />
      </Routes>
      
    </div>
  );
}

export default App;

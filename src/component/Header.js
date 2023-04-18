import React from 'react'
import "../App.css"
function Header() {
  return (
    <div>
        <header className="head">
        <div className="head-left">
          <div className="head__WpLogo">
            <img src="./image/images.jpg" alt="" className="header__logo" />
            <h3 className="head__title">Học Việc</h3>
          </div>
          <nav className="head-nav">
            <ul className="head-nav__list">
              <li className="head__item">
                <a href='/' className="head__item-link">Trang chủ</a>
              </li>
              <li className="head__item">
                <a href='/' className="head__item-link">Kho tri thức </a>
              </li>
              <li className="head__item">
                <a href='/' className="head__item-link">Lịch đào tạo</a>
              </li>
              <li className="head__item">
                <a href='/' className="head__item-link">Thư viện</a>
              </li>
              <li className="head__item">
                <a href='/' className="head__item-link" />
              </li>
              <li className="head__item">
                <a href='/' className="head__item-link">Diễn đàn</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="head__studen">
          <div className="head__Wpstuden">
            <h5 className="head__nameStuden">Vũ Văn Sơn</h5>
            <img src="./image/down.svg" alt="" className="head__nameImg" />
          </div>
          <a href = '' className="head__linkStuden">Học viện</a>
        </div>
      </header>
    </div>
  )
}

export default Header
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { LibraryCtx } from "../store/library-context";
import { UserCtx } from "../store/user-context";
import Nav from './Nav';
import { StyledHeader } from "../style/Header";

function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { getLocation: getUserLocation } = useContext(UserCtx);
  const { getLibraryList } = useContext(LibraryCtx);

  const main = document.querySelector('main');

  useEffect(() => {
    getLibraryList();
  }, [getLibraryList]);
  
  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  const showNav = () => {
    setIsOpenNav(true);

    disableBodyScroll(main, {
      allowTouchMove: (el) => {
        if (el.closest('.nav') || el.closest('.modal')) {
          return true;
        }
      }
    });
  };

  const hideNav = () => {
    setIsOpenNav(false);
    enableBodyScroll(main);
  };

  return (
    <>
      <h1 className="hidden">NearbyBooks</h1>
      <CSSTransition
        in={!isOpenNav}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: "",
          enterActive: "header--show",
          exit: "",
          exitActive: "header--hide",
        }}
      >
        <StyledHeader>
          <button className="menu" onClick={showNav}>
            <img src="/assets/menu.svg" alt="" className="menu__icon"/>
            <span className="hidden">메뉴 열기</span>
          </button>
          <Link to="/">
            <img src="/assets/logo.png" alt="NearbyBooks" className="logo" />
          </Link>
        </StyledHeader>
      </CSSTransition>
      <Nav isOpenNav={isOpenNav} navOpenHandler={hideNav} />
    </>
  );
}

export default Header;

import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import useDebounce from "hook/use-debounce";
import Header from './components/Header';
import Home from './components/Home';
import Error from './components/Error';
import MapWrapper from './components/map/MapWrapper';
import BoroughLayout from 'components/borough/BoroughLayout';
import Borough from "./components/borough/Borough";
import BoroughWrapper from "./components/borough/Wrapper";

const setVh = () => {
  document.documentElement.style.setProperty(
    "--100vh",
    `${window.innerHeight - 1}px`
  );
};

function App() {
  const location = useLocation();

  useEffect(() => {
    setVh();
    window.addEventListener("orientationchange", setVh);
  }, []);

  useDebounce({ type: 'resize', listener: setVh, delay: 400 });

  return (
    <>
      <Header />
      <main>
        <TransitionGroup className="page-wrapper">
          <CSSTransition
            key={location.pathname}
            classNames={"page"}
            timeout={350}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/map" element={<MapWrapper />} />
              <Route path="/borough" element={<BoroughLayout />}>
                <Route index element={<Borough />} />
                <Route
                  path=":GuCode"
                  element={<BoroughWrapper />}
                />
              </Route>
              <Route
                path="/borough/:GuCode/:id"
                element={<BoroughWrapper />}
              />
              <Route path="/error" element={<Error />} />
              <Route path="/*" element={<Navigate to="/error" />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </>
  );
}

export default App;

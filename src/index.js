import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MobileApp from './MobileApp';
import reportWebVitals from './reportWebVitals';


const MOBILE_BREAKPOINT_WIDTH = 601;

const TABLET_BREAKPOINT_WIDTH = 900;

const ResolutionContext = createContext(false);

const ResponsiveApp = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let isTablet = windowWidth < TABLET_BREAKPOINT_WIDTH;
  return (windowWidth < MOBILE_BREAKPOINT_WIDTH) ?
    <MobileApp /> :
    <ResolutionContext.Provider values={{ isTablet }}> <App isTablet={isTablet} /> </ResolutionContext.Provider>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResponsiveApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
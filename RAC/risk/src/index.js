import React, { useState } from 'react';
import { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import TskDash from './pages/tskDash.jsx';
// import Team from './Admin-Dash/Scenes/team.jsx';
// import Form from './Admin-Dash/Scenes/form.jsx';
// import Contacts from './Admin-Dash/Scenes/contacts.jsx';
// import Calendar from './Admin-Dash/Scenes/calendar.jsx';
// import Dashboard from './Admin-Dash/Scenes/Dashboard.jsx';
// import TopBar from './Admin-Dash/global/TopBar.jsx';
import reportWebVitals from './reportWebVitals';
// import { ColorModeContext, useMode } from "./theme";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import SideBar from './Admin-Dash/global/SideBar.jsx';

// function AdminLayout() {
//   const [isSidebar, setIsSidebar] = useState(true);
//     const colorMode = useContext(ColorModeContext);
//   const theme = useTheme();



function AppWrapper() {
  // const [theme, colorMode] = useMode();

  return (
  
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            {/* <Route path="/tskdash" element={<TskDash />} /> */}
            {/* <Route path="/admin/*" element={<AdminLayout />} /> */}
          </Routes>
        </BrowserRouter>
 
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

reportWebVitals();
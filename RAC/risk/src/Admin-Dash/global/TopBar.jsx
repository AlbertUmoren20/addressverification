// import React, { useContext } from "react";
// import { ColorModeContext } from "../../theme"; // Make sure this context works without MUI
// // import "./Topbar.css";


// const Topbar = () => {
//   const colorMode = useContext(ColorModeContext);
//   const isDarkMode = localStorage.getItem("theme") === "dark"; // Simulated check

//   return (
//     <div className="topbar" style={{color: "white"}}>
//       {/* SEARCH BAR */}
//       <div className="search-bar">
//         <input type="text" placeholder="Search" />
//         <button className="icon-button">🔍</button>
//       </div>

//       {/* ICON BUTTONS */}
//       <div className="icon-group">
//         <button className="icon-button" onClick={colorMode.toggleColorMode}>
//           {isDarkMode ? "🌙" : "☀️"}
//         </button>
//         <button className="icon-button">🔔</button>
//         <button className="icon-button">⚙️</button>
//         <button className="icon-button">👤</button>
//       </div>
//     </div>
//   );
// };

// export default Topbar;

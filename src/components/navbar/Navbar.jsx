import React from "react";
import "./Navbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
            {/* <Link to="/" className='logolink' style={{textDecoration : "none" , color: "rgb(132, 171, 132)"}}>
                <span className="logo">avalon<span style={{color : "rgb(175, 226, 175)"}}>a</span>dmin</span>
            </Link> */}
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

// import React from 'react'
// import "./Navbar.css"
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <div className="wrapper">
//         <div className="search">
//           <input type="text" placeholder="Search" />
//           <SearchOutlinedIcon />
//         </div>
//         <div className="items">
//           <div className="item">
//             <LanguageOutlinedIcon className="icon" />
//             English
//           </div>
//           <div className="item">
//             <DarkModeOutlinedIcon
//               // className="icon"
//               // onClick={() => dispatch({ type: "TOGGLE" })}
//             />
//           </div>
//           <div className="item">
//             <FullscreenExitOutlinedIcon className="icon" />
//           </div>
//           <div className="item">
//             <NotificationsNoneOutlinedIcon className="icon" />
//             <div className="counter">1</div>
//           </div>
//           <div className="item">
//             <ChatBubbleOutlineOutlinedIcon className="icon" />
//             <div className="counter">2</div>
//           </div>
//           <div className="item">
//             <ListOutlinedIcon className="icon" />
//           </div>
//           <div className="item">
//             <img
//               src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               className="avatar"
//             />
//           </div>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar
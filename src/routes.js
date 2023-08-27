import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import CommentsAnalysis from "views/admin/commentsAnalysis";
import NFTMarketplace from "views/admin/marketplace";
import NewsCandidate from "views/admin/newsCandidate";
import Speechandidate from "views/admin/speechandidate";
import ImageCandidate from "views/admin/imageCandidate";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdNewspaper,
  MdLock,
  MdOutlineMic,
  MdPhotoAlbum,
} from "react-icons/md";

const routes = [
  {
    name: "Comments Analysis",
    layout: "/admin",
    path: "commentsAnalysis",
    icon: <MdHome className="h-6 w-6" />,
    component: <CommentsAnalysis />,
  },
  {
    name: "News Candidate",
    layout: "/admin",
    path: "NewsCandidate",
    icon: <MdNewspaper className="h-6 w-6" />,
    component: <NewsCandidate />,
    secondary: true,
  },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  {
    name: "Candidate Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  {
    name: "Speech Similarity",
    layout: "/admin",
    path: "speech",
    icon: <MdOutlineMic className="h-6 w-6" />,
    component: <Speechandidate />,
  },
  {
    name: "Image Gallery",
    layout: "/admin",
    path: "gallery",
    icon: <MdPhotoAlbum className="h-6 w-6" />,
    component: <ImageCandidate />,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <NewsCandidate />,
  // },
  {
    name: "News Candidate",
    layout: "/newsCandidate",
    path: "newsCandidate",
    icon: <MdHome className="h-6 w-6" />,
    component: <newsCandidate />,
  },
];
export default routes;

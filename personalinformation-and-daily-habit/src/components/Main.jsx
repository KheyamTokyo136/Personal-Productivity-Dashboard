import React from "react";
import {
  ChartNoAxesColumn,
  DollarSign,
  LayoutDashboard,
  NotepadText,
  Settings,
  Timer,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useApp } from "../context/AppContext";

const Main = () => {
  const { darkMode, toggleTheme } = useApp();

  const navItemClass = ({ isActive }) =>
    `flex items-center justify-center lg:justify-start pl-0 lg:pl-3 rounded-xl mx-2 lg:ml-4 lg:mr-0 h-12 lg:h-10 w-12 lg:w-56 cursor-pointer mt-2 transition
    ${
      isActive
        ? "bg-blue-100 text-blue-600"
        : darkMode
        ? "text-slate-300 hover:text-white hover:bg-slate-800"
        : "text-slate-500 hover:text-black hover:bg-slate-100"
    }`;

  return (
    <div
      className={`fixed left-0 top-0 w-16 lg:w-[20%] h-screen border-r z-50
      ${
        darkMode
          ? "bg-slate-950 border-slate-800"
          : "bg-white border-slate-200"
      }`}
    >
      {/* ================= LOGO ================= */}
      <div
        className={`h-[70px] lg:h-[106px] flex items-center justify-center lg:justify-start px-0 lg:px-8 border-b
        ${darkMode ? "border-slate-800" : "border-slate-200"}`}
      >
        <div className="flex items-center">
          <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-lg lg:text-2xl font-bold">
            F
          </div>

          <h1
            className={`hidden lg:block text-3xl font-bold font-serif ml-3
            ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Flowly
          </h1>
        </div>
      </div>

      {/* ================= SIDEBAR ================= */}
      <div className="pt-4 lg:pt-8 flex flex-col items-center lg:items-stretch">

        {/* Dashboard */}
        <NavLink end to="/" className={navItemClass}>
          <LayoutDashboard className="lg:mr-3" size={18} />
          <span className="hidden lg:inline">Dashboard</span>
        </NavLink>

        {/* Habits */}
        <NavLink to="/habits" className={navItemClass}>
          <DollarSign className="lg:mr-3" size={18} />
          <span className="hidden lg:inline">Habits and Routines</span>
        </NavLink>

        {/* Daily Planner */}
        <NavLink to="/daily" className={navItemClass}>
          <NotepadText className="lg:mr-3" size={18} />
          <span className="hidden lg:inline">Daily Planner</span>
        </NavLink>

        {/* Focus Timer */}
        <NavLink to="/focus" className={navItemClass}>
          <Timer className="lg:mr-3" size={18} />
          <span className="hidden lg:inline">Focus Timer</span>
        </NavLink>

        {/* Analytics */}
        <NavLink to="/analytics" className={navItemClass}>
          <ChartNoAxesColumn className="lg:mr-3" size={18} />
          <span className="hidden lg:inline">Analytics</span>
        </NavLink>

        {/* Settings */}
        <NavLink to="/settings" className={navItemClass}>
          <Settings className="lg:mr-3" size={18} />
          <span className="hidden lg:inline">Settings</span>
        </NavLink>

      </div>

      {/* ================= SMALL FOOTER ================= */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[80px] border-t
        flex items-center justify-between px-2 lg:px-5
        ${
          darkMode
            ? "bg-slate-950 border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >

        {/* User */}
        <div className="flex items-center min-w-0">
          <div className="w-9 h-9 lg:w-12 lg:h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm lg:text-base shrink-0">
            KK
          </div>

          <div className="hidden lg:block ml-3">
            <p
              className={`font-semibold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Kheyam Khan
            </p>

            <p
              className={`text-sm ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Pro Member
            </p>
          </div>
        </div>

        {/* Theme Button */}
        <button
          onClick={toggleTheme}
          className={`w-9 h-9 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center text-base lg:text-xl shrink-0
          ${
            darkMode
              ? "bg-slate-800 hover:bg-slate-700"
              : "bg-slate-100 hover:bg-slate-200"
          }`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>
    </div>
  );
};

export default Main;
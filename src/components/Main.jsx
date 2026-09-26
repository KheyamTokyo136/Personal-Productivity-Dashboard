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

  return (
    <div
      className={`fixed left-0 top-0 w-[20%] h-screen border-r z-50
      ${
        darkMode
          ? "bg-slate-950 border-slate-800"
          : "bg-white border-slate-200"
      }`}
    >
      {/* ================= LOGO ================= */}
      <div
        className={`h-[106px] flex items-center px-8 border-b
        ${darkMode ? "border-slate-800" : "border-slate-200"}`}
      >
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
            F
          </div>

          <h1
            className={`text-3xl font-bold font-serif ml-3
            ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Flowly
          </h1>
        </div>
      </div>

      {/* ================= SIDEBAR ================= */}
      <div className="pt-8">

        {/* Dashboard */}
        <NavLink
          end
          to="/"
          className={({ isActive }) =>
            `flex items-center pl-3 rounded-xl ml-4 h-10 w-56 cursor-pointer
            ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : darkMode
                ? "text-slate-300 hover:text-white hover:bg-slate-800"
                : "text-slate-500 hover:text-black hover:bg-slate-100"
            }`
          }
        >
          <LayoutDashboard className="mr-3" size={18} />
          <span>Dashboard</span>
        </NavLink>

        {/* Habits */}
        <NavLink
          to="/habits"
          className={({ isActive }) =>
            `flex items-center pl-3 rounded-xl ml-4 h-10 w-56 cursor-pointer mt-2
            ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : darkMode
                ? "text-slate-300 hover:text-white hover:bg-slate-800"
                : "text-slate-500 hover:text-black hover:bg-slate-100"
            }`
          }
        >
          <DollarSign className="mr-3" size={18} />
          <span>Habits and Routines</span>
        </NavLink>

        {/* Daily Planner */}
        <NavLink
          to="/daily"
          className={({ isActive }) =>
            `flex items-center pl-3 rounded-xl ml-4 h-10 w-56 cursor-pointer mt-2
            ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : darkMode
                ? "text-slate-300 hover:text-white hover:bg-slate-800"
                : "text-slate-500 hover:text-black hover:bg-slate-100"
            }`
          }
        >
          <NotepadText className="mr-3" size={18} />
          <span>Daily Planner</span>
        </NavLink>

        {/* Focus Timer */}
        <NavLink
          to="/focus"
          className={({ isActive }) =>
            `flex items-center pl-3 rounded-xl ml-4 h-10 w-56 cursor-pointer mt-2
            ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : darkMode
                ? "text-slate-300 hover:text-white hover:bg-slate-800"
                : "text-slate-500 hover:text-black hover:bg-slate-100"
            }`
          }
        >
          <Timer className="mr-3" size={18} />
          <span>Focus Timer</span>
        </NavLink>

        {/* Analytics */}
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center pl-3 rounded-xl ml-4 h-10 w-56 cursor-pointer mt-2
            ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : darkMode
                ? "text-slate-300 hover:text-white hover:bg-slate-800"
                : "text-slate-500 hover:text-black hover:bg-slate-100"
            }`
          }
        >
          <ChartNoAxesColumn className="mr-3" size={18} />
          <span>Analytics</span>
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center pl-3 rounded-xl ml-4 h-10 w-56 cursor-pointer mt-2
            ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : darkMode
                ? "text-slate-300 hover:text-white hover:bg-slate-800"
                : "text-slate-500 hover:text-black hover:bg-slate-100"
            }`
          }
        >
          <Settings className="mr-3" size={18} />
          <span>Settings</span>
        </NavLink>

      </div>

      {/* ================= SMALL FOOTER ================= */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[80px] border-t
        flex items-center justify-between px-5
        ${
          darkMode
            ? "bg-slate-950 border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >

        {/* User */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
            KK
          </div>

          <div className="ml-3">
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
          className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl
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
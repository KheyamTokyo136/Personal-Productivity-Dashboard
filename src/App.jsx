import React from "react";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";

import DashBoard from "./pages/DashBoard";
import Habits from "./pages/Habits";
import Daily from "./pages/Daily";
import FocusTimer from "./pages/FocusTimer";
import Analytics from "./pages/Analytics";
import Setting from "./pages/Setting";


const App = () => {

  return (
    <div>

      <Main />

      <Routes>

        <Route
          path="/"
          element={<DashBoard />}
        />

        <Route
          path="/habits"
          element={<Habits />}
        />

        <Route
          path="/daily"
          element={<Daily />}
        />

        <Route
          path="/focus"
          element={<FocusTimer />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/settings"
          element={<Setting />}
        />

      </Routes>

    </div>
  );
};

export default App;
import { Search } from "lucide-react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [firstInput, setFirstInput] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const navigate = useNavigate();

  const savedTasks =
    JSON.parse(localStorage.getItem("plannerTasks")) || [];

  const savedHabits =
    JSON.parse(localStorage.getItem("habits")) || [];

  const searchText = firstInput.toLowerCase().trim();

  const taskResults = savedTasks.filter((task) =>
    task.title.toLowerCase().includes(searchText)
  );

  const habitResults = savedHabits.filter((habit) =>
    habit.name.toLowerCase().includes(searchText)
  );

  const openResult = (page) => {
    navigate(page);
    setFirstInput("");
  };

  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <nav className="fixed left-16 lg:left-[20%] top-0 w-[calc(100%-4rem)] lg:w-[80%] h-[70px] border-b border-slate-200 bg-white z-50 flex items-center px-3 sm:px-6">

        {/* Title */}

        <h1 className="text-lg sm:text-2xl font-bold font-serif">
          {props.title}
        </h1>


        {/* ================= SEARCH ================= */}

        <div className="hidden sm:block relative ml-auto mr-5">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={firstInput}
            onChange={(e) => setFirstInput(e.target.value)}
            type="text"
            placeholder="Search task, habits, notes..."
            className="h-8 w-48 md:w-64 lg:w-70 rounded-xl border border-slate-300 bg-white pl-10 pr-3 outline-none"
          />


          {/* ================= RESULTS ================= */}

          {firstInput.trim() !== "" && (
            <div className="absolute top-10 right-0 w-80 max-w-[90vw] bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden z-[100]">

              {/* Daily Plans */}

              {taskResults.length > 0 && (
                <div>

                  <p className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase bg-slate-50">
                    Daily Plans
                  </p>

                  {taskResults.map((task) => (
                    <button
                      key={task.id}
                      onClick={() => openResult("/daily")}
                      className="w-full text-left px-4 py-3 hover:bg-slate-50 border-b border-slate-100"
                    >
                      <p className="text-sm font-semibold text-slate-800">
                        {task.title}
                      </p>

                      <p className="text-xs text-slate-400 mt-1">
                        {task.category} • Daily Planner
                      </p>
                    </button>
                  ))}

                </div>
              )}


              {/* Habits */}

              {habitResults.length > 0 && (
                <div>

                  <p className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase bg-slate-50">
                    Habits
                  </p>

                  {habitResults.map((habit) => (
                    <button
                      key={habit.id}
                      onClick={() => openResult("/habits")}
                      className="w-full text-left px-4 py-3 hover:bg-slate-50 border-b border-slate-100"
                    >
                      <p className="text-sm font-semibold text-slate-800">
                        {habit.name}
                      </p>

                      <p className="text-xs text-slate-400 mt-1">
                        Habits & Daily Routines
                      </p>
                    </button>
                  ))}

                </div>
              )}


              {/* No Results */}

              {taskResults.length === 0 &&
                habitResults.length === 0 && (
                  <p className="px-4 py-4 text-sm text-slate-400">
                    No matching task or habit found.
                  </p>
                )}

            </div>
          )}

        </div>


        {/* Focus */}

        <NavLink to={"/Focus"}>
        <button className="hidden sm:block h-8 px-3 bg-indigo-600 text-white rounded-xl font-semibold">
          ⚡ Focus Now
        </button>
        </NavLink>


        {/* Notification */}

        <div
          onClick={() => setShowNotification(true)}
          className="w-8 h-8 cursor-pointer rounded-xl border ml-2 border-slate-200 flex items-center justify-center text-xl"
        >
          🔔
        </div>

      </nav>


      {/* ================= NOTIFICATION ================= */}

      {showNotification && (
        <div className="fixed bottom-6 right-4 sm:right-6 bg-white border border-slate-200 shadow-lg rounded-xl px-5 py-4 z-[100] max-w-[90vw]">

          <p className="font-semibold text-slate-800">
            🔔 You have 2 new notifications
          </p>

          <button
            onClick={() => setShowNotification(false)}
            className="text-sm text-indigo-600 mt-2"
          >
            Close
          </button>

        </div>
      )}

    </div>
  );
};

export default Navbar;
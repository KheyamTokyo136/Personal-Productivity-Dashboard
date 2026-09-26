import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Analytics = () => {

  // ================= DATA =================

  const [tasks, setTasks] = useState([]);
  const [habits, setHabits] = useState([]);

  // Weekly focus hours
  const [weeklyFocus, setWeeklyFocus] = useState([
    { day: "Mon", hours: 3.5 },
    { day: "Tue", hours: 5.0 },
    { day: "Wed", hours: 3.0 },
    { day: "Thu", hours: 5.0 },
    { day: "Fri", hours: 4.5 },
    { day: "Sat", hours: 3.2 },
    { day: "Sun", hours: 2.8 },
  ]);


  // ================= LOAD DATA =================

  useEffect(() => {

    const savedTasks = localStorage.getItem("plannerTasks");
    const savedHabits = localStorage.getItem("habits");
    const savedFocus = localStorage.getItem("weeklyFocus");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }

    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    }

    if (savedFocus) {
      setWeeklyFocus(JSON.parse(savedFocus));
    }

  }, []);


  // ================= TASKS =================

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;


  // ================= HABITS =================

  const completedHabits = habits.filter(
    (habit) => habit.completed
  ).length;

  const habitCompletionRate =
    habits.length > 0
      ? ((completedHabits / habits.length) * 100).toFixed(1)
      : "0.0";


  // ================= FOCUS CALCULATIONS =================

  const totalFocusHours = weeklyFocus.reduce(
    (total, day) => total + day.hours,
    0
  );


  const averageFocus =
    weeklyFocus.length > 0
      ? totalFocusHours / weeklyFocus.length
      : 0;


  // Find highest productivity day

  const peakDay = weeklyFocus.reduce(
    (highest, current) =>
      current.hours > highest.hours ? current : highest,
    weeklyFocus[0]
  );


  // ================= CHART =================

  const maxHours = Math.max(
    ...weeklyFocus.map((day) => day.hours),
    1
  );


  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= NAVBAR ================= */}

      <Navbar title="Analytics & Insights" />


      {/* ================= MAIN ================= */}

      <main className="ml-[20%] pt-[70px] min-h-screen">

        <div className="px-4 sm:px-6 lg:px-9 py-5">


          {/* ================= HEADER ================= */}

          <div className="mb-6">

            <h1 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Analytics & Productivity Insights
            </h1>

            <p className="text-sm sm:text-base text-slate-500 mt-1">
              Analyze your weekly focus hours, habit completion rates, and performance trends.
            </p>

          </div>


          {/* ================= SUMMARY CARDS ================= */}

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">


            {/* FOCUS TIME */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6">

              <p className="text-sm text-slate-500 font-semibold">
                Total Focus Time This Week
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4">
                {totalFocusHours.toFixed(1)} Hours
              </h2>

              <p className="text-sm text-emerald-500 font-semibold mt-4">
                +14% compared to last week
              </p>

            </div>


            {/* HABITS */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6">

              <p className="text-sm text-slate-500 font-semibold">
                Habit Completion Rate
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4">
                {habitCompletionRate}%
              </h2>

              <p className="text-sm text-emerald-500 font-semibold mt-4">
                Consistent streak performance
              </p>

            </div>


            {/* TASKS */}

            <div className="bg-white border border-slate-200 rounded-2xl p-6">

              <p className="text-sm text-slate-500 font-semibold">
                Tasks Finished
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4">
                {completedTasks} Tasks
              </h2>

              <p className="text-sm text-indigo-600 font-semibold mt-4">
                On track with quarterly goals
              </p>

            </div>

          </section>


          {/* ================= WEEKLY ACTIVITY ================= */}

          <section className="bg-white border border-slate-200 rounded-3xl mt-6 p-6 sm:p-7">

            <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
              Weekly Activity Breakdown
            </h2>


            {/* ================= BAR CHART ================= */}

            <div className="mt-8">

              <div className="h-[250px] sm:h-[280px] flex items-end justify-between gap-2 sm:gap-4 px-1 sm:px-4">

                {weeklyFocus.map((item, index) => {

                  const height =
                    (item.hours / maxHours) * 190;

                  const isWeekend =
                    item.day === "Sat" ||
                    item.day === "Sun";

                  return (

                    <div
                      key={item.day}
                      className="flex-1 h-full flex flex-col justify-end items-center group"
                    >

                      {/* HOURS */}

                      <div className="relative w-full flex justify-center">

                        {/* Tooltip */}

                        <div className="absolute -top-9 opacity-0 group-hover:opacity-100 transition bg-slate-900 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap">
                          {item.hours} hours
                        </div>


                        {/* BAR */}

                        <div
                          className={`w-full max-w-[110px] rounded-t-xl transition-all duration-300 group-hover:opacity-80 ${
                            isWeekend
                              ? "bg-emerald-500"
                              : index === 1 || index === 3
                              ? "bg-indigo-600"
                              : "bg-indigo-500"
                          }`}
                          style={{
                            height: `${height}px`,
                          }}
                        />

                      </div>


                      {/* DAY */}

                      <span className="text-xs sm:text-sm text-slate-500 mt-3">
                        {item.day}
                      </span>

                    </div>

                  );

                })}

              </div>

            </div>


            {/* ================= INSIGHTS ================= */}

            <div className="border-t border-slate-200 mt-6 pt-5 flex flex-col sm:flex-row justify-between gap-3">

              <p className="text-sm text-slate-600">

                <span className="font-semibold text-slate-900">
                  Peak Productivity Day:
                </span>{" "}

                {peakDay.day}

              </p>


              <p className="text-sm text-slate-600">

                <span className="font-semibold text-slate-900">
                  Average Daily Focus:
                </span>{" "}

                {Math.floor(averageFocus)}h{" "}
                {Math.round((averageFocus % 1) * 60)}m

              </p>

            </div>

          </section>


        </div>

      </main>

    </div>
  );
};

export default Analytics;
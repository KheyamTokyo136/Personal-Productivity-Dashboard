import {
  ChartNoAxesColumn,
  ClipboardList,
  Flame,
  Timer
} from "lucide-react";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

const DashBoard = () => {

  const [tasks, setTasks] = useState([]);
  const [habits, setHabits] = useState([]);

  useEffect(() => {

    const loadData = () => {

      const savedTasks =
        localStorage.getItem("plannerTasks");

      const savedHabits =
        localStorage.getItem("habits");

      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }

      if (savedHabits) {
        setHabits(JSON.parse(savedHabits));
      }

    };

    loadData();

  }, []);


  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const completedHabits = habits.filter(
    (habit) => habit.completed
  ).length;

  const priorityTasks = tasks.slice(0, 3);


  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar title="Dashboard" />


      <main className="ml-16 lg:ml-[20%] pt-[70px] min-h-screen overflow-y-auto">

        <div className="py-4 px-3 sm:px-6 lg:px-9">


          {/* ================= HERO ================= */}

          <section className="bg-indigo-700 rounded-3xl min-h-[170px] p-5 sm:p-8 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">

            <div>

              <p className="font-semibold text-indigo-200 text-sm mb-4">
                DAILY ENERGY & FLOW
              </p>

              <h2 className="text-2xl sm:text-4xl font-bold font-serif mb-4">
                Good morning, Julian
              </h2>

              <p className="text-sm text-indigo-100 max-w-[850px]">
                You have completed {completedTasks} of {tasks.length} daily tasks.
                Keep building your productivity streak!
              </p>

            </div>


            <div className="flex border border-indigo-900 rounded-2xl overflow-hidden">

              <div className="px-4 py-1 bg-indigo-400 text-center">

                <h3 className="text-2xl font-bold">
                  {tasks.length > 0
                    ? Math.round(
                        (completedTasks / tasks.length) * 100
                      )
                    : 0}%
                </h3>

                <p className="text-indigo-200 mt-2">
                  Daily Score
                </p>

              </div>


              <div className="px-4 py-1 text-center border-l bg-indigo-400 border-indigo-900">

                <h3 className="text-4xl font-bold">
                  4.2h
                </h3>

                <p className="text-indigo-200 mt-2">
                  Focus Time
                </p>

              </div>

            </div>

          </section>


          {/* ================= STAT CARDS ================= */}

          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mt-8">


            {/* HABITS */}

            <div className="bg-white border border-slate-200 rounded-3xl p-6 h-[150px]">

              <div className="flex justify-between items-center">

                <p className="text-sm text-slate-500">
                  Habits Completed
                </p>

                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Flame className="text-orange-500" size={18} />
                </div>

              </div>

              <div className="flex items-center gap-1 mt-2">

                <h2 className="text-xl font-bold">
                  {completedHabits} / {habits.length}
                </h2>

                <span className="text-emerald-500 font-semibold text-sm">
                  today
                </span>

              </div>

            </div>


            {/* TASKS */}

            <div className="bg-white border border-slate-200 rounded-3xl p-6 h-[150px]">

              <div className="flex justify-between items-center">

                <p className="text-sm text-slate-500">
                  Tasks Due Today
                </p>

                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <ClipboardList className="text-indigo-500" size={18} />
                </div>

              </div>

              <div className="flex items-center gap-1 mt-2">

                <h2 className="text-xl font-bold">
                  {completedTasks} / {tasks.length}
                </h2>

                <span className="text-orange-500 font-semibold text-sm">
                  {pendingTasks} pending
                </span>

              </div>

            </div>


            {/* FOCUS */}

            <div className="bg-white border border-slate-200 rounded-3xl p-6 h-[150px]">

              <div className="flex justify-between items-center">

                <p className="text-sm text-slate-500">
                  Focus Sessions
                </p>

                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Timer className="text-amber-500" size={18} />
                </div>

              </div>

              <div className="flex items-center gap-1 mt-2">

                <h2 className="text-xl font-bold">
                  4
                </h2>

                <span className="text-emerald-500 font-semibold text-sm">
                  120 mins total
                </span>

              </div>

            </div>


            {/* CONSISTENCY */}

            <div className="bg-white border border-slate-200 rounded-3xl p-6 h-[150px]">

              <div className="flex justify-between items-center">

                <p className="text-sm text-slate-500">
                  Weekly Consistency
                </p>

                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <ChartNoAxesColumn className="text-purple-500" size={18} />
                </div>

              </div>

              <div className="flex items-center gap-1 mt-2">

                <h2 className="text-xl font-bold">
                  92%
                </h2>

                <span className="text-emerald-500 font-semibold text-sm">
                  +4.5%
                </span>

              </div>

            </div>

          </section>


          {/* ================= LOWER SECTION ================= */}

          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 mt-8 lg:mt-10">


            {/* TASKS */}

            <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 lg:p-9 min-h-[520px]">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-xl sm:text-2xl font-bold font-serif">
                  Priority Tasks for Today
                </h2>

                <NavLink
                  to="/daily"
                  className="text-indigo-600 font-semibold text-sm whitespace-nowrap"
                >
                  View all →
                </NavLink>

              </div>


              {priorityTasks.length === 0 ? (

                <p className="text-slate-400 text-sm">
                  No tasks available.
                </p>

              ) : (

                priorityTasks.map((task) => (

                  <div
                    key={task.id}
                    className="bg-slate-50 border border-slate-100 rounded-2xl min-h-[72px] px-4 sm:px-5 py-3 flex items-center justify-between gap-3 mb-4"
                  >

                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">

                      <div
                        className={`w-6 h-6 shrink-0 rounded-sm flex items-center justify-center text-white text-sm
                        ${
                          task.completed
                            ? "bg-indigo-600"
                            : "border border-slate-400 bg-white"
                        }`}
                      >
                        {task.completed && "✓"}
                      </div>

                      <span
                        className={`text-sm sm:text-base break-words ${
                          task.completed
                            ? "text-slate-500 line-through"
                            : "text-slate-800"
                        }`}
                      >
                        {task.title}
                      </span>

                    </div>


                    <span
                      className={`shrink-0 px-3 sm:px-4 py-2 rounded-full text-xs font-semibold ${
                        task.priority === "High"
                          ? "bg-red-50 text-red-500"
                          : "bg-amber-50 text-amber-500"
                      }`}
                    >
                      {task.priority}
                    </span>

                  </div>

                ))

              )}

            </div>


            {/* HABITS */}

            <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 lg:p-9 min-h-[520px]">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-xl sm:text-2xl font-bold font-serif">
                  Daily Habit Check-in
                </h2>

                <NavLink
                  to="/habits"
                  className="text-indigo-600 font-semibold text-sm whitespace-nowrap"
                >
                  Manage habits →
                </NavLink>

              </div>


              {habits.length === 0 ? (

                <p className="text-slate-400 text-sm">
                  No habits available.
                </p>

              ) : (

                habits.slice(0, 4).map((habit) => (

                  <div
                    key={habit.id}
                    className="bg-slate-50 border border-slate-100 rounded-2xl min-h-[72px] px-4 sm:px-5 py-3 flex items-center justify-between gap-3 mb-4"
                  >

                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">

                      <div
                        className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center text-white text-lg
                        ${
                          habit.completed
                            ? "bg-emerald-500"
                            : "border border-slate-300 bg-white"
                        }`}
                      >
                        {habit.completed && "✓"}
                      </div>

                      <span
                        className={`text-sm sm:text-base break-words ${
                          habit.completed
                            ? "text-slate-500 line-through"
                            : "text-slate-800"
                        }`}
                      >
                        {habit.name}
                      </span>

                    </div>


                    <span className="shrink-0 bg-emerald-50 text-emerald-500 px-3 sm:px-4 py-2 rounded-full text-xs font-semibold">
                      🔥 {habit.streak} day
                    </span>

                  </div>

                ))

              )}

            </div>

          </section>

        </div>

      </main>

    </div>
  );
};

export default DashBoard;
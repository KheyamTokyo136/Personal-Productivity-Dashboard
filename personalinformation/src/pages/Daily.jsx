import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Trash2 } from "lucide-react";

const Daily = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("plannerTasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title: "Complete quarterly productivity report",
            category: "Work",
            priority: "High",
            completed: true
          },
          {
            id: 2,
            title: "30 minutes cardio workout & stretching",
            category: "Health",
            priority: "Medium",
            completed: false
          },
          {
            id: 3,
            title: 'Read 20 pages of "Atomic Habits"',
            category: "Personal",
            priority: "Low",
            completed: false
          },
          {
            id: 4,
            title: "Review weekly budget and expenses",
            category: "Finance",
            priority: "Medium",
            completed: false
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "plannerTasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const [taskInput, setTaskInput] = useState("");
  const [category, setCategory] = useState("Work");

  // NEW
  const [priority, setPriority] = useState("Medium");

  const [activeTab, setActiveTab] = useState("all");

  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: taskInput,
      category,
      priority, // USE SELECTED PRIORITY
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTaskInput("");
    setPriority("Medium");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "pending")
      return !task.completed;

    if (activeTab === "completed")
      return task.completed;

    return true;
  });

  return (
    <>
      <Navbar title="Daily Planner" />

      <main className="ml-16 lg:ml-[20%] pt-[70px] min-h-screen bg-slate-50">

        <div className="p-4 sm:p-6 lg:p-10">

          {/* ================= HEADER ================= */}

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-7">

            <div>

              <h1 className="text-2xl sm:text-4xl font-bold font-serif text-slate-900">
                Daily Planner & Tasks
              </h1>

              <p className="text-sm sm:text-base text-slate-500 mt-1">
                Organize your daily schedule, track deadlines, and conquer your priorities.
              </p>

            </div>

            {/* TABS */}

            <div className="flex items-center bg-white border border-slate-200 rounded-2xl p-1 w-full lg:w-auto">

              <button
                onClick={() => setActiveTab("all")}
                className={`flex-1 lg:flex-none px-3 sm:px-5 py-2.5 rounded-xl text-sm sm:text-base font-semibold ${
                  activeTab === "all"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                All
              </button>

              <button
                onClick={() => setActiveTab("pending")}
                className={`flex-1 lg:flex-none px-3 sm:px-5 py-2.5 rounded-xl text-sm sm:text-base font-semibold ${
                  activeTab === "pending"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Pending
              </button>

              <button
                onClick={() => setActiveTab("completed")}
                className={`flex-1 lg:flex-none px-3 sm:px-5 py-2.5 rounded-xl text-sm sm:text-base font-semibold ${
                  activeTab === "completed"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Completed
              </button>

            </div>

          </div>

          {/* ================= ADD TASK ================= */}

          <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-6 mb-9">

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">

              {/* TASK INPUT */}

              <input
                type="text"
                value={taskInput}
                onChange={(e) =>
                  setTaskInput(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter")
                    addTask();
                }}
                placeholder="What needs to be done today?"
                className="flex-1 h-14 rounded-2xl border border-slate-200 px-5 text-base outline-none focus:border-indigo-500"
              />

              {/* CATEGORY */}

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                className="w-full sm:w-40 h-14 rounded-2xl border border-slate-200 px-4 text-base text-slate-700 outline-none focus:border-indigo-500"
              >
                <option value="Work">Work</option>
                <option value="Health">Health</option>
                <option value="Personal">Personal</option>
                <option value="Finance">Finance</option>
              </select>

              {/* PRIORITY */}

              <select
                value={priority}
                onChange={(e) =>
                  setPriority(e.target.value)
                }
                className="w-full sm:w-36 h-14 rounded-2xl border border-slate-200 px-4 text-base text-slate-700 outline-none focus:border-indigo-500"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>

              {/* ADD TASK */}

              <button
                onClick={addTask}
                className="h-14 w-full sm:w-auto px-7 bg-indigo-600 text-white rounded-2xl font-semibold text-base hover:bg-indigo-700"
              >
                Add Task
              </button>

            </div>

          </div>

          {/* ================= TASK LIST ================= */}

          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">

            {filteredTasks.length === 0 ? (

              <div className="py-12 text-center text-slate-400 text-sm">
                No tasks found.
              </div>

            ) : (

              filteredTasks.map((task) => (

                <div
                  key={task.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-7 py-5 sm:py-6 border-b border-slate-200 last:border-b-0 gap-4"
                >

                  <div className="flex items-start sm:items-center gap-4 min-w-0">

                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() =>
                        toggleTask(task.id)
                      }
                      className="w-6 h-6 mt-1 sm:mt-0 shrink-0 accent-indigo-600 cursor-pointer"
                    />

                    <div className="min-w-0">

                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            task.category === "Work"
                              ? "bg-indigo-50 text-indigo-600"
                              : task.category === "Health"
                              ? "bg-green-50 text-green-600"
                              : task.category === "Personal"
                              ? "bg-purple-50 text-purple-600"
                              : "bg-orange-50 text-orange-600"
                          }`}
                        >
                          {task.category}
                        </span>

                        <h3
                          className={`text-sm sm:text-base font-semibold break-words ${
                            task.completed
                              ? "line-through text-slate-500"
                              : "text-slate-800"
                          }`}
                        >
                          {task.title}
                        </h3>

                      </div>

                      <p className="text-sm text-slate-500 mt-1">
                        {task.completed
                          ? "Completed"
                          : "Due Today"}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-5 ml-10 sm:ml-0">

                    {/* PRIORITY */}

                    <span
                      className={`px-4 py-2 rounded-full text-xs font-semibold ${
                        task.priority === "High"
                          ? "bg-red-50 text-red-500"
                          : task.priority === "Medium"
                          ? "bg-orange-50 text-orange-500"
                          : "bg-yellow-50 text-yellow-600"
                      }`}
                    >
                      {task.priority}
                    </span>

                    {/* DELETE */}

                    <button
                      onClick={() =>
                        deleteTask(task.id)
                      }
                      className="text-slate-400 hover:text-red-500"
                    >
                      <Trash2 size={17} />
                    </button>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

      </main>
    </>
  );
};

export default Daily;
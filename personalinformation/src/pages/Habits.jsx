import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { X } from "lucide-react";

const Habits = () => {

  const [habits, setHabits] = useState(() => {

    const savedHabits =
      localStorage.getItem("habits");

    return savedHabits
      ? JSON.parse(savedHabits)
      : [
          {
            id: 1,
            name: "Morning Meditation (15m)",
            reminder: "Daily Goal • Reminder set for 8:00 AM",
            streak: 12,
            completed: true
          },
          {
            id: 2,
            name: "Drink 3L Water",
            reminder: "Daily Goal • Reminder set for 8:00 AM",
            streak: 5,
            completed: true
          },
          {
            id: 3,
            name: "Code / Build Project (1hr)",
            reminder: "Daily Goal • Reminder set for 8:00 AM",
            streak: 8,
            completed: false
          },
          {
            id: 4,
            name: "No Social Media After 10 PM",
            reminder: "Daily Goal • Reminder set for 8:00 AM",
            streak: 3,
            completed: false
          },
        ];
  });


  useEffect(() => {
    localStorage.setItem(
      "habits",
      JSON.stringify(habits)
    );
  }, [habits]);


  const createHabit = () => {

    const habitName =
      window.prompt("Enter your new habit:");

    if (!habitName || habitName.trim() === "") return;

    const newHabit = {
      id: Date.now(),
      name: habitName,
      reminder: "Daily Goal • Reminder set for 8:00 AM",
      streak: 0,
      completed: false,
    };

    setHabits([...habits, newHabit]);
  };


  const toggleComplete = (id) => {

    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed: !habit.completed
            }
          : habit
      )
    );

  };


  const deleteHabit = (id) => {

    setHabits(
      habits.filter(
        (habit) => habit.id !== id
      )
    );

  };


  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar title="Habits & Routines" />

      <main className="ml-16 lg:ml-[20%] pt-[70px] min-h-screen bg-slate-50">

        <div className="p-4 sm:p-6 lg:p-12">


          {/* ================= HEADER ================= */}

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

            <div>

              <h1 className="text-2xl sm:text-4xl font-bold font-serif text-slate-900">
                Habits & Daily Routines
              </h1>

              <p className="text-base sm:text-lg text-slate-500 mt-2">
                Build unbreakable consistency with daily streaks and active habit tracking.
              </p>

            </div>


            <button
              onClick={createHabit}
              className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-indigo-700 w-full lg:w-auto"
            >
              + &nbsp; Create New Habit
            </button>

          </div>


          {/* ================= HABITS ================= */}

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7">

            {habits.map((habit) => (

              <div
                key={habit.id}
                className="relative bg-white border border-slate-200 rounded-3xl px-5 sm:px-7 lg:px-9 py-6"
              >

                {/* DELETE */}

                <button
                  onClick={() => deleteHabit(habit.id)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-red-500"
                >
                  <X size={19} />
                </button>


                {/* INFORMATION */}

                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pr-7">

                  <div>

                    <h2
                      className={`text-lg sm:text-xl font-bold ${
                        habit.completed
                          ? "text-slate-500 line-through"
                          : "text-slate-900"
                      }`}
                    >
                      {habit.name}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-500 mt-2">
                      {habit.reminder}
                    </p>

                  </div>


                  <span className="bg-amber-50 text-amber-500 px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap">
                    🔥 {habit.streak} Day Streak
                  </span>

                </div>


                {/* STATUS */}

                <div className="border-t border-slate-200 mt-5 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                  <span className="text-sm sm:text-base text-slate-500">
                    Status for Today:
                  </span>


                  {habit.completed ? (

                    <button
                      onClick={() => toggleComplete(habit.id)}
                      className="bg-emerald-500 text-white px-6 py-3 rounded-2xl font-semibold w-full sm:w-auto"
                    >
                      ✓ Completed Today
                    </button>

                  ) : (

                    <button
                      onClick={() => toggleComplete(habit.id)}
                      className="border border-slate-300 bg-white text-slate-800 px-6 py-3 rounded-2xl font-semibold hover:bg-slate-50 w-full sm:w-auto"
                    >
                      Mark Complete
                    </button>

                  )}

                </div>

              </div>

            ))}

          </section>

        </div>

      </main>

    </div>
  );
};

export default Habits;
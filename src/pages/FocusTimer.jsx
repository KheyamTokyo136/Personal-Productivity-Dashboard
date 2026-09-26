import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const FocusTimer = () => {

  // ================= TIMER MODES =================

  const modes = {
    pomodoro: {
      name: "Pomodoro",
      minutes: 25,
    },

    shortBreak: {
      name: "Short Break",
      minutes: 5,
    },

    longBreak: {
      name: "Long Break",
      minutes: 15,
    },
  };


  // ================= STATES =================

  const [mode, setMode] = useState("pomodoro");

  const [timeLeft, setTimeLeft] = useState(25 * 60);

  const [isRunning, setIsRunning] = useState(false);


  // ================= TIMER =================

  useEffect(() => {

    if (!isRunning) return;

    const timer = setInterval(() => {

      setTimeLeft((previousTime) => {

        if (previousTime <= 1) {
          setIsRunning(false);
          return 0;
        }

        return previousTime - 1;

      });

    }, 1000);

    return () => clearInterval(timer);

  }, [isRunning]);


  // ================= CHANGE MODE =================

  const changeMode = (newMode) => {

    setMode(newMode);

    setIsRunning(false);

    setTimeLeft(
      modes[newMode].minutes * 60
    );

  };


  // ================= START / PAUSE =================

  const handleStart = () => {
    setIsRunning(!isRunning);
  };


  // ================= RESET =================

  const handleReset = () => {

    setIsRunning(false);

    setTimeLeft(
      modes[mode].minutes * 60
    );

  };


  // ================= SKIP =================

  const handleSkip = () => {

    if (mode === "pomodoro") {
      changeMode("shortBreak");
    }

    else if (mode === "shortBreak") {
      changeMode("longBreak");
    }

    else {
      changeMode("pomodoro");
    }

  };


  // ================= FORMAT TIME =================

  const minutes = Math.floor(timeLeft / 60);

  const seconds = timeLeft % 60;

  const formattedTime =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


  return (

    <div className="min-h-screen bg-slate-50">

      <Navbar title="Focus Timer" />


      <main className="ml-[20%] pt-[70px] min-h-screen bg-slate-50">

        <div className="px-4 sm:px-6 lg:px-8 py-6">


          {/* ================= PAGE TITLE ================= */}

          <div className="text-center mb-6">

            <h1 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Focus Timer
            </h1>

            <p className="text-sm sm:text-base text-slate-500 mt-1">
              Boost deep work sessions with the Pomodoro technique.
            </p>

          </div>


          {/* ================= TIMER CARD ================= */}

          <div className="max-w-[850px] mx-auto bg-white border border-slate-200 rounded-3xl shadow-md p-5 sm:p-7">


            {/* ================= MODES ================= */}

            <div className="max-w-[560px] mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-1.5 flex flex-col sm:flex-row gap-1">

              {/* Pomodoro */}

              <button
                onClick={() => changeMode("pomodoro")}
                className={`flex-1 py-2 px-3 rounded-xl font-semibold text-sm transition ${
                  mode === "pomodoro"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Pomodoro (25m)
              </button>


              {/* Short Break */}

              <button
                onClick={() => changeMode("shortBreak")}
                className={`flex-1 py-2 px-3 rounded-xl font-semibold text-sm transition ${
                  mode === "shortBreak"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Short Break (5m)
              </button>


              {/* Long Break */}

              <button
                onClick={() => changeMode("longBreak")}
                className={`flex-1 py-2 px-3 rounded-xl font-semibold text-sm transition ${
                  mode === "longBreak"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Long Break (15m)
              </button>

            </div>


            {/* ================= TIMER ================= */}

            <div className="text-center mt-10">

              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-serif text-slate-900 tracking-tight">
                {formattedTime}
              </h2>

              <p className="text-sm sm:text-base font-semibold text-slate-500 mt-1">

                {timeLeft === 0
                  ? "Session completed!"
                  : isRunning
                  ? mode === "pomodoro"
                    ? "Focus session in progress"
                    : "Break in progress"
                  : "Ready for focus session"
                }

              </p>

            </div>


            {/* ================= BUTTONS ================= */}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-8">

              {/* Start / Pause */}

              <button
                onClick={handleStart}
                className="w-full sm:w-auto min-w-[180px] h-12 px-6 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                {isRunning
                  ? "⏸ Pause"
                  : "▶ Start Session"
                }
              </button>


              {/* Reset */}

              <button
                onClick={handleReset}
                className="w-full sm:w-auto h-12 px-6 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl font-semibold hover:bg-slate-100 transition"
              >
                ↻ Reset
              </button>


              {/* Skip */}

              <button
                onClick={handleSkip}
                className="w-full sm:w-auto h-12 px-6 bg-white border border-slate-200 text-slate-800 rounded-xl font-semibold hover:bg-slate-50 transition"
              >
                ⏭ Skip
              </button>

            </div>


            {/* ================= CURRENT MODE ================= */}

            <div className="text-center mt-5">

              <p className="text-xs sm:text-sm text-slate-400">

                Current mode:{" "}

                <span className="font-semibold text-slate-600">
                  {modes[mode].name}
                </span>

              </p>

            </div>

          </div>

        </div>

      </main>

    </div>

  );

};

export default FocusTimer;
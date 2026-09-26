import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useApp } from "../context/AppContext";


const Setting = () => {

  const {
    darkMode,
    toggleTheme,
    userName,
    userEmail,
    saveProfile
  } = useApp();


  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);


  const handleSave = () => {

    saveProfile(name, email);

    alert("Changes saved successfully!");

  };


  return (

    <div className="min-h-screen bg-slate-50">

      <Navbar title="Settings" />


      <main className="
        ml-16
        lg:ml-[20%]
        pt-[70px]
        min-h-screen
      ">

        <div className="
          px-4
          sm:px-6
          lg:px-9
          py-6
        ">


          {/* TITLE */}

          <div className="mb-6">

            <h1 className="
              text-2xl
              sm:text-3xl
              font-bold
              font-serif
            ">
              Account & App Settings
            </h1>

            <p className="text-sm sm:text-base text-slate-500 mt-1">
              Customize your Flowly workspace, theme preferences, and notifications.
            </p>

          </div>


          {/* THEME */}

          <section className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-6
            sm:p-8
          ">

            <h2 className="text-xl sm:text-2xl font-bold font-serif">
              Appearance & Theme
            </h2>


            <div className="
              border-t
              border-slate-200
              mt-5
              pt-6
              flex
              flex-col
              sm:flex-row
              sm:items-center
              justify-between
              gap-5
            ">

              <div>

                <h3 className="font-semibold">
                  Dark Mode Interface
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Switch between light canvas and dark themes.
                </p>

              </div>


              <button
                onClick={toggleTheme}
                className="
                  bg-indigo-600
                  hover:bg-indigo-700
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  w-full
                  sm:w-auto
                "
              >

                {darkMode
                  ? "☀️ Light Mode"
                  : "🌙 Toggle Theme"}

              </button>

            </div>

          </section>


          {/* PROFILE */}

          <section className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-6
            sm:p-8
            mt-6
          ">

            <h2 className="text-xl sm:text-2xl font-bold font-serif">
              Profile Details
            </h2>


            <div className="
              border-t
              border-slate-200
              mt-5
              pt-6
            ">

              <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-5
              ">

                <div>

                  <label className="block font-semibold mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="
                      w-full
                      h-14
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-5
                      outline-none
                      focus:border-indigo-500
                    "
                  />

                </div>


                <div>

                  <label className="block font-semibold mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                      w-full
                      h-14
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-5
                      outline-none
                      focus:border-indigo-500
                    "
                  />

                </div>

              </div>


              <div className="flex justify-end mt-6">

                <button
                  onClick={handleSave}
                  className="
                    bg-indigo-600
                    hover:bg-indigo-700
                    text-white
                    px-7
                    py-3
                    rounded-xl
                    font-semibold
                    w-full
                    sm:w-auto
                  "
                >
                  Save Changes
                </button>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
};

export default Setting;
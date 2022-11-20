import React from "react";

const Home = () => {
    return (
        <div className=" h-full w-full ">
            <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-start  py-20">
                <h1 className=" text-6xl font-bold p-4 rounded-3xl bg-gradient-to-br from-yellow-200 to-sky-300 hover:drop-shadow-2xl hover:scale-[1.03] duration-150 ">
                    Welcome to SpellQuiz! ✏️
                </h1>
                <h3 className=" mt-10 mb-8 text-3xl font-semibold underline">
                    About
                </h3>
                <p className=" font-light text-2xl">
                    This app is designed to help you become better at spelling.
                    Whether you're practicing for a spelling bee competition or
                    just want to become a better writer, this app can help!
                    Features of this app include custom spelling tests,
                    pronunciations from{" "}
                    <a
                        className=" link link-primary"
                        href="https://www.merriam-webster.com/"
                    >
                        Merriam-Webster
                    </a>
                    , and a record to keep track of misspelled words.{" "}
                    <span className=" italic">More features on the way!</span>
                </p>

                <h3 className=" mt-20 mb-8 text-3xl font-semibold underline">
                    How To Use
                </h3>
                <p className=" my-1 font-light  text-2xl">
                    1) Go to the Choose Words menu to create a word list
                </p>
                <p className=" my-1 font-light  text-2xl">
                    2) Once you have created a list, head to Create Quiz to
                    begin learning!
                </p>
            </div>
        </div>
    );
};

export default Home;

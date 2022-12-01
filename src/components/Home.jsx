import React from "react";

const Home = () => {
    return (
        <div className=" h-full w-full ">
            <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-start  py-10">
                <h1 className=" text-5xl font-bold p-4 rounded-3xl bg-gradient-to-br from-yellow-200 to-sky-300 hover:drop-shadow-2xl hover:scale-[1.03] duration-150 ">
                    Welcome to SpellWell! ✏️
                </h1>
                <h3 className=" mt-5 mb-5 text-3xl font-semibold underline">
                    About
                </h3>
                <p className=" font-light text-xl">
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
                    * for accurate tests, and a record to keep track of
                    misspelled words.{" "}
                    <span className=" italic">More features on the way!</span>
                </p>
                <p className=" self-start font-light italic text-sm mt-3 p-1 px-2 rounded-sm bg-base-200">
                    *Where applicable. If a word does not have a Merriam-Webster
                    pronuncation, a text-to-speech API will be used
                </p>

                <h3 className=" mt-10 mb-5 text-3xl font-semibold underline">
                    How To Use
                </h3>
                <p className=" self-start my-1 font-light  text-xl">
                    1) Go to{" "}
                    <span className=" p-1 rounded-lg bg-primary">
                        Choose Words
                    </span>{" "}
                    to create a word list
                </p>
                <p className=" self-start my-1 font-light  text-xl">
                    2) Once you have created a list, head to{" "}
                    <span className=" p-1 rounded-lg bg-primary">
                        Create Test
                    </span>{" "}
                    to begin learning!
                </p>
                <p className=" self-start my-1 font-light  text-xl">
                    3) View your{" "}
                    <span className=" p-1 rounded-lg bg-primary">
                        Dashboard
                    </span>{" "}
                    at any time to see your stats and missed words.
                </p>
            </div>
        </div>
    );
};

export default Home;

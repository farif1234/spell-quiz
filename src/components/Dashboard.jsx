import React from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";

const Dashboard = ({ missedWords, setMissedWords }) => {
    const noMissedWordsComp = (
        <h1 className=" self-center text-xl rounded-full p-2 bg-green-300 animate-bounce">
            You have no missed words! ✅
        </h1>
    );

    const missedWordsComp = (
        <div className=" text-center">
            {/* <h1 className=" self-center text-xl text-error">Missed Words:</h1> */}
            <div className="text-xl p-3 badge badge-error gap-2 mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-4 h-4 stroke-current"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
                Missed Words:
            </div>
            <p className=" text-lg border p-2 relative pr-10">
                {Array.from(missedWords).join(", ")}
                {/* <span className=" absolute right-0 mr-3">test</span> */}
                <HiOutlineClipboardCopy
                    size={20}
                    className="  absolute right-1 bottom-1 hover:scale-110 cursor-pointer duration-200"
                    onClick={() =>
                        navigator.clipboard.writeText(
                            Array.from(missedWords).join(", ")
                        )
                    }
                />
            </p>
            <button
                onClick={() => setMissedWords(new Set())}
                className="btn btn-error btn-outline my-6"
            >
                Clear Missed Words
            </button>
        </div>
    );

    return (
        <div>
            <div className=" h-full w-full ">
                <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-start gap-4 py-10">
                    <h1 className=" self-center text-5xl font-bold mb-10 p-2">
                        Dashboard
                    </h1>
                    <p className=" text-2xl mb-12">
                        Use this page to keep track of progress.
                    </p>
                    {missedWords.size > 0 ? missedWordsComp : noMissedWordsComp}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

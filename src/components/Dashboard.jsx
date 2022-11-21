import React from "react";

const Dashboard = ({ missedWords, setMissedWords }) => {
    const noMissedWordsComp = (
        <h1 className=" self-center text-xl rounded-full p-2 bg-green-300 animate-bounce">
            You have no missed words! ✅
        </h1>
    );

    const missedWordsComp = (
        <div className=" text-center">
            <h1 className=" self-center text-xl text-error">Missed Words:</h1>
            <p className=" text-lg">{Array.from(missedWords).join(", ")}</p>
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
                <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-start gap-4 py-20">
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

import React, { useState } from "react";

const CreateTest = ({ words, setWords }) => {
    const [test, setTest] = useState(false);

    const noWords = (
        <h3 className=" text-xl px-3 py-1 rounded-full bg-red-300 animate-bounce">
            Looks like you have chosen no words! Head over to Choose Words to
            create your list.
        </h3>
    );

    const setupTest = (
        <div className=" flex flex-col mx-auto items-center w-1/2">
            <div className="collapse hover:scale-105 ">
                <input
                    disabled={test}
                    checked={test ? false : null}
                    type="checkbox"
                />
                <div
                    className={`collapse-title text-xl font-medium mt-5  ${
                        test ? "bg-base-300" : "bg-primary"
                    }`}
                >
                    Click me to show/hide word list
                </div>
                <div className="collapse-content border border-primary bg-gray-200">
                    <p className=" pt-2">{words.join(", ")}</p>
                    <p className=" italic pt-4">Word Count: {words.length}</p>
                </div>
            </div>
            <h3 className=" text-xl mt-10">Number of questions:</h3>
            <input
                type="number"
                placeholder=""
                className="input input-bordered input-primary w-full max-w-xs"
                disabled={test}
            />
            <button
                onClick={() => setTest(true)}
                className={`btn btn-secondary my-8 btn-wide ${
                    test && "btn-disabled"
                }`}
            >
                Create
            </button>
        </div>
    );

    const inTest = (
        <div className=" flex flex-col mx-auto items-center w-1/2">
            <hr class="my-4 mx-auto w-48 h-1 rounded border-0 md:my-10 bg-base-300" />
            <h1 className=" text-3xl">
                <span className=" animate-pulse">Test in progress...</span>
            </h1>
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs mt-4"
            />

            <button
                onClick={() => setTest(false)}
                className="btn btn-error my-8 btn-wide"
            >
                Exit Test
            </button>
        </div>
    );

    return (
        <div>
            <div className=" h-full w-full ">
                <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-start gap-4 py-20">
                    <h1 className=" self-center text-5xl font-bold mb-10 p-2">
                        Create Test
                    </h1>
                    {words.length == 0 ? noWords : setupTest}
                    {test && inTest}
                </div>
            </div>
        </div>
    );
};

export default CreateTest;

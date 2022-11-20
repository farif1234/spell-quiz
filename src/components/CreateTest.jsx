import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

const CreateTest = ({ words, setWords }) => {
    const [test, setTest] = useState(false);
    const [i, setI] = useState(0);
    const [text, setText] = useState("");
    const [status, setStatus] = useState("");
    const [number, setNumber] = useState(words.length);

    const Url = "http://127.0.0.1:5000/audio/";

    async function playAudio(idx) {
        let response = await fetch(Url + words[idx]);
        let data = await response.text();
        console.log(data);
        // audio object with mp3 link
        const audio = new Audio(data);
        audio.volume = 0.2;
        audio.play();
    }

    const checkSpell = () => {
        if (text != words[i]) {
            setStatus("bg-red-300");
        } else {
            setI(i + 1);
            setText("");
            setStatus(status == "bg-warning" ? "" : "bg-green-300");

            if (i + 1 >= number - 1) setTest(false);
            else playAudio(i + 1);
        }
    };

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
                min="1"
                max={words.length}
                className="input input-bordered input-primary w-full max-w-xs"
                disabled={test}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button
                onClick={() => {
                    setI(0);
                    setStatus("");
                    setTest(true);
                }}
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
            <h1 className=" text-xl">
                <span className=" animate-pulse italic">
                    Test in progress...
                </span>
            </h1>
            <h1 className=" mt-4 text-2xl">
                Progress: {i + 1}/{number}
            </h1>
            <div className=" flex flex-row gap-4 items-center justify-center w-full mt-5">
                <FaPlayCircle
                    size={55}
                    className="text-info cursor-pointer rounded-full"
                    onClick={() => playAudio(i)}
                />
                <input
                    type="text"
                    placeholder="Type here"
                    className={`input input-bordered input-primary w-full max-w-xs ${status}`}
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                        setStatus("");
                    }}
                    onKeyDown={(e) => {
                        if (e.key == "Enter") checkSpell();
                        else if (e.key == "ArrowDown") playAudio(i);
                    }}
                />
                <button
                    onClick={() => checkSpell()}
                    className=" btn btn-lg btn-info btn-circle text-white text-sm"
                >
                    Check
                </button>
                <button
                    onClick={() => {
                        setStatus("bg-warning");
                        setText(words[i]);
                    }}
                    className=" btn btn-lg btn-warning btn-circle text-white text-sm"
                >
                    Give Up
                </button>
            </div>
            <p className=" text-xs mr-28">
                <kbd className="kbd kbd-xs">Enter</kbd> to check spelling.{" "}
                <kbd className="kbd kbd-xs">▼</kbd> to repeat.
            </p>

            <button
                onClick={() => setTest(false)}
                className="btn btn-error my-12 btn-wide"
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

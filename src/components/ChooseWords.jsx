import React, { useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 } from "../wordData";

const ChooseWords = ({ words, setWords, inp, setInp }) => {
    const sample1 =
        "year, silver, toe, praise, acidic, vagabond, boats, identify, rings, wall, bear, triumph, innocent, innocent, rigid, conserve, resell, steal, steal, taboo, aquatic, wash, tangy, automatic, use, tent, surmise, view, overjoyed, nine, riddle, boy, welcome, operate, rings, swallow, boats";
    const sample2 =
        "deer, apologize, suck, throat, table, direful, third, used, callous, swing, wealthy, rule, unnatural, act, maniacal, sound, scientific, fat, breezy, rate, equal, cap, fast, aback, ink, alike, adjustment, parsimonious, tested, colorful, legal, demonic, double, compare, boorish, certain, jog, veil, limit, beautiful, gray, appreciate, plane, peaceful, sulky, imperfect, able, comparison, explain, upbeat";
    const handleChange = (s) => {
        if (s) {
            const wordArray = s.split(",");
            for (let i = 0; i < wordArray.length; i++) {
                wordArray[i] = wordArray[i].trim();
            }
            setWords(wordArray);
        }
    };

    const setSample = (sample) => {
        setInp(sample);
        setWords(sample);
    };

    return (
        <div>
            <div className=" h-full w-full ">
                <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-start gap-4 py-20">
                    <h1 className=" self-center text-5xl font-bold mb-10 p-2">
                        Choose Words
                    </h1>
                    <h1 className=" self-center text-2xl">
                        Type in the words you want to learn in the textbox below
                    </h1>
                    <textarea
                        className="textarea textarea-primary mt-1  w-1/2 text-sm h-40"
                        placeholder="Enter words separated by commas (e.g. cat, hat, bat...)"
                        onChange={(e) => {
                            setInp(e.target.value);
                            console.log(words);
                        }}
                        value={inp}
                    ></textarea>
                    <div class="inline-flex justify-center items-center w-full">
                        <hr class="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        <span class="absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">
                            or
                        </span>
                    </div>
                    <p className=" self-center text-2xl">
                        Use one of the sample lists:
                    </p>
                    <div className=" flex flex-row gap-8">
                        <button
                            onClick={() => setSample(sample1)}
                            className=" btn btn-secondary"
                        >
                            Sample 1
                        </button>
                        <button
                            onClick={() => setSample(sample2)}
                            className=" btn btn-secondary"
                        >
                            Sample 2
                        </button>
                        <button
                            onClick={() => setSample(p1)}
                            className=" btn btn-secondary"
                        >
                            Page 1
                        </button>
                    </div>
                    <hr class="my-4 mx-auto w-48 h-1 rounded border-0 md:my-10 bg-base-300" />
                    <button
                        onClick={() => handleChange(inp)}
                        className="btn btn-info w-1/2"
                    >
                        Update Words
                    </button>
                    <div className=" group w-full text-center">
                        <button
                            onClick={() => {
                                setWords([]);
                                setInp("");
                            }}
                            className="btn btn-error w-1/2"
                        >
                            Clear Words
                        </button>
                        <p className=" mt-2 underline underline-offset-2">
                            <AiFillWarning className=" inline mb-1 mx-1 text-xl text-warning" />
                            Clearing words will erase current list!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseWords;

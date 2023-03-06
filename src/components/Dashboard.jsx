import React, { useEffect } from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { AiOutlineNumber } from "react-icons/ai";
import { MdSpellcheck } from "react-icons/md";
import { ImOpt } from "react-icons/im";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, collection, doc } from "firebase/firestore";

const Dashboard = ({
    missedWords,
    setMissedWords,
    numOfWordsSpelled,
    setNumOfWordsSpelled,
    isLoggedIn,
    setIsLoggedIn,
}) => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            setIsLoggedIn(true);
        } else setIsLoggedIn(false);
    });
    useEffect(() => {
        if (auth.currentUser) {
            async function updateData() {
                const usersRef = doc(db, "Users", auth.currentUser.uid);
                console.log("uid", auth.currentUser.uid);
                try {
                    const userData = await getDoc(usersRef);
                    if (userData.exists()) {
                        const data = userData.data();
                        setMissedWords(new Set(data.missedWords));
                        setNumOfWordsSpelled(data.numWordsSpelled);
                    } else console.log("No document found");
                } catch (err) {
                    console.error(err);
                }
            }
            updateData();
        }
    }, [auth.currentUser]);

    const noMissedWordsComp = (
        <h1 className=" self-center text-xl rounded-full p-2 bg-green-300 animate-bounce">
            You have no missed words! ✅
        </h1>
    );

    // display all missed words
    const missedWordsComp = (
        <div className=" flex flex-col w-2/3 rounded-3xl p-3 pb-8 bg-red-100 drop-shadow-lg ">
            <h1 className=" text-xl font-bold p-2">
                Missed Words
                <span className=" ml-2 text-sm">
                    {" "}
                    (Count: {missedWords.size})
                </span>
            </h1>
            <p className=" text-lg rounded-lg  p-2 relative pr-10 bg-base-100 mt-2">
                {Array.from(missedWords).join(", ")}
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
        </div>
    );

    return (
        <div>
            <div className=" h-full w-full ">
                <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-start gap-2 py-5">
                    <h1 className=" self-center text-3xl font-bold p-2">
                        Dashboard
                    </h1>
                    <p className=" text-lg ">
                        Use this page to keep track of progress.
                    </p>
                    <div className=" flex flex-col w-2/3 p-3 pb-7 rounded-3xl bg-yellow-100 drop-shadow-lg">
                        <h1 className=" text-xl font-bold p-2">Stats</h1>
                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <AiOutlineNumber size={30} />
                                </div>
                                <div className="stat-title">Words Spelled</div>
                                <div className="stat-value">
                                    {numOfWordsSpelled}
                                </div>
                                <div className="stat-desc"></div>
                            </div>
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <MdSpellcheck size={30} />
                                </div>
                                <div className="stat-title">
                                    Overall Accuracy
                                </div>
                                <div className="stat-value">
                                    {Math.round(
                                        ((numOfWordsSpelled -
                                            missedWords.size) *
                                            100) /
                                            numOfWordsSpelled
                                    )}
                                    %
                                </div>
                                <div className="stat-desc">
                                    Correct:{" "}
                                    {numOfWordsSpelled - missedWords.size}/
                                    {numOfWordsSpelled}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-1/2 self-center divider"></div>
                    {missedWords.size > 0 ? missedWordsComp : noMissedWordsComp}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

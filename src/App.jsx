import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateTest from "./components/CreateTest";
import ChooseWords from "./components/ChooseWords";
import Footer from "./components/Footer";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import ReportBug from "./components/ReportBug";

function App() {
    const [words, setWords] = useState([]); // array of words user will be tested on
    const [inp, setInp] = useState(""); // input for user inputted words
    const [missedWords, setMissedWords] = useState(new Set());
    const [numOfWordsSpelled, setNumOfWordsSpelled] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className=" flex flex-col h-screen">
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <div className=" grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/dashboard"
                        element={
                            <Dashboard
                                missedWords={missedWords}
                                setMissedWords={setMissedWords}
                                numOfWordsSpelled={numOfWordsSpelled}
                                setNumOfWordsSpelled={setNumOfWordsSpelled}
                                isLoggedIn={isLoggedIn}
                                setIsLoggedIn={setIsLoggedIn}
                            />
                        }
                    />
                    <Route
                        path="/test"
                        element={
                            <CreateTest
                                words={words}
                                setWords={setWords}
                                missedWords={missedWords}
                                setMissedWords={setMissedWords}
                                numOfWordsSpelled={numOfWordsSpelled}
                                setNumOfWordsSpelled={setNumOfWordsSpelled}
                            />
                        }
                    />
                    <Route
                        path="/words"
                        element={
                            <ChooseWords
                                setWords={setWords}
                                words={words}
                                inp={inp}
                                setInp={setInp}
                            />
                        }
                    />
                    <Route path="/report" element={<ReportBug />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;

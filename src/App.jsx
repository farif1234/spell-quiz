import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateTest from "./components/CreateTest";
import ChooseWords from "./components/ChooseWords";
import Footer from "./components/Footer";
import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
    const [words, setWords] = useState([]);
    const [inp, setInp] = useState("");
    const [missedWords, setMissedWords] = useState(new Set());

    return (
        <div className=" h-screen">
            <Navbar />
            <div className="">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/dashboard"
                        element={
                            <Dashboard
                                missedWords={missedWords}
                                setMissedWords={setMissedWords}
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
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;

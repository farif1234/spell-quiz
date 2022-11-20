import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateTest from "./components/CreateTest";
import ChooseWords from "./components/ChooseWords";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
    const [words, setWords] = useState([]);
    const [inp, setInp] = useState("");

    return (
        <div>
            <Navbar />
            <div className="">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/test"
                        element={
                            <CreateTest words={words} setWords={setWords} />
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

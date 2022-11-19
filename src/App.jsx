import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateTest from "./components/CreateTest";
import ChooseWords from "./components/ChooseWords";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <div className="">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<CreateTest />} />
                    <Route path="/words" element={<ChooseWords />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;

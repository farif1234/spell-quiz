import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className="  fixed top-16 right-20 origin-bottom-left rotate-45 h-14 w-14 bg-base-200   "></div>
            <div className=" fixed top-24 right-5 bg-base-200 p-6 flex flex-col drop-shadow-lg ">
                <div className=" text-center">
                    <p className=" text-lg mb-2">
                        Welcome, {auth?.currentUser?.email}
                    </p>
                    <p className=" text-lg mb-2">Sign Up</p>
                    <input
                        type="text"
                        placeholder="Email"
                        className="input w-1/3 h-6 mx-2"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="input w-1/3 h-6 mx-2"
                    ></input>
                    <button
                        onClick={signUp}
                        className=" btn btn-xs btn-info ml-1"
                    >
                        Create Account
                    </button>
                </div>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>
                <div className=" text-center">
                    <p className=" text-lg mb-2">Login</p>
                    <input
                        type="text"
                        placeholder="Email"
                        className="input w-1/3 h-6 mx-2"
                    ></input>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input w-1/3 h-6 mx-2"
                    ></input>
                    <button className=" btn btn-xs btn-info ml-1">Login</button>
                </div>
                <button onClick={logout} className=" btn btn-xs btn-info mt-4 ">
                    Log Out
                </button>
            </div>
        </>
    );
};

export default Auth;

import { auth, db } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

const Auth = ({ isLoggedIn, setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(auth.currentUser);
    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("sign up: ", auth?.currentUser?.uid);
            await setDoc(doc(db, "Users", auth.currentUser.uid), {
                email: email,
                numWordsSpelled: 0,
                missedWords: [],
            });
            setIsLoggedIn(true);
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setIsLoggedIn(false);
            window.location.reload(true);
        } catch (err) {
            console.error(err);
        }
    };

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log(auth?.currentUser?.uid);
            setIsLoggedIn(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="  fixed top-16 right-20 origin-bottom-left rotate-45 h-14 w-14 bg-base-200   "></div>
            <div className=" fixed top-24 right-5 bg-base-200 p-6 flex flex-col drop-shadow-lg z-30">
                {!auth.currentUser && (
                    <div>
                        <div className=" text-center">
                            <p className=" text-xl mb-2">
                                Welcome! Please sign up/in to track progress.
                            </p>
                            <p className=" text-lg mb-2">Login</p>
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
                                onClick={signIn}
                                className=" btn btn-xs btn-info ml-1"
                            >
                                Login
                            </button>
                        </div>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                        </div>
                        <div className=" text-center">
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
                    </div>
                )}
                {auth.currentUser && (
                    <div className="text-center">
                        <p>Welcome, {auth?.currentUser?.email}!</p>
                        <button
                            onClick={logout}
                            className=" btn btn-md btn-error mt-4 "
                        >
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Auth;

import React from "react";

const ReportBug = () => {
    return (
        <div className=" h-full w-full ">
            <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-start gap-2  py-5 ">
                <h1 className=" self-center text-3xl font-bold p-2 ">
                    Report a bug 🐞
                </h1>
                <p className=" text-xl w-1/2 p-5 bg-base-200 rounded-3xl">
                    Help make this app better by reporting any bugs! Please be
                    as detailed as you can. Consider including what page you
                    were on, what you were doing, and/or what word you were
                    spelling when something went wrong.
                </p>
                <form
                    name="contact"
                    method="post"
                    action="/"
                    className=" flex flex-col gap-4 items-center p-4 rounded-3xl bg-base-200 mt-4"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className=" text-center">
                        <label>
                            Your Email (if you would like me to follow up):{" "}
                            <input
                                type="email"
                                name="email"
                                className="input w-1/2 max-w-xs mt-2"
                            />
                        </label>
                    </p>
                    <p className=" flex flex-col w-full">
                        <label>
                            Message:{" "}
                            <textarea
                                name="message"
                                className="textarea w-full mt-2"
                            ></textarea>
                        </label>
                    </p>
                    <p>
                        <button
                            className="btn btn-info hover:scale-105"
                            type="submit"
                        >
                            Submit
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ReportBug;

import React from "react";
import Cards from "./Cards";

const UpComingElection = () => {
    return (
        <div className="container bg-gray-300/10 mx-auto space-y-6 py-12 px-4 md:p-12 w-[70%]">
            <h1 className="md:text-4xl text-2xl font-semibold md:text-center text-left">
                Upcoming Elections
            </h1>
            <div className="md:px-12 lg:w-[50%] mx-auto py-4 space-y-6  rounded h-screen">
                <Cards>
                    <div className="flex items-center space-x-6">
                        <div className="overflow-hidden h-12 w-12 rounded-full">
                            <img
                                src="/vite.scg"
                                className="w-full h-full object-contain"
                                alt=""
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">
                                2027 Presidential Elections
                            </h1>
                            <p className="text-sm">Election Date pending</p>
                        </div>
                    </div>
                </Cards>

                <Cards>
                    <div className="flex items-center space-x-6">
                        <div className="overflow-hidden h-12 w-12 rounded-full">
                            <img
                                src="/vite.scg"
                                className="w-full h-full object-contain"
                                alt=""
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">
                                2027 Presidential Elections
                            </h1>
                            <p className="text-sm">Election Date pending</p>
                        </div>
                    </div>
                </Cards>

                <Cards>
                    <div className="flex items-center space-x-6">
                        <div className="overflow-hidden h-12 w-12 rounded-full">
                            <img
                                src="/vite.scg"
                                className="w-full h-full object-contain"
                                alt=""
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">
                                2027 Presidential Elections
                            </h1>
                            <p className="text-sm">Election Date pending</p>
                        </div>
                    </div>
                </Cards>

                <Cards>
                    <div className="flex items-center space-x-6">
                        <div className="overflow-hidden h-12 w-12 rounded-full">
                            <img
                                src="/vite.scg"
                                className="w-full h-full object-contain"
                                alt=""
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold">
                                2027 Presidential Elections
                            </h1>
                            <p className="text-sm">Election Date pending</p>
                        </div>
                    </div>
                </Cards>
            </div>
        </div>
    );
};

export default UpComingElection;

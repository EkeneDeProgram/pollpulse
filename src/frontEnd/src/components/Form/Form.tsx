import React from "react";
import Input from "../../components/Input";
const Form = () => {
    return (
        <form action="" className="mx-auto space-y-3 px-3">
            <div className="flex flex-col gap-3">
                <label htmlFor="name">Name</label>
                <Input
                    placeholder={"Enter your full Name"}
                    name={"name"}
                    onBlur={() => {}}
                    onChange={() => {}}
                    type={"text"}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="age">Age</label>
                <input
                    min={18}
                    max={180}
                    placeholder={"Enter your Age"}
                    className="border focus:outline-none rounded-xl p-2 lg:p-3"
                    id="age"
                    type="number"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="nationality">Nationality</label>
                <Input
                    placeholder={"Choose your Nationality"}
                    name={"nationality"}
                    onBlur={() => {}}
                    onChange={() => {}}
                    type={"text"}
                />
            </div>

            <div className="lg:py-12 py-4 space-y-4">
                <button className="lg:p-3  p-2 bg-green-600 rounded-lg text-white  w-full text-center md:text-lg">
                    Confirm Registration
                </button>
                <button className="lg:p-3 p-2 bg-red-600 rounded-lg text-white  w-full text-center md:text-lg">
                    Skip Registration
                </button>
            </div>
        </form>
    );
};

export default Form;

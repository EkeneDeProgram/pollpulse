import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ handleVote }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        handleVote(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto space-y-3 px-3"
        >
            <div className="flex flex-col gap-3">
                <label htmlFor="name">Name</label>
                <input
                    className="border focus:outline-none rounded-xl p-2 lg:p-3"
                    {...register("name")}
                    placeholder={"Enter your full Name"}
                    id="name"
                    type="text"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="age">Age</label>
                <input
                    {...register("age")}
                    min={18}
                    max={180}
                    placeholder="Enter your Age"
                    className="border focus:outline-none rounded-xl p-2 lg:p-3"
                    id="age"
                    type="number"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="nationality">Nationality</label>
                <input
                    className="border focus:outline-none rounded-xl p-2 lg:p-3"
                    {...register("nationality")}
                    placeholder="Choose your Nationality"
                    id="nationality"
                    type="text"
                />
            </div>

            <div className="lg:py-12 py-4 space-y-4">
                <button
                    type="submit"
                    className="lg:p-3  p-2 bg-green-600 rounded-lg text-white  w-full text-center md:text-lg"
                >
                    Confirm Registration
                </button>
                <button
                    type="button"
                    className="lg:p-3 p-2 bg-red-600 rounded-lg text-white  w-full text-center md:text-lg"
                >
                    Skip Registration
                </button>
            </div>
        </form>
    );
};

export default Form;

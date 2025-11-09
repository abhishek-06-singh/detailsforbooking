import React, { useState } from "react";

export default function KeralaTripBooking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, age, gender } = formData;

    if (!firstName || !lastName || !age || !gender) {
      alert("Please fill in all fields");
      return;
    }

    const message = `Kerala Train Booking Request

First Name: ${firstName}
Last Name: ${lastName}
Age: ${age}
Gender: ${gender}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917000201383?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md border border-[#e6dccb]">
        {/* Header */}
        <div className="bg-[#e7d5b5] text-[#1e3a2c] p-8 text-center border-b border-[#d2bfa2]">
          <h1 className="text-5xl italic font-light text-[#4c3b2d]">
            Kerala <span className="not-italic font-semibold">Trip</span>
          </h1>
          <p className="mt-3 text-sm italic text-[#4f4f4f]">
            Train Booking — Fill your travel details mindfully.
          </p>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          <div className="border-b border-[#d2bfa2] pb-4">
            <p className="text-sm italic text-[#5f5f5f]">
              Please enter your details carefully — they’ll be helpful while
              booking your train tickets.
            </p>
          </div>

          <div className="flex justify-end text-sm text-[#444] italic">
            Date: <span className="ml-2">{new Date().toDateString()}</span>
          </div>

          <div className="grid grid-cols-1 border-y border-[#d2bfa2]">
            <div className="p-3 bg-[#e7d5b5]/40 font-semibold text-[#3b2e20] text-center border-r border-[#d2bfa2]">
              Passenger Info
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#4f3f2f] mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-[#d2bfa2] rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#bfa47a]"
                placeholder="Enter first name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#4f3f2f] mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-[#d2bfa2] rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#bfa47a]"
                placeholder="Enter last name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#4f3f2f] mb-1">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border border-[#d2bfa2] rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#bfa47a]"
                placeholder="Enter age"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-[#4f3f2f] mb-2">
                Gender
              </label>
              <div className="flex gap-3">
                {["Male", "Female", "Other"].map((g) => {
                  const isSelected = formData.gender === g;
                  return (
                    <label
                      key={g}
                      className={`relative flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg cursor-pointer text-sm font-medium transition-all duration-200 border ${
                        isSelected
                          ? "bg-[#e7d5b5] border-[#bfa47a] shadow-sm text-[#3b2e20]"
                          : "bg-white border-[#d2bfa2] hover:border-[#bfa47a] hover:bg-[#f8f3eb]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="gender"
                        checked={isSelected}
                        onChange={() => setFormData({ ...formData, gender: g })}
                        className="absolute opacity-0 cursor-pointer"
                      />
                      <span
                        className={`w-3 h-3 rounded-full border ${
                          isSelected
                            ? "bg-[#bfa47a] border-[#8a6e48]"
                            : "border-[#bfa47a]"
                        }`}
                      ></span>
                      {g}
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-[#e7d5b5] text-[#3b2e20] font-semibold py-3 rounded-md border border-[#cbb693] hover:bg-[#d9c5a6] transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

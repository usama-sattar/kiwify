import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";
import validator from "validator";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBlur = () => {
    setError(false);
    if (!validator.isEmail(email)) {
      setError(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic for submitting form data here
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img src={Logo} alt="logo" className="mx-auto h-12 w-auto" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Redefinir a senha
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          Você receberá um e-mail com instruções para redefinir a senha
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="bg-white rounded-lg" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                required
                className={`form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue  transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                  error
                    ? "border-red-500 "
                    : "border-gray-300 focus:border-blue-300"
                } `}
              />

              {error && (
                <div className="text-xs text-red-500 mt-1">
                  {email.trim() === ""
                    ? "Esse campo é obrigatório"
                    : "O e-mail deve ser válido"}
                </div>
              )}
            </div>

            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out mt-6"
              type="submit"
            >
              Redefinir senha
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import validator from "validator";
import Toast from "../components/toast";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const [response, setResponse] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    setError({ email: false, password: false });

    if (event.target.name === "email") {
      if (!validator.isEmail(formData.email)) {
        setError({
          ...error,
          email: true,
        });
      }
    } else {
      if (formData.password.trim() === "") {
        setError({
          ...error,
          password: true,
        });
      }
    }
  };

  const handleSubmit = (event) => {
    setResponse(false);
    event.preventDefault();
    let err = {
      email: false,
      password: false,
    };
    if (!validator.isEmail(formData.email)) {
      err.email = true;
    }
    if (formData.password.trim() === "") {
      err.password = true;
    }
    setError(err);

    if (!err.email && !err.password) {
      setResponse(true);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img src={Logo} alt="logo" className="mx-auto h-12 w-auto" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Entrar na sua conta
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          Ou{" "}
          <Link
            to={"/signup"}
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            {" "}
            fazer cadastro
          </Link>
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
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue  transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                  error.email
                    ? "border-red-500 "
                    : "border-gray-300 focus:border-blue-300"
                } `}
              />
              {error.email && (
                <div className="text-xs text-red-500 mt-1">
                  {formData.email.trim() === ""
                    ? "Esse campo é obrigatório"
                    : "O e-mail deve ser válido"}
                </div>
              )}
            </div>

            <div className="mb-1">
              <label
                className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                htmlFor="password"
              >
                Senha
              </label>
              <input
                className={`form-input block py-2 px-3 border  rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                  error.password
                    ? "border-red-500"
                    : "border-gray-300 focus:border-blue-300 "
                } `}
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onBlur={handleBlur}
                onChange={handleInputChange}
              />
              {error.password && (
                <div className="text-xs text-red-500 mt-1">
                  Esse campo é obrigatório
                </div>
              )}
            </div>
            <div className="mt-2 flex items-center justify-end">
              <div className="text-sm leading-5">
                <a
                  href="/ResetPassword"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Esqueceu a senha?
                </a>
              </div>
            </div>
            {response && <Toast msg="auth/user-not-found" />}

            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out mt-6"
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

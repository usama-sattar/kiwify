import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import validator from "validator";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    repeatEmail: "",
    password: "",
    check: false,
  });
  const [error, setError] = useState({
    email: false,
    repeatEmail: false,
    password: false,
    check: false,
  });
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    setError({ email: false, password: false, repeatEmail: false });
    if (event.target.name === "email") {
      if (!validator.isEmail(formData.email)) {
        setError({
          ...error,
          email: true,
        });
      }
    } else if (event.target.name === "repeatEmail") {
      if (!validator.isEmail(formData.repeatEmail)) {
        setError({
          ...error,
          repeatEmail: true,
        });
      }
    } else if (event.target.name === "password") {
      if (formData.password.trim() === "") {
        setError({
          ...error,
          password: true,
        });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let err = {
      email: false,
      repeatEmail: false,
      password: false,
      check: false,
    };
    if (!formData.check) {
      err.check = true;
    }
    if (!validator.isEmail(formData.email)) {
      err.email = true;
    }
    if (!validator.isEmail(formData.repeatEmail)) {
      err.repeatEmail = true;
    }
    if (formData.password.trim() === "") {
      err.password = true;
    }
    if (formData.email !== formData.repeatEmail) {
      err.repeatEmail = true;
    }
    setError(err);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img src={Logo} alt="logo" className="mx-auto h-12 w-auto" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Criar nova conta
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          Ou{" "}
          <Link
            to={"/login"}
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            {" "}
            entrar na sua conta existente
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
                className={`form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue  transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                  error.email
                    ? "border-red-500 "
                    : "border-gray-300 focus:border-blue-300"
                } `}
                onBlur={handleBlur}
              />
              {error.email && (
                <div className="text-xs text-red-500 mt-1">
                  {formData.email.trim() === ""
                    ? "Esse campo é obrigatório"
                    : "O e-mail deve ser válido"}
                </div>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                htmlFor="repeatEmail"
              >
                Repetir e-mail
              </label>
              <input
                className={`form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue  transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                  error.repeatEmail
                    ? "border-red-500 "
                    : "border-gray-300 focus:border-blue-300"
                } `}
                type="email"
                id="repeatEmail"
                name="repeatEmail"
                value={formData.repeatEmail}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              {error.repeatEmail && (
                <div className="text-xs text-red-500 mt-1">
                  {formData.email.trim() === ""
                    ? "Esse campo é obrigatório"
                    : formData.email !== formData.repeatEmail
                    ? "e-mail não corresponde"
                    : "O e-mail deve ser válido"}
                </div>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                htmlFor="password"
              >
                Senha
              </label>
              <input
                className={`form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue  transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                  error.password
                    ? "border-red-500 "
                    : "border-gray-300 focus:border-blue-300"
                } `}
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              {error.password && (
                <div className="text-xs text-red-500 mt-1">
                  Esse campo é obrigatório
                </div>
              )}
            </div>
            <div className="mb-6">
              <label className="relative flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 border-red-500 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                    value={formData.check}
                  />
                </div>

                <div className="ml-2 text-sm leading-5">
                  <span className="font-medium text-gray-700">
                    Eu li e aceito os{" "}
                    <a
                      href="https://kiwify.com.br/termos-de-uso"
                      className="underline"
                    >
                      {" "}
                      termos de uso
                    </a>
                    ,{" "}
                    <a
                      href="https://kiwify.com.br/licenca-de-uso-software"
                      className="underline"
                    >
                      {" "}
                      termos de licença de uso de software
                    </a>
                    ,{" "}
                    <a
                      href="https://kiwify.com.br/politica-de-conteudo"
                      className="underline"
                    >
                      {" "}
                      política de conteúdo
                    </a>{" "}
                    da Kiwify{" "}
                  </span>{" "}
                  {error.check && (
                    <div className="text-red-500 border-b-0">
                      (Esse campo é obrigatório)
                    </div>
                  )}
                </div>
              </label>
            </div>
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out mt-6"
              type="submit"
            >
              Criar conta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

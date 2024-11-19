import React from "react";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex min-h-[600px] items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SignUp | Gadget Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Sign Up
        </h2>

        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="text-lg font-bold">Name:</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-lg font-bold">Email:</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className=" text-lg font-bold">Password:</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="btn btn-primary w-full mt-4"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

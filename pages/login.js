import React from "react";
import Head from "next/head";
import Link from "next/link";

const inpuStyles = "py-2 px-3 focus:outline-none focus:bg-gray-50 bg-gray-100";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Sign In</title>
      </Head>
      <body>
        <div className="mt-8 flex justify-center px-4">
          <form className="flex flex-col space-y-6 w-4/5 max-w-md">
            <h2 className="text-lg sm:text-3xl font-archivo text-center">
              Login
            </h2>
            <input
              type="text"
              className={inpuStyles}
              placeholder="Email Address"
            />
            <input
              type="password"
              className={inpuStyles}
              placeholder="Password"
            />
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 py-2 text-white font-bold"
            >
              Login
            </button>
            <p className="text-center">
              Dont have an account?{" "}
              <Link href="/signup">
                <a className="font-archivo">Signup</a>
              </Link>
            </p>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Login;

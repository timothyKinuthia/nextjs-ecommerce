import React from "react";
import Head from "next/head";
import Link from "next/link";

const inpuStyles = "py-2 px-3 focus:outline-none focus:bg-gray-50 bg-gray-100";

const Signup = () => {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>
      <body>
        <div className="mt-8 flex justify-center px-4">
          <form className="flex flex-col space-y-6 w-4/5 max-w-md">
            <h2 className="text-lg sm:text-3xl font-archivo text-center">
              Signup
            </h2>
            <input type="text" className={inpuStyles} placeholder="Your Name" />
            <input type="text" className={inpuStyles} placeholder="Email" />
            <input
              type="password"
              className={inpuStyles}
              placeholder="Password"
            />
            <input
              type="password"
              className={inpuStyles}
              placeholder="Confirm Password"
            />
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 py-2 text-white font-bold"
            >
              Signup
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <Link href="/login">
                <a className="font-archivo">Login</a>
              </Link>
            </p>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Signup;

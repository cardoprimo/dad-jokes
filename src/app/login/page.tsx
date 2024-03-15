"use client";
import { useState } from "react";
import { login, signup } from "./actions";

export default function LoginPage() {
  const [isSigningup, setIsSigningup] = useState(false);
  const [clickedSignup, setClickedSignup] = useState(false);

  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-gray-800 text-white">
      <form className="space-y-6">
        <div>
          <label className="sr-only" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-700 bg-gray-700 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="password">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-700 bg-gray-700 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>
        {clickedSignup && <div>Sign up link sent! Go confirm your email</div>}
        <div>
          {isSigningup ? (
            <button
              type="submit"
              formAction={signup}
              onClick={() => setClickedSignup(true)}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Sign up
            </button>
          ) : (
            <button
              type="submit"
              formAction={login}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Log in
            </button>
          )}
        </div>
      </form>
      {!isSigningup ? (
        <p className="mt-4 text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <button
            className="font-medium text-white hover:text-blue-500"
            onClick={() => setIsSigningup(true)}
          >
            Sign up
          </button>
        </p>
      ) : (
        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <button
            className="font-medium text-white hover:text-blue-500"
            onClick={() => setIsSigningup(false)}
          >
            Log in
          </button>
        </p>
      )}
    </main>
  );
}

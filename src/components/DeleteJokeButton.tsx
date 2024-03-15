"use client";

import { deleteJoke } from "@/app/data/joke/actions";

export default function DeleteJokeButton(jokeId: any) {
  return (
    <button
      onClick={() => deleteJoke(jokeId)}
      className="p-2 text-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
    >
      X
    </button>
  );
}

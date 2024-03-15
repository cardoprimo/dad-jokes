"use client";

import { saveJoke } from "@/app/data/joke/actions";
import { useEffect, useState } from "react";
import { useToast } from "./ui/use-toast";

export default function JokeFetcher({ user }: { user: any }) {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        accept: "application/json",
      },
    });
    const data = await response.json();
    setJoke(data.joke);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const saveJokeText = user ? "Save Joke" : "Login to Save Joke";

  const { toast } = useToast();

  return (
    <div>
      <p className="p-5 text-lg md:text-xl lg:text-2xl ">
        {joke || "Loading joke..."}
      </p>
      <div className="space-x-4">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={fetchJoke}
        >
          Regenerate
        </button>
        <button
          className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
          disabled={!user}
          onClick={async () => {
            if (!user) return;
            await saveJoke(joke);
            fetchJoke();
            toast({
              description: "Joke saved!",
              variant: "default",
            });
          }}
        >
          {saveJokeText}
        </button>
      </div>
    </div>
  );
}

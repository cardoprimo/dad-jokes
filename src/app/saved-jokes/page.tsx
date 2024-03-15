import DeleteJokeButton from "@/components/DeleteJokeButton";
import { createClient } from "@/utils/supabase/server";

export default async function SavedJokes() {
  const supabase = createClient();
  const { data: userData } = await supabase.auth.getUser();
  let jokes = [];
  if (userData.user) {
    const { data: jokesData, error } = await supabase
      .from("SavedJokes")
      .select("*");
    if (error) {
      throw error;
    }
    jokes = jokesData;
  }

  let header = "Saved Jokes";
  if (!jokes.length) {
    header = "Save some jokes!";
  }

  if (!userData.user) {
    header = "Login to save jokes!";
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4  bg-slate-800 p-4 text-center text-white">
      <h1 className="mb-4 text-2xl font-bold">{header}</h1>
      <ul>
        {jokes.map((joke) => (
          <div
            key={joke.id}
            className="flex items-center justify-center space-x-2"
          >
            <li className="list-none">{joke.joketext}</li>
            <DeleteJokeButton jokeId={joke.id} />
          </div>
        ))}
      </ul>
    </main>
  );
}

"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function saveJoke(joke: any) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;
  if (!user) {
    throw Error("User not logged in");
  }
  try {
    const { data, error } = await supabase
      .from("SavedJokes")
      .insert([{ userId: user.id, joketext: joke }]);
    if (error) {
      throw error;
    }
    revalidatePath("/saved-jokes");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteJoke({ jokeId }: { jokeId: number }) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;
  console.log(jokeId);
  if (!user) {
    throw Error("User not logged in");
  }
  try {
    const { data, error } = await supabase
      .from("SavedJokes")
      .delete()
      .match({ id: jokeId, userId: user.id });
    if (error) {
      throw error;
    }
    revalidatePath("/saved-jokes");
    return data;
  } catch (error) {
    throw error;
  }
}

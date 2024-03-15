import { createClient } from "@/utils/supabase/server";
import JokeFetcher from "../components/JokeFetcher";

export default async function Home() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-slate-800 text-center text-white ">
      <JokeFetcher user={data.user} />
    </main>
  );
}

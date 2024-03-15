"use client";

import logout from "@/app/logout/actions";
import { createClient } from "@/utils/supabase/client";

export default function LogoutButton() {
  const supabase = createClient();

  return (
    <button
      className="rounded bg-red-600 px-4 py-2 text-white transition duration-200 ease-in-out hover:text-red-700"
      onClick={() => logout()}
    >
      Logout
    </button>
  );
}

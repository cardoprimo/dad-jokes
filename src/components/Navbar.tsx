import Link from "next/link";
import LogoutOrLogin from "./LogoutOrLogin";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 p-4 text-white">
      <div className="flex w-full items-center justify-between ">
        <ul className="flex items-center justify-center space-x-4">
          <li>
            <Link className="hover:text-blue-500" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="/saved-jokes">
              Saved Jokes
            </Link>
          </li>
        </ul>
        <div>
          <LogoutOrLogin />
        </div>
      </div>
    </nav>
  );
}

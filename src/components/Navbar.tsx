"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-end items-center fixed right-0 top-0 pr-50 h-20 w-full z-999">
        <ul className="flex justify-center items-center gap-10 text-white text-xl">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/pages/movies/showing"}>
            <li>Movies</li>
          </Link>
          <Link href={"/pages/tickets"}>
            <li>Tickets</li>
          </Link>

          <Link href={"/pages/login"}>
            <li>Login</li>
          </Link>
          <Link href={"/pages/signup"}>
            <li>Sign up</li>
          </Link>
          <li className="cursor-pointer">Logout</li>
          <Link href={"/pages/admin"}>
            <li>Admin</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

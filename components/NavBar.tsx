import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Menu {
  title: string;
  path: string;
}

const menus: Menu[] = [
  { title: "Blockchain Demo", path: "/" },
  { title: "Hash", path: "/hash" },
  { title: "Block", path: "/block" },
  // { title: "Blockchain", path: "/blockchain" },
  // { title: "Distributed", path: "/distributed" },
  // { title: "Tokens", path: "/tokens" },
  // { title: "Coinbase", path: "/coinbase" },
];

const NavBar: React.FC = () => {
  const router = useRouter();
  const pathname = router.asPath;

  return (
    <nav className="flex items-center justify-center bg-black text-gray-100 ">
      <ul className="w-10/12 flex justify-end items-center mx-auto">
        {menus.map((m, i) => (
          <li key={i} className={`${i === 0 ? `mr-auto` : "ml-2"}`}>
            <Link href={m.path}>
              <a
                className={`block p-4 ${
                  pathname === m.path && "bg-gray-700 text-white"
                } hover:text-white`}
              >
                {m.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

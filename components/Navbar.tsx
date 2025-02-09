"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Cek apakah token ada di localStorage saat komponen dimuat
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleAuth = () => {
    if (isLoggedIn) {
      // Proses logout: hapus token dan redirect ke halaman login
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      router.push("/");
    } else {
      // Redirect ke halaman login jika belum login
      router.push("/login");
    }
  };

  return (
    <nav className="fixed w-full h-fit shadow-xl bg-white z-50">
      <div className="flex justify-between items-center w-full px-4 py-4 2xl:px-16">
        <div>
          <Link href="/" className="flex flex-row gap-3 items-center ml-4">
            <button>
              <div className="text-cont-primary font-[ITC Avant Garde] ml-0 leading-[0.88882623] text-lg normal-case tracking-[-0.02em]">
                <span className="text-cont-primary font-bold text-3xl">Seminar</span>
                <span className="text-cont-primary font-normal text-3xl">Ku</span>
              </div>
            </button>
          </Link>
        </div>

        {/* Menu Links */}
        <div className="hidden lg:flex gap-10 text-lg text-cont-primary">
          <Link className="font-bold hover:text-cont-secondary transition-all" href="/">
            Home
          </Link>
          <Link className="font-bold hover:text-cont-secondary transition-all" href="/about">
            About
          </Link>
          <Link className="font-bold hover:text-cont-secondary transition-all" href="/seminar">
            Seminar
          </Link>
          <Link className="font-bold hover:text-cont-secondary transition-all" href="/register">
            Register
          </Link>
        </div>

        {/* Tombol Login/Logout */}
        <div className="hidden lg:flex hover:scale-110 transition-all">
          <button
            onClick={handleAuth}
            className={`px-6 py-3 rounded-lg font-bold xl:text-xl lg:text-lg md:text-base text-xs transition-all duration-500 ease-in-out ${
              isLoggedIn
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-cont-primary text-white hover:bg-cont-secondary"
            }`}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

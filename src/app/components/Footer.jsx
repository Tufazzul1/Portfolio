import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <div>
          <Link
            href={"/"}
            className="text-xl md:text-4xl text-white font-bold flex"
          >
            <Image
              src="/images/Logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>
          <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">tufajjul2017@email.com</span>
          <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+8801795749543</span>
        </div>
        <p className="text-slate-600">All rights reserved by Tufazzul.</p>
      </div>
    </footer>
  );
};

export default Footer;

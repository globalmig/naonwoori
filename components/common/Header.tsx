"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "SERVICES", href: "#capabilities" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeNav = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex min-h-19 items-center justify-between gap-8 border-b border-(--line) bg-white px-5.5 py-4.5 md:min-h-23.5 md:justify-start md:gap-[clamp(72px,8.5vw,148px)] md:px-(--side) md:py-5">
      <Link
        href="#top"
        aria-label="나온우리 홈"
        onClick={closeNav}
        className="relative z-10 w-38.75 flex-none md:w-[min(180px,30vw)]"
      >
        <Image
          src="/images/logo-brown.svg"
          alt=""
          width={180}
          height={24}
          className="h-auto w-full"
          priority
        />
      </Link>

      <button
        type="button"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen((prev) => !prev)}
        className="relative z-10 cursor-pointer text-xs font-semibold tracking-[0.08em] text-brand md:hidden"
      >
        {open ? "CLOSE" : "MENU"}
      </button>

      {/* Desktop nav */}
      <nav
        aria-label="주요 메뉴"
        className="hidden md:flex md:w-auto md:flex-row md:items-center md:gap-[clamp(38px,5.25vw,82px)]"
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group relative w-auto py-1.25 text-[15px] font-bold tracking-widest text-brand"
          >
            {item.label}
            <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-right scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
          </Link>
        ))}
      </nav>

      {/* Mobile backdrop */}
      <div
        aria-hidden
        onClick={closeNav}
        className={`fixed inset-x-0 top-19 bottom-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile slide-in nav */}
      <nav
        id="main-nav"
        aria-label="주요 메뉴"
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-3/4 max-w-xs flex-col gap-0 bg-white pt-19 shadow-xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={closeNav}
          aria-label="메뉴 닫기"
          className="absolute right-5.5 top-4.5 flex h-9 w-9 cursor-pointer items-center justify-center text-brand"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path
              d="M3 3L15 15M15 3L3 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeNav}
            className="w-full border-b border-(--line) px-6 py-4 text-[15px] font-semibold tracking-widest text-brand"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

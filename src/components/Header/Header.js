"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Search from "../Search/Search";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  /* ----------------------------- navigation data ---------------------------- */
  const primaryLinks = [
    { href: "/", label: "Home" },
    
     { href: "/ai-tools", label: "AI-Tools" },
    { href: "/iot-sensors", label: "Sensors" },
    { href: "/stm32-microcontroller", label: "STM32" },
    { href: "https://iotsimulation-tool.vercel.app/", label: "Simulation", external: true },
    { href: "/hindicompiler", label: "हिंदी में कोड" },
    { href: "https://codeeditor-five.vercel.app/", label: "Compilers", external: true },
  ];

  const iotLinks = [
    { href: "/arduino", label: "Arduino" },
    { href: "/esp", label: "ESP32" },
    { href: "/computer-network-practical", label: "Computer Network" },
    { href: "/raspberry", label: "Raspberry Pi" },
    { href: "/jetson", label: "Jetson" },
    { href: "/iotProtocols", label: "Protocols" },
  ];

  /* ---------------------------- small components --------------------------- */
  const NavLink = ({ href, label, external = false }) => {
    const isActive = pathname === href;
    const classes =
      "relative px-3 py-2 text-sm font-medium transition-colors duration-300 after:absolute after:left-1/2 after:-bottom-px after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:text-blue-400 hover:after:w-full hover:after:left-0" +
      (isActive ? " text-blue-400 after:w-full after:left-0" : " text-gray-300");

    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={classes}
        onClick={() => setMobileOpen(false)}
      >
        {label}
      </Link>
    );
  };

  /* -------------------------------------------------------------------------- */

  return (
    <header className="fixed md:w-full  inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-blue/30">
      {/* Container */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-xl font-semibold text-white">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sarkitshala
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {/* IOT dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
            >
              IOT
              <svg
                className="ml-1 h-4 w-4 transform transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <ul className="invisible absolute left-0 mt-3 w-52 origin-top-left scale-95 divide-y divide-gray-700 overflow-hidden rounded-xl border border-gray-700 bg-zinc-900/95 opacity-0 shadow-lg ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
              {iotLinks.map(link => (
                <li key={link.href}>
                  <NavLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Rest of links */}
          {primaryLinks
            .filter(link => link.href !== "/")
            .map(link => (
              <NavLink key={link.href} {...link} />
            ))}

          {/* Search */}
          <div className="ml-4">
            <Search />
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Menu"
          onClick={() => setMobileOpen(prev => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 md:hidden"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          mobileOpen ? "max-h-[100vh]" : "max-h-0"
        }`}
      >
        <ul className="space-y-3 border-t border-gray-700 px-6 py-4">
          {/* IOT section duplicated for mobile */}
          {iotLinks.map(link => (
            <li key={link.href}>
              <NavLink {...link} />
            </li>
          ))}

          {/* Remaining links */}
          {primaryLinks
            .filter(link => link.href !== "/")
            .map(link => (
              <li key={link.href}>
                <NavLink {...link} />
              </li>
            ))}

          {/* Search */}
          <li className="border-t border-gray-700 pt-3">
            <Search />
          </li>
        </ul>
      </div>
    </header>
  );
}

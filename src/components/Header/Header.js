'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Search from '../Search/Search';
import { usePathname } from 'next/navigation';
import { Vortex } from '../ui/vortex';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsOpen(false);

  // Nav links without IoT
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: 'https://iotsimulation-tool.vercel.app/', label: 'Simulation' },
    { href: '/hindicompiler', label: 'हिंदी में कोड' },
    { href: 'https://codeeditor-five.vercel.app/', label: 'Compilers' },
  ];

  // IoT submenu links
  const iotLinks = [
    { href: '/arduino', label: 'Arduino' },
    { href: '/esp', label: 'ESP32' },
    { href: '/raspberry', label: 'Raspberry Pi' },
    { href: '/jetson', label: 'Jetson' },
    { href: '/iotProtocols', label: 'IoT Protocols' },
  ];

  const NavLink = ({ href, label }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={closeMenu}
        className={`relative px-3 py-2 text-sm font-medium transition duration-300 ${
          isActive ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-300'
        }`}
      >
        {label}
        <span
          className={`absolute bottom-0 left-0 right-0 h-[2px] bg-blue-400 transform transition-transform duration-300 ${
            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          } origin-left`}
        />
      </Link>
    );
  };
return (
    
      <header className="w-full  z-[999] fixed top-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-md border-b border-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Logo */}
            <h1 className="text-white text-lg font-semibold md:hidden">Sarkitshala</h1>

            {/* Desktop Navigation and Search */}
            <nav className="hidden md:flex flex-1 justify-center items-center space-x-8 relative">
              {/* Home + IoT */}
              <div className="flex items-center space-x-4">
                <NavLink href="/" label="Home" />
                <div className="  relative group">
                  <button
                    type="button"
                    className="flex items-center px-3 py-3 text-sm font-medium text-white hover:text-blue-300 transition duration-300"
                  >
                    IOT
                    <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <ul className="absolute z-50  top-full left-0 mt-2 w-48 bg-black/90 border border-gray-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 ">
                    {iotLinks.map(({ href, label }) => (
                      <li key={href}>
                        <Link href={href} onClick={closeMenu} className="block z-50 px-4 py-2 text-sm text-white hover:bg-gray-800 transition">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Other nav links */}
              {navLinks.filter(link => link.href !== '/').map(({ href, label }) => (
                <NavLink key={href} href={href} label={label} />
              ))}

              {/* Search */}
              <div className="ml-6">
                <Search />
              </div>
            </nav>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg className="h-6 w-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl px-4 py-4 space-y-3 rounded-b-xl animate-slideDownFade">
            <ul className="space-y-2 font-medium text-white">
              <li><NavLink href="/" label="Home" /></li>
              <li>
                <ul className="space-y-2">
                  {iotLinks.map(({ href, label }) => (
                    <li key={href}><NavLink href={href} label={label} /></li>
                  ))}
                </ul>
              </li>
              {navLinks.filter(link => link.href !== '/').map(({ href, label }) => (
                <li key={href}><NavLink href={href} label={label} /></li>
              ))}
              <li><Search /></li>
            </ul>
          </div>
        )}
        <style jsx>{`
          @keyframes slideDownFade {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideDownFade {
            animation: slideDownFade 0.3s ease-out forwards;
          }
        `}</style>
      </header>
  
  );
}

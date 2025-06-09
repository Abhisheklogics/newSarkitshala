'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Search from '../Search/Search';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: 'https://iotsimulation-tool.vercel.app/', label: 'Simulation' },
    { href: '/hindicompiler', label: 'हिंदी में कोड' },
    { href: 'https://codeeditor-five.vercel.app/', label: 'Compilers' },
  ];

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
        className={`relative px-3 py-2 text-sm font-medium transition duration-300 ${
          isActive ? 'text-blue-600 font-semibold' : 'text-gray-200 hover:text-blue-500'
        }`}
        onClick={() => setIsOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050A30]  backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="text-gray-300 text-lg font-bold md:hidden">Sarkitshala</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-6">
            <NavLink href="/" label="Home" />
            <div className="relative group">
              <button
                className="flex items-center text-sm font-medium text-gray-200 hover:text-blue-500 transition"
                type="button"
              >
                IOT
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                {iotLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {navLinks
              .filter(link => link.href !== '/')
              .map(({ href, label }) => (
                <NavLink key={href} href={href} label={label} />
              ))}

            <div className="ml-4">
              <Search />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-200 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
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
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md px-4 py-4 shadow-md rounded-b-xl animate-slideDownFade">
          <ul className="space-y-2 font-medium text-gray-800">
            <li><NavLink href="/" label="Home" /></li>
            <li>
              <div className="pl-2 text-sm font-semibold text-gray-500">IoT</div>
              <ul className="space-y-1 pl-4 mt-1">
                {iotLinks.map(({ href, label }) => (
                  <li key={href}><NavLink href={href} label={label} /></li>
                ))}
              </ul>
            </li>
            {navLinks.filter(link => link.href !== '/').map(({ href, label }) => (
              <li key={href}><NavLink href={href} label={label} /></li>
            ))}
            <li className="pt-2 border-t border-gray-200"><Search /></li>
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

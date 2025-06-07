import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-md text-white w-full mt-16 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
        
        {/* Branding & Description */}
        <div className="text-center md:text-left max-w-sm mx-auto md:mx-0">
          <h1 className="text-2xl font-extrabold mb-4 cursor-pointer inline-block hover:text-orange-500 transition-colors duration-300">
            Sarkitshala
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
            Learn Arduino, IoT, and Embedded Systems <br />
            with projects, tutorials, <br />
            and real-world applications. <br />
            Guided by experts in the field.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center md:items-start justify-center  font-semibold text-sm">
          <Link
            href="/about"
            className="px-6 py-1 rounded-lg  hover:text-blue-500 transition duration-300 w-full text-center md:text-left"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-6 py-1 rounded-lg hover:text-blue-500 transition duration-300 w-full text-center md:text-left"
          >
            Contact
          </Link>
          <Link
            href="/privacy-policy"
            className="px-6 py-1 rounded-lg hover:text-blue-500 transition duration-300 w-full text-center md:text-left"
          >
            Privacy Policy
          </Link>
        </nav>

        {/* Footer Tagline */}
        <div className="text-center md:text-left flex flex-col justify-center max-w-xs mx-auto md:mx-0">
          <p className="text-white text-lg font-semibold px-6 py-4 rounded-lg  shadow-lg cursor-default select-none">
            Sarkitshala Presents
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gradient-to-r from-indigo-500 to-black text-center text-gray-400 text-sm py-2 select-none mt-10">
        © {new Date().getFullYear()} Sarkitshala. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

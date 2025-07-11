'use client';
import { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';

import img1 from '../../public/ArdBook/1.webp';
import img2 from '../../public/ArdBook/2.webp';
import img3 from '../../public/ArdBook/3.webp';
import img4 from '../../public/ArdBook/4.webp';
import img5 from '../../public/ArdBook/5.webp';
import img6 from '../../public/ArdBook/6.webp';
import img7 from '../../public/ArdBook/7.webp';
import img8 from '../../public/ArdBook/8.webp';
import img9 from '../../public/ArdBook/9.webp';
import img10 from '../../public/ArdBook/10.webp';
import img11 from '../../public/ArdBook/11.webp';
import imgauth from '../../public/ArdBook/About_Author.webp';
import imgack from '../../public/ArdBook/Ack.webp';
import imgcover from '../../public/ArdBook/cover.webp';
import { StarsBackground } from './ui/stars-background';
import { ShootingStars } from './ui/shooting-stars';

const pages = [
  imgcover, imgauth, imgack,
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
];

export default function MyBook() {
  const bookRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextPage = () => bookRef.current.pageFlip().flipNext();
  const prevPage = () => bookRef.current.pageFlip().flipPrev();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#0f172a] dark:bg-black text-white relative px-2 py-6">
   
      {/* Previous Button */}
      <button
        onClick={prevPage}
        className="absolute left-2 md:left-6 z-20 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full p-3 shadow-lg transition"
        aria-label="Previous Page"
      >
        ◀
      </button>

      {/* Flip Book */}
      <div className="relative drop-shadow-2xl w-full max-w-[1000px]">
        <HTMLFlipBook
          ref={bookRef}
          width={isMobile ? 300 : 500}
          height={isMobile ? 420 : 680}
          size="stretch"
          minWidth={280}
          maxWidth={1000}
          minHeight={350}
          maxHeight={680}
          showCover={true}
          mobileScrollSupport={true}
          drawShadow={true}
          useMouseEvents={true}
          usePortrait={isMobile}
          className="book rounded-xl"
        >
          {/* Cover Page */}
          <div className="flex flex-col justify-center items-center h-full bg-gradient-to-tr from-[#2563eb] to-[#4f46e5] dark:from-[#0f172a] dark:to-[#1e293b] text-white p-6">
            <h1 className="text-3xl md:text-5xl font-extrabold font-serif drop-shadow-md mb-4 md:mb-6">
              Arduino Book
            </h1>
            <p className="text-sm md:text-lg max-w-xs md:max-w-sm text-center font-light">
              Arduino E-Book designed guide to electronics, automation & open-source projects.
            </p>
            <p className="absolute bottom-4 right-4 text-xs md:text-sm text-white/60">
              IoT Students
            </p>
          </div>

          {/* Book Pages */}
          {pages.map((img, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 flex flex-col justify-center items-center p-2 md:p-4"
            >
              <Image
                src={img}
                alt={`Page ${index + 1}`}
                width={460}
                height={680}
                className="rounded-md object-contain shadow-md border dark:border-zinc-700"
                priority={index < 3}
              />
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Page {index + 1}
              </span>
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Next Button */}
      <button
        onClick={nextPage}
        className="absolute right-2 md:right-6 z-20 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full p-3 shadow-lg transition"
        aria-label="Next Page"
      >
        ▶
      </button>
         <StarsBackground/>
      <ShootingStars/>
    </div>
  );
}

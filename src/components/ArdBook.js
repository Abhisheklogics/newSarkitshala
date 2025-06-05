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

import { ShootingStars } from './ui/shooting-stars.jsx';
import { StarsBackground } from './ui/stars-background.jsx';

const pages = [
  imgcover, imgauth, imgack,
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
];

export default function MyBook() {
  const bookRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 680 });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setDimensions({ width: 280, height: 400 });
      } else if (width < 768) {
        setDimensions({ width: 320, height: 460 });
      } else if (width < 1024) {
        setDimensions({ width: 400, height: 600 });
      } else {
        setDimensions({ width: 500, height: 680 });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const nextPage = () => bookRef.current?.pageFlip().flipNext();
  const prevPage = () => bookRef.current?.pageFlip().flipPrev();

  return (
    <div className="flex flex-col items-center justify-center relative min-h-screen py-6 px-2 bg-black overflow-hidden">
      <ShootingStars />
      <StarsBackground />

      <div className="flex justify-center items-center w-full relative z-10">
        {/* Previous Button */}
        <button
          onClick={prevPage}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow text-xl text-gray-600 z-20"
          aria-label="Previous Page"
        >
          ◀
        </button>

        {/* Flipbook */}
        <div
          className="transition-all duration-300 ease-in-out drop-shadow-2xl max-w-full"
          style={{ width: dimensions.width, height: dimensions.height }}
        >
          <HTMLFlipBook
            ref={bookRef}
            width={dimensions.width}
            height={dimensions.height}
            size="stretch"
            minWidth={280}
            maxWidth={1000}
            minHeight={350}
            maxHeight={800}
            showCover={true}
            mobileScrollSupport={true}
            drawShadow={true}
            useMouseEvents={true}
            usePortrait={dimensions.width < 500}
            className="book rounded-xl shadow-xl"
          >
            {pages.map((img, index) => (
              <div
                key={index}
                className={`flex justify-center items-center h-full ${
                  index === 0
                    ? 'bg-gradient-to-br from-blue-900 to-black text-white p-6 flex-col'
                    : 'bg-white p-2 md:p-4'
                }`}
              >
                {index === 0 ? (
                  <>
                    <h1 className="text-2xl md:text-4xl font-bold font-serif mb-4">Arduino Book</h1>
                    <p className="text-center text-sm md:text-lg font-light max-w-xs">
                      A Beginner’s E-Book Guide to Electronics, Automation & IoT Projects.
                    </p>
                    <span className="absolute bottom-4 right-4 text-xs text-white/60">IoT Students</span>
                  </>
                ) : (
                  <Image
                    src={img}
                    alt={`Page ${index}`}
                    className="object-contain rounded-lg shadow border w-full h-full"
                    sizes="(max-width: 768px) 90vw, 500px"
                    priority={index < 3}
                  />
                )}
              </div>
            ))}
          </HTMLFlipBook>
        </div>

        {/* Next Button */}
        <button
          onClick={nextPage}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow text-xl text-gray-600 z-20"
          aria-label="Next Page"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

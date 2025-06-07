'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import image1 from '../../../public/AllImages/jetson_Sarkitshala.webp';
import image2 from '../../../public/AllImages/image1.webp';
import image3 from '../../../public/AllImages/image11.webp';
import image4 from '../../../public/AllImages/image7.webp';
import image6 from '../../../public/AllImages/image9.webp';
import image7 from '../../../public/AllImages/image6.webp';
import image11 from '../../../public/AllImages/RGBLED.webp';
import image13 from '../../../public/AllImages/image13.webp';

const RecentPosts = () => {
  const listRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const posts = [
    { id: 1, slug: "/jetson", title: "NVIDIA Jetson Nano Developer Kit", image: image1 },
    { id: 2, slug: "arduino/interfacing-led", title: "Control an LED with Arduino", image: image2 },
    { id: 3, slug: "arduino/interfacing-rgb-led", title: "Interfacing RGB LED with Arduino", image: image11 },
    { id: 4, slug: "arduino/interfacing-7-segment-display", title: "Interfacing 7-Segement Display", image: image13 },
    { id: 5, slug: "arduino/interfacing-dc-motor", title: "Interfacing DC Motor", image: image3 },
    { id: 6, slug: "arduino/interfacing-oled-display-module", title: "Interfacing OLED", image: image4 },
    { id: 7, slug: "arduino/interfacing-pir-sensor", title: "Interfacing PIR Sensor", image: image6 },
    { id: 8, slug: "arduino/interfacing-dht22", title: "Interfacing DHT11 Sensor", image: image7 },
  ];

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list || !isDesktop) return;

    let scrollAmount = 0;
    const maxScroll = list.scrollHeight - list.clientHeight;

    const scrollList = () => {
      if (!isUserInteracting) {
        scrollAmount += 1;
        if (scrollAmount >= maxScroll) scrollAmount = 0;
        list.scrollTo({ top: scrollAmount, behavior: 'smooth' });
      }
    };

    const interval = setInterval(scrollList, 100);
    return () => clearInterval(interval);
  }, [isUserInteracting, isDesktop]);

  return (
    <div
      className={`
        w-full md:w-[420px]
        bg-gradient-to-br from-gray-900 via-black to-gray-800
        rounded-2xl border border-gray-700 shadow-2xl
        text-white overflow-hidden
        relative mx-auto
        mt-14
        md:mt-0
      `}
    >
      <div className="sticky top-0 z-10 px-5 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold text-lg border-b border-gray-700">
         Recent Posts
      </div>

      <ul
        ref={listRef}
        className={`max-h-[400px] px-3 py-3 space-y-3  overflow-y-auto
    scrollbar-hide`}
        onMouseEnter={() => setIsUserInteracting(true)}
        onMouseLeave={() => setIsUserInteracting(false)}
        onTouchStart={() => setIsUserInteracting(true)}
        onTouchEnd={() => setIsUserInteracting(false)}
      >
        {posts.map(({ id, slug, title, image }) => (
          <li key={id}>
            <Link
              href={`/${slug}`}
              className="flex items-center gap-4 rounded-lg p-3 hover:bg-gray-800 transition-all duration-300 group"
            >
              <Image
                src={image}
                alt={title}
                width={60}
                height={60}
                className="rounded-md w-[60px] h-[60px] object-cover shadow-md group-hover:scale-105 transition-transform"
              />
              <p className="text-sm sm:text-base font-medium text-white group-hover:text-orange-400 line-clamp-2">
                {title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;

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
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Initial check
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
        w-full sm:max-w-[400px]
       
        bg-gradient-to-r from-gray-900 via-black to-gray-700
        h-auto sm:h-[430px]
         dark:bg-gray-900 rounded-xl
        mt-8 md:mt-4 mx-auto sm:mx-0
        md:ml-0 ml-10
        relative
        ${isDesktop ? 'md:absolute md:top-[85px] md:right-[10px]' : ''}
      `}
    >
      {/* Header */}
      <div className="sticky top-0 z-10 px-4 py-3 border-gray-800 bg-gradient-to-r from-gray-900 via-black to-gray-700 backdrop-blur-md  text-white font-semibold text-lg sm:text-xl rounded-t-xl">
        Recent Posts
      </div>

      {/* List */}
      <ul
        ref={listRef}
        className={`
          max-h-[374px]
          overflow-y-auto ${isDesktop ? 'sm:overflow-hidden' : 'scrollbar-thin scrollbar-thumb-gray-500'}
          px-3 py-2 space-y-3
        `}
        onMouseEnter={() => setIsUserInteracting(true)}
        onMouseLeave={() => setIsUserInteracting(false)}
        onTouchStart={() => setIsUserInteracting(true)}
        onTouchEnd={() => setIsUserInteracting(false)}
      >
        {posts.map(({ id, slug, title, image }) => (
          <li
            key={id}
            className="
              flex items-center gap-3  dark:bg-gray-800 rounded-lg p-3
               dark:hover:bg-gray-700 transition duration-200
              cursor-pointer active:scale-[0.98]
            "
          >
            <Link href={`/${slug}`} className="flex items-center gap-3 w-full">
              <Image
                src={image}
                alt={title}
                width={60}
                height={60}
                className="rounded-md object-cover w-[60px] h-[60px]"
              />
              <p className="text-sm sm:text-base font-medium text-white dark:text-gray-100 line-clamp-2">
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

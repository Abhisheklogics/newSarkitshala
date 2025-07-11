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

const posts = [
  { id: 1, slug: "/jetson", title: "NVIDIA Jetson Nano Developer Kit", image: image1 },
  { id: 2, slug: "arduino/interfacing-led", title: "Control an LED with Arduino", image: image2 },
  { id: 3, slug: "arduino/interfacing-rgb-led", title: "Interfacing RGB LED with Arduino", image: image11 },
  { id: 4, slug: "arduino/interfacing-seven-segment-display", title: "Interfacing 7-Segement Display", image: image13 },
  { id: 5, slug: "arduino/interfacing-dc-motor", title: "Interfacing DC Motor", image: image3 },
  { id: 6, slug: "arduino/interfacing-oled-display-module", title: "Interfacing OLED", image: image4 },
  { id: 7, slug: "arduino/interfacing-pir-sensor", title: "Interfacing PIR Sensor", image: image6 },
  { id: 8, slug: "arduino/interfacing-dht22", title: "Interfacing DHT11 Sensor", image: image7 },
];

const RecentPosts = () => {
  const listRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useEffect(() => {
    const list = listRef.current;
    if (!list || window.innerWidth < 768) return;

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
  }, [isUserInteracting]);

  return (
    <div className="w-full max-w-[400px] h-[400px] bg-[#1e293b] rounded-xl mx-auto md:mx-0 relative md:absolute grid grid-cols-1 md:ml-20 shadow-lg border border-gray-700">
      {/* Header */}
      <div className="sticky top-0 z-10 px-4 py-3 bg-[#1e241b] text-white font-semibold text-lg md:text-xl rounded-t-xl">
        Recent Posts
      </div>

      {/* Post List */}
      <ul
        ref={listRef}
        className="h-[calc(100%-56px)] overflow-y-auto md:overflow-hidden px-3 py-2 space-y-3"
        onMouseEnter={() => setIsUserInteracting(true)}
        onMouseLeave={() => setIsUserInteracting(false)}
        onTouchStart={() => setIsUserInteracting(true)}
        onTouchEnd={() => setIsUserInteracting(false)}
      >
        {posts.map(({ id, slug, title, image }) => (
          <Link key={id} href={`/${slug}`} >
            <li className="flex items-center gap-4  rounded-lg p-3 hover:bg-[#475569] transition duration-200 text-white cursor-pointer active:scale-[0.98]">
              <Image
                src={image}
                alt={title}
                width={60}
                height={60}
                className="rounded-md object-cover w-[60px] h-[60px]"
              />
              <p className="text-sm md:text-base font-medium text-gray-200">
                {title}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;

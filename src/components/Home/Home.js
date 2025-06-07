'use client';

import { motion } from 'motion/react';
import { ImagesSlider } from '../ui/images-slider';
import Link from 'next/link';
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import { Spotlight } from '../ui/spotlight-new';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import Image from 'next/image';
import { LampContainer } from '../ui/lamp';
import Footer from '../Footer/Footer.js';
import MyBook from '../ArdBook';
import RecentPosts from '../recentPost/Recent';
import { ShootingStars } from '../ui/shooting-stars';
import { StarsBackground } from '../ui/stars-background.jsx';

// Static images
import image1 from '../../../public/images/Arduino_SKT.webp';
import image2 from '../../../public/images/jetson_Sarkitshala.webp';
import image4 from '../../../public/images/Bristo.jpg';
import image5 from '../../../public/images/esp.webp';
import image6 from '../../../public/images/Pi_Sarkitshala.webp';
import image7 from '../../../public/images/hr.jpg';
import image8 from '../../../public/images/Drone.webp';

import img1 from '../../../public/images/ArdTech.webp';
import img2 from '../../../public/images/ESPTech.webp';
import img3 from '../../../public/images/raspTech.webp';
import img4 from '../../../public/images/jetsonTech.webp';
import img5 from '../../../public/images/droneTech.webp';
import img6 from '../../../public/images/STM32.webp';

const images = [
  { src: image1.src, href: '/arduino' },
  { src: image2.src, href: '/jetson' },
  { src: image4.src, href: '/arduino/lcd' },
  { src: image5.src, href: '/esp' },
  { src: image6.src, href: '/raspberry' },
  { src: image7.src, href: '/esp/dht11' },
  { src: image8.src, href: '/drone' },
];

const images1 = [img1, img2, img3, img4, img5, img6];

const content = [
  {
    title: 'ARDUINO',
    description: 'Arduino is an open-source microcontroller platform designed for building electronics projects. It features digital and analog I/O pins, supports PWM, serial communication (SPI, I2C, UART), and runs on C/C++ via the Arduino IDE. With its easy-to-use hardware and vast community support, Arduino is widely used in IoT, automation, robotics, and prototyping.',
    content: <div className="flex h-full w-full items-center justify-center text-white bg-pink-600">ARDUINO</div>,
  },
  {
    title: 'ESP32',
    description: 'ESP32 is a powerful microcontroller with built-in WiFi and Bluetooth, making it ideal for IoT, automation, and smart devices. It features dual-core processing, multiple GPIOs, ADC, DAC, PWM, SPI, I2C, UART, and low-power modes for energy efficiency.',
    content: <div className="flex h-full w-full items-center justify-center text-white bg-purple-700">ESP32</div>,
  },
  {
    title: 'NVIDIA JETSON NANO',
    description: 'NVIDIA Jetson Nano is a compact AI computing platform designed for edge AI, robotics, and IoT applications. It features a quad-core ARM Cortex-A57 CPU, a 128-core Maxwell GPU, and supports deep learning, computer vision, and parallel processing.',
    content: <div className="flex h-full w-full items-center justify-center text-white bg-lime-500">JETSON NANO</div>,
  },
  {
    title: 'RASPBERRY PI',
    description: 'Raspberry Pi is a compact, single-board computer designed for programming, IoT, and automation. It features a powerful processor, GPIO pins for hardware interfacing, multiple USB and HDMI ports, and supports operating systems like Raspberry Pi OS and Linux.',
    content: <div className="flex h-full w-full items-center justify-center text-white bg-blue-600">RASPBERRY PI</div>,
  },
  {
    title: 'UAV',
    description: 'A UAV (Unmanned Aerial Vehicle) is an aircraft that operates without a human pilot onboard, controlled remotely or autonomously via onboard systems. It features sensors, GPS, flight controllers, and communication modules for navigation and data transmission.',
    content: <div className="flex h-full w-full items-center justify-center text-white bg-red-500">UAV</div>,
  },
];

const testimonials = [
  {
    quote: 'Artificial Intelligence is likely to be either the best or worst thing to happen to humanity. We simply don t know yet, but we must prepare responsibly.',
    name: 'Stephen Hawking',
    title: 'Theoretical Physicist',
  },
  {
    quote: 'The Internet of Things is not a concept; it is a network, the true technology-enabled Network of all networks.',
    name: 'Edewede Oriwoh',
    title: 'Cybersecurity & IoT Researcher',
  },
  {
    quote: 'Quantum computing is the next frontier in the race for powerful problem-solving, capable of transforming cybersecurity, material science, and AI.',
    name: 'Sundar Pichai',
    title: 'CEO, Google',
  },
  {
    quote: 'Blockchain is the tech. Bitcoin is merely the first mainstream manifestation of its potential.',
    name: 'Marc Kenigsberg',
    title: 'Blockchain Evangelist',
  },
  {
    quote: 'Augmented Reality will not replace the real world — it will enhance it with data and context we’ve never had before.',
    name: 'Tim Cook',
    title: 'CEO, Apple Inc.',
  },
  {
    quote: '5G will be the backbone of the future digital economy, enabling ultra-fast, low-latency communication for everything from self-driving cars to remote surgery.',
    name: 'Hans Vestberg',
    title: 'CEO, Verizon',
  },
  {
    quote: 'Edge computing is transforming the way we process data — bringing computation closer to where it is generated, and enabling real-time decision making.',
    name: 'Satya Nadella',
    title: 'CEO, Microsoft',
  },
  {
    quote: 'Web3 is the internet owned by the builders and users, orchestrated with tokens.',
    name: 'Chris Dixon',
    title: 'General Partner, a16z',
  },
  {
    quote: 'Space is the new frontier for innovation. Private space tech is not a luxury, but a necessary evolution of our species.',
    name: 'Elon Musk',
    title: 'CEO, SpaceX',
  },
  {
    quote: 'Generative AI is not just automation — it is creativity redefined by algorithms. We must learn to co-create with machines.',
    name: 'Sam Altman',
    title: 'CEO, OpenAI',
  },
];
let words=['Welcome','To','Sarkitshala']
export function HomePage() {
 return (
  <>
    
    <section className="relative mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
       <Spotlight />
      {/* Grid Lines */}
      <div className="absolute inset-y-0 left-0 w-px bg-neutral-200 dark:bg-neutral-700">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 w-px bg-neutral-200 dark:bg-neutral-700">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-neutral-200 dark:bg-neutral-700">
        <div className="absolute mx-auto w-40 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="relative z-10 py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center text-center">
        <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold max-w-4xl">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="text-white text-sm  sm:text-lg md:text-xl max-w-xl mt-6 leading-relaxed"
        >
          Sarkitshala is an open-source playground for building, learning, and innovating!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4"
        >
         
        </motion.div>
      </div>

      {/* 🔷 ImageSlider & RecentPosts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto md:mt-36">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <ImagesSlider
            className="w-full h-[16rem] sm:h-[20rem] md:h-[24rem] lg:h-[28rem] rounded-xl"
            images={images.map((img) => img.src)}
          >
            <motion.div
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="z-50 flex justify-center items-center h-full w-full"
            >
              <div className="absolute inset-0 z-40">
                {images.map((img, index) => (
                  <Link
                    key={index}
                    href={img.href}
                    className="absolute inset-0 block w-full h-full"
                    aria-label={`Navigate to ${img.href}`}
                  />
                ))}
              </div>
            </motion.div>
          </ImagesSlider>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <RecentPosts />
        </div>
      </div>

      {/* 🔶 Explore Technologies */}
      <section className="relative mt-20 px-4 overflow-hidden rounded-2xl py-10 shadow-xl max-w-7xl mx-auto">
        <ShootingStars />
        <StarsBackground />
        <LampContainer>Explore Technologies</LampContainer>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
          {images1.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all"
            >
              <Image
                src={img}
                alt={`Technology ${index + 1}`}
                className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover transform group-hover:scale-105 transition duration-300"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 🟩 Sticky Scroll Section */}
      <section className="w-full py-10 mt-20 px-4 max-w-7xl mx-auto">
        <StickyScroll content={content} />
      </section>

      {/* 📘 Book Section */}
      <section className="mt-16 px-4 max-w-7xl mx-auto">
        <MyBook />
      </section>

      {/* 🟦 Latest Tech Section */}
      <section className="h-auto sm:h-[22rem] mt-16 rounded-md flex flex-col items-center justify-center bg-gray-900 text-white dark:bg-black dark:bg-grid-white/[0.05] overflow-hidden px-4 max-w-7xl mx-auto py-10">
        <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-center">
          Latest Tech
        </h1>
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </section>

      {/* 🦶 Footer */}
      <footer className="mt-20 px-4">
        <Footer />
      </footer>
    </section>
  </>
);
;


}

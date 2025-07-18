'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ImagesSlider } from '../ui/images-slider';
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { LampContainer } from '../ui/lamp';
import Footer from '../Footer/Footer';
import MyBook from '../ArdBook';

import RecentPosts from '../recentPost/Recent';
import { TextGenerateEffect } from '../ui/text-generate-effect';

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

const words = 'Welcome To IOT best platform Sarkitshala';

const images = [
  { src: image1.src, href: '/arduino' },
  { src: image2.src, href: '/jetson' },
  { src: image4.src, href: '/arduino/lcd' },
  { src: image5.src, href: '/esp' },
  { src: image6.src, href: '/raspberry' },
  { src: image7.src, href: '/esp/dht11' },
  { src: image8.src, href: '/drone' },
];

const exploreTechnologies = [
  {
    src: img1.src,
    href: '/arduino',
    title: 'Arduino',
    desc: 'Open-source hardware for embedded electronics.',
  },
  {
    src: img2.src,
    href: '/esp',
    title: 'ESP32',
    desc: 'WiFi+Bluetooth-enabled MCU for IoT projects.',
  },
  {
    src: img3.src,
    href: '/raspberry',
    title: 'Raspberry Pi',
    desc: 'A tiny computer for learning, coding, and making.',
  },
  {
    src: img4.src,
    href: '/jetson',
    title: 'Jetson Nano',
    desc: 'AI computing at the edge with GPU acceleration.',
  },
  {
    src: img5.src,
    href: '/drone',
    title: 'Drone Tech',
    desc: 'Fly with embedded tech and remote sensing.',
  },
];

const content = [
  {
    title: 'ARDUINO',
    description:
      'Arduino is an open-source microcontroller platform designed for building electronics projects.',
    content: (
      <div className="flex items-center justify-center h-full w-full text-white bg-pink-500 p-4 text-center">
        Arduino boards work by reading input from sensors or buttons and converting it to output like turning on an LED or spinning a motor, using user-programmed logic via the Arduino IDE.
      </div>
    ),
  },
  {
    title: 'ESP32',
    description:
      'ESP32 is a powerful microcontroller with built-in WiFi and Bluetooth support, perfect for IoT applications.',
    content: (
      <div className="flex items-center justify-center h-full w-full text-white bg-purple-600 p-4 text-center">
        ESP32 integrates WiFi and Bluetooth for wireless communication and processes sensor data through its dual-core processor, enabling smart connectivity in real-time embedded systems.
      </div>
    ),
  },
  {
    title: 'NVIDIA JETSON NANO',
    description:
      'NVIDIA Jetson Nano is a compact AI computing platform for edge AI and robotics applications.',
    content: (
      <div className="flex items-center justify-center h-full w-full text-white bg-lime-500 p-4 text-center">
        Jetson Nano runs a Linux-based OS and executes AI models locally using its CUDA cores and GPU, making it ideal for computer vision, robotics, and machine learning at the edge.
      </div>
    ),
  },
  {
    title: 'RASPBERRY PI',
    description:
      'Raspberry Pi is a compact, single-board computer designed for teaching computer science and electronics.',
    content: (
      <div className="flex items-center justify-center h-full w-full text-white bg-blue-500 p-4 text-center">
        Raspberry Pi functions like a mini PC, supporting full OS environments and GPIO pins for hardware control, ideal for learning programming, automation, and multimedia projects.
      </div>
    ),
  },
  {
    title: 'UAV',
    description:
      'A UAV is an aircraft that operates without a human pilot onboard, ideal for surveillance and delivery.',
    content: (
      <div className="flex items-center justify-center h-full w-full text-white bg-red-500 p-4 text-center">
        UAVs operate autonomously or via remote control, using onboard sensors, GPS, and flight controllers to perform stable, automated flights for surveillance, mapping, and delivery tasks.
      </div>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Artificial Intelligence is likely to be either the best or worst thing to happen to humanity.",
    name: "Stephen Hawking",
    title: "Theoretical Physicist",
  },
  {
    quote:
      "The Internet of Things is not a concept; it is a network, the true technology-enabled Network of all networks.",
    name: "Edewede Oriwoh",
    title: "Cybersecurity & IoT Researcher",
  },
  {
    quote:
      "Technology is best when it brings people together.",
    name: "Matt Mullenweg",
    title: "Founder of WordPress",
  },
  {
    quote:
      "It has become appallingly obvious that our technology has exceeded our humanity.",
    name: "Albert Einstein",
    title: "Theoretical Physicist",
  },
  {
    quote:
      "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    name: "Bill Gates",
    title: "Co-founder of Microsoft",
  },
  {
    quote:
      "We are stuck with technology when what we really want is just stuff that works.",
    name: "Douglas Adams",
    title: "Author & Futurist",
  },
  {
    quote:
      "The real problem is not whether machines think but whether men do.",
    name: "B.F. Skinner",
    title: "Psychologist & Behaviorist",
  },
  {
    quote:
      "The next big thing is the one that makes the last big thing usable.",
    name: "Blake Ross",
    title: "Co-creator of Mozilla Firefox",
  },
  {
    quote:
      "IoT is transforming the everyday physical objects that surround us into an ecosystem of information that will enrich our lives.",
    name: "John Chambers",
    title: "Former CEO, Cisco Systems",
  },
  {
    quote:
      "The science of today is the technology of tomorrow.",
    name: "Edward Teller",
    title: "Physicist & Father of the Hydrogen Bomb",
  },
];


export function HomePage() {
  return (
    <main className=" text-gray-100">
      
      {/* Hero Section */}
      <section className="relative mt-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <TextGenerateEffect words={words} />
        <div className="grid grid-cols-1 sm:mt-6 mt-10 md:grid-cols-2 gap-10 md:gap-50">
          <div className="sm:w-[46rem] rounded-xl overflow-hidden shadow-md">
            <ImagesSlider
              className="h-[13rem] md:h-[25rem] rounded-xl"
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
          <div className="w-full rounded-xl overflow-hidden">
            <RecentPosts />
          </div>
        </div>
      </section>

      {/* Explore Technologies */}
      <section className="relative mt-20 px-4 max-w-7xl mx-auto">
        <LampContainer />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {exploreTechnologies.map((tech, index) => (
            <Link
              key={index}
              href={tech.href}
              className="group bg-[#1e293b] rounded-2xl p-4 border border-gray-700 shadow-md hover:shadow-xl transition-all"
            >
              <div className="overflow-hidden rounded-xl mb-3">
                <Image
                  src={tech.src}
                  alt={tech.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold">{tech.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{tech.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      
      

      {/* Book Section */}
      <section className="mt-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-blue-400 text-3xl font-semibold text-center mb-6">
          Arduino Book
        </h2>
        <MyBook />
      </section>

      {/* Testimonials */}
      <section className="h-auto mt-16 rounded-md flex flex-col items-center justify-center overflow-hidden px-4 max-w-7xl mx-auto py-10">
        <h2 className="text-blue-400 font-bold text-3xl sm:text-4xl mb-4 text-center">
          Latest Tech Insights
        </h2>
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20">
        <Footer />
      </footer>
    </main>
  );
}

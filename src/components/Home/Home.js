'use client';

import { motion } from 'motion/react';
import { ImagesSlider } from '../ui/images-slider';
import Link from 'next/link';
import { StickyScroll } from '../ui/sticky-scroll-reveal';

import { BackgroundBeams } from "../ui/background-beams";

import Image from 'next/image';
import { LampContainer } from "../ui/lamp";
import Footer from '../Footer/Footer.js'
import MyBook from '../ArdBook';
// Static image imports
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

const images1 = [img1, img2, img3, img4, img5, img6];

const images = [
  { src: image1.src, href: '/arduino' },
  { src: image2.src, href: '/jetson' },
  { src: image4.src, href: '/arduino/lcd' },
  { src: image5.src, href: '/esp' },
  { src: image6.src, href: '/raspberry' },
  { src: image7.src, href: '/esp/dht11' },
  { src: image8.src, href: '/drone' },
];

const content = [
  {
    title: 'ARDUINO',
    description:
      'Arduino is an open-source microcontroller platform designed for building electronics projects. It features digital and analog I/O pins, supports PWM, serial communication (SPI, I2C, UART), and runs on C/C++ via the Arduino IDE. With its easy-to-use hardware and vast community support, Arduino is widely used in IoT, automation, robotics, and prototyping.',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white" style={{ backgroundColor: '#e91e63' }}>
        ARDUINO
      </div>
    ),
  },
  {
    title: 'ESP32',
    description:
      'ESP32 is a powerful microcontroller with built-in WiFi and Bluetooth, making it ideal for IoT, automation, and smart devices. It features dual-core processing, multiple GPIOs, ADC, DAC, PWM, SPI, I2C, UART, and low-power modes for energy efficiency.',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white" style={{ backgroundColor: '#7b1fa2' }}>
        ESP32
      </div>
    ),
  },
  {
    title: 'NVIDIA JETSON NANO',
    description:
      'NVIDIA Jetson Nano is a compact AI computing platform designed for edge AI, robotics, and IoT applications. It features a quad-core ARM Cortex-A57 CPU, a 128-core Maxwell GPU, and supports deep learning, computer vision, and parallel processing.',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white" style={{ backgroundColor: '#40ff2b' }}>
        NVIDIA JETSON NANO
      </div>
    ),
  },
  {
    title: 'RASPBERRY PI',
    description:
      'Raspberry Pi is a compact, single-board computer designed for programming, IoT, and automation. It features a powerful processor, GPIO pins for hardware interfacing, multiple USB and HDMI ports, and supports operating systems like Raspberry Pi OS and Linux.',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white" style={{ backgroundColor: '#3d5afe' }}>
        RASPBERRY PI
      </div>
    ),
  },
  {
    title: 'UAV',
    description:
      'A UAV (Unmanned Aerial Vehicle) is an aircraft that operates without a human pilot onboard, controlled remotely or autonomously via onboard systems. It features sensors, GPS, flight controllers, and communication modules for navigation and data transmission.',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white" style={{ backgroundColor: '#FF6347' }}>
        UAV
      </div>
    ),
  },
];
 
export function HomePage() {
  return (
    <>
    
      <section className="mt-28 px-4 md:ml-40">
        <div className="mx-auto w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl">
          <ImagesSlider
            className="h-[18rem] md:h-[25rem] md:w-[50rem]"
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
                    href={img.href}
                    key={index}
                    className="absolute inset-0 block w-full h-full"
                    aria-label={`Go to ${img.href}`}
                  />
                ))}
              </div>
            </motion.div>
          </ImagesSlider>
        </div>
        
      </section>
 <BackgroundBeams />
      {/* Explore Technologies */}
      <section className="relative mt-20 overflow-hidden rounded-2xl p-2 shadow-md hover:shadow-xl  ">
        <LampContainer>
      Explore Technologies
    </LampContainer>
        <div className="grid grid-cols-2 mt-10 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {images1.map((img, index) => (
           <div key={index} className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl border border-gray-200 bg-white">
      <Image
        src={img}
        alt='this img'
        className="w-full h-44 md:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        priority
      /> 
      </div>
          ))}
        </div>
      </section>
      
<div className="w-full py-2 mt-20">
      <StickyScroll content={content} />
    </div>
    <MyBook/>
    <Footer/>
         </>
  );
}

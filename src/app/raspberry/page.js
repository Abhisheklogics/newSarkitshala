

import image1 from "../../../public/images/Pi_Sarkitshala.webp";
//&#39; pr &apos; '
// " &quot; or &#34
import { LensCard } from "@/components/LensCard";
export const metadata = {
  title:
    "Raspberry Pi Setup Guide & Projects for IoT, Robotics & Automation - Sarkitshala",
  description:
    "Step-by-step Raspberry Pi setup tutorial: Installation, OS setup, peripherals, GPIO usage & first project. Perfect for beginners & makers. Learn Raspberry Pi for IoT & Robotics.",
 
  robots: "index, follow",
 
  twitter: {
    card: "summary_large_image",
  
  },
  canonical: "https://sarkitshala.com/raspberry",
  author: "Sarkitshala Team (Amarjeet Singh Chauhan, Aman Raj)",
};
const sameClass = `mt-4 max-w-4xl bg-white border border-black p-6 rounded shadow-lg`;
export default function RaspberryPiPage() {
  return (
    <main className="max-w-3xl grid grid-cols-1 mx-auto p-4 mt-6 md:mt-24 rounded-xl  text-justify">
      <header className="text-center">
        <h1 className="text-center text-lg md:text-2xl  font-bold mb-3">
          Complete Raspberry Pi Setup & Projects Guide
        </h1>
       <LensCard image={image1}/>
       
      </header>

      {/* Intro Section */}
      <ArticleSection
        title="What is Raspberry Pi?"
        content={
          <>
            <p>
              Raspberry Pi is a pocket-sized, affordable computer designed to
              teach programming and computing skills. It is widely used in IoT,
              robotics, home automation, and educational projects.
            </p>
            <p>
              It features an ARM processor, memory, GPIO pins for hardware
              interfacing, USB, HDMI ports, Wi-Fi, Bluetooth, and runs Linux
              based operating systems like Raspberry Pi OS.
            </p>
            <p>
              This guide covers everything you need to start with Raspberry Pi —
              from unboxing and setup to coding your first projects.
            </p>
          </>
        }
      />

      {/* Step-by-step Setup */}
      <ArticleSection
        title="Step 1: What You Need to Get Started"
        content={
          <ul className="list-disc list-inside space-y-2">
            <li>Raspberry Pi board (Model 3, 4, or Zero W recommended)</li>
            <li>MicroSD card (16GB or higher, Class 10 recommended)</li>
            <li>Power supply (5V 3A for Pi 4)</li>
            <li>HDMI cable and monitor (or use headless setup)</li>
            <li>USB Keyboard and mouse</li>
            <li>Internet connection (Wi-Fi or Ethernet)</li>
            <li>Optional: Case, heatsinks, camera module, sensors</li>
          </ul>
        }
      />

      <ArticleSection
        title="Step 2: Installing Raspberry Pi OS on MicroSD Card"
        content={
          <>
            <p>
              Download the Raspberry Pi Imager tool from the official website:
             <a
  href="https://www.raspberrypi.com/software/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 underline ml-1"
>
  raspberrypi.com/software
</a>

            </p>
            <p>
              Insert the MicroSD card into your computer, launch the Imager,
              select Raspberry Pi OS (recommended), and write the image to the
              card.
            </p>
            <p>
              After flashing, safely eject the MicroSD card and insert it into
              your Raspberry Pi.
            </p>
          </>
        }
      />

      <ArticleSection
        title="Step 3: First Boot & Basic Configuration"
        content={
          <>
            <p>Power on your Raspberry Pi. The OS will boot up, and you will see the desktop.</p>
            <p>
              Complete the initial setup wizard to set up:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Locale, language, and timezone</li>
              <li>Wi-Fi network connection</li>
              <li>Username and password</li>
              <li>Software updates</li>
            </ul>
            <p>
              Enable SSH or VNC if you want to control the Pi remotely.
            </p>
          </>
        }
      />

      <ArticleSection
        title="Step 4: Using GPIO Pins for Hardware Projects"
        content={
          <>
            <p>
              Raspberry Pi&apos;s 40 GPIO pins allow connection with sensors, LEDs,
              motors, and other devices.
            </p>
            <p>
              You can program the pins using Python libraries like RPi.GPIO or
              gpiozero to read sensor data or control actuators.
            </p>
            <p>
              Always check the pinout diagram to avoid damaging your Raspberry
              Pi.
            </p>
          </>
        }
      />

      <ArticleSection
        title="Step 5: Your First Project - Blinking LED"
        content={
          <>
            <p>
              Connect an LED with a suitable resistor to GPIO pin 17 and ground.
              Then, run this simple Python code:
            </p>
            <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
              <code>
                {`import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.OUT)

while True:
    GPIO.output(17, GPIO.HIGH)
    time.sleep(1)
    GPIO.output(17, GPIO.LOW)
    time.sleep(1)
`}
              </code>
            </pre>
            <p>This will make the LED blink every second. Congratulations, your Raspberry Pi is controlling hardware!</p>
          </>
        }
      />

      <ArticleSection
        title="Popular Raspberry Pi Models"
        content={
          <>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Raspberry Pi 4 Model B:</strong> Latest powerful model with up to 8GB RAM</li>
              <li><strong>Raspberry Pi 3 Model B+:</strong> Older but widely used, great for beginners</li>
              <li><strong>Raspberry Pi Zero W:</strong> Ultra-compact and low-cost</li>
            </ul>
          </>
        }
      />

      <ArticleSection
        title="Additional Resources & Tutorials"
        content={
          <>
            <p>
              Explore more projects and tutorials on our main
              <a
                href="/projects"
                className="text-blue-600 underline ml-1"
              >
                Projects Page
              </a>
              , or learn about advanced IoT integration and robotics.
            </p>
          </>
        }
      />

      <ArticleSection
        title="Conclusion"
        content={
          <>
            <p>
              Raspberry Pi is a versatile and powerful tool for learning and
              building electronics, IoT devices, and robots.
            </p>
            <p>
              With this step-by-step setup and your first project, you are
              ready to explore countless possibilities in technology and
              programming.
            </p>
            <p>Happy making!</p>
          </>
        }
      />
    </main>
  );
}

function ArticleSection({ title, content }) {
  return (
    <section className={sameClass}>
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h2>
      <div className="space-y-4 text-gray-900">{content}</div>
    </section>
  );
}

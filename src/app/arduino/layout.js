
'use client';
import Link from "next/link";
import { useState } from "react";

const ToggleButton = ({ label, onClick, isOpen }) => (
  <button
    onClick={onClick}
    aria-expanded={isOpen}
    className="md:py-2 py-3 px-1 relative w-full md:w-[310px] h-fit md:ml-2 text-left mb-4"
  >
    <div className="flex justify-between items-center">
      <h2 className="font-bold text-gray-800">{label}</h2>
    
    </div>
  </button>
);

const ToggleLinks = ({ toggle, links }) => (
  <ul
    className={`${toggle ? "block" : "hidden"} space-y-4`}
    aria-hidden={!toggle}
  >
    {links.map((link, index) => (
      <li key={index}>
        <Link
          href={link.href}
          className="max-w-4xl font-bold  bg-white p-4 rounded border border-black shadow block px-4  text-sm   hover:text-orange-400"
        >
          {link.text}
        </Link>
      </li>
    ))}
  </ul>
);

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toggles, setToggles] = useState({
    toggle1: true,
  });

  const experiments = [
    {
      label: "Arduino Experiments",
      key: "toggle1",
      links: [
          
        { href: `/arduino/${'interfacing-led' }`, text: "Interfacing LED" },
        { href: `/arduino/${'interfacing-rgb-led'}`, text: "Interfacing RGB LED " },
    
        { href: `/arduino/${'interfacing-seven-segment-display'}`, text: "Interfacing 7-Segement Display" },
        { href: `/arduino/${'interfacing-ir-sensor'}`, text: "Interfacing IR Sensor" },
       
        { href: `/arduino/${'interfacing-ldr'}`, text: "Interfacing LDR Sensor" },
        { href: `/arduino/${'interfacing-dtmf-module'}`, text: "Interfacing DTMF MODULE" },
        { href: `/arduino/${'interfacing-keypad'}`, text: "Interfacing Keypad" },
        { href: `/arduino/${'interfacing-oled-display-module'}`, text: "Interfacing OLED 0.96 inces Display Module" },
        { href: `/arduino/${'interfacing-pir-sensor'}`, text: "Interfacing PIR Sensor" },
        { href: `/arduino/${'interfacing-soil-moisture'}`, text: "Interfacing Soil Moisture Sensor" },
        { href: `/arduino/${'interfacing-dc-motor'}`, text: "Interfacing DC Motor" },
        { href: `/arduino/${'interfacing-servo-motor'}`, text: "Interfacing Servo Motor" },
        { href: `/arduino/${'interfacing-gear-motor'}`, text: "Interfacing Gear Motor" },
        { href: `/arduino/${'interfacing-traffic-light-system'}`, text: "Interfacing LED's for Traffic Light" },
        { href: `/arduino/${'interfacing-lcd'}`, text: "Interfacing LCD" },
        { href: `/arduino/${'interfacing-ultrasonic-sensor-with-led'}`, text: "Interfacing Ultrasonic & LED" },
        { href: `/arduino/${'interfacing-oled-with-push-button'}`, text: "Interfacing Push Button & OLED" },
        { href: `/arduino/${'interfacing-dht22'}`, text: "Interfacing DHT22" },
        { href: `/arduino/${'interfacing-led-with-push-button'}`, text: "Interfacing LED & Push Button" },
        { href: `/arduino/${'interfacing-joystick-module'}`, text: "Interfacing Joystick Module" },
        { href: `/arduino/${'interfacing-laser-sensor'}`, text: "Interfacing Laser Sensor" },
        { href: `/arduino/${'interfacing-obstacle-avoidance-sensor'}`, text: "Interfacing Obstacle Avoidance Sensor" },
        { href: `/arduino/${'interfacing-finger-detecting-heartbeat'}`, text: "Interfacing Finger Detecting Heartbeat" },
        { href: `/arduino/${'interfacing-sound-sensor'}`, text: "Interfacing Sound Sensor Module" },
        { href: `/arduino/${'interfacing-metal-touch-sensor'}`, text: "Interfacing Metal Touch Sensor Module" },
        { href: `/arduino/${'interfacing-line-sensor-module'}`, text: "Interfacing Line Sensor Module" },
        { href: `/arduino/${'interfacing-linear-magnetic-hall-sensor'}`, text: "Interfacing Liner Magnetic Hall Sensor Module" },
        { href: `/arduino/${'interfacing-thermostat-switch'}`, text: "Interfacing Digital Microcomputer Thermostat switch" },
        { href: `/arduino/${'interfacing-humidity-controller'}`, text: "Interfacing Humidity Controller Module" },
        { href: `/arduino/${'interfacing-stainless-steel-probe-temperature-sensor'}`, text: "Interfacing Stainless Steel Probe Temperature Sensor" },
        { href: `/arduino/${'interfacing-thermocouple-sensor'}`, text: "Interfacing Thermocouple Sensor Module" },
        { href: `/arduino/${'interfacing-ir-temperature-sensor'}`, text: "Interfacing Non-contact IR Temperature Sensor Module" },
        { href: `/arduino/${'interfacing-analog-temperature-sensor'}`, text: "Interfacing Analog Temperature Sensor Module" },
        { href: `/arduino/${'interfacing-voice-recognition-module'}`, text: "Interfacing Voice Recognition Module" },
        { href: `/arduino/${'interfacing-sound-detection-sensor'}`, text: "Interfacing Sound Detection Sensor Module" },
     
        { href: `/arduino/${'interfacing-analog-sound-sensor'}`, text: "Interfacing Analog Sound Sensor Module" },
        { href: `/arduino/${'interfacing-ambient-light-sensor'}`, text: "Interfacing Ambient Light Sensor Module" },
        { href: `/arduino/${'interfacing-light-intensity-sensor'}`, text: "Interfacing Light Intensity Sensor Module" },
        { href: `/arduino/${'interfacing-color-recognition-sensor'}`, text: "Interfacing Color Recognition Sensor Module" },
        { href: `/arduino/${'interfacing-flex-sensor'}`, text: "Interfacing Flex Sensor Module" },
        { href: `/arduino/${'interfacing-rain-sensor'}`, text: "Interfacing Rain Sensor Module" },
        { href: `/arduino/${'interfacing-hall-sensor'}`, text: "Interfacing Hall Sensor Module" },
        { href: `/arduino/${'interfacing-accelerometer-sensor'}`, text: "Interfacing Accelerometer Sensor Module" },
        { href: `/arduino/${'interfacing-broken-light-sensor'}`, text: "Interfacing Broken Light Sensor Module" },
        { href: `/arduino/${'interfacing-barometric-sensor-module'}`, text: "Interfacing Barometric Sensor Module" },
        { href: `/arduino/${'interfacing-magnetometer-sensor'}`, text: "Interfacing Magnetometer Sensor Module" },
        { href: `/arduino/${'interfacing-compass-magnetic-field-sensor'}`, text: "Interfacing Compass Magnetic Field Sensor Module" },
        { href: `/arduino/${'interfacing-imu-sensor-module'}`, text: "Interfacing IMU Sensor Module" },
        { href: `/arduino/${'interfacing-rfid-sensor-module'}`, text: "Interfacing RFID Sensor Module" },
        { href: `/arduino/${'interfacing-nfc-module'}`, text: "Interfacing NFC Module" },
        { href: `/arduino/${'interfacing-proximity-sensor'}`, text: "Interfacing Proximity Sensor Module" },
        { href: `/arduino/${'interfacing-speed-measuring-sensor'}`, text: "Interfacing Speed Measuring Sensor Module" },
        { href: `/arduino/${'interfacing-count-slot-sensor'}`, text: "Interfacing Count Slot Sensor Module" },
        { href: `/arduino/${'interfacing-rotation-sensor-module'}`, text: "Interfacing Rotation Sensor Module" },
        { href: `/arduino/${'interfacing-mq135-gas-sensor'}`, text: "Interfacing MQ135 Gas Sensor Module" },
        { href: `/arduino/${'interfacing-mq2-gas-sensor'}`, text: "Interfacing MQ2 Gas Sensor Module" },
        { href: `/arduino/${'interfacing-mq7-carbon-monoxide-sensor'}`, text: "Interfacing MQ7 Carbon Monoxide Sensor Module" },
        { href: `/arduino/${'interfacing-mq3-sensor-module'}`, text: "Interfacing MQ3 Sensor Module" },
        { href: `/arduino/${'interfacing-dust-sensor-gp2y1010au0f'}`, text: "Interfacing Dust Sensor Module" },
        { href: `/arduino/${'interfacing-mq5-gas-sensor-module'}`, text: "Interfacing MQ5 Gas Sensor Module" },
        { href: `/arduino/${'interfacing-mq6-gas-sensor'}`, text: "interfacing MQ6 Gas Sensor Module" },
        { href: `/arduino/${'interfacing-mq9-gas-sensor'}`, text: "Interfacing MQ9 Gas Sensor Module" },
        { href: `/arduino/${'interfacing-mq4-gas-sensor'}`, text: "Interfacing MQ4 Gas Sensor Module" },
        { href: `/arduino/${'interfacing-mq8-hydrogen-gas-sensor'}`, text: "Interfacing MQ8 Hydrogen Gas Sensor Module" },
        { href: `/arduino/${'interfacing-mq5-lpg-sensor'}`, text: "Interfacing MQ5 LPG Sensor Module" },
        { href: `/arduino/${'interfacing-mh-z19-co2-sensor'}`, text: "Interfacing MHZ19 CO2 Sensor Module" },
        { href: `/arduino/${'interfacing-shock-sensor-module'}`, text: "Interfacing Shock Sensor Module" },
        { href: `/arduino/${'interfacing-flame-sensor'}`, text: "Interfacing Flame Sensor Module" },
        { href: `/arduino/${'interfacing-light-cup-sensor'}`, text: "Interfacing Light Cup Sensor Module" },
        { href: `/arduino/${'interfacing-1-channel-relay'}`, text: "Interfacing 1 Channel Relay Module" },
        { href: `/arduino/${'interfacing-2-channel-relay'}`, text: "Interfacing 2 Channel Relay Module" },
        { href: `/arduino/${'interfacing-4-channel-relay'}`, text: "Interfacing 4 Channel Relay Module" },
        { href: `/arduino/${'interfacing-8-channel-relay'}`, text: "Interfacing 8 Channel Relay Module" },
        { href: `/arduino/${'interfacing-solid-state-relay'}`, text: "Interfacing Solid State Relay Module" },
        { href: `/arduino/${'interfacing-smd-rgb-with-arduino'}`, text: "Interfacing SMD RGB Module" },
        { href: `/arduino/${'interfacing-two-color-led-arduino'}`, text: "Interfacing two color LED Module" },
        { href: `/arduino/${'interfacing-seven-color-flash'}`, text: "Interfacing seven color flash Module" },
        { href: `/arduino/${'interfacing-tilt-switch'}`, text: "Interfacing Tilt Switch Module" },
        { href: `/arduino/${'interfacing-toggle-switch-arduino'}`, text: "Interfacing Toggle Switch Module" },
        { href: `/arduino/${'interfacing-rotary-switch'}`, text: "Interfacing Rotary Switch Module" },
        { href: `/arduino/${'interfacing-rotary-encoder-switch'}`, text: "Interfacing Rotary Encoder Switch Module" },
        { href: `/arduino/${'interfacing-slide-switch'}`, text: "Interfacing Slide Switch Module" },
        { href: `/arduino/${'interfacing-reed-switch'}`, text: "Interfacing Reed Switch Module" },
        { href: `/arduino/${'interfacing-momentary-switch'}`, text: "Interfacing Momentary Switch Module" },
        { href: `/arduino/${'interfacing-mercury-switch'}`, text: "Interfacing Mercury Switch Module" },
        { href: `/arduino/${'interfacing-membrane-switch'}`, text: "Interfacing Membrane Switch Module" },
        { href: `/arduino/${'interfacing-matrix-switch'}`, text: "Interfacing Matrix Switch Module" },
        { href: `/arduino/${'interfacing-linear-hall-sensor'}`, text: "Interfacing Linear Hall Sensor Module" },
        { href: `/arduino/${'interfacing-limit-switch'}`, text: "Interfacing Limit Switch Module" },
        { href: `/arduino/${'interfacing-hall-effect-switch'}`, text: "Interfacing Hall Effect Switch Module" },
        { href: `/arduino/${'interfacing-foot-switch-arduino'}`, text: "Interfacing Foot Switch Module" },
        { href: `/arduino/${'interfacing-dip-switch-arduino'}`, text: "Interfacing DIP Switch Module" },
        { href: `/arduino/${'interfacing-ball-switch'}`, text: "Interfacing Ball Switch Module" },
        { href: `/arduino/${'interfacing-capacitive-touch-switch'}`, text: "Interfacing Capacitive Touch Switch Module" },
        { href: `/arduino/${'interfacing-16x2-lcd-hd44780'}`, text: "Interfacing 16x2 LCD hd44780 Module" },
        { href: `/arduino/${'interfacing-20x4-lcd-arduino'}`, text: "Interfacing 20x4 LCD Module" },
        { href: `/arduino/${'interfacing-tft-display-arduino'}`, text: "Interfacing TFT Display Module" },
        { href: `/arduino/${'interfacing-led-matrix-with-arduino'}`, text: "Interfacing LED Matrix Module" },
        { href: `/arduino/${'interfacing-nokia-5110-lcd'}`, text: "Interfacing NOKIA 5110 LCD Module" },
        { href: `/arduino/${'interfacing-nextion-display'}`, text: "Interfacing Nextion Display Module" },
        { href: `/arduino/${'interfacing-e-ink-display'}`, text: "Interfacing E-ink Display Module" },
        { href: `/arduino/${'interfacing-128x64-graphic-lcd'}`, text: "Interfacing 128x64 Graphic LCD" },
        { href: `/arduino/${'interfacing-rgb-led-matrix-panel'}`, text: "Interfacing RGB LED Matrix Panel" },
        { href: `/arduino/${'interfacing-touch-screen-tft'}`, text: "Interfacing Touch Screen TFT Module" },
        { href: `/arduino/${'interfacing-neopixel'}`, text: "Interfacing Neopixel" },
        { href: `/arduino/${'interfacing-dotstar-leds'}`, text: "Interfacing Dotstar LEDs" },
        { href: `/arduino/${'interfacing-smd-leds-arduino'}`, text: "Interfacing SMD LEDs" },
        { href: `/arduino/${'interfacing-infrared-led-arduino'}`, text: "Interfacing Infrared LED" },
        { href: `/arduino/${'interfacing-bi-color-led'}`, text: "Interfacing Bi-color LED" },
        { href: `/arduino/${'interfacing-tri-color-led'}`, text: "Interfacing Tri-color LED" },
        { href: `/arduino/${'interfacing-led-strip-analog'}`, text: "Interfacing LED Strip (Analog)" },
        { href: `/arduino/${'interfacing-led-strip-digital-addressable'}`, text: "Interfacing LED Strip (Digital/Addressable)" },
        { href: `/arduino/${'interfacing-high-power-led-arduino'}`, text: "Interfacing High Power LED (1W, 3W, etc.)" },
        { href: `/arduino/${'interfacing-indicator-led-modules'}`, text: "Interfacing Indicator LED Module" },
        { href: `/arduino/${'interfacing-pulse-sensor-arduino'}`, text: "Interfacing Pulse Sensor Module" },
        { href: `/arduino/${'interfacing-fingerprint-sensor-module'}`, text: "Interfacing Fingerprint Sensor Module" },
        { href: `/arduino/${'interfacing-gas-flow-sensor-arduino'}`, text: "Interfacing Gas Flow Sensor Module" },
        { href: `/arduino/${'interfacing-water-flow-sensor-yf-s201'}`, text: "Interfacing Water Flow Sensor Module" },
        
      ] 
    },
  ];

  return (
    <>
   <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div
        className={`fixed z-40 md:static md:translate-x-0 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-zinc-900 md:flex flex-col hidden md:flex`}
      >
       
        <div className="flex-1 overflow-y-auto">
          <nav className="px-2 py-4 space-y-2">
            {experiments.map((exp, i) => (
              <div key={i}>
                <button
                  onClick={() => setToggles({ ...toggles, [exp.key]: !toggles[exp.key] })}
                  className="w-full flex items-center justify-between px-4 py-2 text-white hover:bg-zinc-700 font-semibold"
                >
                  {exp.label}
                  <span className={`transform transition-transform ${toggles[exp.key] ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <ul className={`pl-6 mt-1 space-y-1 text-sm ${!toggles[exp.key] ? 'hidden' : ''}`}>
                  {exp.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="block px-2 py-1 rounded hover:bg-zinc-800 text-gray-300 hover:text-white"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top bar with hamburger and search */}
        <div className="flex items-center justify-between h-16 bg-zinc-950 border-b border-zinc-800 px-4">
          {/* Hamburger for mobile */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white md:hidden focus:outline-none"
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-white" />
              <div className="w-6 h-0.5 bg-white" />
              <div className="w-6 h-0.5 bg-white" />
            </div>
          </button>

          {/* Search */}
          <input
            className="w-full max-w-md ml-4 bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none"
            type="text"
            placeholder="Search..."
          />

          {/* Right Icon */}
          <button className="ml-4 text-white hover:text-gray-400 hidden md:inline-block">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l-7-7 7-7m5 14l7-7-7-7"></path>
            </svg>
          </button>
        </div>

        {/* Children content */}
        <main className="p-6">{children}</main>
      </div>
    </div> 
     

     
    </>
  );
}

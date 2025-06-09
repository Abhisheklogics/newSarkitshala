'use client';
import Link from "next/link";
import { useState } from "react";
/* === CSS CLASS CONSTANTS === */
const layoutWrapper = "min-h-screen  bg-gradient-to-br from-slate-50 via-white to-cyan-50 text-gray-900 grid grid-cols-1 mt-28 lg:grid-cols-[250px_1fr_250px]";
const sidebarWrapper = "bg-white border-r px-4 py-6 lg:block fixed top-0 left-0 bottom-0 w-[250px] z-50 lg:static lg:w-auto";
const sidebarCloseBtn = "block lg:hidden mb-4 mt-20 ml-20 text-red-500";
const toggleBtnClass = "w-full text-left";
const toggleBtnText = "font-semibold text-lg text-gray-800";
const toggleLinksList = "space-y-2 mt-2";
const toggleLinkItem = "text-blue-600 hover:underline text-sm";
const mobileMenuBtn = "lg:hidden p-2 bg-blue-500 text-white fixed top-4 left-4 z-50 rounded shadow";
const mainContent = "col-span-1 p-4 max-w-4xl w-full mx-auto";
const guideSidebar = "hidden sm:block border-l p-4 sticky top-4 self-start bg-white";
const guideTitle = "text-lg font-semibold mb-4";
const guideLink = "block text-sm text-blue-600 hover:underline";
/* === Components === */
const ToggleButton = ({ label, onClick }) => (
  <button onClick={onClick} className={toggleBtnClass}>
    <h2 className={toggleBtnText}>{label}</h2>
  </button>
);

const ExperimentLinks = ({ toggle, links }) => (
  <ul className={`${toggle ? "block" : "hidden"} ${toggleLinksList}`}>
    {links.map((link, index) => (
      <li key={index}>
        <Link href={link.href} className={toggleLinkItem}>
          {link.text}
        </Link>
      </li>
    ))}
  </ul>
);

export default function RootLayout({ children }) {
  const [toggles, setToggles] = useState({ toggle1: true });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const experiments = [
    {
      label: "Raspberry Pi Experiments",
      key: "toggle1",
      links: [
        { href: "/raspberry/interfacing-led-raspberrypi", text: "Interfacing LED" },
        { href: "/raspberry/interfacing-laser-sensor-raspberrypi", text: "Interfacing Laser Sensor" },
        { href: "/raspberry/interfacing-joystick-module-raspberrypi", text: "Interfacing Joystick Module" },
        { href: "/raspberry/interfacing-4x4-keypad-raspberrypi", text: "Interfacing 4x4 Keypad" },
        { href: "/raspberry/interfacing-ldr-raspberrypi", text: "Interfacing LDR (Light Sensor)" },
        { href: "/raspberry/lcd-i2c", text: "Interfacing LCD" },
        { href: "/raspberry/dc-motor-control-l298n", text: "Interfacing DC Motor" },
        { href: "/raspberry/ultrasonic-sensor-raspberrypir", text: "Interfacing Ultrasonic Sensor" },
        { href: "/raspberry/dht11-raspberrypi", text: "Interfacing DHT11 Sensor" },
        { href: "/raspberry/pulse-rate-sensor-raspberrypi", text: "Interfacing Pulse Rate Sensor" },
        { href: "/raspberry/pir-sensor-raspberrypi", text: "Interfacing PIR Sensor" },
        { href: "/raspberry/gear-motor", text: "Interfacing Gear Motor" },
        { href: "/raspberry/obstacle-avoidance-sensor", text: "Interfacing Obstacle Avoidance Sensor" },
        { href: "/raspberry/servo-motor", text: "Interfacing Sound Sensor" },
        { href: "/raspberry/oled-display", text: "Interfacing OLED Display" },
        { href: "/raspberry/home-automation-system-raspberry-pi", text: "Home Automation System" },
        { href: "/raspberry/weather-station-raspberry-pi", text: "Weather Station" },
        { href: "/raspberry/security-camera-system", text: "Security Camera System" },
        { href: "/raspberry/controlled-drone", text: "Raspberry Pi-Controlled Drone" },
        { href: "/raspberry/drone-delivery-system-raspberry-pi", text: "Drone Delivery System" },
        { href: "/raspberry/automated-lighting-system", text: "Automated Lighting System" },
        { href: "/raspberry/health-monitoring-system", text: "Health Monitoring System" },
        { href: "/raspberry/plant-care-monitoring-system", text: "Plant Care and Monitoring System" },
        { href: "/raspberry/buzzer-activation-using-gpio", text: "Buzzer Activation using GPIO" },
        { href: "/raspberry/voice-assistant-python", text: "Voice Assistant using Python" },
        { href: "/raspberry/gpio-button", text: "GPIO Button Control" },
        { href: "/raspberry/barcode-scanner", text: "Barcode Scanner System" },
        { href: "/raspberry/rfid-attendance-system-raspberry-pi", text: "RFID Attendance System" },
        { href: "/raspberry/smart-dustbin-ultrasonic-sensor-raspberry-pi", text: "Smart Dustbin" },
        { href: "/raspberry/telegram-bot-controlled-raspberry-pi", text: "Telegram Bot Controlled System" },
        { href: "/raspberry/python-based-object-detection-with-pi-camera", text: "Object Detection with Pi Camera" },
        { href: "/raspberry/controlled-robot-car", text: "Controlled Robot Car" },
        { href: "/raspberry/gesture-controlled-media-player", text: "Gesture Controlled Media Player" },
        { href: "/raspberry/smart-energy-meter-using-pi-and-current-sensor", text: "Smart Energy Meter" },
        { href: "/raspberry/smart-mirror-with-raspberry-pi", text: "Smart Mirror" },
        { href: "/raspberry/machine-learning-model-deployment-on-raspberry-pi", text: "ML Model Deployment" },
        { href: "/raspberry/build-your-own-vpn-server-on-raspberry-pi", text: "VPN Server on Pi" },
        { href: "/raspberry/smart-traffic-light-system-using-image-processing", text: "Smart Traffic Light System" },
        { href: "/raspberry/lora-communication-with-raspberry-pi", text: "LoRa Communication" },
        { href: "/raspberry/license-plate-recognition-system", text: "License Plate Recognition" },
        { href: "/raspberry/smart-agriculture-system-raspberry-pi", text: "Smart Agriculture System" },
        { href: "/raspberry/industrial-iot-monitoring-system", text: "Industrial IoT Monitoring" },
        { href: "/raspberry/blockchain-node-deployment-on-raspberry-pi", text: "Blockchain Node Deployment" },
        { href: "/raspberry/interfacing-servo-raspberrypi", text: "Servo Motor with Raspberry Pi" },
        { href: "/raspberry/interfacing-dht11-dht22-raspberrypi", text: "DHT11/DHT22 with Raspberry Pi" },
        { href: "/raspberry/interfacing-gpsmodule-raspberrypi", text: "GPS Module with Raspberry Pi" },
        { href: "/raspberry/interfacing-soil-moisture-sensor-raspberrypi", text: "Soil Moisture Sensor" },
        { href: "/raspberry/interfacing-relay-module-raspberrypi", text: "Relay Module with Raspberry Pi" },
        { href: "/raspberry/interfacing-npk-sensor-raspberrypi", text: "NPK Sensor Module" },
        { href: "/raspberry/interfacing-soil-humidity-sensor-raspberrypi", text: "Soil Humidity Sensor" },
      ]
    }
  ];

  return (
     <>
       {/* Mobile Toggle Button */}
       <button className={mobileMenuBtn} onClick={() => handleToggle("toggle1")}>
         {toggles.toggle1 ? "ESP Experiments" : "ESP Experiments"}
       </button>
 
       {/* Layout Container */}
       <div className={layoutWrapper}>
         {/* Left Sidebar */}
         <aside className={`${sidebarWrapper} ${toggles.toggle1 ? "block" : "hidden"}`}>
           <button className={sidebarCloseBtn} onClick={() => handleToggle("toggle1")}>
             Close
           </button>
           {experiments.map((exp) => (
             <div key={exp.key} className="mb-6">
               <ToggleButton label={exp.label} onClick={() => handleToggle(exp.key)} />
               <ExperimentLinks toggle={toggles[exp.key]} links={exp.links} />
             </div>
           ))}
         </aside>
 
         {/* Main Content */}
         <main className={mainContent}>{children}</main>
 
         {/* Right Guide Sidebar (Optional) */}
         <aside className={guideSidebar}>
           <h3 className={guideTitle}>ESP Guide</h3>
           <div className="space-y-2">
             {[
               "#ESP32",
               "#Overview-of-ESP32",
               "#Pinout",
               "#WiFi",
               "#Bluetooth",
               "#WebServer",
               "#PWM",
               "#ADC",
               "#Getting-Started",
               "#Conclusion",
             ].map((id, i) => (
               <Link key={i} href={id} className={guideLink}>
                 {id.replace(/#/g, '').replace(/-/g, ' ')}
               </Link>
             ))}
           </div>
         </aside>
       </div>
     </>
   );
 }
 
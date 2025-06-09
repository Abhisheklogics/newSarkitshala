'use client';
import Link from 'next/link';
import { useState } from 'react';

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

/* === Layout === */
export default function RootLayout({ children }) {
  const [toggles, setToggles] = useState({ toggle1: true });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const experiments = [
    {
      label: "ESP Experiments",
      key: "toggle1",
      links: [
        { href: "/esp/led-blink-button-control", text: "LED Blink with Button" },
        { href: "/esp/motion-detection-alarm-system", text: "Motion Detection Alarm System" },
        { href: "/esp/simple-rgb-led-controller", text: "Simple RGB LED Controller" },
        { href: "/esp/blinking-led-websocket-control", text: "Blinking LED with WebSocket Control" },
        { href: "/esp/pwm-led-brightness", text: "Control LED Brightness using PWM" },
        { href: "/esp/html-css-web-page", text: "Web Page with HTML and CSS on ESP32" },
        { href: "/esp/multiple-leds-web-control", text: "Control Multiple LEDs" },
        { href: "/esp/bluetooth-serial-communication", text: "ESP32 with Bluetooth Serial Communication" },
        
   { href: "/esp/eeprom-storage", text: "EEPROM with ESP32" },
        { href: "/esp/push-button", text: "ESP32 Push Button Input: Reading Digital States" },
        { href: "/esp/dht11", text: "Interfacing DHT11 Sensor" },
        { href: "/esp/ultrasonic-sensor", text:" Interfacing Ultrasonic Sensor" },
        { href: "/esp/flame-sensor", text: "Interfacing Flame Sensor" },
        { href: "/esp/sound-sensor", text: "Interfacing Sound Sensor" },
        { href: "/esp/potentiometer", text: "Interfacing Potentiometer" },
        { href: "/esp/ir-sensor", text: "Interfacing IR Sensor" },
        { href: "/esp/servo-motor", text: "Interfacing Servo Motor" },
         { href: "/esp/cam-wireless-camera", text: "Interfacing Cam Wireless" },
        { href: "/esp/dc-motor", text: "Interfacing DC Motor" },
        { href: "/esp/interfacing-shock-sensor", text: "Interfacing Shock Sensor" },
        { href: "/esp/interfacing-color-recognition-sensor", text: "Interfacing Color Recognition Sensor" },
          

        { href: "/esp/rfid-access-control", text: "Interfacing RFID Module" },
        { href: "/esp/lora32-sx1276-oled", text: "TTGO LoRa32 SX1276 OLED" },
         { href: "/esp/keypad-access-control", text: "Interfacing Keypad" },
        { href: "/esp/solenoid-lock", text: "Interfacing Solenoid Lock" },
        { href: "/esp/16x2-lcd-i2c", text: "Interfacing 16x2 LCD" },
        { href: "/esp/soil-moisture-sensor", text: "Interfacing Soil Moisture" },
          { href: "/esp/mq7-gas-sensor", text: "Interfacing MQ-7 Gas Sensor" },
        
         { href: "/esp/light-sleep-mode", text: "Interfacing Light Sleep Mode" },
        { href: "/esp/smart-light-control-bluetooth", text: "Interfacing Smart Light Control" },
        { href: "/esp/iot-weather-station", text: "Interfacing (IoT) Weather Station" },
        { href: "/esp/web-server-temperature-display", text: "Interfacing Web Server for Temperature Data Display" },
          { href: "/esp/home-automation-relay-control", text: "Interfacing Home Automation System with Relay Control" },

         { href: "/esp/iot-smart-garden-esp32", text: "Interfacing  IoT Smart Garden" },
        { href: "/esp/face-recognition-door-unlock", text: "Face Recognition-Based Door Unlock System" },
        { href: "/esp/wifi-jammer", text: "Interfacing Wi-Fi Jammer Detector" },
        { href: "/esp/health-band-with-pulse", text: "Interfacing Health Band with Pulse" },
          { href: "/esp/sound-level-logger-classrooms", text: "Interfacing Sound Level Logger for Classrooms" },

         { href: "/esp/night-vision-surveillance-camera", text: "Night Vision Surveillance Camera" },
        { href: "/esp/solar-panel-monitoring", text: "Solar Panel Monitoring System" },
        { href: "/esp/smart-farming-robot-crop-surveillance", text: "Smart Farming Robot for Crop Surveillance" },
        { href: "/esp/smart-water-quality-monitoring", text: "Smart Water Quality Monitoring System" },
          { href: "/esp/industrial-iot-gateway-real-time-monitoring", text: "Industrial IoT Gateway for Real-Time Monitoring" },
        { href: "/esp/smart-agriculture-system-drone-control", text: "Agriculture System with Automated Drone Control" }

   
      ],
    },
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

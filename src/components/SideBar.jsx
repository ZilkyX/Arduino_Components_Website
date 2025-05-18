import { useState } from "react";
import { Atom, ChevronDown, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = [
    {
      name: "Microcontroller",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-microchip-icon lucide-microchip"
        >
          <path d="M18 12h2" />
          <path d="M18 16h2" />
          <path d="M18 20h2" />
          <path d="M18 4h2" />
          <path d="M18 8h2" />
          <path d="M4 12h2" />
          <path d="M4 16h2" />
          <path d="M4 20h2" />
          <path d="M4 4h2" />
          <path d="M4 8h2" />
          <path d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z" />
        </svg>
      ),
      subItems: [
        { name: "Arduino Uno", route: "/microcontroller/arduino-uno" },
        { name: "USB Cable", route: "/microcontroller/usb-cable" },
        { name: "Bread Board", route: "/microcontroller/bread-board" },
        { name: "Jumper Wires", route: "/microcontroller/jumper-wire" },
        { name: "FM Wires", route: "/microcontroller/fm-wire" },
      ],
    },
    {
      name: "Sensors",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-thermometer-sun-icon lucide-thermometer-sun"
        >
          <path d="M12 9a4 4 0 0 0-2 7.5" />
          <path d="M12 3v2" />
          <path d="m6.6 18.4-1.4 1.4" />
          <path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
          <path d="M4 13H2" />
          <path d="M6.34 7.34 4.93 5.93" />
        </svg>
      ),
      subItems: [
        { name: "LM35DZ", route: "/sensors/temperature" },
        { name: "Water Level Sensor", route: "/sensors/water-level" },
        { name: "DHT22", route: "/sensors/dht22" },
        { name: "Sound Sensor", route: "/sensors/sound-sensor" },
        { name: "Tilt Ball", route: "/sensors/tilt-ball" },
        { name: "Photoresistor", route: "/sensors/photoresistor" },
        { name: "Flame Sensor", route: "/sensors/flame-sensor" },
        { name: "IR Sensor", route: "/sensors/ir-sensor" },
      ],
    },
    {
      name: "Input Devices",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-cable-icon lucide-cable"
        >
          <path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" />
          <path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" />
          <path d="M21 21v-2h-4" />
          <path d="M3 5h4V3" />
          <path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" />
        </svg>
      ),
      subItems: [
        { name: "RC522", route: "/input-devices/RC522" },
        { name: "White Card", route: "/input-devices/white-card" },
        { name: "Key Chain", route: "/input-devices/keychain" },
        { name: "Joystick", route: "/input-devices/joystick" },
        { name: "Keyboard", route: "/input-devices/keyboard" },
        { name: "Remote", route: "/input-devices/remote" },
        { name: "Potentiometer", route: "/input-devices/potentiometer" },
        { name: "Push Button", route: "/input-devices/push-btn" },
      ],
    },
    {
      name: "Output Devices",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-monitor-icon lucide-monitor"
        >
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
      subItems: [
        { name: "LED", route: "/output-devices/led" },
        { name: "RGB Module", route: "/output-devices/rgb-module" },
        { name: "Relay Module", route: "/output-devices/relay-module" },
        { name: "LCD 16x2", route: "/output-devices/lcd" },
        { name: "7 Segment Display", route: "/output-devices/7seg" },
        { name: "4-Digit 7-Segment Display", route: "/output-devices/4-7seg" },
        { name: "Led Matrix", route: "/output-devices/led-matrix" },
        { name: "Buzzer", route: "/output-devices/buzzer" },
      ],
    },
    {
      name: "Power Supply",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-battery-charging-icon lucide-battery-charging"
        >
          <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
          <path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" />
          <path d="m11 7-3 5h4l-3 5" />
          <line x1="22" x2="22" y1="11" y2="13" />
        </svg>
      ),
      subItems: [{ name: "Battery", route: "/power-supply/battery" }],
    },
    {
      name: "Actuators",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-cog-icon lucide-cog"
        >
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M12 2v2" />
          <path d="M12 22v-2" />
          <path d="m17 20.66-1-1.73" />
          <path d="M11 10.27 7 3.34" />
          <path d="m20.66 17-1.73-1" />
          <path d="m3.34 7 1.73 1" />
          <path d="M14 12h8" />
          <path d="M2 12h2" />
          <path d="m20.66 7-1.73 1" />
          <path d="m3.34 17 1.73-1" />
          <path d="m17 3.34-1 1.73" />
          <path d="m11 13.73-4 6.93" />
        </svg>
      ),
      subItems: [
        { name: "Motor Driver", route: "/actuator/motor-driver" },
        { name: "Stepper Motor", route: "/actuator/stepper-motor" },
        { name: "Servo Motor", route: "/actuator/servo-motor" },
      ],
    },
    {
      name: "Passive Components",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-component-icon lucide-component"
        >
          <path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
          <path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" />
          <path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" />
          <path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
        </svg>
      ),
      subItems: [
        { name: "Resistor", route: "/passive-components/resistor" },
        { name: "74HC595", route: "/passive-components/74HC595" },
      ],
    },
    {
      name: " Timing Modules",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-clock-fading-icon lucide-clock-fading"
        >
          <path d="M12 2a10 10 0 0 1 7.38 16.75" />
          <path d="M12 6v6l4 2" />
          <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
          <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
          <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
          <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
        </svg>
      ),
      subItems: [{ name: "RTC Module", route: "/timing-module/rtc-module" }],
    },
  ];

  return (
    <>
      <div
        className={`fixed overflow-y-auto top-0 left-0 h-full w-64 bg-base-200 text-base-content z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col justify-between`}
      >
        <div>
          <div className="flex items-center justify-between p-4">
            <Link to={"/"}>
              <h1 className="flex text-xl font-bold text-base-content">
                <Atom className="mr-2" />
                Arduino Kit
              </h1>
            </Link>
          </div>

          <div className="p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center gap-3 w-full rounded-btn px-3 py-2 text-sm font-medium transition-colors rounded-md
                ${
                  openDropdown === item.name
                    ? "bg-secondary text-secondary-content"
                    : "hover:bg-base-300"
                }`}
                  aria-expanded={openDropdown === item.name}
                  aria-controls={`${item.name}-submenu`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown
                    className={`ml-auto w-4 h-4 transition-transform ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {openDropdown === item.name && (
                  <div
                    id={`${item.name}-submenu`}
                    className="ml-6 mt-1 space-y-1"
                    role="region"
                    aria-label={`${item.name} submenu`}
                  >
                    {item.subItems.map((subItem) => (
                      <Link to={subItem.route}>
                        <a
                          key={subItem.name}
                          href="#"
                          className="block rounded-md px-3 py-2 text-sm hover:bg-base-300 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Link to="/settings">
          <div className="p-4">
            <a className="flex items-center gap-3  rounded-md px-3 py-3 text-sm font-medium hover:bg-base-300 transition-colors">
              <Palette className="w-5 h-5" />
              <span>Themes</span>
            </a>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;

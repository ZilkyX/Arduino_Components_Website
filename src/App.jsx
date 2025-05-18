import SideBar from "./components/SideBar";
import { Routes, Route, useLocation } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage";
import { useThemeStore } from "./store/useThemeStore";
import Hompage from "./pages/Hompage";
import Arduino from "./pages/microcontroller/Arduino";
import LED from "./pages/output-devices/Led";
import LM35DZ from "./pages/sensors/LM35DZ";
import USBCable from "./pages/microcontroller/Usb-Cable";
import LCD16x2 from "./pages/output-devices/Lcd";
import RC522 from "./pages/input-devices/RC522";
import WhiteCard from "./pages/input-devices/WhiteCard";
import Keychain from "./pages/input-devices/KeyChain";
import Joystick from "./pages/input-devices/Joystick";
import Keyboard from "./pages/input-devices/Keyboard";
import RTCModule from "./pages/timing module/RTC";
import HumiditySensor from "./pages/sensors/DHT22";
import WaterLevelSensor from "./pages/sensors/WaterLevel";
import RGBModule from "./pages/output-devices/Rgb";
import StepperMotor from "./pages/actuators/stepper-motor";
import MotorDriver from "./pages/actuators/motor-driver";
import RelayModule from "./pages/output-devices/Relay";
import Breadboard from "./pages/microcontroller/Breadboard";
import JumperWires from "./pages/microcontroller/Jumper-Wires";
import FMWires from "./pages/microcontroller/FMWires";
import SoundSensor from "./pages/sensors/SoundSensor";
import RemoteControl from "./pages/input-devices/Remote";
import Potentiometer from "./pages/input-devices/Potentiometer";
import OneDigitTube from "./pages/output-devices/7Segment";
import FourDigitTube from "./pages/output-devices/4-7Segment";
import LedMatrix from "./pages/output-devices/LEDMatrix";
import ServoMotor from "./pages/actuators/servo-motor";
import Buzzer from "./pages/output-devices/Buzzer";
import TiltBallSwitch from "./pages/sensors/TiltBall";
import Photoresistor from "./pages/sensors/Photoresistor";
import PushButton from "./pages/input-devices/PushButton";
import Battery from "./pages/power-supply/Battery";
import Resistor from "./pages/passive-components/Resistors";
import FlameSensor from "./pages/sensors/FlameSensor";
import IRSensor from "./pages/sensors/IrSensor";
import ShiftRegister74HC595 from "./pages/passive-components/ShiftRegister";

const App = () => {
  const { theme } = useThemeStore();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div data-theme={theme}>
      {!isHomePage && <SideBar />}
      <main className={`px-4 min-h-screen ${!isHomePage ? "lg:pl-64" : ""}`}>
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/microcontroller/arduino-uno" element={<Arduino />} />
          <Route path="/microcontroller/usb-cable" element={<USBCable />} />
          <Route path="/microcontroller/bread-board" element={<Breadboard />} />
          <Route
            path="/microcontroller/jumper-wire"
            element={<JumperWires />}
          />
          <Route path="/microcontroller/fm-wire" element={<FMWires />} />

          <Route path="/sensors/temperature" element={<LM35DZ />} />
          <Route path="/sensors/dht22" element={<HumiditySensor />} />
          <Route path="/sensors/water-level" element={<WaterLevelSensor />} />
          <Route path="/sensors/sound-sensor" element={<SoundSensor />} />
          <Route path="/sensors/tilt-ball" element={<TiltBallSwitch />} />
          <Route path="/sensors/photoresistor" element={<Photoresistor />} />
          <Route path="/sensors/flame-sensor" element={<FlameSensor />} />
          <Route path="/sensors/ir-sensor" element={<IRSensor />} />

          <Route path="/output-devices/led" element={<LED />} />
          <Route path="/output-devices/lcd" element={<LCD16x2 />} />
          <Route path="/output-devices/rgb-module" element={<RGBModule />} />
          <Route
            path="/output-devices/relay-module"
            element={<RelayModule />}
          />
          <Route path="/output-devices/7seg" element={<OneDigitTube />} />
          <Route path="/output-devices/4-7seg" element={<FourDigitTube />} />
          <Route path="/output-devices/led-matrix" element={<LedMatrix />} />
          <Route path="/output-devices/buzzer" element={<Buzzer />} />

          <Route path="/input-devices/RC522" element={<RC522 />} />
          <Route path="/input-devices/white-card" element={<WhiteCard />} />
          <Route path="/input-devices/keychain" element={<Keychain />} />
          <Route path="/input-devices/joystick" element={<Joystick />} />
          <Route path="/input-devices/keyboard" element={<Keyboard />} />
          <Route path="/input-devices/remote" element={<RemoteControl />} />
          <Route
            path="/input-devices/potentiometer"
            element={<Potentiometer />}
          />
          <Route path="/input-devices/push-btn" element={<PushButton />} />

          <Route path="/timing-module/rtc-module" element={<RTCModule />} />

          <Route path="/actuator/stepper-motor" element={<StepperMotor />} />
          <Route path="/actuator/motor-driver" element={<MotorDriver />} />
          <Route path="/actuator/servo-motor" element={<ServoMotor />} />

          <Route path="/power-supply/battery" element={<Battery />} />

          <Route path="/passive-components/resistor" element={<Resistor />} />
          <Route
            path="/passive-components/74HC595"
            element={<ShiftRegister74HC595 />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;

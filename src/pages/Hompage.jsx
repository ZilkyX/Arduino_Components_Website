import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FloatingShapes from "../components/FloatingShapes";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-base text-base px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute"
      >
        <FloatingShapes
          color="bg-purple-900"
          size="w-64 h-64"
          top="top-[-5%]"
          left="left-[10%]"
          delay={0}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute"
      >
        <FloatingShapes
          color="bg-teal-900"
          size="w-48 h-48"
          top="top-[70%]"
          left="left-[80%]"
          delay={5}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute"
      >
        <FloatingShapes
          color="bg-amber-900"
          size="w-32 h-32"
          top="top-[40%]"
          left="left-[-5%]"
          delay={2}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="z-10 text-center max-w-xl"
      >
        <h1 className="text-4xl font-bold mb-4">Arduino Kit</h1>
        <p className="text-lg mb-6">
          Dive into the world of Arduino and electronics. Whether you're a
          beginner or a tinkerer, explore hands-on projects and learn how
          sensors and microcontrollers bring ideas to life.
        </p>

        <button
          onClick={() => navigate("/microcontroller/arduino-uno")}
          className="btn btn-primary"
        >
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default Homepage;

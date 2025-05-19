import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} dispose={null} />;
};

const Arduino = () => {
  const modelUrl = "/src/assets/models/1. ARDUINO UNO.gltf";
  const pdfUrl = "/src/assets/pdfs/Arduino.PDF";
  const videoUrl = "/src/assets/3D Video/Arduino Uno R3.mp4";
  const viewerRef = useRef(null);
  const videoRef = useRef(null);

  const [activeViewer, setActiveViewer] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (viewerRef.current?.requestFullscreen) {
        viewerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const onFullScreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullScreenChange);
    };
  }, []);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleView3D = () => {
    setActiveViewer("3d");
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleWatchVideo = () => {
    setActiveViewer("video");
    setTimeout(() => {
      if (videoRef.current) videoRef.current.play();
    }, 100);
  };

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-12 bg-base text-base rounded-lg">
      <section className="flex flex-col lg:flex-row gap-6 bg-content-base p-6 rounded-lg">
        <div className="lg:w-2/3 space-y-4">
          <section className="flex flex-col lg:flex-row items-center gap-8 bg-content-base p-6 rounded-lg">
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-semibold mb-4">Arduino Overview</h1>
              <p className="text-base">
                Arduino is an open-source electronics platform based on
                easy-to-use hardware and software. It's intended for anyone
                making interactive projects.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/src/assets/images/Arduino-Uno-R3-Chip-STD-USB.jpg"
                alt="Arduino Board"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </section>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleView3D}
              className={`px-4 py-2 rounded ${
                activeViewer === "3d"
                  ? "bg-secondary text-secondary-content"
                  : "bg-base-200 text-base-content"
              } hover:opacity-75 transition`}
            >
              View 3D Model
            </button>
            <button
              onClick={handleWatchVideo}
              className={`px-4 py-2 rounded ${
                activeViewer === "video"
                  ? "bg-secondary text-secondary-content"
                  : "bg-base-200 text-base-content"
              } hover:opacity-75 transition`}
            >
              Watch Video
            </button>
            {activeViewer === "3d" && (
              <button
                onClick={toggleFullscreen}
                className="px-4 py-2 bg-base-300 rounded hover:opacity-75 transition"
              >
                {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              </button>
            )}
          </div>

          <div
            ref={viewerRef}
            className="w-full h-96 rounded-lg shadow-md bg-black"
          >
            {activeViewer === "3d" && (
              <Canvas camera={{ position: [0, 0, 3], fov: 5 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={10} />
                <Suspense
                  fallback={
                    <Html center>
                      <div>Loading 3D Model...</div>
                    </Html>
                  }
                >
                  <Model modelPath={modelUrl} />
                </Suspense>
                <OrbitControls
                  enablePan={false}
                  enableZoom={true}
                  maxPolarAngle={Math.PI / 2}
                />
              </Canvas>
            )}
            {activeViewer === "video" && (
              <video
                ref={videoRef}
                controls
                className="rounded-lg w-full h-full"
                src={videoUrl}
                type="video/mp4"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
        <div className="hidden lg:block w-px bg-base-300 mx-4" />
        <div className="lg:w-1/2 rounded shadow-md overflow-hidden flex flex-col h-190">
          <h1 className="text-3xl font-semibold mb-4 px-4 pt-4">
            Arduino Manual
          </h1>
          <div className="flex-1 overflow-hidden">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl={pdfUrl}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Arduino;

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

const RelayModule = () => {
  const modelUrl = "/src/assets/models/15. CHANNEL MODULE.gltf";
  const pdfUrl = "/src/assets/PDF/ONE CHANNEL RELAY MODULE.pdf";
  const imageUrl =
    "/src/assets/images/A85128_1-CHANNEL-RELAY-BOARD-WITHOUT-OPTO-5V_3.webp";
  const videoUrl = "/src/assets/3D Video/Channel Module.mp4";

  const viewerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      viewerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-12 bg-base text-base rounded-lg shadow-md">
      <section className="flex flex-col lg:flex-row items-center gap-8 bg-content-base p-6 rounded-lg">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">Relay Module Overview</h1>
          <p className="text-base">
            Relay modules allow microcontrollers to control high voltage or high
            current devices safely by acting as electrically operated switches.
            They isolate the low-voltage control circuit from the high-power
            load.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={imageUrl}
            alt="Relay Module"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      </section>

      <section className="bg-content-base p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Introduction Video</h2>
        <div className="aspect-w-16 aspect-h-9">
          <video
            controls
            className="rounded-lg shadow-md w-full h-full"
            src={videoUrl}
            type="video/mp4"
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </section>

      <section className="bg-content-base p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          3D Viewer (Rotate Model)
        </h2>

        <button
          onClick={toggleFullscreen}
          className="mb-4 px-4 py-2 bg-secondary text-secondary-content rounded hover:opacity-50 transition"
        >
          {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        </button>
        <div
          ref={viewerRef}
          className="w-full h-96 bg-black rounded-lg shadow-md"
        >
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
        </div>
      </section>

      <section className="bg-content-base p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Relay Module Datasheet (PDF Viewer)
        </h2>
        <div className="h-[500px] border rounded shadow-md overflow-hidden">
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </div>
      </section>
    </main>
  );
};

export default RelayModule;

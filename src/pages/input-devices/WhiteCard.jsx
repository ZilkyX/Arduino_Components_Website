import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} dispose={null} />;
};

const WhiteCard = () => {
  const modelUrl = "/src/assets/models/5. WHITE CARD.gltf";
  const viewerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (viewerRef.current.requestFullscreen) {
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

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-12 bg-base text-base rounded-lg shadow-md">
      <section className="flex flex-col lg:flex-row items-center gap-8 bg-content-base p-6 rounded-lg">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">
            White Card (RFID Tag) Overview
          </h1>
          <p className="text-base">
            The RFID White Card is a passive tag used in conjunction with RFID
            readers such as the RC522. It contains a unique identifier (UID)
            that can be read wirelessly. These cards are commonly used for
            access control, student IDs, and inventory tracking.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/src/assets/images/WhiteCard.jpg"
            alt="RFID White Card"
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
            src="/src/assets/videos/5. WHITE CARD.mp4"
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
    </main>
  );
};

export default WhiteCard;

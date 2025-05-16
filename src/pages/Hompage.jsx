import FloatingShapes from "../components/FloatingShapes";

const Homepage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-base text-base px-4 overflow-hidden">
      {/* Floating Shapes */}
      <FloatingShapes
        color="bg-purple-900"
        size="w-64 h-64"
        top="top-[-5%]"
        left="left-[10%]"
        delay={0}
      />
      <FloatingShapes
        color="bg-teal-900"
        size="w-48 h-48"
        top="top-[70%]"
        left="left-[80%]"
        delay={5}
      />
      <FloatingShapes
        color="bg-amber-900"
        size="w-32 h-32"
        top="top-[40%]"
        left="left-[-5%]"
        delay={2}
      />

      {/* Main Content */}
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, esse. Aliquam, corporis reprehenderit sapiente tempore
          dolor eaque quod similique consequatur maxime quasi aperiam? Beatae
          molestias eius id quisquam nostrum magni.
        </p>
      </div>
    </div>
  );
};

export default Homepage;

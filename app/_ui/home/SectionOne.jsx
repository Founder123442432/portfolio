

export default function SectionOne() {
  return (
    <div className="relative bg-black w-full h-screen">
      <video
        src="bg-v.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full opacity-40 absolute  left-0 top-0 object-cover h-screen"
      ></video>

      <div className="w-full flex justify-center flex-col items-center h-screen absolute">
        <h1
          
          className="block animate-pulse text-white text-6xl font-bold text-center"
        >
          Hi there, I am <span className="text-lime-400 animate-bounce inline-block ">Walid</span>
        </h1>

        <h2
         
          className="text-3xl font-bold mt-5 text-gray-400 text-center"
        >
        When it comes to Crafting modern, responsive, and fast front-end solutions.
        </h2>

         <h3
          
          className="text-3xl font-bold mt-5 text-gray-400 text-center"
        >
          Its <span className="text-lime-400 animate-pulse">Me</span> who you need.
        </h3>
      </div>
    </div>
  );
}

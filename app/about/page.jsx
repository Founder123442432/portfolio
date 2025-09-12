export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Firebase",
    "Framer Motion",
    "Responsive Design",
    "Github",
    "Git",
    "NodeJs",
    "Next.js",
    "tailwindcss",
    "Res api/ axios",
    "NodeJs",
    "Typescript",
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="w-[90%]  mx-auto min-h-screen bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="relative mb-4">
            <img
              src="/pic.png"
              alt="Alex Chen"
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-yellow-200"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Walid Ibourk
          </h1>
          <p className="text-gray-600 mb-1">Front-End Developer</p>
        </div>

        <div className="mb-8">
          <p className="text-gray-700 text-center leading-relaxed">
            Front-end developer with experience in building responsive and
            accessible web applications using modern technologies such as React,
            Next.js, and Firebase. Known for delivering high-quality solutions
            in agile environments, with a focus on usability, performance, and
            maintainable code. Actively seeking opportunities to contribute to
            innovative tech teams and continue growing professionally.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Languages</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
              English /B2
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
              Arabic /Native
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
              German /A1
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Design Philosophy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I approach design with a user-centric mindset, focusing on
            simplicity, accessibility, and performance. I believe that great
            design is not just about aesthetics but also about functionality and
            usability. My goal is to create seamless and enjoyable experiences
            that meet both user needs and business objectives.
          </p>
        </div>
      </div>
    </div>
  );
}

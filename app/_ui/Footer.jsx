import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Mail } from "lucide-react";
export default function Footer() {
  const Year = new Date().getFullYear();
  const elements = [
    {
      name: "Github",
      link: "https://github.com/Founder123442432",
      icon: <Github />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/walid-ibourk-997a2a209/",
      icon: <Linkedin />,
    },
    { name: "wibr8349@gmail.com", link: "mailto:wibr8349@gmail.com", icon: <Mail /> },
  ];
  return (
    <footer className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 border-t-2 border-b-2 border-black">
      <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <a href="#">
          <img className="w-auto h-7" src="/logo.png" alt="" />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
          {elements.map((el, i) => (
            <a
              href={el.link}
              target="_blank"
              key={i}
              className="text-sm  gap-3 items-center flex cursor-pointer text-black font-thin transition-colors duration-300 hover:text-blue-500"
            >
              <span>{el.icon}</span>
              <span>{el.name}</span>
            </a>
          ))}
        </div>

        <p className="mt-6 text-sm text-black lg:mt-0 ">© Copyright {Year}</p>
      </div>
    </footer>
  );
}

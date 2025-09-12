import "./globals.css";
import NavBar from "./_ui/navbar/navbar";
import Footer from "./_ui/Footer";

export const metadata = {
  title: "Walid Ibourk",
  description:
    "Hi, I’m Walid Ibourk, a passionate front-end developer with a focus on building modern, responsive, and user-friendly web applications. I specialize in React, Next.js, and Tailwind CSS, and I enjoy turning complex ideas into clean, intuitive digital experiences.  With a strong eye for detail and a dedication to writing maintainable code, I aim to bridge the gap between design and functionality. My goal is to create applications that are not only visually appealing but also efficient, accessible, and impactful.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

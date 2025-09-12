"use client"
import { Mail, MessageCircle, Phone, User, MapPin, Clock, Send, Star, Zap, Heart } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Zap className="w-64 h-64 text-purple-500 animate-pulse" />
          </div>
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl animate-bounce">
                <User className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm passionate about creating exceptional digital experiences. 
              Let's collaborate and build something amazing together!
            </p>
            <div className="flex justify-center space-x-2 mb-8">
              <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
              <Star className="w-6 h-6 text-yellow-400 animate-pulse delay-75" />
              <Star className="w-6 h-6 text-yellow-400 animate-pulse delay-150" />
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <div 
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
              hoveredCard === 'email' ? 'ring-2 ring-purple-500' : ''
            }`}
            onMouseEnter={() => setHoveredCard('email')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Email Me</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Drop me a line for projects, collaborations, or just to say hello. I'll get back to you within 24 hours!
              </p>
              <a 
                href="mailto:wibr8349@gmail.com"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
              >
                <span>wibr8349@gmail.com</span>
                <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div 
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 ${
              hoveredCard === 'whatsapp' ? 'ring-2 ring-green-500' : ''
            }`}
            onMouseEnter={() => setHoveredCard('whatsapp')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">WhatsApp</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Need a quick chat? WhatsApp me for instant communication and rapid project discussions.
              </p>
              <a 
                href="https://wa.me/212641615059"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
              >
                <span>+212 641-615-059</span>
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 text-center">
      
          <h3 className="text-2xl font-bold text-white mb-4">Why Choose Me?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-blue-400 mb-2" />
              <span className="font-semibold">Quick Response</span>
              <span className="text-sm">24hr reply guarantee</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-8 h-8 text-yellow-400 mb-2" />
              <span className="font-semibold">Modern Solutions</span>
              <span className="text-sm">Latest tech & trends</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-green-400 mb-2" />
              <span className="font-semibold">Global Reach</span>
              <span className="text-sm">Remote collaboration</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Ready to start your next project? Let's make it happen!
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="mailto:wibr8349@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              Hire Me Now
            </a>
            <a 
              href="https://wa.me/212641615059"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              Quick Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
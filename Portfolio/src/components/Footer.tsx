import { Heart } from "lucide-react";
import FloatingDots from "./FloatingDots";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1a1f26] via-[#222831] to-[#2d3541] text-white py-12 relative overflow-hidden">
      <FloatingDots />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl mb-4 text-[#00ADB5]">
              Tassain Rasool Malik
            </h4>
            <p className="text-gray-400">
              Crafting digital solutions with passion and precision.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-[#00ADB5] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-[#00ADB5] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-[#00ADB5] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-[#00ADB5] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/TassainRasool" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ADB5] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https:www.linkedin.com/in/tassainrasool" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ADB5] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              {/* <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ADB5] transition-colors"
                >
                  Twitter
                </a>
              </li> */}
              <li>
                <a 
                  href="mailto:iamtassain.00@gmail.com"
                  className="text-gray-400 hover:text-[#00ADB5] transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Tassain Rasool Malik. Design with <Heart size={16} className="text-[#00ADB5]" fill="currentColor" /> and Passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
